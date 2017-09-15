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
    axios.get('/api/users/' + userId + '/orders')
      .then(res => {
        dispatch(getOrders(res.data || defaultOrders))
      })
      .catch(err => console.log(err))
}

/**
 * REDUCER
 */
export default function (state = defaultOrders, action) {
  switch (action.type) {
    case GET_USER_ORDERS:
      return action.orders
    default:
      return state
  }
}
