import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchOrders } from '../store'
import OrderComponent from './OrderComponent'

/**
 * CONTAINER for OrderList, passes all of the current user's orders to it
 */

class MyOrders extends Component {

  componentDidMount() {
    const user = this.props.user
    console.log('***** componount did mount', this.props.user)
    if (user.id){
      console.log('&&&&& running in component did mount', user)
      this.props.fetchData(user.id)
    }
  }

  render() {


    return (
    <div>
      <h3 className="tim-note"> My Order History
          </h3>
        {this.props.orders && this.props.orders.map((order) => {
          return <OrderComponent order={order} key={order.id} />
        })}
    </div>
    )
  }
}

const mapState = (state) => {
  console.log('Mapping state', state)
  return {
    orders: state.order
    //user: state.user
  }
}

const mapDispatch = (dispatch, ownProps) => {
  // console.log('Mapping state', state)
  return {
    fetchData: (userId) => {
      console.log('about to dispatch fetch for', userId)
      dispatch(fetchOrders(userId))
    }
  }
}

export default connect(mapState, mapDispatch)(MyOrders)
