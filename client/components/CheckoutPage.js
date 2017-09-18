import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {createNewOrder} from '../store'

const CheckoutPage = (props) => {
    console.log(">>>>>", props)
    const {handleSubmit} = props
    const cart = props.cart.product

    // just shove the cart into orders

    return (
        <div className="contact-page" style={{backgroundImage: "url('../resources/assets/img/bg7.jpg')", backgroundSize: 'cover', backgroundPosition: 'top center'}}>
        <div id="contactUsMap" className="big-map"></div>

        <div className="main main-raised">
            <div className="contact-content">
                <div className="container">
                    <h2 className="title">Complete Your Order</h2>
                    <div className="row">

                        <div className="col-md-4">
                            {props.cart.length && props.cart.map((element, index) => (
                                
                            <div key={element.id} className="info info-horizontal" >  
                                <div className="icon icon-primary">
                                    <div className="material-icons">
                                        <img src={element.product.photos[0]} alt="..." width="150"/>
                                    </div>
                                    <div className="description">
                                        <h4 className="info-title">{element.product.name}</h4>
                                        <p> 
                                            Breeder: {element.product.breeder} <br />
                                            Breed: {element.product.breed} <br />
                                            Quantity: {element.quantity} <br />
                                            Subtotal: ${element.product.price * element.quantity}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            ))}
                            
                            {/* <div className="info info-horizontal">
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
                            </div> */}

                        </div>

                        <div className="col-md-6 col-md-offset-2">
                            <p className="description">Enter your details below! We'll deliver your puppies right away.<br />
                            </p>
                            <form onSubmit={handleSubmit} role="form" id="contact-form" method="post">
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
                                    <input type="text" name="address" className="form-control"/>
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
                        
                    </div>
            </div>
            </div>
        </div>
        </div>
      )
    }

    const mapDispatch = (dispatch) => {
        return {
            handleSubmit (evt) {
                evt.preventDefault()
                // submit cart data into the user's orders
                // create an obj 
                let order = {
                    status: 'CREATED', 
                    items: [].push(props.cart.map((element, index) => {element.product.name})), 
                    subTotal: props.cart.map((element, index) => {element.product.price * element.quantity}) 
                }
                dispatch(makeNewOrder(order))
            }
        }
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
    
    export default connect(mapPropToCart, mapDispatch)(CheckoutPage)