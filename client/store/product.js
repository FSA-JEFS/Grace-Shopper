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
export const fetchProducts = () => dispatch =>
    axios.get('/api/products')
      .then(res => {
        dispatch(getProducts(res.data || defaultProducts))
      })
      .catch(err => console.err(err))

/**
 * REDUCER
 */
export default function (state = defaultProducts, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return action.products
    default:
      return state
  }
}
