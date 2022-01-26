const express = require('express')

const router = express.Router()
const fetchuser = require('../middleware/fetchuser');
const Note = require('../models/Note');

const { body, validationResult } = require('express-validator');


// Route 1 : Get all the Notes using : GET "/api/notes/getuser" . Loging required 
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.id });
        res.json(notes)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("internal server occured");

    }

})

// Route 2 : Add a new node usign post : POST "api/notes/getuser" . Login required 
router.post('/addnote', fetchuser, [
    body('title', 'Enter the valid title').isLength({ min: 3 }),
    body('description', 'Description must be atleast five character').isLength({ min: 5 }),], async (req, res) => {
        try {
            const { title, description, tag } = req.body;

            // If there is error return bad request and e rror
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });

            }

            const note = new Note({
                title, description, tag, user: req.user.id

            })
            const savedNote = await note.save();


            res.json(savedNote)
        }
        catch (error) {
            console.error(error.message);
            res.status(500).send("internal server occured");

        }
    })

// Route3 update the existing Notes  using POST "api/notes/updatenote " Login required
router.put('/updatenote/:id', fetchuser, async (req, res) => {

    const { title, description, tag } = req.body;

    try {
        //create a new node object

        const newNote = {};
        if (title) { newNote.title = title };
        if (description) { newNote.description = description };
        if (tag) { newNote.tag = tag };


        // find the note to be updated
        let note = await Note.findById(req.params.id)
        if (!note) { return res.status(404).send("not found") }

        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("not allowed")
        }

        note = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true });
        res.json({ note });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("internal server occured");

    }


})

// Route4 delte the existing Notes  using : Delete "api/notes/deletenote " Login required
router.delete('/deletenote/:id', fetchuser, async (req, res) => {

    const { title, description, tag } = req.body;


    //create a new node object


    try {
        const newNote = {};
        if (title) { newNote.title = title };
        if (description) { newNote.description = description };
        if (tag) { newNote.tag = tag };


        // find the note to be deleted and deleted
        let note = await Note.findById(req.params.id)
        if (!note) { return res.status(404).send("not found") }

        // Allow deletion if the suer own this node 
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("not allowed")
        }

        note = await Note.findByIdAndDelete(req.params.id)
        res.json({ "sucess": "note has been deleted", note: note });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("internal server occured");

    }

})

module.exports = router


