//import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_CART = 'GET_CART'
const CLEAR_CART = 'CLEAR_CART'
const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
const DELETE_FROM_CART = 'DELETE_FROM_CART'

/**
 * INITIAL STATE
 */
let currentCart;
if (localStorage.getItem('cart')){
  currentCart = JSON.parse(localStorage.getItem('cart'))
}
else {
  currentCart = []
}

// cart is going to be an array of objects
// keys:
//    id (integer)
//    product (object)
//    quantity (integer)

/**
 * ACTION CREATORS
 */
export const getCart = () => ({ type: GET_CART })
export const addToCart = product => ({type: ADD_TO_CART, product})
export const removeFromCart = product => ({type: REMOVE_FROM_CART, product})
export const deleteFromCart = product => ({type: DELETE_FROM_CART, product})
export const clearCart = () =>  ({ type: CLEAR_CART })

/**
 * REDUCER
 */
export default function (state = currentCart, action) {
  let products, searchid;
  switch (action.type) {
    case CLEAR_CART:
      console.log('****THANK YOU PAGE! :) 😃 *** ')
      history.push('/thankyou')
      localStorage.setItem('cart', [])
      return []
    case GET_CART:
      return state;

    case ADD_TO_CART:
      // search state to find if id is already there
      searchid = state.findIndex(el => el.id === action.product.id)
      if (searchid > -1) {
        // if its there add 1
        products = state;
        products[searchid].quantity += 1
      } else {
        // if not there concat
        products = state.concat([{
          id: action.product.id,
          product: action.product,
          quantity: 1
        }
      ])
    }
    localStorage.setItem('cart', JSON.stringify(products))
    history.push('/cart')
    return products

    case REMOVE_FROM_CART:
    // search state to find if id is already there
    searchid = state.findIndex(el => el.id === action.product.id)
    if (searchid > -1) {
        // if its there decrease by 1 or delete if quantity is already 1
        products = state;
        if (products[searchid].quantity > 1) products[searchid].quantity -= 1
        else products.splice(searchid, 1)
      }
      localStorage.setItem('cart', JSON.stringify(products))
      history.push('/cart')
      return products

    case DELETE_FROM_CART:
      searchid = state.findIndex(el => el.id === action.product.id)
      if (searchid > -1) {
        products = state;
        products.splice(searchid, 1)
      }
      localStorage.setItem('cart', JSON.stringify(products))
      history.push('/cart')
      return products

    default:
      return state
  }
}
