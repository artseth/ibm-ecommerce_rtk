import { createSlice } from '@reduxjs/toolkit'
import { addItemToCart } from './CartSlice';

const initialState = { cartItems: []};

const CartSlice = createSlice ({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart(state, action) {
            const existingItem = state.cartItems.find(
                item => item.id === action.payload.id
            )

            if (existingItem) {
                existingItem.quantity += 1
            } else {
                state.cartItems 
            }
        },

        removeItemFromCart (state, action) {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload)
        },

        clearCart (state) {
            state.cartItems = [];
        },

        
    }
})