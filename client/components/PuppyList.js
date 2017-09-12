import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'


const PuppyList = (props) => {
    const puppies = props.puppies
  
    // component to list all puppies
    // randomly pic 4 from all puppies and display them on home
  
    return (
        <div className="team">
        <div className="row">
            {
                puppies.map(puppy => 
                    <div className="col-md-6">
                        <div className="card card-profile card-plain">
                        <div className="col-md-5">
                            <div className="card-image">
                            <a href="#pablo">
                                <img className="img" src="../resources/assets/img/faces/card-profile1-square.jpg" />
                            </a>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="card-content">
                            <h4 className="card-title">{puppy.name}</h4>
                            <h6 className="category text-muted">{puppy.breeder}</h6>

                            <p className="card-description">
                                {puppy.description}
                            </p>

                            <div className="footer">
                                <Link to={"/products/" + puppy.id}> See more cuteness... </Link>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                )
            }

        </div>
      </div>
    )