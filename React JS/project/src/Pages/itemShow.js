import React, { Component } from 'react';
import "./itemShow.css";
import {Link} from 'react-router-dom';
import items from './items';
import item from "./items";

export class itemShow extends Component {
    render() {
        return (
            <div>
                <div className='header4'>
                    <h1 className="top">Free shipping over Rs 2000 + Free returns!</h1>
                    <Link to='/'><p>Home</p></Link> | <Link to='/about'><p>About</p></Link> | <Link  to='/product'><p>Products</p></Link>
                    <h2>Fanstore>>Product</h2>
                </div>
                <div className="content">
                    <ul className="products">
                    {
                        item.products.map(product=>
                        <li>
                            <div className="item">
                                <img className="product-image" src={product.image} alt="product"></img>
                                <div className="product-name"><a href="/about">{product.name}</a></div>
                                <div className="youtuber">{product.youtuber}</div>
                                <div className="price">{product.price}</div>
                                <div className="status">{product.Status}</div>
                            </div>
                        </li>)
                    }
                    </ul>

                </div>
            </div>
        )
    }
}

export default itemShow
