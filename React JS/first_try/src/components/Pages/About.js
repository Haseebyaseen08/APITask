import React from 'react'

export default function About() {
    return (
        //React.Fragment Act as DIV, not show on DOM.
        <React.Fragment> 
            <h1>About</h1>
            <p>This is Todo List app v1.0.0. It is part of a react crash course by Traversy Media.</p>
        </React.Fragment>
    )
}
