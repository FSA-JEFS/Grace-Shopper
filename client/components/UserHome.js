import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
const UserHome = (props) => {
  const {email} = props

  // component to list all puppies
  // randomly pic 4 from all puppies and display them on home

  return (
    <div className="landing-page">
          <div className="page-header header-filter" data-parallax="true" style={{backgroundImage: "url('../resources/assets/img/bg8.jpg')"}}>
              <div className="container">
                  <div className="row">
              <div className="col-md-6">
                <h1 className="title">Your Story Starts With Us.</h1>
                          <h4>Every landing page needs a small description after the big bold title, that's why we added this text here. Add here all the information that can make you or your product create the first impression.</h4>
                          <br />
                          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" className="btn btn-danger btn-raised btn-lg">
                  <i className="fa fa-play"></i> Watch video
                </a>
              </div>
                  </div>
              </div>
          </div>

        <div className="main main-raised">
          <div className="container">
              <div className="section text-center">
                      <div className="row">
                          <div className="col-md-8 col-md-offset-2">
                              <h2 className="title">Let's talk product</h2>
                              <h5 className="description">This is the paragraph where you can write more details about your product. Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious, otherwise he wouldn't scroll to get here. Add a button if you want the user to see more.</h5>
                          </div>
                      </div>

              <div className="features">
                <div className="row">
                  <div className="col-md-4">
                    <div className="info">
                      <div className="icon icon-info">
                        <i className="material-icons">chat</i>
                      </div>
                      <h4 className="info-title">Free Chat</h4>
                      <p>Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.</p>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="info">
                      <div className="icon icon-success">
                        <i className="material-icons">verified_user</i>
                      </div>
                      <h4 className="info-title">Verified Users</h4>
                      <p>Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.</p>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="info">
                      <div className="icon icon-danger">
                        <i className="material-icons">fingerprint</i>
                      </div>
                      <h4 className="info-title">Fingerprint</h4>
                      <p>Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.</p>
                    </div>
                  </div>
                        </div>
              </div>
                  </div>

                <div className="section text-center">
                      <h2 className="title">Here is our team</h2>

              <div className="team">
                <div className="row">
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
                          <h4 className="card-title">Alec Thompson</h4>
                          <h6 className="category text-muted">Founder</h6>

                          <p className="card-description">
                            Don't be scared of the truth because we need to restart the human foundation in truth...
                          </p>

                          <div className="footer">
                            <a href="#pablo" className="btn btn-just-icon btn-simple btn-twitter"><i className="fa fa-twitter"></i></a>
                            <a href="#pablo" className="btn btn-just-icon btn-simple btn-facebook"><i className="fa fa-facebook-square"></i></a>
                            <a href="#pablo" className="btn btn-just-icon btn-simple btn-google"><i className="fa fa-google"></i></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="card card-profile card-plain">
                      <div className="col-md-5">
                        <div className="card-image">
                          <a href="#pablo">
                            <img className="img" src="../resources/assets/img/faces/card-profile6-square.jpg" />
                          </a>
                        </div>
                      </div>
                      <div className="col-md-7">
                        <div className="card-content">
                          <h4 className="card-title">Kendall Andrew</h4>
                          <h6 className="category text-muted">Graphic Designer</h6>

                          <p className="card-description">
                            Don't be scared of the truth because we need to restart the human foundation in truth...
                          </p>

                          <div className="footer">
                            <a href="#pablo" className="btn btn-just-icon btn-simple btn-linkedin"><i className="fa fa-linkedin"></i></a>
                            <a href="#pablo" className="btn btn-just-icon btn-simple btn-facebook"><i className="fa fa-facebook-square"></i></a>
                            <a href="#pablo" className="btn btn-just-icon btn-simple btn-dribbble"><i className="fa fa-dribbble"></i></a>
                            <a href="#pablo" className="btn btn-just-icon btn-simple btn-google"><i className="fa fa-google"></i></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="card card-profile card-plain">
                      <div className="col-md-5">
                        <div className="card-image">
                          <a href="#pablo">
                            <img className="img" src="../resources/assets/img/faces/card-profile4-square.jpg" />
                          </a>
                        </div>
                      </div>
                      <div className="col-md-7">
                        <div className="card-content">
                          <h4 className="card-title">Gina Andrew</h4>
                          <h6 className="category text-muted">Web Designer</h6>

                          <p className="card-description">
                            I love you like Kanye loves Kanye. Don't be scared of the truth.
                          </p>

                          <div className="footer">
                            <a href="#pablo" className="btn btn-just-icon btn-simple btn-youtube"><i className="fa fa-youtube-play"></i></a>
                            <a href="#pablo" className="btn btn-just-icon btn-simple btn-twitter"><i className="fa fa-twitter"></i></a>
                            <a href="#pablo" className="btn btn-just-icon btn-simple btn-instagram"><i className="fa fa-instagram"></i></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="card card-profile card-plain">
                      <div className="col-md-5">
                        <div className="card-image">
                          <a href="#pablo">
                            <img className="img" src="../resources/assets/img/faces/card-profile2-square.jpg" />
                          </a>
                        </div>
                      </div>
                      <div className="col-md-7">
                        <div className="card-content">
                          <h4 className="card-title">George West</h4>
                          <h6 className="category text-muted">Backend Hacker</h6>

                          <p className="card-description">
                            I love you like Kanye loves Kanye. Don't be scared of the truth because we need to restart the human foundation.
                          </p>

                          <div className="footer">
                            <a href="#pablo" className="btn btn-just-icon btn-simple btn-linkedin"><i className="fa fa-linkedin"></i></a>
                            <a href="#pablo" className="btn btn-just-icon btn-simple btn-facebook"><i className="fa fa-facebook-square"></i></a>
                            <a href="#pablo" className="btn btn-just-icon btn-simple btn-google"><i className="fa fa-google"></i></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

                  </div>


                <div className="section section-contacts">
                      <div className="row">
                          <div className="col-md-8 col-md-offset-2">
                              <h2 className="text-center title">Work with us</h2>
                  <h4 className="text-center description">Divide details about your product or agency work into parts. Write a few lines about each one and contact us about any further collaboration. We will responde get back to you in a couple of hours.</h4>
                              <form className="contact-form">
                                  <div className="row">
                                      <div className="col-md-6">
                        <div className="form-group label-floating">
                          <label className="control-label">Your Name</label>
                          <input type="email" className="form-control" />
                        </div>
                                      </div>
                                      <div className="col-md-6">
                        <div className="form-group label-floating">
                          <label className="control-label">Your Email</label>
                          <input type="email" className="form-control" />
                        </div>
                                      </div>
                                  </div>

                    <div className="form-group label-floating">
                      <label className="control-label">Your Messge</label>
                      <textarea className="form-control" rows="4"></textarea>
                    </div>

                                  <div className="row">
                                      <div className="col-md-4 col-md-offset-4 text-center">
                                          <button className="btn btn-primary btn-raised">
                          Send Message
                        </button>
                                      </div>
                                  </div>
                              </form>
                          </div>
                      </div>

                  </div>
              </div>

        </div>
    </div>
  )
}

export default UserHome

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
