import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_USER_ORDERS = 'GET_USER_ORDERS'

/**
 * INITIAL STATE
 */
const defaultOrders = []

/**
 * ACTION CREATORS
 */
const getUserOrders = orders => ({ type: GET_USER_ORDERS, orders })


/**
 * THUNK CREATORS
 */
export const fetchOrders = (userId) => {
  return dispatch =>
    axios.get('/api/users/orders')
      .then(res => {
        dispatch(getUserOrders(res.data || defaultOrders))
      })
      .catch(err => console.log(err))
}

/**
 * REDUCER
 */
export default function (state = defaultOrders, action) {
  switch (action.type) {
    case GET_USER_ORDERS:
      console.log("GET_USER_ORDERS", action.orders)
      return action.orders
    default:
      return state
  }
}
