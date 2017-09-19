import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios'


class UserPageEdits extends Component {
  constructor() {
    super()
    this.state = {
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleChangeTags = this.handleChangeTags.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }
  handleChangeTags(e) {
    const tagsArr = e.target.value.split(', ')
    this.setState({tags: tagsArr})
  }
  handleSubmit(){
    axios.put(`api/users/${this.props.user.id}`, this.state)
    .then(console.log)

  }
  render() {
    const user = this.props.user


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
              <input type="text" placeholder={user.name} name="name" onChange={this.handleChange} className="form-control" />
            </div>
            <div className="form-group">
              <h4>Email</h4>
              <input type="text" placeholder={user.email} name="email" onChange={this.handleChange} className="form-control" />
            </div>

            <br />
            <h4 className="tim-typo">My Preferences</h4>
           <div className="media-body">
		        <div className="form-group">
              <textarea className="form-control" name="tags" onChange={this.handleChangeTags} rows="6"></textarea>

		        </div>
          </div>
          <div className="media-footer">
            <span onClick={this.handleSubmit} className="btn btn-primary btn-wd pull-right">Edit</span>
            </div>
          </div>
      </div>
    </div>
  </div>
  )}
}

export default UserPageEdits

// removed this from line 58:
// placeholder={user.tags.length && user.tags.map(tag => tag + " ")} 