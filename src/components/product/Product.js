import React from 'react';
import './products.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const { img, name, price, seller, stock } = props.product;
    const features = props.product.features;
    return (
        <div className="product" style={{margin: '1%'}}>
            <div>
                <img src={img} />
            </div>
            <div style={{ display: 'flex', }}>
                <div style={{ marginLeft: '1%', }} className="">
                    <h5>{name}</h5>
                    <p>By: {seller}</p>
                    <h4>${price}</h4>
                    <p><small>only {stock} left in stock - order soon</small></p>
                    <button id="add-btn" onClick={() => props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} />Add To Cart</button>
                </div>
                <div>
                    <h4>Features</h4>
                    <ul>
                        <li><span className="description">{features && features[0]?.description}</span> <span className="value">{features && features[0]?.value}</span></li>

                        <li><span className="description">{features && features[1]?.description}</span> <span className="value">{features && features[1]?.value}</span></li>

                        <li><span className="description">{features && features[2]?.description}</span> <span className="value">{features && features[2]?.value}</span></li>

                        <li><span className="description">{features && features[3]?.description}</span> <span className="value">{features && features[3]?.value}</span></li>

                        <li><span className="description">{features && features[4]?.description}</span> <span className="value">{features && features[4]?.value}</span></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Product;