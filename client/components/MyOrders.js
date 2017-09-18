import { connect } from 'react-redux'
import OrderList from './OrderList'

/**
 * CONTAINER for OrderList, passes all of the current user's orders to it
 */

const mapState = (state) => {
  // console.log('Mapping state', state)
  return {
      orders: state.order
  }
}

export default connect(mapState)(OrderList)