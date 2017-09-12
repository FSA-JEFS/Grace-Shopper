import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { something } from '../reducers';
import PuppyList from '../components/PuppyList';


/**
 * CONTAINER
 */
const mapState = (state) => {

    let getRandomPuppies = function(n) {}
        let results = []
        while (results.length < n) {
            var rand = Math.floor(Math.random()*{state.puppies.length})
            results.push(state.puppies[rand])
        }
        return results
    }

    return {
        puppies: getRandomPuppies(4)
    }
}

export default connect(mapState)(UserHome)