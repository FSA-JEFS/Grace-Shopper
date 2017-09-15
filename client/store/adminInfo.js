import axios from "axios";
import history from "../history";

/**
 * ACTION TYPES
 */
const ADMIN_GET_USERS = "ADMIN_GET_USERS";
const ADMIN_DEL_USERS = "ADMIN_DEL_USERS";
const ADMIN_PROMOTE_USER = "ADMIN_PROMOTE_USER";

/**
 * INITIAL STATE
 */
const defaultInfo = {};

/**
 * ACTION CREATORS
 */
const adminGetUsersAC = users => ({ type: ADMIN_GET_USERS, users });
const adminDelUsersAC = userid => ({ type: ADMIN_DEL_USERS, userid });
const adminPromoteUserAC = userid => ({ type: ADMIN_PROMOTE_USER, userid });

/**
 * THUNK CREATORS
 */
export const adminGetUsers = () => dispatch =>
  axios
    .get("/api/users")
    .then(res => dispatch(adminGetUsersAC(res.data || [])))
    .catch(err => console.log(err));

export const adminDelUsers = id => dispatch =>
  axios
    .delete("/api/users/" + id)
    .then(res => dispatch(adminDelUsersAC(id)))
    .catch(err => console.log(err));

export const adminPromoteUser = id => dispatch =>
  axios
    .put("/api/users/" + id, { isAdmin: true })
    .then(res => dispatch(adminPromoteUserAC(id)))
    .catch(err => console.log(err));

// TODO: trigger password reset for a user (that is, the next time they successfully log in with their old password, they are prompted for a new one), so that I can be proactive in getting users to change their passwords after a period of time

/**
 * REDUCER
 */
export default function(state = defaultInfo, action) {
  switch (action.type) {
    case ADMIN_GET_USERS:
      return Object.assign({}, state, { users: action.users });
    case ADMIN_DEL_USERS:
      return Object.assign({}, state, {
        users: state.users.filter(u => u.id != action.userid)
      });
    case ADMIN_PROMOTE_USER:
      return Object.assign({}, state, {
        users: state.users.map(u => {
          if (u.id == action.userid) u.isAdmin = true;
          return u
        })
      });
    default:
      return state;
  }
}
