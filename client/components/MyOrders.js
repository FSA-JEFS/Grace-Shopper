import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchOrders } from '../store'
import OrderComponent from './OrderComponent'

/**
 * CONTAINER for OrderList, passes all of the current user's orders to it
 */

class MyOrders extends Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: this.props.orders,
      user: this.props.user
    }
    this.fetchData = this.props.fetchData.bind(this)
  }

  componentDidMount() {
    console.log('***** componount will mount', this.state.user)
    if (this.state.user.id){
      console.log(this.state.user)
      this.fetchData(this.state.user.id)
    }
  }

  render() {
    return (
    <div className='signup-page'>
      <div className="page-header header-filter" style={{ backgroundImage: "url('../resources/assets/img/bg7.jpg')", backgroundSize: "cover", backgroundPosition: "top center" }}>
        {this.state.orders.map((order) => {
          return <OrderComponent order={order} key={order.id} />
        })}
      </div>
    </div>
  )
  }
}

const mapState = (state) => {
  console.log('Mapping state', state)
  return {
    orders: state.order,
    user: state.user
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
