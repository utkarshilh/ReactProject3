// import React, { Component } from 'react';
import React, { useContext, useEffect } from 'react';

import noteContext from '../Context/notes/noteContext';

const About = () => {
    const a = useContext(noteContext)
    useEffect(() => {
        a.update()
        // eslint-disable-next-line
    }, [])
    return (
        <div>
            This is about {a.state.name} and he is doing B.tech and he is in section {a.state.class}
        </div>
    )
}
export default About