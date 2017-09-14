import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {getCart, addToCart, deleteFromCart} from '../store'

const ShoppingCart = (props) => {
  const products = props.products

  // component to list all products

  return (
    <div>
      <button onClick={() => console.log('CLICK')}>Hi!</button>
      <div>
      {
       JSON.stringify(props.cart)
      }
      </div>
    </div>
  )
}

const mapPropToCart = (state) => {
  return {
    cart: state.cart,
    clickHandler: (word) => {
      console.log(word)
      addToCart(word)
    }
  }
}

export default connect(mapPropToCart)(ShoppingCart)
