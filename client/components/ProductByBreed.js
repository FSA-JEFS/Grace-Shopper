import React,  { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchBreed} from '../store'

class ProductByBreed extends Component {

  componentDidMount() {
    this.props.getProducts();
  }

  render(){
    const products = this.props.breed

  return (
    <div className="blog-posts">
      <div className="page-header header-filter header-small" style={{ backgroundImage: `url("../resources/assets/img/examples/blog8.jpg")` }}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center">
              <h2 className="title">{this.props.breedName} Puppies</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="main main-raised">
        <div className="container">

          <div className="section">

            <div className="row">
              {
                products && products.map(puppy => {
                  return (<div className="col-md-4" key={puppy.id}>

                    <div>
                      <div className="card card-raised card-background" style={{ backgroundImage: `url(${puppy.photos[0]})` }}>
                        <div className="card-content">
                          <h6 className="category text-info">{puppy.breed}</h6>
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
  )}
}

const mapState = (state, ownProps) => {
  // console.log('Mapping state', state)
  return {
      breed: state.breed,
      breedName: ownProps.match.params.breed
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getProducts() {
      dispatch(fetchBreed(ownProps.match.params.breed))
    }
  }
}

export default connect(mapState, mapDispatchToProps)(ProductByBreed)
