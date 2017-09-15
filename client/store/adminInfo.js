import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const ADMIN_GET_USERS = 'ADMIN_GET_USERS'
const ADMIN_DEL_USERS = 'ADMIN_DEL_USERS'

/**
 * INITIAL STATE
 */
const defaultInfo = {}

/**
 * ACTION CREATORS
 */
const adminGetUsersAC = users => ({type: ADMIN_GET_USERS, users})
const adminDelUsersAC = userid => ({type: ADMIN_DEL_USERS, userid})

/**
 * THUNK CREATORS
 */
export const adminGetUsers = () =>
  dispatch =>
    axios.get('/api/users')
      .then(res =>
        dispatch(adminGetUsersAC(res.data || [])))
      .catch(err => console.log(err))

export const adminDelUsers = id =>
  dispatch =>
    axios.delete('/api/users/' + id)
      .then(res =>
        dispatch(adminDelUsersAC(id)))
      .catch(err => console.log(err))

/**
 * REDUCER
 */
export default function (state = defaultInfo, action) {
  switch (action.type) {
    case ADMIN_GET_USERS:
      return Object.assign({}, state, {users: action.users})
    case ADMIN_DEL_USERS:
      return Object.assign({}, state, {users: state.users.filter(u => u.id != action.userid)})
    default:
      return state
  }
}
