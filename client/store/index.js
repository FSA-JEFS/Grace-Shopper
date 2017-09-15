import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import user from './user'
import product from './product'
import selectedProduct from './selectedProduct'
import cart from './cart'
import adminInfo from './adminInfo'

const reducer = combineReducers({user, product, selectedProduct, cart, adminInfo})
const middleware = applyMiddleware(thunkMiddleware, createLogger({collapsed: true})
)
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), middleware)

export default store
export * from './user'
export * from './product'
export * from './adminInfo'
export * from './selectedProduct'
export * from './cart'
