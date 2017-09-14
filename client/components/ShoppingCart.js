import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {getCart, addToCart, deleteFromCart} from '../store'

const ShoppingCart = (props) => {
  const products = props.products

  // component to list all products

  return (
    <div className='signup-page'>
      <div className="page-header header-filter" style={{backgroundImage: "url('../resources/assets/img/bg7.jpg')", backgroundSize: "cover", backgroundPosition: "top center"}}>
    	  <div className="container">
			    <div className="row">
    			  <div className="col-md-10 col-md-offset-1">

					  <div className="card card-signup">
            <div className="col-md-10 col-md-offset-1">
		                        <div className="table-responsive">
		                        <table className="table table-shopping">
		                            <thead>
		                                <tr>
		                                    <th className="text-center"></th>
		                                    <th >Product</th>
		                                    <th className="th-description">Color</th>
		                                    <th className="th-description">Size</th>
		                                    <th className="text-right">Price</th>
		                                    <th className="text-right">Qty</th>
		                                    <th className="text-right">Amount</th>
		                                    <th></th>
		                                </tr>
		                            </thead>
		                            <tbody>
		                                <tr>
		                                    <td>
		                                        <div className="img-container">
		                                            <img src="assets/img/product1.jpg" alt="..." />
		                                        </div>
		                                    </td>
		                                    <td className="td-name">
		                                        <a href="#jacket">{props.cart[0]}</a>
		                                        <br /><small>by Dolce&Gabbana</small>
		                                    </td>
		                                    <td>
		                                        Red
		                                    </td>
		                                    <td>
		                                        M
		                                    </td>
		                                    <td className="td-number">
		                                        <small>&euro;</small>549
		                                    </td>
		                                    <td className="td-number">
		                                        1
		                                        <div className="btn-group">
		                                            <button className="btn btn-round btn-info btn-xs"> <i className="material-icons">remove</i> </button>
		                                            <button className="btn btn-round btn-info btn-xs"> <i className="material-icons">add</i> </button>
		                                        </div>
		                                    </td>
		                                    <td className="td-number">
		                                        <small>&euro;</small>549
		                                    </td>
		                                    <td className="td-actions">
		                                        <button type="button" rel="tooltip" data-placement="left" title="Remove item" className="btn btn-simple">
		                                            <i className="material-icons">close</i>
		                                        </button>
		                                    </td>
		                                </tr>
		                                <tr>
		                                    <td colSpan="3">
		                                    </td>
		                                    <td className="td-total">
		                                       Total
		                                    </td>
		                                    <td className="td-price">
		                                        <small>&euro;</small>2,346
		                                    </td>
		                                    <td colSpan="3" className="text-right"> <button type="button" className="btn btn-info btn-round">Complete Purchase <i className="material-icons">keyboard_arrow_right</i></button></td>

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
    cart: state.cart,
    // clickHandler: (word) => {
    //   console.log(word)
    //   addToCart(word)
    // }
  }
}

const mapDispatch = (dispatch) => {
  return {
    clickHandler(word){
      console.log(word)
      dispatch(addToCart(word))
    }
  }
}

export default connect(mapPropToCart, )(ShoppingCart)
