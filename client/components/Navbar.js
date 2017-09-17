import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { logout } from "../store";

const Navbar = props =>
  <nav
    className="navbar navbar-default navbar-transparent navbar-fixed-top navbar-color-on-scroll"
    id="sectionsNav"
  >
    <div className="container">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle" data-toggle="collapse">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <Link className="navbar-brand" to="/">
          Puppy Basket
        </Link>
      </div>

      <div className="collapse navbar-collapse">
        <ul className="nav navbar-nav navbar-right">
          {props.isLoggedIn
            ? <li>
                <a onClick={props.handleClick}>
                  <i className="material-icons">apps</i> Logout
                </a>
              </li>
            : <li>
                <Link to="/login">
                  <i className="material-icons">account_circle</i> Login
                </Link>
              </li>}
          {props.isLoggedIn
            ? props.user.isAdmin ? 
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                    <i className="material-icons">view_carousel</i> Accounts
                    <b className="caret" />
                  </a>
                  <ul className="dropdown-menu dropdown-with-icons">
                    <li>
                      <Link to="/admin">
                        <i className="material-icons">account_balance</i> Admin Panel
                      </Link>
                    </li>
                    <li>
                      <Link to="/myaccount">
                        <i className="material-icons">account_circle</i> My Account
                      </Link>
                    </li>
                  </ul>
                </li>
              : <li>
                  <Link to="/myaccount">
                    <i className="material-icons">view_carousel</i> My Account
                  </Link>
                </li>
            : <li>
                <Link to="/signup">
                  <i className="material-icons">assignment</i> Sign Up
                </Link>
              </li>
					}

          <li>
            <Link to="/products">
              <i className="material-icons">apps</i> All Puppies
            </Link>
          </li>

          <Link to={'/cart'}>
            <button className="btn btn-white pull-right"><i className="material-icons">shopping_cart</i> {(props.cart.length && props.cart.reduce((a, b) => {
                if(typeof b === 'object'){
                  return a + b.quantity
                }
                return a + b}, 0)
              )}
              &nbsp;Items</button>
          </Link>

        </ul>
      </div>
    </div>
  </nav>;


/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    cart: state.cart,
    user: state.user
  };
};

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout());
    }
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Navbar));
