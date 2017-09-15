import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


const PuppyList = (props) => {
  const products = props.products

  // component to list all products

  return (
    <div className="blog-posts">
      	<div className="page-header header-filter header-small" style={{backgroundImage: `url("../resources/assets/img/examples/blog8.jpg")`}}>
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center">
                <h2 className="title">A Place for Entrepreneurs to Share and Discover New Stories</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="main main-raised">
          <div className="container">

            <div className="section">
        <div className="row">
					<div className="col-md-6 col-md-offset-3 text-center">
						<ul className="nav nav-pills nav-pills-primary">
						  <li className="active"><a href="#pill1" data-toggle="tab">All</a></li>
						  <li><a href="#pill2" data-toggle="tab">World</a></li>
						  <li><a href="#pill3" data-toggle="tab">Arts</a></li>
						  <li><a href="#pill4" data-toggle="tab">Tech</a></li>
						  <li><a href="#pill5" data-toggle="tab">Business</a></li>
						</ul>
						<div className="tab-content tab-space">
							<div className="tab-pane active" id="pill1">

							</div>
							<div className="tab-pane" id="pill2">

							</div>
							<div className="tab-pane" id="pill3">

							</div>
							<div className="tab-pane" id="pill4">

							</div>
						</div>

					</div>
				</div>
      <div className="row">
        {
          products.map(puppy => {
            return (<div className="col-md-4" key={puppy.id}>

            <div>
              <div className="card card-raised card-background" style={{backgroundImage: `url(${puppy.photos[0]})`}}>
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
  )
}

/**
 * CONTAINER
 */

const mapState = (state) => {
    // console.log('Mapping state', state)
    return {
        products: state.product
    }
}

export default connect(mapState)(PuppyList)