import React from 'react';
import "./About.css";
import {Link} from 'react-router-dom';

export default function About() {
    return (
        <div>
            <div className='header1'>
                <h1 className="top">Free shipping over Rs 2000 + Free returns!</h1>
                <Link to='/'><p>Home</p></Link> | <Link to='/about'><p>About</p></Link> | <Link  to='/product'><p>Products</p></Link>
                <h2>Fanstore>>About</h2>
            </div>
            <div className="footer1">
                <h1>
                    About Us
                </h1>
                <p>
                    FANSTORE is where fans can support their favorite influencers through buying their merchandise. 
                    FANS can stand out among their friends by wearing their favorite influencer’s merchandise.
                    We provide custom made apparels and meaningful products so fans can feel much closer to people they look up to.
                    For Influencers, we provide end to end solutions for merchandising without any risk. Let’s talk!
                </p>
            </div>
            <form className="form1">
                    <p>
                    <input type="text" id="fname" name="firstname" placeholder="Your name.."></input></p>
                    <p>
                    <input type="text" id="lname" name="lastname" placeholder="Your last name.."></input></p>
                    <p>
                    <input type="email" id="email" name="emai" placeholder="@ Email"></input></p>
                    <p>
                    <select id="country" name="country">
                        <option value="Pakistan">Pakistan</option>
                        <option value="UAE">UAE</option>
                        <option value="India">India</option>
                    </select></p>
                    <p>
                    <textarea id="subject" name="subject" placeholder="Write something.."></textarea></p>
                    <p><input type="submit" value="Submit"></input></p>
            </form>
            <div className='block1'>
                    <p>We provide end to end Merchandising Solution, Production Facility and Dropshipping Services.</p>
                    <p><a href="/about">@ Hello@fanstore.pk</a></p>
                    <p>Contact us: +92 321 8436870</p>
                    <p>Copyright &copy; 2021, All rights reserved.</p>
            </div>
                
        </div>
    )
}
