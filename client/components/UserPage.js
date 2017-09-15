import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import UserPageDetails from './UserPage-Details'
import { } from '../store'

class UserPage extends Component {

  componentDidMount(){
    console.log('$$$$$$$', this.props.user)
  }

  render(){
    const {user} = this.props
    console.log(user.tags)

  return (
    <div className='signup-page'>
      <div className="page-header header-filter">
    	  <div className="container">
			    <div className="row">
    			  <div className="col-md-12">

					  <div className="card card-signup">

					<nav className="navbar navbar-primary">
							<div className="navbar-header">
								<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#example-navbar-primary">
									<span className="sr-only">Toggle navigation</span>
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
								</button>
								<a className="navbar-brand" href="#pablo">Welcome {user.name}</a>
							</div>

							<div className="collapse navbar-collapse" id="example-navbar-primary">
								<ul className="nav navbar-nav navbar-right">
									<li className="active">
                  <a href="#pablo">
											<i className="material-icons">account_circle</i>
		                                    Profile
		                                </a>
		                            </li>
		                            <li>
                                <a href="#pablo">
											<i className="material-icons">explore</i>
											Orders
		                                </a>

		                            </li>
		                            <li>
		                                <a href="#pablo">
											<i className="material-icons">settings</i>
											Settings
		                                </a>
		                            </li>
								</ul>
						</div>
					</nav>

                {/* <div className="col-md-12">
                  <div className="table-responsive">
                    <div className="tim-typo">
                      <h3 className="tim-note"> {user.name}
                      </h3>
                      <br />
                      <h4 className="tim-typo">Details</h4>
                        <small>{user.email}</small>
                      <br />
                      <br />
                      <h4 className="tim-typo">My Preferences</h4>
                        <ul>{user.tags && user.tags.map( tag => <li>{tag}</li>)}</ul>
                    </div>
		            </div> */}
                <UserPageDetails user={user} />
              </div>
            </div>
          </div>
        </div>
      </div>
		</div>
  )
}}

const mapStatetoProps = (state) => {
  return {
    cart: state.cart,
	  user: state.user,
  }
}

const mapDispatch = (dispatch) => {
  return {
    handlDelete(index){
      //dispatch(deleteFromCart(index))
    },
    handlePlus(product){
      dispatch(addToCart(product))
    },
    handleMinus(product){
      console.log("*****", product)
      dispatch(deleteFromCart(product))
    }
  }
}

export default connect(mapStatetoProps, mapDispatch)(UserPage)
