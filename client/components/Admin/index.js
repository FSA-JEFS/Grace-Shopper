import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {adminGetInfo, adminPromoteUser, adminGetProducts, adminAddProduct, adminEditProduct, adminSetOrderStatus, adminDelUsers} from '../../store'
import User from './User'
import Product from './Product'
import Order from './Order'

// const AdminPage = (props) => {
class AdminPage extends React.Component {
	componentDidMount() {
		this.props.getAdminInfo()
	}
	render(){
		const {users, products, orders, adminDelUsers, adminPromoteUser, adminAddProduct, adminEditProduct, adminSetOrderStatus} = this.props
		return (
			<div className='signup-page'>
				<div className="page-header header-filter header-small" style={{backgroundImage: "url('../resources/assets/img/bg7.jpg')", backgroundSize: "cover", backgroundPosition: "top center"}}>
					<div className="container" style={{paddingTop: '7vh'}}>
						<div className="row">
							<div className="col-md-8 col-md-offset-2">
								<div className="brand">
									<h1 className="title" style={{textAlign: 'center'}}>Admin Panel</h1>
								</div>
							</div>
						</div>
					</div>
					<div className="container" style={{paddingTop: '7vh'}}>
						<div className="row">
							<div className="col-md-12">

							<div className="card card-nav-tabs">
									<div className="header header-primary">
										{/*<!-- colors: "header-primary", "header-info", "header-success", "header-warning", "header-danger" -->*/}
										<div className="nav-tabs-navigation">
											<div className="nav-tabs-wrapper">
												<ul className="nav nav-tabs" data-tabs="tabs">
													<li className="active">
														<a href="#users" data-toggle="tab">
															<i className="material-icons">face</i>
															Users
														</a>
													</li>
													<li>
														<a href="#orders" data-toggle="tab">
															<i className="material-icons">chat</i>
															Orders
														</a>
													</li>
													<li>
														<a href="#products" data-toggle="tab">
															<i className="material-icons">build</i>
															Products
														</a>

													</li>
												</ul>
											</div>
										</div>
									</div>
									<div className="card-content">
										<div className="tab-content text-center">
											<User tabid="users" users={users} adminDelUsers={adminDelUsers} adminPromoteUser={adminPromoteUser}/>
											<Order tabid="orders" orders={orders} adminSetOrderStatus={adminSetOrderStatus} />
											<Product tabid="products" products={products} adminAddProduct={adminAddProduct} adminEditProduct={adminEditProduct}/>
										</div>
									</div>
								</div>


							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

const mapPropToState = (state) => {
  return {
	users: state.adminInfo.users,
	products: state.adminInfo.products,
	orders: state.adminInfo.orders,
  }
}

const mapDispatch = (dispatch) => {
  return {
		getAdminInfo() {
			dispatch(adminGetInfo())
		},
		adminDelUsers(id) {
			dispatch(adminDelUsers(id))
		},
		adminPromoteUser(id) {
			dispatch(adminPromoteUser(id))
		},
		adminAddProduct(body){
			dispatch(adminAddProduct(body))
		},
		adminEditProduct(body){
			dispatch(adminEditProduct(body))
		},
		adminSetOrderStatus(id, value){
			dispatch(adminSetOrderStatus(id, value))
		}
	}
}

export default connect(mapPropToState, mapDispatch)(AdminPage)
