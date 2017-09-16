import React, { Component } from 'react'
import { connect }    from 'react-redux'
import { Router }     from 'react-router'
import { Route, Switch } from 'react-router-dom'
import PropTypes      from 'prop-types'
import history        from './history'
import { me }         from './store'
import { Main, Login, Signup, Navbar, BlackSimpleFooter } from './components'
import UserHome       from './components/UserHome'
import PuppyList      from './components/PuppyList'
import SinglePuppy  from './components/SinglePuppy'
import ProductByBreed from './components/ProductByBreed'
import ShoppingCart   from './components/ShoppingCart'
import CheckoutPage   from './components/CheckoutPage'
import UserPage       from './Components/UserPage'
import Scroll         from './components/Scroll'
import MyOrders         from './components/MyOrders'
import Admin         from './components/Admin'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const { isLoggedIn } = this.props

    return (
      <Router history={history}>
        <div>
          <Navbar />
          <Main>
            <Switch>
              {/* Routes placed here are available to all visitors */}
              <Scroll exact path='/' component={UserHome} />
              <Scroll exact path='/admin' component={Admin} />
              <Scroll exact path='/login' component={Login} />
              <Scroll exact path='/signup' component={Signup} />
              <Scroll exact path='/products' component={PuppyList} />
              <Scroll exact path='/products/:id' component={SinglePuppy} />
              <Scroll exact path='/products/breed/:breed' component={ProductByBreed} />
              <Scroll exact path='/myaccount' component={UserPage} />
              <Scroll exact path='/orders' component={MyOrders} />
              <Scroll exact path='/cart' component={ShoppingCart} />
              <Scroll exact path='/checkout' component={CheckoutPage} />
              <Scroll component={Login} />
            </Switch>
          </Main>
          <BlackSimpleFooter />
        </div>
      </Router>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadInitialData() {
      dispatch(me())
    }
  }
}

export default connect(mapState, mapDispatch)(Routes)

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
