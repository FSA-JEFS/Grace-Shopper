//import axios from 'axios'
//import history from '../history'

/**
 * ACTION TYPES
 */
const GET_CART = 'GET_CART'
const ADD_TO_CART = 'ADD_TO_CART'
const DELETE_FROM_CART = 'DELETE_FROM_CART'

/**
 * INITIAL STATE
 */
const currentCart = localStorage.getItem('cart') || []

/**
 * ACTION CREATORS
 */
export const getCart = products => ({ type: GET_CART, products })
export const addToCart = product => ({type: ADD_TO_CART, product})
export const deleteFromCart = productIndex => ({type: DELETE_FROM_CART, productIndex})

/**
 * REDUCER
 */
export default function (state = currentCart, action) {
  let products;
  switch (action.type) {
    case GET_CART:
      products = action.products
      localStorage.setItem('cart', products)
      return products
      //return action.products
    case ADD_TO_CART:
      console.log('********** I am reaching here')
      products = state.concat([action.product])
      localStorage.setItem('cart', products)
      return products
    case DELETE_FROM_CART:
      products = state.splice(action.productIndex, 1)
      localStorage.setItem('cart', products)
      return products
    default:
      return state
  }
}
