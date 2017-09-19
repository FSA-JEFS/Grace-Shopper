import React from 'react'
// import PropTypes from 'prop-types'
// import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
// import { getCart, addToCart, deleteFromCart } from '../store'

const OrderComponent = (props) => {
  const order = props.order

  return (
    //<h1>We rendered!</h1>
    <div className="container">
      <div className="row">
        <div className="col-md-12">

          <div className="card card-signup">
            <div className="col-md-12">
              <div className="table-responsive">
                <table className="table table-shopping">
                  <thead>
                    <tr>
                      <th className="text-center"></th>
                      <th className="th-description">Breed</th>
                      <th className="text-right">Price</th>
                      <th className="text-right">Qty</th>
                      <th className="text-right">Amount</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {props.order.items && props.order.items.map((item, index) => (
                      <tr key={item.id}>
                        <td className="td-name">
                          <Link to={`/products/${item.product.id}`}>
                            {item.product.name}
                          </Link>
                          <br /><small>from {item.product.breeder}</small>
                        </td>
                        <td>
                          {item.product.breed}
                        </td>
                        <td className="td-number">
                          <small>&euro;</small>{item.product.price}
                        </td>
                        <td className="td-number">
                          {item.quantity}
                        </td>
                        <td className="td-number">
                        <Link to={"/myaccount/CreateReview/" + item.product.id}>Leave a review</Link>
		                                    </td>
                        <td className="td-actions">
                          <button type="button" rel="tooltip" data-placement="left" title="Remove item" className="btn btn-simple" onClick={() => props.handlDelete(index)}>
                            <i className="material-icons">close</i>
                          </button>
                        </td>
                      </tr>
                    ))}
                    <tr>
                      <td colSpan="2">
                      </td>
                      <td className="td-total">
                        Total
		                                    </td>
                      <td className="td-price">
                        <small>$</small>{props.order.subtotal}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderComponent
