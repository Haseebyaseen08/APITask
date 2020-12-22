import React from 'react';
import "./Header.css";
import {Link} from 'react-router-dom';
//import logo from "./images.jpg";

export default function Header() {
    return (
        <div>
            <h1 className="top">Free shipping over Rs 2000 + Free returns!</h1>
            <div className='header'>
                <div className='nav'>
                <Link to='/'><p>Home</p></Link> | <Link to='/about'><p>About</p></Link> | <Link  to='/product'><p>Products</p></Link>
                </div>
            </div>
                <div className='headerStyle'>
                    <h1>Fan Store</h1>
                    <h4>Youtuber's biggest merchendise sale site.</h4>
                    <Link  to='/product'><button className='btn'>Shop Now</button></Link>
                </div>
                <div className='block'>
                    <p>We provide end to end Merchandising Solution, Production Facility and Dropshipping Services.</p>
                    <p><a href="/about">@ Hello@fanstore.pk</a></p>
                    <p>Contact us: +92 321 8436870</p>
                    <p>Copyright &copy; 2021, All rights reserved.</p>
                </div>
        </div>
    )
}

