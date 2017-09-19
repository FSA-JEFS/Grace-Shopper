import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { fetchOrders } from '../../store/order'
import CreateReview from '../CreateReview'

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
      <div className="col-md-12">
      <div className="table-responsive">
        <div className="tim-typo">
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
                                <th className="text-center" />
                                <th>Product</th>
                                <th className="th-description">Breed</th>
                                <th className="text-right">Price</th>
                                <th className="text-right">Qty</th>
                                <th className="text-right">Amount</th>
                              </tr>
                            </thead>
                            <tbody>

                                {order.items && order.items.length &&
                                order.items.map((item, index) =>
                                <tr key={index}>
                                <td>
                                  <div className="img-container">
                                    <Link
                                      to={`/products/${item.product.id}`}
                                    >
                                      <img
                                        src={item.product.photos[0]}
                                        alt="..."
                                      />
                                    </Link>
                                  </div>
                                </td>
                                <td className="td-name">
                                  <Link
                                    to={`/products/${item.product.id}`}
                                  >
                                    {item.product.name}
                                  </Link>
                                  <br />
                                  <small>
                                    from {item.product.breeder}
                                  </small>
                                </td>
                                <td>
                                  {item.product.breed}
                                </td>
                                <td className="td-number">
                                  <small>&euro;</small>
                                  {item.product.price}
                                </td>
                                <td className="td-number">
                                  {item.quantity}
                                </td>
                                <td className="td-number">
                                  $ {item.product.price * item.quantity}<br />
                                  <Link
                            to={`/myaccount/CreateReview/` + item.product.id}
                          >
                            Leave a Review
                          </Link>
                                </td>
                                </tr>
                            )}
                            <tr>
                              <td colSpan="2" className="text-right">
                              </td>
                              <td className="td-total">Total</td>
                              <td className="td-price">
                                <small>$</small>
                                {order.items
                                  .map(el => el.product.price * el.quantity)
                                  .reduce((a, b) => a + b, 0)}
                            </td>
                            <td>

                            </td>
                            </tr>
                            </tbody>
                          </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                </div>
                </div>
                </div>
    )}
  }

const mapState = (state) => {
  return {
    orders: state.order
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
