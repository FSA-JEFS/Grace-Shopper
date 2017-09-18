// import axios from 'axios'
// import history from '../history'

// /**
//  * ACTION TYPES
//  */

// const GET_BREED = 'GET_BREED'

// /**
//  * INITIAL STATE
//  */
// const defaultProducts = []

// /**
//  * ACTION CREATORS
//  */
// const getBreed = breed => ({ type: GET_BREED, breed})

// /**
//  * THUNK CREATORS
//  */
// export const fetchBreed = (breed, history) => {

//   return dispatch =>
//     axios.get('/api/products/breed/' + breed )
//       .then(res => {
//         dispatch(getBreed(res.data || defaultProducts))
//         if (history){
//           history.push('/products/breed/'+ breed)
//         }
//         //history.push('/error')
//       })
//       .catch(err => console.err(err))
// }

// /**
//  * REDUCER
//  */
// export default function (state = defaultProducts, action) {
//   switch (action.type) {
//     case GET_BREED:
//     return action.breed
//     default:
//       return state
//   }
// }
