// import react from "react";

// yahan ham context api ka use karenge and do to do so we have to import it first
// so below code is for importing contextapi


import noteContext from "./noteContext";
import { useState } from "react";
const NoteState = (props) => {
    const host = "http://localhost:5000"
    const notesInitial = [
        {
            "_id": "61f0ef110312ecddf2ac7a10",
            "user": "61ebc460121356c5cbb7cf53",
            "title": "My Title",
            "description": "please wake up early",
            "tag": "person",
            "date": "2022-01-26T06:49:53.471Z",
            "__v": 0
        },
        {
            "_id": "61f10eb576a4baf164a90479",
            "user": "61ebc460121356c5cbb7cf53",
            "title": "My Title",
            "description": "please wake up early",
            "tag": "person",
            "date": "2022-01-26T09:04:50.614Z",
            "__v": 0
        },
        {
            "_id": "61f10ebe96a4baf164a9047c",
            "user": "61ebc460121356c5cbb7cf53",
            "title": "My Title",
            "description": "please wake up early",
            "tag": "person",
            "date": "2022-01-26T09:05:02.849Z",
            "__v": 0
        },
        {
            "_id": "61f0ef310310ecddf2ac7a10",
            "user": "61ebc460121356c5cbb7cf53",
            "title": "My Title",
            "description": "please wake up early",
            "tag": "person",
            "date": "2022-01-26T06:49:53.471Z",
            "__v": 0
        },
        {
            "_id": "61f0ef120310ecddf2ac7a10",
            "user": "61ebc460121356c5cbb7cf53",
            "title": "My Title",
            "description": "please wake up early",
            "tag": "person",
            "date": "2022-01-26T06:49:53.471Z",
            "__v": 0
        },
        {
            "_id": "61f0ef810310ecddf2ac7a10",
            "user": "61ebc460121356c5cbb7cf53",
            "title": "My Title",
            "description": "please wake up early",
            "tag": "person",
            "date": "2022-01-26T06:49:53.471Z",
            "__v": 0
        },
        {
            "_id": "61f0ef170310ecddf82ac7a10",
            "user": "61ebc460121356c5cbb7cf53",
            "title": "My Title",
            "description": "please wake up early",
            "tag": "person",
            "date": "2022-01-26T06:49:53.471Z",
            "__v": 0
        },
        {
            "_id": "61f0ef210310ecddf2ac7a10",
            "user": "61ebc460121356c5cbb7cf53",
            "title": "My Title",
            "description": "please wake up early",
            "tag": "person",
            "date": "2022-01-26T06:49:53.471Z",
            "__v": 0
        },
    ]

    const [notes, setNotes] = useState(notesInitial)

    // function of  add a note 

    const addNote = (title, description, tag) => {
        // to do api call

        const note = {
            "_id": "61f0ef170310ecddf82dc7a10",
            "user": "61ebc460121356c5cbb7df53",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2022-01-26T06:49:53.471Z",
            "__v": 0
        };

        setNotes(notes.concat(note))

    }

    // function of delete a note

    const deleteNote = (id) => {

        console.log("i was clicked" + id);

        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes)

    }


    // function of edit a note

    const editNote = async (id, title, description, tag) => {

        //api call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c"
            },
            body: JSON.stringify(data)
        });
        const json = response.json();




        // logic to edit in client
        for (let i = 0; i < notes.length; i++) {
            const element = notes[i];
            if (element._id === id) {
                element.title = title;
                element.description = description;
                element.tag = tag;
            }

        }

    }
    return (

        <noteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
            {props.children}
        </noteContext.Provider>


    )

}

export default NoteState;

