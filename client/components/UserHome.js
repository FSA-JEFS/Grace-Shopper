import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

/**
 * COMPONENT
 */
const UserHome = props => {
  const { email } = props;

  // component to list all products
  // randomly pic 4 from all products and display them on home

  return (
    <div className="landing-page">
      <div
        className="page-header header-filter"
        data-parallax="true"
        style={{
          backgroundImage:
            "url('../resources/assets/img/amy-treasure-65953.jpg')"
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1 className="title">Find your new best friend.</h1>
              <h4>
                Purchasing a dog is difficult. We've made it easy. Our team is
                here to help you make an informed decision before purchasing
                your pet so you know exactly what to expect before obtaining
                your new best friend.
              </h4>
              <br />
              <Link to="/products">
                <div className="btn btn-primary btn-raised btn-lg">
                  See Our Puppies
                </div>
              </Link>
              <a
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                target="_blank"
                className="btn btn-danger btn-raised btn-lg"
              >
                <i className="fa fa-play" /> Watch video
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="main main-raised">
        <div className="container">

          <div className="section text-center">
            <h2 className="title">Made with 🐶 by our team:</h2>

            <div className="team">
              <div className="row">
                <div className="col-md-6">
                  <div className="card card-profile card-plain">
                    <div className="col-md-5">
                      <div className="card-image">
                        <a href="#pablo">
                          <img
                            className="img"
                            src="../resources/assets/img/faces/card-profile1-square.jpg"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="col-md-7">
                      <div className="card-content">
                        <h4 className="card-title">Alec Thompson</h4>
                        <h6 className="category text-muted">Founder</h6>

                        <p className="card-description">
                          Don't be scared of the truth because we need to
                          restart the human foundation in truth...
                        </p>

                        <div className="footer">
                          <a
                            href="#pablo"
                            className="btn btn-just-icon btn-simple btn-twitter"
                          >
                            <i className="fa fa-twitter" />
                          </a>
                          <a
                            href="#pablo"
                            className="btn btn-just-icon btn-simple btn-facebook"
                          >
                            <i className="fa fa-facebook-square" />
                          </a>
                          <a
                            href="#pablo"
                            className="btn btn-just-icon btn-simple btn-google"
                          >
                            <i className="fa fa-google" />
                          </a>
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
                          <img
                            className="img"
                            src="../resources/assets/img/faces/card-profile6-square.jpg"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="col-md-7">
                      <div className="card-content">
                        <h4 className="card-title">Kendall Andrew</h4>
                        <h6 className="category text-muted">
                          Graphic Designer
                        </h6>

                        <p className="card-description">
                          Don't be scared of the truth because we need to
                          restart the human foundation in truth...
                        </p>

                        <div className="footer">
                          <a
                            href="#pablo"
                            className="btn btn-just-icon btn-simple btn-linkedin"
                          >
                            <i className="fa fa-linkedin" />
                          </a>
                          <a
                            href="#pablo"
                            className="btn btn-just-icon btn-simple btn-facebook"
                          >
                            <i className="fa fa-facebook-square" />
                          </a>
                          <a
                            href="#pablo"
                            className="btn btn-just-icon btn-simple btn-dribbble"
                          >
                            <i className="fa fa-dribbble" />
                          </a>
                          <a
                            href="#pablo"
                            className="btn btn-just-icon btn-simple btn-google"
                          >
                            <i className="fa fa-google" />
                          </a>
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
                          <img
                            className="img"
                            src="../resources/assets/img/faces/card-profile4-square.jpg"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="col-md-7">
                      <div className="card-content">
                        <h4 className="card-title">Gina Andrew</h4>
                        <h6 className="category text-muted">Web Designer</h6>

                        <p className="card-description">
                          I love you like Kanye loves Kanye. Don't be scared of
                          the truth.
                        </p>

                        <div className="footer">
                          <a
                            href="#pablo"
                            className="btn btn-just-icon btn-simple btn-youtube"
                          >
                            <i className="fa fa-youtube-play" />
                          </a>
                          <a
                            href="#pablo"
                            className="btn btn-just-icon btn-simple btn-twitter"
                          >
                            <i className="fa fa-twitter" />
                          </a>
                          <a
                            href="#pablo"
                            className="btn btn-just-icon btn-simple btn-instagram"
                          >
                            <i className="fa fa-instagram" />
                          </a>
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
                          <img
                            className="img"
                            src="../resources/assets/img/faces/card-profile2-square.jpg"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="col-md-7">
                      <div className="card-content">
                        <h4 className="card-title">George West</h4>
                        <h6 className="category text-muted">Backend Hacker</h6>

                        <p className="card-description">
                          I love you like Kanye loves Kanye. Don't be scared of
                          the truth because we need to restart the human
                          foundation.
                        </p>

                        <div className="footer">
                          <a
                            href="#pablo"
                            className="btn btn-just-icon btn-simple btn-linkedin"
                          >
                            <i className="fa fa-linkedin" />
                          </a>
                          <a
                            href="#pablo"
                            className="btn btn-just-icon btn-simple btn-facebook"
                          >
                            <i className="fa fa-facebook-square" />
                          </a>
                          <a
                            href="#pablo"
                            className="btn btn-just-icon btn-simple btn-google"
                          >
                            <i className="fa fa-google" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = state => {
  return {};
};

export default connect(mapState)(UserHome);

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
};
