import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../store'

const Login = (props) => {
  const {children, handleClick, isLoggedIn} = props

  return (
    <div>
      {children}
    </div>
  )
}
