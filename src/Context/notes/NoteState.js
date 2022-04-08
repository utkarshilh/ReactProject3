// import react from "react";

// yahan ham context api ka use karenge and do to do so we have to import it first
// so below code is for importing contextapi


import noteContext from "./noteContext";
import { useState } from "react";
const NoteState = (props) => {
    const host = "http://localhost:5000"
    const notesInitial = []

    const [notes, setNotes] = useState(notesInitial)

    // Get all notes

    const getNotes = async (title, description, tag) => {
        // to do api call

        //api call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            }

        });
        const json = await response.json();
        setNotes(json);


    }

    // function of  add a note 

    const addNote = async (title, description, tag) => {
        // to do api call

        //api call
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({ title, description, tag })
        });


        const note = await response.json();
        setNotes(notes.concat(note))





    }

    // function of delete a note

    const deleteNote = async (id) => {

        // api call
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            }
        });
        const json = response.json();
        console.log(json);


        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes)

    }


    // function of edit a note

    const editNote = async (id, title, description, tag) => {

        //api call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({ title, description, tag })
        });
        const json = response.json();
        console.log(json);


        let newNote = JSON.parse(JSON.stringify(notes))
        // logic to edit in client
        for (let i = 0; i < notes.length; i++) {
            const element = notes[i];
            if (element._id === id) {
                newNote[i].title = title;
                newNote[i].description = description;
                newNote[i].tag = tag;
                break;
            }
        }
        setNotes(newNote);

    }
    return (

        <noteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </noteContext.Provider>


    )

}

export default NoteState;

