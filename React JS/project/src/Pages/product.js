import React from 'react';
import {Link} from 'react-router-dom';
import "./product.css";

export default function product() {
    return (
        <div>
            <div className='header2'>
                <h1 className="top">Free shipping over Rs 2000 + Free returns!</h1>
                <Link to='/'><p>Home</p></Link> | <Link to='/about'><p>About</p></Link> | <Link  to='/product'><p>Products</p></Link>
                <h2>Fanstore>>Products</h2>
            </div>
            <div className='product1'>
                <h1>T-Shirts</h1>
                <Link to='/itemShow'><p><input type="submit" value="Click to see collection"></input></p></Link>
            </div>
            <div className='product2'>
                <h1>Sweatshirts</h1>
                <Link to='/itemShow'><p><input type="submit" value="Click to see collection"></input></p></Link>
            </div>
            <div className='product3'>
                <h1>Hoodies</h1>
                <Link to='/itemShow'><p><input type="submit" value="Click to see collection"></input></p></Link>
            </div>
            <div className='product4'>
                <h1>Trousers</h1>
                <Link to='/itemShow'><p><input type="submit" value="Click to see collection"></input></p></Link>
            </div>
            <div className='product5'>
                <h1>Mugs</h1>
                <Link to='/itemShow'><p><input type="submit" value="Click to see collection"></input></p></Link>
            </div>
            <div className='product6'>
                <h1>Tote Bags</h1>
                <Link to='/itemShow'><p><input type="submit" value="Click to see collection"></input></p></Link>
            </div>
            <div className="footer3">
                    <p>We provide end to end Merchandising Solution, Production Facility and Dropshipping Services.</p>
                    <p><a href="/about">@ Hello@fanstore.pk</a></p>
                    <p>Contact us: +92 321 8436870</p>
                    <p>Copyright &copy; 2021, All rights reserved.</p>
            </div>
        </div>
    )
}
