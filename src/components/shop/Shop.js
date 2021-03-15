import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../cart/Cart';
import Product from '../product/Product';
import './shop.css'

const Shop = () => {
    const products = fakeData.slice(0, 20);
    const [product, setProduct] = useState(products);
    const [cart, setCart] = useState([]);
    const handleAddProduct = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    product.map(pd => <Product
                        product={pd}
                        handleAddProduct={handleAddProduct}>
                    </Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;