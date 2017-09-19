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
    if (user.id){
      this.props.fetchData(user.id)
    }
    console.log(this.props.orders)
  }

  render() {

    return (
      <div>
        <h3 className="tim-note"> My Order History
            </h3>
            {this.props.orders &&
              this.props.orders.map((order, i) =>
                <div className="panel panel-default" key={i}>
                  <div
                    className="panel-heading text-left"
                    role="tab"
                    id={"heading" + i}
                  >
                    <a
                      className="collapsed"
                      role="button"
                      data-toggle="collapse"
                      data-parent="#accordion"
                      href={"#collapse" + i}
                      aria-expanded="false"
                      aria-controls={"collapse" + i}
                    >
                      <h4 className="panel-title">
                        Order: {order.items.map(item => item.product.name +', the ' + item.product.breed)} || Status: {order.status} || Subtotal:{" "}
                        {order.subTotal}
                        <i className="material-icons">keyboard_arrow_down</i>
                      </h4>
                    </a>
                  </div>
                  <div
                    id={"collapse" + i}
                    className="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby={"heading" + i}
                    aria-expanded="false"
                    style={{ height: "0px" }}
                  >
                    <div className="panel-body">
                      <div className="col-md-12">
                        <div className="table-responsive">
                          <table className="table table-shopping">
                            <thead>
                              <tr>
                                {/* <th className="text-center" /> */}
                                <th>Product</th>
                                <th className="th-description">Breed</th>
                                <th className="text-right">Price</th>
                                <th className="text-right">Qty</th>
                                <th className="text-right">Amount</th>
                              </tr>
                            </thead>
                            <tbody>
                              {this.props.orders && this.props.orders.map((order) => {
                                return <OrderComponent order={order} key={order.id} />
                              })}
                            </tbody>
                          </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
  )}
  </div>
    )}
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
