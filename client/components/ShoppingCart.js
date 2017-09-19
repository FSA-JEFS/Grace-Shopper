import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getCart, addToCart, removeFromCart, deleteFromCart } from '../store'

const ShoppingCart = (props) => {
  return (
    <div className='signup-page'>
      <div className="page-header header-filter" style={{ backgroundImage: "url('http://teddybearpuppydogs.com/wp-content/uploads/2015/08/cute-teddy-bear-puppies.jpg')", backgroundSize: "cover", backgroundPosition: "top center" }}>
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
                              <th >Product</th>
                              <th className="th-description">Breed</th>
                              <th className="text-right">Price</th>
                              <th className="text-right">Qty</th>
                              <th className="text-right">Amount</th>
                              <th></th>
		                        </tr>
		                            </thead>
		                            <tbody>
                                  {props.cart.length && props.cart.map((element, index) => (
		                                <tr key={element.id}>
		                                    <td>
		                                        <div className="img-container">
			                          <Link to={`/products/${element.product.id}`}>
													  {
														  element.product.photos ? <img src={element.product.photos[0]} alt="..." /> : <div></div>
													  }
													</Link>
		                                        </div>
		                                    </td>
                            <td className="td-actions">
                              <button type="button" rel="tooltip" data-placement="left" title="Remove item" className="btn btn-simple" onClick={() => props.handleDelete(element)}>
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
                            <small>$</small>{props.cart.map(el => el.product.price * el.quantity).reduce((a, b) => a + b, 0)}
                          </td>
                          <td colSpan="1" className="text-right">
                            <Link to='/checkout'>
                              <button type="button" className="btn btn-info btn-round">
                                Complete Purchase <i className="material-icons">keyboard_arrow_right</i>
                              </button>
                            </Link>
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
      </div>
    </div>
  )
}

const mapPropToCart = (state) => {
  return {
    cart: state.cart
  }
}

const mapDispatch = (dispatch) => {
  return {
    handlePlus(product) {
      dispatch(addToCart(product))
    },
    handleMinus(product) {
      dispatch(removeFromCart(product))
    },
    handleDelete(product) {
      dispatch(deleteFromCart(product))
    }
  }
}

export default connect(mapPropToCart, mapDispatch)(ShoppingCart)
