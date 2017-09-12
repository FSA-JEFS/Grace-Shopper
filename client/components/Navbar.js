import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';


export default (props) => (
<nav className="navbar navbar-default navbar-transparent navbar-fixed-top navbar-color-on-scroll" colorOnScroll=" " id="sectionsNav">
    	<div className="container">
        	<div className="navbar-header">
        		<button type="button" className="navbar-toggle" data-toggle="collapse">
            		<span className="sr-only">Toggle navigation</span>
		            <span className="icon-bar"></span>
		            <span className="icon-bar"></span>
		            <span className="icon-bar"></span>
        		</button>
        		<Link className="navbar-brand" to="/">Puppy Basket</Link>
        	</div>

					<div className="collapse navbar-collapse">
        		<ul className="nav navbar-nav navbar-right">



						{
							props.isLoggedIn ?
							<li>
								<div onClick={handleClick}>Logout</div>
							</li>
							:
							<li>
								<Link to='/login'>
									<i className="material-icons">apps</i> Login
								</Link>
							</li>
						}
						{
							props.isLoggedIn ?
							<li className="dropdown">
								<a href="#" className="dropdown-toggle" data-toggle="dropdown">
									<i className="material-icons">view_carousel</i> My Account
									<b className="caret"></b>
								</a>
								<ul className="dropdown-menu dropdown-with-icons">
									<li>
										<a href="examples/about-us.html">
											<i className="material-icons">account_balance</i> About Us
										</a>
									</li>
								</ul>
							</li>
							:
							<li>
							<Link to='/signup'>
								<i className="material-icons">apps</i> Sign Up
							</Link>
						</li>

						}


    				<li>
						<Link to='/allProducts'>
							<i className="material-icons">apps</i> All Puppies
						</Link>
					</li>

					<li className="dropdown">
						<a href="#" className="dropdown-toggle" data-toggle="dropdown">
							<i className="material-icons">view_day</i> Sections
							<b className="caret"></b>
						</a>
						<ul className="dropdown-menu dropdown-with-icons">
							<li>
								<a href="sections.html#headers">
									<i className="material-icons">dns</i> Headers
								</a>
							</li>
							<li>
								<a href="sections.html#features">
									<i className="material-icons">build</i> Features
								</a>
							</li>
							<li>
								<a href="sections.html#blogs">
									<i className="material-icons">list</i> Blogs
								</a>
							</li>
							<li>
								<a href="sections.html#teams">
									<i className="material-icons">people</i> Teams
								</a>
							</li>
							<li>
								<a href="sections.html#projects">
									<i className="material-icons">assignment</i> Projects
								</a>
							</li>
							<li>
								<a href="sections.html#pricing">
									<i className="material-icons">monetization_on</i> Pricing
								</a>
							</li>
							<li>
								<a href="sections.html#testimonials">
									<i className="material-icons">chat</i> Testimonials
								</a>
							</li>
							<li>
								<a href="sections.html#contactus">
									<i className="material-icons">call</i> Contacts
								</a>
							</li>

						</ul>
					</li>



					<li className="button-container">
						<a href="http://www.creative-tim.com/buy/material-kit-pro?ref=presentation" target="_blank" className="btn btn-rose btn-round">
							<i className="material-icons">shopping_cart</i> Buy Now
						</a>
					</li>
        		</ul>
        	</div>
    	</div>
    </nav>
    )
