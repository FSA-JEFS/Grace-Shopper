// import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPuppy, addToCart, getCart } from '../store';
import SinglePuppy from '../components/SinglePuppy';

/**
 * CONTAINER
 */

const mapState = (state) => {
    // console.log('Mapping state', state)
    return {
        selectedProduct: state.selectedProduct,
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchPuppy() {
            dispatch(fetchPuppy(ownProps.match.params.id))
        },
        handleClick(selectedProduct) {
            console.log('CLICKED!', selectedProduct)
            dispatch(addToCart(selectedProduct))
        },
        getCart() {
            dispatch(getCart())
        }
    }
}

export default connect(mapState, mapDispatchToProps)(SinglePuppy)
