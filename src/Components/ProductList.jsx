import React from 'react';
import './ProductList.css'; 
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from './CartSlice';// Action to add product to cart

const ProductList = () => {

  const products = [
    { id: 1, name: 'Product A', price: 60 },
    { id: 2, name: 'Product B', price: 75 },
    { id: 3, name: 'Product C', price: 30 }
  ]

  const laptops = [
    {id: 10, name: 'Lenovo g15', price: 4200 },
    {id: 11, name: 'Macbook air 15', price: 32000 },
    {id: 12, name: 'Asus Tuf gaming', price: 42000 },
    {id: 13, name: 'Alienware spx 13', price: 54000 }
  ]

  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems); // Get cart items globally

  return (
    <div className="product-list">
      <h2 className="product-list-title">Products</h2>
      <ul className="product-list-items">
        {products.map( product => (
          <li key={product.id} className='product-list-item'>
            <span>Name:{product.name} - Price${product.price}</span>
            <button
                className={`add-to-cart-btn ${cartItems.some(item => item.id === product.id) ? 'disabled' : ''}`}
                onClick={() => handleAddToCart(product)}
                disabled={cartItems.some(item => item.id === product.id)} // Disable if already in cart
            >
                {cartItems.some(item => item.id === product.id) ? 'Added' : 'Add to Cart'}
            </button>

          </li>
        ))}
        <h2 className='product-list-title'>Laptops</h2>
        {laptops.map(laptop => (
          
          <li key={laptop.id} className='product-list-item'>
            <span>Name:{laptop.name} - Price:${laptop.price}</span>
            
            <button>
              Add to Cart
            </button>
            
          </li>
        ))}

        
     
      </ul>
    </div>
  );
};

export default ProductList;
