import React from 'react';
import {Link} from 'react-router-dom';

export default function Header() {
    return (
        <div>
            <header style={headerStyle}>
                <h1>TodoList</h1>
                <Link style={linkStyle} to='/'>Home</Link> | <Link style={linkStyle} to='/about'>About</Link>
            </header>
        </div>
    )
}

const headerStyle={
    background:'#333',
    color:'#fff',
    textAlign:'center',
    padding:'10px'
}

const linkStyle={
    textDecoration:'none',
    color:'#fff',
}