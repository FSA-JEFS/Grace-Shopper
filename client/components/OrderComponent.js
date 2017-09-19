import React from 'react'
// import PropTypes from 'prop-types'
// import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
// import { getCart, addToCart, deleteFromCart } from '../store'

const OrderComponent = (props) => {
  const order = props.order
  console.log('What is order', order)
  // props.order.items && props.order.items.map((item, index) =>

  return (
    //<h1>We rendered!</h1>
    <div>
    {/* {order &&
              order.map((order, i) =>
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
                        Order: {order.id} || Status: {order.status} || Subtotal:{" "}
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
                            <tbody> */}
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
                                      $ {item.product.price * item.quantity}
                                    </td>
                                  </tr>
                                )}
                              <tr>
                                <td colSpan="2" className="text-right">
                                  <select
                                    className="selectpicker"
                                    data-style="btn btn-primary btn-round"
                                    title="Change Status"
                                    data-size="7"
                                    style={{display: 'block'}}
                                    defaultValue="unch"
                                    onChange={e =>
                                      props.adminSetOrderStatus(order.id, e.target.value)}
                                  >
                                    <option disabled value="unch">
                                      No Change
                                    </option>
                                    <option value="CREATED">CREATED</option>
                                    <option value="PROCESSING">PROCESSING</option>
                                    <option value="CANCELLED">CANCELLED</option>
                                    <option value="COMPLETED">COMPLETED</option>
                                  </select>
                                </td>
                                <td className="td-total">Total</td>
                                <td className="td-price">
                                  <small>$</small>
                                  {order.items
                                    .map(el => el.product.price * el.quantity)
                                    .reduce((a, b) => a + b, 0)}
                                </td>
                              </tr>
                            {/* </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              )}
              </div>

  )
}

export default OrderComponent
