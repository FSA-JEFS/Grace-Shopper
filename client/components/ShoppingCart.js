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
      <div className="page-header header-filter" filter-color="purple" style={{backgroundImage: "url('../assets/img/bg7.jpg')", backgroundSize: "cover", backgroundPosition: "top center"}}>
    	<div className="container">
			<div className="row">
    			<div className="col-md-10 col-md-offset-1">

					<div className="card card-signup">
                        <h2 className="card-title text-center">Register</h2>
                        <div className="row">
                            <div className="col-md-5 col-md-offset-1">
            					<div className="info info-horizontal">
            						<div className="icon icon-rose">
            							<i className="material-icons">timeline</i>
            						</div>
            						<div className="description">
            							<h4 className="info-title">Marketing</h4>
            							<p className="description">
            								We've created the marketing campaign of the website. It was a very interesting collaboration.
            							</p>
            						</div>
            		        	</div>

            					<div className="info info-horizontal">
            						<div className="icon icon-primary">
            							<i className="material-icons">code</i>
            						</div>
            						<div className="description">
            							<h4 className="info-title">Fully Coded in HTML5</h4>
            							<p className="description">
            								We've developed the website with HTML5 and CSS3. The client has access to the code using GitHub.
            							</p>
            						</div>
            					</div>

            					<div className="info info-horizontal">
            						<div className="icon icon-info">
            							<i className="material-icons">group</i>
            						</div>
            						<div className="description">
            							<h4 className="info-title">Built Audience</h4>
            							<p className="description">
            								There is also a Fully Customizable CMS Admin Dashboard for this product.
            							</p>
            						</div>
            					</div>
            				</div>
                            <div className="col-md-5">
                                <div className="social text-center">
                                    <button className="btn btn-just-icon btn-round btn-twitter">
                                        <i className="fa fa-twitter"></i>
                                    </button>
                                    <button className="btn btn-just-icon btn-round btn-dribbble">
                                        <i className="fa fa-dribbble"></i>
                                    </button>
                                    <button className="btn btn-just-icon btn-round btn-facebook">
                                        <i className="fa fa-facebook"> </i>
                                    </button>
                                    <h4> or be classical </h4>
                                </div>
                                <button onClick={() => props.clickHandler('Hallo')}>hey</button>
                              {JSON.stringify(props.cart)}
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

export default connect(mapPropToCart, mapDispatch)(ShoppingCart)
