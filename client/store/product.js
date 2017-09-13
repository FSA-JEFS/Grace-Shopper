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

// export const auth = (email, password, method) =>
//   dispatch =>
//     axios.post(`/auth/${method}`, { email, password })
//       .then(res => {
//         dispatch(getUser(res.data))
//         history.push('/home')
//       })
//       .catch(error =>
//         dispatch(getUser({error})))

// export const logout = () =>
//   dispatch =>
//     axios.post('/auth/logout')
//       .then(res => {
//         dispatch(removeUser())
//         history.push('/login')
//       })
//       .catch(err => console.log(err))

/**
 * REDUCER
 */
export default function (state = defaultProducts, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      console.log('GET_PRODUCTS', action.product)
      return action.products
    default:
      return state
  }
}
