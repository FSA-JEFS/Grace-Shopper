import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {getCart, addToCart, deleteFromCart} from '../store'

const ShoppingCart = (props) => {
  const products = props.products

  return (
    <div className='signup-page'>
      <div className="page-header header-filter" style={{backgroundImage: "url('../resources/assets/img/bg7.jpg')", backgroundSize: "cover", backgroundPosition: "top center"}}>
    	  <div className="container">
			    <div className="row">
    			  <div className="col-md-11 col-md-offset-1">

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
		                                            <img src={element.product.photos[0]} alt="..." />
		                                        </div>
		                                    </td>
		                                    <td className="td-name">
		                                        <a href="#jacket">{element.product.name}</a>
		                                        <br /><small>from {element.product.breeder}</small>
		                                    </td>
		                                    <td>
		                                        {element.product.breed}
		                                    </td>
		                                    <td className="td-number">
		                                        <small>&euro;</small>{element.product.price}
		                                    </td>
		                                    <td className="td-number">
		                                        {element.quantity}
		                                        <div className="btn-group">
		                                            <button className="btn btn-round btn-info btn-xs" onClick={() => props.handleMinus(element)}> <i className="material-icons">remove</i> </button>
		                                            <button className="btn btn-round btn-info btn-xs" onClick={() => props.handlePlus(element)}> <i className="material-icons">add</i> </button>
		                                        </div>
		                                    </td>
		                                    <td className="td-number">
		                                        <small>&euro;</small>xxx
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
		                                        <small>$</small>{props.cart.map(el => el.product.price).reduce((a,b) => a + b, 0)}
		                                    </td>
		                                    <td colSpan="1" className="text-right"> <button type="button" className="btn btn-info btn-round">Complete Purchase <i className="material-icons">keyboard_arrow_right</i></button></td>

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
	handlDelete(index){
		//dispatch(deleteFromCart(index))
	},
	handlePlus(product){
		dispatch(addToCart(product))
	},
	handleMinus(product){
		console.log("*****", product)
		dispatch(deleteFromCart(product))
	}
  }
}

export default connect(mapPropToCart, mapDispatch)(ShoppingCart)
