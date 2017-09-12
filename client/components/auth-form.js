import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../store'

/**
 * COMPONENT
 */
// <div>
//   <form onSubmit={handleSubmit} name={name}>
//     <div>
//       <label htmlFor='email'><small>Email</small></label>
//       <input name='email' type='text' />
//     </div>
//     <div>
//       <label htmlFor='password'><small>Password</small></label>
//       <input name='password' type='password' />
//     </div>
//     <div>
//       <button type='submit'>{displayName}</button>
//     </div>
//     {error && error.response && <div> {error.response.data} </div>}
//   </form>
//   <a href='/auth/google'>{displayName} with Google</a>
// </div>
const AuthForm = (props) => {
  const {name, displayName, handleSubmit, error} = props

  return (

    <div className="page-header header-filter" style={{backgroundImage: "url('../resources/assets/img/bg7.jpg')", backgroundSize: 'cover', backgroundPosition: 'top center'}}>
		<div className="container">
			<div className="row">
				<div className="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3">
					<div className="card card-signup">
						<form className="form" method="" action="">
							<div className="header header-primary text-center" style={{display: "block"}}>
								<h4 className="card-title">{displayName}</h4>
								<div className="social-line">
									<a href="#pablo" className="btn btn-just-icon btn-simple">
										<i className="fa fa-facebook-square"></i>
									</a>
									<a href="#pablo" className="btn btn-just-icon btn-simple">
										<i className="fa fa-twitter"></i>
									</a>
									<a href="#pablo" className="btn btn-just-icon btn-simple">
										<i className="fa fa-google-plus"></i>
									</a>
								</div>
							</div>
							<p className="description text-center">Or</p>
							<div className="card-content">

								<div className="input-group">
									<span className="input-group-addon">
										<i className="material-icons">face</i>
									</span>
									<input type="text" className="form-control" placeholder="First Name..." />
								</div>

								<div className="input-group">
									<span className="input-group-addon">
										<i className="material-icons">email</i>
									</span>
									<input type="text" className="form-control" placeholder="Email..." />
								</div>

								<div className="input-group">
									<span className="input-group-addon">
										<i className="material-icons">lock_outline</i>
									</span>
									<input type="password" placeholder="Password..." className="form-control" />
								</div>

								<div className="checkbox">
									<label>
										<input type="checkbox" name="optionsCheckboxes" checked/>
										Subscribe to newsletter
									</label>
								</div>
							</div>
							<div className="footer text-center" style={{display: "block"}}>
								<a href="#pablo" className="btn btn-primary btn-simple btn-wd btn-lg" >Get Started</a>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
  </div>
  )
}

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = (state) => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error
  }
}

const mapSignup = (state) => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleSubmit (evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const email = evt.target.email.value
      const password = evt.target.password.value
      dispatch(auth(email, password, formName))
    }
  }
}

export const Login = connect(mapLogin, mapDispatch)(AuthForm)
export const Signup = connect(mapSignup, mapDispatch)(AuthForm)

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
