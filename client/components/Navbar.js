import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';

export default () => (
<nav className="navbar navbar-default navbar-transparent navbar-fixed-top navbar-color-on-scroll" colorOnScroll=" " id="sectionsNav">
    	<div className="container">
        	<div className="navbar-header">
        		<button type="button" className="navbar-toggle" data-toggle="collapse">
            		<span className="sr-only">Toggle navigation</span>
		            <span className="icon-bar"></span>
		            <span className="icon-bar"></span>
		            <span className="icon-bar"></span>
        		</button>
        		<a className="navbar-brand" href="presentation.html">Material Kit PRO</a>
        	</div>

        	<div className="collapse navbar-collapse">
        		<ul className="nav navbar-nav navbar-right">
    				<li>
						<a href="index.html">
							<i className="material-icons">apps</i> Components
						</a>
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

					<li className="dropdown">
						<a href="#" className="dropdown-toggle" data-toggle="dropdown">
							<i className="material-icons">view_carousel</i> Examples
							<b className="caret"></b>
						</a>
						<ul className="dropdown-menu dropdown-with-icons">
							<li>
								<a href="examples/about-us.html">
									<i className="material-icons">account_balance</i> About Us
								</a>
							</li>
							<li>
								<a href="examples/blog-post.html">
									<i className="material-icons">art_track</i> Blog Post
								</a>
							</li>
							<li>
								<a href="examples/blog-posts.html">
									<i className="material-icons">view_quilt</i> Blog Posts
								</a>
							</li>
							<li>
								<a href="examples/contact-us.html">
									<i className="material-icons">location_on</i> Contact Us
								</a>
							</li>
							<li>
								<a href="examples/landing-page.html">
									<i className="material-icons">view_day</i> Landing Page
								</a>
							</li>
							<li>
								<a href="examples/login-page.html">
									<i className="material-icons">fingerprint</i> Login Page
								</a>
							</li>
							<li>
								<a href="examples/pricing.html">
									<i className="material-icons">attach_money</i> Pricing Page
								</a>
							</li>
							<li>
								<a href="examples/ecommerce.html">
									<i className="material-icons">shop</i> Ecommerce Page
								</a>
							</li>
							<li>
								<a href="examples/product-page.html">
									<i className="material-icons">beach_access</i> Product Page
								</a>
							</li>
							<li>
								<a href="examples/profile-page.html">
									<i className="material-icons">account_circle</i> Profile Page
								</a>
							</li>
							<li>
								<a href="examples/signup-page.html">
									<i className="material-icons">person_add</i> Signup Page
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