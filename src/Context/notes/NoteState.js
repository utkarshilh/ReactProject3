// import react from "react";

// yahan ham context api ka use karenge and do to do so we have to import it first
// so below code is for importing contextapi


import noteContext from "./noteContext";
import { useState } from "react";
const NoteState = (props) => {

    const notesInitial = [
        {
            "_id": "61f0ef110310ecddf2ac7a10",
            "user": "61ebc460121356c5cbb7cf53",
            "title": "My Title",
            "description": "please wake up early",
            "tag": "person",
            "date": "2022-01-26T06:49:53.471Z",
            "__v": 0
        },
        {
            "_id": "61f10eb276a4baf164a90479",
            "user": "61ebc460121356c5cbb7cf53",
            "title": "My Title",
            "description": "please wake up early",
            "tag": "person",
            "date": "2022-01-26T09:04:50.614Z",
            "__v": 0
        },
        {
            "_id": "61f10ebe76a4baf164a9047c",
            "user": "61ebc460121356c5cbb7cf53",
            "title": "My Title",
            "description": "please wake up early",
            "tag": "person",
            "date": "2022-01-26T09:05:02.849Z",
            "__v": 0
        },
        {
            "_id": "61f0ef110310ecddf2ac7a10",
            "user": "61ebc460121356c5cbb7cf53",
            "title": "My Title",
            "description": "please wake up early",
            "tag": "person",
            "date": "2022-01-26T06:49:53.471Z",
            "__v": 0
        },
        {
            "_id": "61f0ef110310ecddf2ac7a10",
            "user": "61ebc460121356c5cbb7cf53",
            "title": "My Title",
            "description": "please wake up early",
            "tag": "person",
            "date": "2022-01-26T06:49:53.471Z",
            "__v": 0
        },
        {
            "_id": "61f0ef110310ecddf2ac7a10",
            "user": "61ebc460121356c5cbb7cf53",
            "title": "My Title",
            "description": "please wake up early",
            "tag": "person",
            "date": "2022-01-26T06:49:53.471Z",
            "__v": 0
        },
        {
            "_id": "61f0ef110310ecddf2ac7a10",
            "user": "61ebc460121356c5cbb7cf53",
            "title": "My Title",
            "description": "please wake up early",
            "tag": "person",
            "date": "2022-01-26T06:49:53.471Z",
            "__v": 0
        },
        {
            "_id": "61f0ef110310ecddf2ac7a10",
            "user": "61ebc460121356c5cbb7cf53",
            "title": "My Title",
            "description": "please wake up early",
            "tag": "person",
            "date": "2022-01-26T06:49:53.471Z",
            "__v": 0
        },
    ]

    const [notes, setNotes] = useState(notesInitial)
    return (

        <noteContext.Provider value={{ notes, setNotes }}>
            {props.children}
        </noteContext.Provider>


    )

}

export default NoteState;

