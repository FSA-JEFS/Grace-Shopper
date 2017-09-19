import axios from 'axios';

// Action Types
const GET_PUPPY = 'GET_PUPPY';

// Action Creator
export function getPuppy (puppy) {
    const action = { type: GET_PUPPY, puppy };
    return action;
}

// Thunk Creator
export const fetchPuppy = puppyId => dispatch => 
    axios.get('/api/products/' + puppyId)
        .then(res => res.data)
        .then(puppy => {
            dispatch(getPuppy(puppy));
        })

// Reducer
export default function reducer (state = {}, action) {
    switch (action.type) {
        case GET_PUPPY:
            return action.puppy;
        default:
            return state;
    }
}
