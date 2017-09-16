import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
//handle change from search back on the all product page
const SET_BREED = 'SET_BREED'
//fetch all the products matching breed being passed as argument
const GET_BREED = 'GET_BREED'

/**
 * INITIAL STATE
 */
const defaultProducts = []

/**
 * ACTION CREATORS
 */
const getBreed = breed => ({ type: GET_BREED, breed})
export const setBreed = breed => ({ type: SET_BREED, breed})

/**
 * THUNK CREATORS
 */
export const fetchBreed = (breed, history) => {

  return dispatch =>
    axios.get('/api/products/breed/' + breed )
      .then(res => {
        dispatch(getBreed(res.data || defaultProducts))
        if (history){
          history.push('/products/breed/'+ breed)
        }
      })
      .catch(err => console.log(err))
}

/**
 * REDUCER
 */
export default function (state = defaultProducts, action) {
  switch (action.type) {
    case SET_BREED:
      return Object.assign({}, state, { selectedBreed: action.breed });
    case GET_BREED:
    return Object.assign({}, state, { allProductsByBreed: action.breed });
    default:
      return state
  }
}
