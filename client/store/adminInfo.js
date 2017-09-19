import axios from "axios";
import history from "../history";

/**
 * ACTION TYPES
 */
const ADMIN_GET_USERS = "ADMIN_GET_USERS";
const ADMIN_DEL_USERS = "ADMIN_DEL_USERS";
const ADMIN_PROMOTE_USER = "ADMIN_PROMOTE_USER";
const ADMIN_GET_ORDERS = "ADMIN_GET_ORDERS";
const ADMIN_SET_ORDER = "ADMIN_SET_ORDER";
const ADMIN_GET_PRODUCTS = "ADMIN_GET_PRODUCTS";
const ADMIN_ADD_PRODUCT = "ADMIN_ADD_PRODUCT";
const ADMIN_EDIT_PRODUCT = "ADMIN_EDIT_PRODUCT";

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
const adminGetOrdersAC = orders => ({ type: ADMIN_GET_ORDERS, orders });
const adminSetOrderStatusAC = order => ({ type: ADMIN_SET_ORDER, order });
const adminGetProductsAC = products => ({ type: ADMIN_GET_PRODUCTS, products });
const adminAddProductAC = product => ({ type: ADMIN_ADD_PRODUCT, product });
const adminEditProductAC = product => ({ type: ADMIN_EDIT_PRODUCT, product })

/**
 * THUNK CREATORS
 */

export const adminSetOrderStatus = (id, value) => dispatch => 
  axios
    .put('/api/orders/' + id, {status: value})
    .then(res => dispatch(adminSetOrderStatusAC(res.data)))
    .catch(err => console.err(err))

export const adminGetInfo = () => dispatch =>
  Promise.all([
    axios.get("/api/users"),
    axios.get("/api/products"),
    axios.get("/api/orders")
  ])
    .then(([res1, res2, res3]) => {
      dispatch(adminGetUsersAC(res1.data || []))
      dispatch(adminGetProductsAC(res2.data || []))
      dispatch(adminGetOrdersAC(res3.data || []))
    })
    .catch(err => console.err(err));

export const adminDelUsers = id => dispatch =>
  axios
    .delete("/api/users/" + id)
    .then(res => dispatch(adminDelUsersAC(id)))
    .catch(err => console.err(err));

export const adminPromoteUser = id => dispatch =>
  axios
    .put("/api/users/" + id, { isAdmin: true })
    .then(res => dispatch(adminPromoteUserAC(id)))
    .catch(err => console.err(err));

export const adminAddProduct = product => dispatch => {
  return axios
    .post("/api/products/add-product/", product)
    .then(res => dispatch(adminAddProductAC(product)))
    .catch(err => console.err(err))
}

export const adminEditProduct = product => dispatch => {
  const cleanProduct = {
    name: product.name,
    breed: product.breed,
    breeder: product.breeder,
    breederEmail: product.breederEmail,
    description: product.description,
    price: product.price,
    photos: product.photos,
    tags: product.tags,
    inventory: product.inventory
  }
  return axios
    .put("/api/products/" + product.id, cleanProduct)
    .then(res => dispatch(adminEditProductAC(product)))
    .catch(err => console.err(err))
}

// TODO: trigger password reset for a user (that is, the next time they successfully log in with their old password, they are prompted for a new one), so that I can be proactive in getting users to change their passwords after a period of time

/**
 * REDUCER
 */
export default function(state = defaultInfo, action) {
  switch (action.type) {
    case ADMIN_GET_USERS:
      return Object.assign({}, state, { users: action.users });
    case ADMIN_GET_PRODUCTS:
      return Object.assign({}, state, { products: action.products });
    case ADMIN_GET_ORDERS:
      return Object.assign({}, state, { orders: action.orders });
    case ADMIN_SET_ORDER:
      return Object.assign({}, state, { orders: state.orders.map(order => order.id == action.order.id ? action.order : order) });
    case ADMIN_DEL_USERS:
      return Object.assign({}, state, {
        users: state.users.filter(u => u.id != action.userid)
      });
    case ADMIN_ADD_PRODUCT:
      return Object.assign({}, state, { products: state.products.concat(action.product)})
    case ADMIN_EDIT_PRODUCT:
      return Object.assign({}, state, { products: state.products.map(p => action.product.id == p.id ? action.product : p)})
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
