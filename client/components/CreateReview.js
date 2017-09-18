import React, { Component } from "react";
import axios from 'axios'
import { connect } from 'react-redux'
import {fetchPuppy } from '../store'


class CreateReview extends Component {
  constructor() {
    super()
    this.state = {
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    console.log('in componentDidMount', this.props)
    this.props.fetchPuppy();
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit(){
    //console.log(this.state, this.props.user.id)
    // axios.put(`api/users/${this.props.user.id}`, this.state)
    // .then(console.log)

  }
  render() {
    const user = this.props.user

  return (
    <div className="col-md-12">
      <div className="table-responsive">
        <div className="tim-typo">
          <h3 className="tim-note"> Review Item
          </h3>
          <br />
           <div className="media-body">
		        <div className="form-group">
              <textarea className="form-control" name="tags" onChange={this.handleChange} placeholder="Leave a review" rows="6"></textarea>

		        </div>
          </div>
          <div className="media-footer">
            <span onClick={this.handleSubmit} className="btn btn-primary btn-wd pull-right">Edit</span>
            </div>
          </div>
      </div>
    </div>
  )}
}

const mapState = (state, ownProps) => {
  // console.log('Mapping state', state)
  console.log('in mapState', ownProps)
  return {
    selectedProduct: state.selectedProduct,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchPuppy() {
      console.log('puppyID', ownProps)
        dispatch(fetchPuppy(ownProps.match.params.id))
    },
    handleClick(selectedProduct) {
        //dispatch(addToCart(selectedProduct))
    }
  }
}

export default connect(mapState, mapDispatchToProps)(CreateReview)
