import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { something } from '../reducers';
import UserHome from '../components/UserHome';


/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
  }
}

export default connect(mapState)(UserHome)
