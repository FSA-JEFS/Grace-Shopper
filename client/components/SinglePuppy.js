import React,  { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchPuppy, addToCart, getCart } from '../store';

class SinglePuppy extends Component {

    componentDidMount() {
        this.props.fetchPuppy();
        this.props.getCart();
        let $ = window.$
        $("#flexiselDemo1").flexisel({
            visibleItems: 4,
            itemsToScroll: 1,
            animationSpeed: 400,
            enableResponsiveBreakpoints: true,
            responsiveBreakpoints: {
                portrait: {
                    changePoint: 480,
                    visibleItems: 3
                },
                landscape: {
                    changePoint: 640,
                    visibleItems: 3
                },
                tablet: {
                    changePoint: 768,
                    visibleItems: 3
                }
            }
        });
    }

    render() {
        const product = this.props.selectedProduct

        // component to show one product (a single puppy)

        return (
          <div className="product-page">
          <div className="page-header header-filter" style={{backgroundImage: "url('../resources/assets/img/andrew-branch-178414.jpg')"}}>
          </div>

          <div className="section section-gray">
              <div className="container">
                  <div className="main main-raised main-product">
                      <div className="row">
                          <div className="col-md-6 col-sm-6">

                          <div className="tab-content">
                                  <div className="tab-pane" id="product-page1">
                                      <img src={product.photos && product.photos[1]}/>
                                  </div>
                                  <div className="tab-pane active" id="product-page2">
                                      <img src={product.photos && product.photos[0]}/>
                                  </div>
                                  <div className="tab-pane" id="product-page3">
                                      <img src={product.photos && product.photos[2]}/>
                                  </div>
                                  <div className="tab-pane" id="product-page4">
                                      <img src={product.photos && product.photos[3]}/>
                                  </div>
                              </div>
                              <ul className="nav flexi-nav" role="tablist" id="flexiselDemo1">
                                  <li>
                                      <a href="#product-page1" role="tab" data-toggle="tab" aria-expanded="false">
                                          <img src={product.photos && product.photos[1]}/>
                                      </a>
                                  </li>
                                  <li className="active">
                                      <a href="#product-page2" role="tab" data-toggle="tab" aria-expanded="false">
                                          <img src={product.photos && product.photos[0]}/>
                                      </a>
                                  </li>
                                  <li>
                                      <a href="#product-page3" role="tab" data-toggle="tab" aria-expanded="false">
                                          <img src={product.photos && product.photos[2]}/>
                                      </a>
                                  </li>
                                  <li>
                                      <a href="#product-page4" role="tab" data-toggle="tab" aria-expanded="true">
                                          <img src={product.photos && product.photos[3]}/>
                                      </a>
                                  </li>
                              </ul>
                          </div>
                          <div className="col-md-6 col-sm-6">
                              <h2 className="title"> {product.name} </h2>
                              <h3 className="main-price">${product.price}</h3>
                              <div id="acordeon">
                                  <div className="panel-group" id="accordion">
                              <div className="panel panel-border panel-default">
                                  <div className="panel-heading" role="tab" id="headingOne">
                                      <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                          <h4 className="panel-title">
                                          Description
                                          <i className="material-icons">keyboard_arrow_down</i>
                                          </h4>
                                      </a>
                                  </div>
                                  <div id="collapseOne" className="panel-collapse collapse in">
                                  <div className="panel-body">
                                      <p>{product.description}</p>
                                  </div>
                                  </div>
                              </div>
                              <div className="panel panel-border panel-default">
                                  <div className="panel-heading" role="tab" id="headingOne">
                                      <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-controls="collapseOne">
                                          <h4 className="panel-title">
                                          Breeder Information
                                          <i className="material-icons">keyboard_arrow_down</i>
                                          </h4>
                                      </a>
                                  </div>
                                  <div id="collapseTwo" className="panel-collapse collapse">
                                  <div className="panel-body">
                                      An infusion of West Coast cool and New York attitude, Rebecca Minkoff is synonymous with It girl style. Minkoff burst on the fashion scene with her best-selling 'Morning After Bag' and later expanded her offering with the Rebecca Minkoff Collection - a range of luxe city staples with a "downtown romantic" theme.
                                  </div>
                                  </div>
                              </div>
                              <div className="panel panel-border panel-default">
                                  <div className="panel-heading" role="tab" id="headingOne">
                                      <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-controls="collapseOne">
                                          <h4 className="panel-title">
                                          Reviews
                                          <i className="material-icons">keyboard_arrow_down</i>
                                          </h4>
                                      </a>
                                  </div>
                                  <div id="collapseThree" className="panel-collapse collapse">
                                  <div className="panel-body">
                                      <ul>
                                          <li>Storm and midnight-blue stretch cotton-blend</li>
                                          <li>Notch lapels, functioning buttoned cuffs, two front flap pockets, single vent, internal pocket</li>
                                          <li>Two button fastening</li>
                                          <li>84% cotton, 14% nylon, 2% elastane</li>
                                          <li>Dry clean</li>
                                      </ul>
                                  </div>
                                  </div>
                              </div>

                              </div>
                              </div>
                              <div className="row text-right">
                                  <button className="btn btn-rose btn-round" onClick={() => this.props.handleClick(this.props.selectedProduct)}>Add to Cart &nbsp;<i className="material-icons" >shopping_cart</i></button>
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


/**
 * CONTAINER
 */

const mapState = (state) => {
    return {
        selectedProduct: state.selectedProduct,
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchPuppy() {
            dispatch(fetchPuppy(ownProps.match.params.id))
        },
        handleClick(selectedProduct) {
            dispatch(addToCart(selectedProduct))
        },
        getCart() {
            dispatch(getCart())
        }
    }
}

export default connect(mapState, mapDispatchToProps)(SinglePuppy)