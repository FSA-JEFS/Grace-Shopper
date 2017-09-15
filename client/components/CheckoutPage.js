import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {getCart, addToCart, deleteFromCart} from '../store'

const CheckoutPage = (props) => {
    console.log(">>>>>", props)
    const cart = props.cart.product

    return (
        <div className="contact-page">
        <div id="contactUsMap" className="big-map"></div>

        <div className="main main-raised">
            <div className="contact-content">
                <div className="container">
                    <h2 className="title">Complete Your Order</h2>
                    <div className="row">
                        <div className="col-md-6">
                            <p className="description">You can contact us with anything related to our Products. We'll get in touch with you as soon as possible.<br />
                            </p>
                            <form role="form" id="contact-form" method="post">
                                <div className="form-group label-floating">
                                    <label className="control-label">Your name</label>
                                    <input type="text" name="name" className="form-control" />
                                </div>
                                
                                <div className="form-group label-floating">
                                    <label className="control-label">Email address</label>
                                    <input type="email" name="email" className="form-control"/>
                                </div>
                                <br />
                                <div className="form-group label-floating">
                                    <label className="control-label">Shipping Address</label>
                                    <input type="text" name="phone" className="form-control"/>
                                </div>
                                <div className="form-group label-floating">
                                    <label className="control-label">Phone</label>
                                    <input type="text" name="phone" className="form-control"/>
                                </div>
                                <br />
                                <div className="form-group label-floating">
                                    <label className="control-label">Special Instructions</label>
                                    <textarea name="message" className="form-control" id="message" rows="3"></textarea>
                                </div>
                                <br />
                                <div className="submit text-center">
                                    <input type="submit" className="btn btn-primary btn-raised btn-round" value="Submit" />
                                </div>
                            </form>
                        </div>
                        <div className="col-md-4 col-md-offset-2">
                            <div className="info info-horizontal">
                                <div className="icon icon-primary">
                                    <i className="material-icons">pin_drop</i>
                                </div>
                                <div className="description">
                                    <h4 className="info-title">Find us at the office</h4>
                                    <p> Bld Mihail Kogalniceanu, nr. 8,<br />
                                        7652 Bucharest,<br />
                                        Romania
                                    </p>
                                </div>
                            </div>
                            <div className="info info-horizontal">
                                <div className="icon icon-primary">
                                    <i className="material-icons">phone</i>
                                </div>
                                <div className="description">
                                    <h4 className="info-title">Give us a ring</h4>
                                    <p> Michael Jordan<br />
                                        +40 762 321 762<br />
                                        Mon - Fri, 8:00-22:00
                                    </p>
                                </div>
                            </div>
                            <div className="info info-horizontal">
                                <div className="icon icon-primary">
                                    <i className="material-icons">business_center</i>
                                </div>
                                <div className="description">
                                    <h4 className="info-title">Legal Information</h4>
                                    <p> Creative Tim Ltd.<br />
                                        VAT &middot; EN2341241<br />
                                        IBAN &middot; EN8732ENGB2300099123<br />
                                        Bank &middot; Great Britain Bank
                                    </p>
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
    
    export default connect(mapPropToCart, mapDispatch)(CheckoutPage)