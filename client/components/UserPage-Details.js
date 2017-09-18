import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


export default (props) => {
  return (
    <div className="col-md-12">
    <div className="table-responsive">
      <div className="tim-typo">
        <h3 className="tim-note"> {props.user.name}
        </h3>
        <br />
        <h4 className="tim-typo">Details</h4>
          <small>{props.user.email}</small>
        <br />
        <br />
        <h4 className="tim-typo">My Preferences</h4>
          <ul>{props.user.tags && props.user.tags.map( tag => <li key={tag}>{tag}</li>)}</ul>
      </div>
    </div>
  </div>
  )
}
