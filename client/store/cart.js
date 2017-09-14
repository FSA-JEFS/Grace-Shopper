//import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_CART = 'GET_CART'
const ADD_TO_CART = 'ADD_TO_CART'
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

//const currentCart = localStorage.getItem('cart') || []

/**
 * ACTION CREATORS
 */
export const getCart = () => ({ type: GET_CART })
export const addToCart = product => ({type: ADD_TO_CART, product})
export const deleteFromCart = productIndex => ({type: DELETE_FROM_CART, productIndex})

/**
 * REDUCER
 */
export default function (state = currentCart, action) {
  let products;
  switch (action.type) {
    case GET_CART:
      products = state
      localStorage.setItem('cart', JSON.stringify(products))
      return products
      //return action.products
    case ADD_TO_CART:
      console.log('********** I am reaching here')
      products = state.concat([action.product])
      localStorage.setItem('cart', JSON.stringify(products))
      history.push('/cart')
      return products
    case DELETE_FROM_CART:
      products = state.splice(action.productIndex, 1)
      localStorage.setItem('cart', JSON.stringify(products))
      return products
    default:
      return state
  }
}
