import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchOrders } from '../store/order'
import OrderComponent from './OrderComponent'
import CreateReview from './CreateReview'

/**
 * CONTAINER for OrderList, passes all of the current user's orders to it
 */

class MyOrders extends Component {

  componentDidMount() {
    const user = this.props.user
    if (user.id) this.props.fetchData(user.id)
  }

  render() {

    return (
      <div>
        <h3 className="tim-note"> My Order History
            </h3>
          {this.props.orders && this.props.orders.map((order) => {
            return <OrderComponent order={order} key={order.id} />
          })}
    </div >
  )}
}

const mapState = (state) => {
  return {
    orders: state.order
    //user: state.user
  }
}

const mapDispatch = (dispatch, ownProps) => {
  return {
    fetchData: (userId) => {
      dispatch(fetchOrders(userId))
    }
  }
}

export default connect(mapState, mapDispatch)(MyOrders)
