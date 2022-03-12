// import react from "react";

// yahan ham context api ka use karenge and do to do so we have to import it first
// so below code is for importing contextapi


import NoteContext from "./NoteContext";
import { useState } from "react";
const NoteState = (props) => {

    const s1 = {
        "name": "Utkarsh",
        "class": "B1"
    }
    const [state, setState] = useState(s1);

    const update = () => {
        setTimeout(() => {

            setState({
                "name": "mango",
                "class": "BB1"
            })
        }, 1000)
    }

    return (

        <NoteContext.Provider value={{ state, update }}>
            {props.children}
        </NoteContext.Provider>


    )

}

export default NoteState;

