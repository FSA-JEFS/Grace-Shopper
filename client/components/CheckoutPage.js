import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { makeNewOrder, clearCart } from '../store'
import Checkout from './Checkout';

const CheckoutPage = (props) => {
  const { handleSubmit, successPayment } = props
  const cart = props.cart.product

  // just shove the cart into orders

  return (
    <div className="contact-page" style={{ backgroundImage: "url('../resources/assets/img/bg7.jpg')", backgroundSize: 'cover', backgroundPosition: 'top center' }}>
      <div id="contactUsMap" className="big-map"></div>

      <div className="main main-raised contact-content">
        <div className="container">
          <h2 className="title">Complete Your Order</h2>
          <div className="row">

            <div className="col-md-4">
              {props.cart.length && props.cart.map((element, index) => (

                <div key={element.id} className="info info-horizontal icon icon-primary" >
                  <div className="material-icons">
                    <img src={element.product.photos[0]} alt="..." width="150" />
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

              ))}

            </div>

            <div className="col-md-6 col-md-offset-2">
              <p className="description">Enter your details below! We'll deliver your puppies right away.<br />
              </p>
              <form onSubmit={e => handleSubmit(e, props.user.id, props.cart)} role="form" id="contact-form" method="post">
                <div className="form-group label-floating">
                  <label className="control-label">Recipient Name</label>
                  <input type="text" name="recipientName" className="form-control" />
                </div>

                <div className="form-group label-floating">
                  <label className="control-label">Confirmation Email</label>
                  <input type="email" name="confirmationEmail" className="form-control" />
                </div>
                <br />
                <div className="form-group label-floating">
                  <label className="control-label">Recipient Address</label>
                  <input type="text" name="recipientAddress" className="form-control" />
                </div>
                <div className="form-group label-floating">
                  <label className="control-label">Recipient Phone</label>
                  <input type="text" name="recipientPhone" className="form-control" />
                </div>
                <br />
                <div className="form-group label-floating">
                  <label className="control-label">Special Instructions</label>
                  <textarea name="specialInstructions" className="form-control" id="message" rows="3"></textarea>
                </div>
                <br />
                {/*<div className="submit text-center">
                  <input type="submit" className="btn btn-primary btn-raised btn-round" value="Submit" />
                </div>*/}

                <Checkout
                  name={'Confirm purchase'}
                  description={"This is only a test page, enter 4242 4242 4242 4242 for credit card"}
                  amount={props.cart.map(el => el.product.price * el.quantity).reduce((a,b) => a+b, 0)}
                  successPayment={successPayment}
                />
              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

const mapDispatch = (dispatch) => {
    return {
        handleSubmit (evt, userid, cart) {
            evt.preventDefault()
            // submit cart data into the user's orders
            let {recipientName, confirmationEmail, recipientAddress, recipientPhone, specialInstructions} = evt.target;
            [recipientName, confirmationEmail, recipientAddress, recipientPhone, specialInstructions] = [recipientName, confirmationEmail, recipientAddress, recipientPhone, specialInstructions].map(x => x.value)
            // create an obj 
            let order = {
                status: 'CREATED', 
                items: cart.map((element, index) => ({
                    product: element.product, 
                    quantity: element.quantity, 
                    price: element.product.price
                })),
                recipientName, confirmationEmail, recipientAddress, recipientPhone, specialInstructions
            }
            dispatch(makeNewOrder(userid, order))
            // we used to clear cart here but now going to only do it at the stripe success callback
        },
        successPayment() {
          alert('Payment Successful');
          dispatch(clearCart())
        }
    }
}

const mapPropToCart = (state) => {
  return {
    cart: state.cart,
    user: state.user
  }
}

export default connect(mapPropToCart, mapDispatch)(CheckoutPage)