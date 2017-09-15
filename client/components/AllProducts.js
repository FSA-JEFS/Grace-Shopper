import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import PuppyList from './PuppyList'

/**
 * CONTAINER for PuppyList
 */

const mapState = (state) => {
  // console.log('Mapping state', state)
  return {
      products: state.product
  }
}

export default connect(mapState)(PuppyList)