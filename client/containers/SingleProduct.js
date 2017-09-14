import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPuppy } from '../store'; 
import SinglePuppy from '../components/SinglePuppy';

/**
 * CONTAINER
 */

const mapState = (state) => {
    // console.log('Mapping state', state)
    return {
        selectedProduct: state.selectedProduct
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchPuppy() {
            dispatch(fetchPuppy(ownProps.match.params.id))
        }
    }
}

export default connect(mapState, mapDispatchToProps)(SinglePuppy)