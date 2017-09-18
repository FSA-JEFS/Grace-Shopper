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
export let fetchOrders = userId => dispatch =>
  axios.get('/api/users/' + userId + '/orders')
      .then(res => {
        dispatch(getUserOrders(res.data || defaultOrders))
      })
      .catch(err => console.log(err))

export const makeNewOrder = (userId, order) => dispatch =>
    axios.post('/api/users/' + userId + '/orders', order)
      .then(res => {
        dispatch(createNewOrder(res.data))
        console.log(order)
        return axios.post('/api/email/sendCheckoutMail', {
          order,
          subtotal: order.items.reduce((acc, i) => i.quantity * i.price + acc, 0),
          to: order.confirmationEmail
        })
      })
      .catch(err => console.log(err))

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
      console.log("GET_USER_ORDERS", action.orders)
      return action.orders
    default:
      return state
  }
}
