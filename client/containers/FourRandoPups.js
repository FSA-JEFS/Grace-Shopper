import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { something } from '../reducers';
import PuppyList from '../components/PuppyList';
import fetchProducts from '../store/product';


/**
 * CONTAINER
 */
const mapState = (state) => {

    let getRandomProducts = function(n) {
        let results = []
        while (results.length < n) {
            var rand = Math.floor(Math.random()*{state.products.length})
            results.push(state.products[rand])
        }
        return results
    }

    return {
        products: getRandomProducts(4)
    }
}

export default connect(mapState)(UserHome)