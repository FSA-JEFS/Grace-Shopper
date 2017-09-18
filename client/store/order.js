import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_USER_ORDERS = 'GET_USER_ORDERS'
const CREATE_NEW_ORDER = 'CREATE_NEW_ORDER'

/**
 * INITIAL STATE
 */
const defaultOrders = []

/**
 * ACTION CREATORS
 */
const getUserOrders = orders => ({ type: GET_USER_ORDERS, orders })
const createNewOrder = order => ({ type: CREATE_NEW_ORDER, order })


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
export const makeNewOrder = (userId, order) => {
  // console.log(order)
  return dispatch =>
    axios.post('/api/users/' + userId + '/orders', order)
      .then(res => {
        dispatch(createNewOrder(res.data))
      })
      .catch(err => console.log(err))
}

/**
 * REDUCER
 */
export default function (state = defaultOrders, action) {
  switch (action.type) {
    case CREATE_NEW_ORDER:
      const newState = state
      newState.push(action.order)
      return newState
    case GET_USER_ORDERS:
      return action.orders
    default:
      return state
  }
}
