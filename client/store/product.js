import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_PRODUCTS = 'GET_PRODUCTS'

/**
 * INITIAL STATE
 */
const defaultProducts = []

/**
 * ACTION CREATORS
 */
const getProducts = products => ({ type: GET_PRODUCTS, products })

/**
 * THUNK CREATORS
 */
export const fetchProducts = () => {
  return dispatch =>
    axios.get('/api/products')
      .then(res => {
        dispatch(getProducts(res.data || defaultProducts))
      })
      .catch(err => console.log(err))
}

/**
 * REDUCER
 */
export default function (state = defaultProducts, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      console.log('GET_PRODUCTS', action.products)
      return action.products
    default:
      return state
  }
}
