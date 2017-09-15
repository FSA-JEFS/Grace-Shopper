import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
//import PuppyList from './PuppyList'

class AllPuppies extends Component {

  // component to list all products
  render() {
    const products = this.props.products

  return (
    <div className="blog-posts">
      <div className="page-header header-filter header-small" style={{ backgroundImage: `url("../resources/assets/img/examples/blog8.jpg")` }}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center">
              <h2 className="title">Find your new best friend</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="main main-raised">
        <div className="container">

          <div className="section">
            <div>
              <div>
                <h4>Currently Available</h4>
              </div>
              <form className="navbar-form navbar-right" role="search" onSubmit={() => this.props.handleSubmit}>
                <div className="form-group form-white">
                <input type="text" className="form-control" placeholder="Find a Breed" />
                </div>
                <button type="submit" className="btn btn-white btn-raised btn-fab btn-fab-mini" ><i className="material-icons">search</i></button>
              </form>
            </div>
            <div className="row">
              {
                products.map(puppy => {
                  return (<div className="col-md-4" key={puppy.id}>

                    <div>
                      <div className="card card-raised card-background" style={{ backgroundImage: `url(${puppy.photos[0]})` }}>
                        <div className="card-content">
                          <Link to={"/products/breed/"+ puppy.breed}>
                          <h6 className="category text-info">{puppy.breed}</h6></Link>

                          <h3 className="card-title">{puppy.name}</h3>

                          <p className="card-description">
                            {puppy.description}
                          </p>
                          <Link className="btn btn-danger btn-round" to={"/products/" + puppy.id}>
                            <i className="material-icons">format_align_left</i> Cuddle with meee ❤
                  </Link>
                        </div>
                      </div>
                    </div>
                  </div>)
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}}

const mapState = (state) => {
  // console.log('Mapping state', state)
  return {
      products: state.product
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleSubmit(e) {
      console.log(e)
      //dispatch(fetchPuppy(ownProps.match.params.id))
    }
  }
}

export default connect(mapState, mapDispatch)(AllPuppies)
