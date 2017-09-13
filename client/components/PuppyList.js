import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


export default (props) => {
  console.log(props)
  const products = props.products

  // component to list all products

  return (
    <div className="team">
      <div className="row">
        {
          products.map(puppy => {
            return (<div className="col-md-6">
              <div className="card card-profile card-plain">
                <div className="col-md-5">
                  <div className="card-image">
                    <a href="#pablo">
                      <img className="img" src={puppy.photos[0]} />
                    </a>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="card-content">
                    <h4 className="card-title">{puppy.name}</h4>
                    <h6 className="text-muted">{puppy.breeder}</h6>

                    <p className="card-description">
                      {puppy.description}
                    </p>

                    <div className="footer">
                      <Link to={"/products/" + puppy.id}> See more cuteness... </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>)
          })
        }
      </div>
    </div>
  )
}
