import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { something } from '../reducers';
import PuppyList from '../components/PuppyList';

/**
 * CONTAINER
 */

const mapState = (state) => {
    console.log('Mapping state', state)
    return {
        products: state.product
    }
}

export default connect(mapState)(PuppyList)