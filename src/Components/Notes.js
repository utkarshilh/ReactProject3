import React from 'react'
import { useContext } from 'react';
import { AddNote } from './AddNote';
import noteContext from "../Context/notes/noteContext"

import Noteitem from './Noteitem';

export const Notes = () => {
    const context = useContext(noteContext);
    const { notes } = context;
    return (
        <>

            <AddNote />
            <div className="row my-3">
                <h2>Your Notes</h2>
                {notes.map((note) => {
                    return <Noteitem key={note._id} note={note} />

                })}
            </div>
        </>
    )
}
