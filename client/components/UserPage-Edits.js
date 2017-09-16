import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class UserPageEdits extends Component {

  render() {
    const {user, handleChange, handleChangeTags, handleSubmit} = this.props

  return (
    <div className="col-md-12">
      <div className="table-responsive">
        <div className="tim-typo">
          <h3 className="tim-note"> Edit your Profile
          </h3>
          <br />
          <h4 className="tim-typo">Details</h4>
          <div className="col-lg-6 col-sm-4">
            <div className="form-group">
              <h4>Name</h4>
              <input type="text" placeholder={user.name} name="name" onChange={handleChange} className="form-control" />
            </div>
            <div className="form-group">
              <h4>Email</h4>
              <input type="text" placeholder={user.email} name="email" onChange={handleChange}className="form-control" />
            </div>

            <br />
            <h4 className="tim-typo">My Preferences</h4>
           <div className="media-body">
		        <div className="form-group">
              <textarea className="form-control" name="tags" onChange={handleChangeTags} placeholder={user.tags.map( tag => " " + tag)} rows="6"></textarea>

		        </div>
          </div>
          <div className="media-footer">
            <span onClick={handleSubmit} className="btn btn-primary btn-wd pull-right">Edit</span>
            </div>
          </div>
      </div>
    </div>
  </div>
  )}
}

const mapState = (state) => {
  return {
    user: state.user
  }
}

const mapDispatch = (dispatch) => {
  let changes = {}
  return {
    handleChange(e) {
      changes[e.target.name] = e.target.value
    },
    handleChangeTags(e) {
      const tagsArr = e.target.value.split(', ')
      changes[e.target.name] = tagsArr
    },
    handleSubmit(){
      console.log(changes)
      //dispatch(makeChanges(changes))
    }
  }
}

export default connect(mapState, mapDispatch)(UserPageEdits)
