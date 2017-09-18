import axios from 'axios'

// // post order given a specific user
// router.post('/:id/orders', isSelfOrAdmin, (req, res, next) => {
//     // no need to find user
//     // create order
//     let neworder = req.body
//     neworder['userId'] = req.params.id
//     Order.create(neworder)
//       .then(order => res.json(order))
//       .catch(next)
//   })

/**
 * ACTION TYPES
 */
const CREATE_NEW_ORDER = 'CREATE_NEW_ORDER'

/**
 * INITIAL STATE
 */
const newOrder = []

/**
 * ACTION CREATORS
 */
export const createNewOrder = order => ({ type: CREATE_NEW_ORDER, order })


/**
 * THUNK CREATORS
 */
export const makeNewOrder = (userId, order) => {
  return dispatch =>
    axios.post('/api/users/' + userId + '/orders')
      .then(res => {
        dispatch(createNewOrder(res.data || newOrder))
      })
      .catch(err => console.log(err))
}


/**
 * REDUCER
 */
export default function (state = newOrder, action) {
  switch (action.type) {
    case CREATE_NEW_ORDER:
      return action.order
    default:
      return state
  }
}