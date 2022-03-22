import React from 'react'
import noteContext from "../Context/notes/noteContext"
import { useContext } from 'react';
import Noteitem from './Noteitem';

export const Notes = () => {
    const context = useContext(noteContext);
    const { notes, setNotes } = context;
    return (
        <div className="row">
            <h2>Your Notes</h2>
            {notes.map((note) => {
                return <Noteitem note={note} />

            })}
        </div>
    )
}
