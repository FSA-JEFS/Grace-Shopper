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

  handleChange(e) {
    console.log(this.state)
    this.setState({reviewText: e.target.value})
  }

  handleSubmit(){
    //console.log(this.state, this.props.user.id)
    axios.post(`/api/products/${this.props.match.params.productId}/reviews`, this.state)
    this.props.history.push('/myaccount/orders')


  }
  render() {
    //const user = this.props.user
    console.log(this.props.match.params.productId)

  return (
    <div className="col-md-12">
      <div className="table-responsive">
        <div className="tim-typo">
          <h3 className="tim-note"> Review Item
          </h3>
          <br />
           <div className="media-body">
		        <div className="form-group">
              <textarea className="form-control" name="review" onChange={this.handleChange} placeholder="Leave a review" rows="6"></textarea>

		        </div>
          </div>
          <div className="media-footer">
            <span onClick={this.handleSubmit} className="btn btn-primary btn-wd pull-right">Submit Review</span>
            </div>
          </div>
      </div>
    </div>
  )}
}


export default CreateReview
// const mapState = (state, ownProps) => {
//   // console.log('Mapping state', state)
//   console.log('in mapState', ownProps)
//   return {
//     selectedProduct: state.selectedProduct,
//   }
// }

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     fetchPuppy() {
//       dispatch(fetchPuppy(ownProps.match.params.productId))
//     },
//     handleClick(selectedProduct) {
//         //dispatch(addToCart(selectedProduct))
//     }
//   }
// }

// export default connect(mapState, mapDispatchToProps)(CreateReview)
