import React,  { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

export default class SinglePuppy extends Component {

    componentDidMount() {
        this.props.fetchPuppy();
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
          <div className="page-header header-filter" style={{backgroundImage: "url('../resources/assets/img/bg6.jpg')"}}>
              <div className="container">
                  <div className="row title-row">
                      <div className="col-md-4 col-md-offset-8">
                          <button className="btn btn-white pull-right"><i className="material-icons">shopping_cart</i> 0 Items</button>
                      </div>
                  </div>
              </div>
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
                                          Designer Information
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
                                          Details and Care
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
      
                              <div className="row pick-size">
                                  <div className="col-md-6 col-sm-6">
                                      <label>Select color</label>
                                      <select className="selectpicker" data-style="select-with-transition" data-size="7">
                                          <option value="1">Rose </option>
                                          <option value="2">Gray</option>
                                          <option value="3">White</option>
                                      </select>
                                  </div>
                                  <div className="col-md-6 col-sm-6">
                                      <label>Select size</label>
                                      <select className="selectpicker" data-style="select-with-transition" data-size="7">
                                          <option value="1">Small </option>
                                          <option value="2">Medium</option>
                                          <option value="3">Large</option>
                                      </select>
                                  </div>
                              </div>
                              <div className="row text-right">
                                  <button className="btn btn-rose btn-round">Add to Cart &nbsp;<i className="material-icons">shopping_cart</i></button>
                              </div>
                          </div>
                      </div>
                  </div>
      
                  <div className="features text-center">
                      <div className="row">
                          <div className="col-md-4">
                              <div className="info">
                                  <div className="icon icon-info">
                                      <i className="material-icons">local_shipping</i>
                                  </div>
                                  <h4 className="info-title">2 Days Delivery </h4>
                                  <p>Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.</p>
                              </div>
                          </div>
      
                          <div className="col-md-4">
                              <div className="info">
                                  <div className="icon icon-success">
                                      <i className="material-icons">verified_user</i>
                                  </div>
                                  <h4 className="info-title">Refundable Policy</h4>
                                  <p>Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.</p>
                              </div>
                          </div>
      
                          <div className="col-md-4">
                              <div className="info">
                                  <div className="icon icon-rose">
                                      <i className="material-icons">favorite</i>
                                  </div>
                                  <h4 className="info-title">Popular Item</h4>
                                  <p>Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.</p>
                              </div>
                          </div>
      
                      </div>
                  </div>
      
                  <div className="related-products">
                      <h3 className="title text-center">You may also be interested in:</h3>
      
                      <div className="row">
                          <div className="col-sm-6 col-md-3">
                              <div className="card card-product">
                                  <div className="card-image">
                                      <a href="#pablo">
                                          <img className="img" src="../resources/assets/img/examples/card-product1.jpg" />
                                      </a>
                                  </div>
      
                                  <div className="card-content">
                                      <h6 className="category text-rose">Trending</h6>
                                      <h4 className="card-title">
                                          <a href="#pablo">Dolce & Gabbana</a>
                                      </h4>
                                      <div className="card-description">
                                          Dolce & Gabbana's 'Greta' tote has been crafted in Italy from hard-wearing red textured-leather.
                                      </div>
                                      <div className="footer">
                                          <div className="price">
                                              <h4>$1,459</h4>
                                          </div>
                                          <div className="stats">
                                              <button type="button" rel="tooltip" title="Saved to Wishlist" className="btn btn-just-icon btn-simple btn-rose">
                                                  <i className="material-icons">favorite</i>
                                              </button>
                                          </div>
                                      </div>
      
                                  </div>
      
                              </div>
                          </div>
      
                          <div className="col-sm-6 col-md-3">
                              <div className="card card-product">
                                  <div className="card-image">
                                      <a href="#pablo">
                                          <img className="img" src="../resources/assets/img/examples/card-product3.jpg" />
                                      </a>
                                  </div>
      
                                  <div className="card-content">
                                      <h6 className="category text-muted">Popular</h6>
                                      <h4 className="card-title">
                                          <a href="#pablo">Balmain</a>
                                      </h4>
                                      <div className="card-description">
                                          Balmain's mid-rise skinny jeans are cut with stretch to ensure they retain their second-skin fit but move comfortably.
                                      </div>
                                      <div className="footer">
                                          <div className="price">
                                              <h4>$459</h4>
                                          </div>
                                          <div className="stats">
                                              <button type="button" rel="tooltip" title="Save to Wishlist" className="btn btn-just-icon btn-simple btn-default">
                                                  <i className="material-icons">favorite</i>
                                              </button>
                                          </div>
                                      </div>
      
                                  </div>
      
                              </div>
                          </div>
      
                          <div className="col-sm-6 col-md-3">
                              <div className="card card-product">
                                  <div className="card-image">
                                      <a href="#pablo">
                                          <img className="img" src="../resources/assets/img/examples/card-product4.jpg" />
                                      </a>
                                  </div>
      
                                  <div className="card-content">
                                      <h6 className="category text-muted">Popular</h6>
                                      <h4 className="card-title">
                                          <a href="#pablo">Balenciaga</a>
                                      </h4>
                                      <div className="card-description">
                                          Balenciaga's black textured-leather wallet is finished with the label's iconic 'Giant' studs. This is where you can...
                                      </div>
                                      <div className="footer">
                                          <div className="price">
                                              <h4>$590</h4>
                                          </div>
                                          <div className="stats">
                                              <button type="button" rel="tooltip" title="Saved to Wishlist" className="btn btn-just-icon btn-simple btn-rose">
                                                  <i className="material-icons">favorite</i>
                                              </button>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
      
                          <div className="col-sm-6 col-md-3">
                              <div className="card card-product">
                                  <div className="card-image">
                                      <a href="#pablo">
                                          <img className="img" src="../resources/assets/img/examples/card-product2.jpg" />
                                      </a>
                                  </div>
      
                                  <div className="card-content">
                                      <h6 className="category text-rose">Trending</h6>
                                      <h4 className="card-title">
                                          <a href="#pablo">Dolce & Gabbana</a>
                                      </h4>
                                      <div className="card-description">
                                          Dolce & Gabbana's 'Greta' tote has been crafted in Italy from hard-wearing red textured-leather.
                                      </div>
                                      <div className="footer">
                                          <div className="price">
                                              <h4>$1,459</h4>
                                          </div>
                                          <div className="stats">
                                              <button type="button" rel="tooltip" title="Save to Wishlist" className="btn btn-just-icon btn-simple btn-default">
                                                  <i className="material-icons">favorite</i>
                                              </button>
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
        )
    }
}