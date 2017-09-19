import React from "react";
import { Link } from 'react-router-dom'
export default class extends React.Component {
  state = { orderFilter: "ALL" };

  render() {
    const props = this.props;
    const filteredOrders =
      this.state.orderFilter == "ALL"
        ? props.orders
        : props.orders.filter(order => order.status == this.state.orderFilter);
    return (
      <div className="tab-pane" id={props.tabid}>
        <div className="col-md-offset-5 col-md-2">
          <select
            className="selectpicker"
            defaultValue="ALL"
            data-style="btn btn-primary btn-round"
            title="Filter"
            data-size="7"
            onChange={e => this.setState({ orderFilter: e.target.value })}
          >
            <option value="ALL">ALL</option>
            <option value="CREATED">CREATED</option>
            <option value="PROCESSING">PROCESSING</option>
            <option value="CANCELLED">CANCELLED</option>
            <option value="COMPLETED">COMPLETED</option>
          </select>
        </div>
        <div className="col-md-offset-1 col-md-10">
          <div
            className="panel-group"
            id="accordion"
            role="tablist"
            aria-multiselectable="true"
          >
            {filteredOrders &&
              filteredOrders.map((order, i) =>
                <div className="panel panel-default" key={i}>
                  <div
                    className="panel-heading text-left"
                    role="tab"
                    id={"heading" + i}
                  >
                    <a
                      className="collapsed"
                      role="button"
                      data-toggle="collapse"
                      data-parent="#accordion"
                      href={"#collapse" + i}
                      aria-expanded="false"
                      aria-controls={"collapse" + i}
                    >
                      <h4 className="panel-title">
                        Order: {order.id} || Status: {order.status} || Subtotal:{" "}
                        {order.subTotal}
                        <i className="material-icons">keyboard_arrow_down</i>
                      </h4>
                    </a>
                  </div>
                  <div
                    id={"collapse" + i}
                    className="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby={"heading" + i}
                    aria-expanded="false"
                    style={{ height: "0px" }}
                  >
                    <div className="panel-body">
                      <div className="col-md-12">
                        <div className="table-responsive">
                          <table className="table table-shopping">
                            <thead>
                              <tr>
                                <th className="text-center" />
                                <th className="text-center" >Product</th>
                                <th className="th-description">Breed</th>
                                <th className="text-right">Price</th>
                                <th className="text-right">Qty</th>
                                <th className="text-right">Amount</th>
                              </tr>
                            </thead>
                            <tbody>
                              {order.items && order.items.length &&
                                order.items.map((item, index) =>
                                  <tr key={index}>
                                    <td>
                                      <div className="img-container">
                                        <Link
                                          to={`/products/${item.product.id}`}
                                        >
                                          <img
                                            src={item.product.photos[0]}
                                            alt="..."
                                          />
                                        </Link>
                                      </div>
                                    </td>
                                    <td className="td-name">
                                      <Link
                                        to={`/products/${item.product.id}`}
                                      >
                                        {item.product.name}
                                      </Link>
                                      <br />
                                      <small>
                                        from {item.product.breeder}
                                      </small>
                                    </td>
                                    <td>
                                      {item.product.breed}
                                    </td>
                                    <td className="td-number">
                                      <small>&euro;</small>
                                      {item.product.price}
                                    </td>
                                    <td className="td-number">
                                      {item.quantity}
                                    </td>
                                    <td className="td-number">
                                      $ {item.product.price * item.quantity}
                                    </td>
                                  </tr>
                                )}
                              <tr>
                                <td colSpan="2" className="text-right">
                                  <select
                                    className="selectpicker"
                                    // data-style="btn btn-primary btn-round"
                                    title="Change Status"
                                    data-size="7"
                                    style={{display: 'block'}}
                                    defaultValue="unch"
                                    onChange={e =>
                                      props.adminSetOrderStatus(order.id, e.target.value)}
                                  >
                                    <option disabled value="unch">
                                      No Change
                                    </option>
                                    <option value="CREATED">CREATED</option>
                                    <option value="PROCESSING">PROCESSING</option>
                                    <option value="CANCELLED">CANCELLED</option>
                                    <option value="COMPLETED">COMPLETED</option>
                                  </select>
                                </td>
                                <td className="td-total">Total</td>
                                <td className="td-price">
                                  <small>$</small>
                                  {order.items
                                    .map(el => el.product.price * el.quantity)
                                    .reduce((a, b) => a + b, 0)}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
          </div>
        </div>
      </div>
    );
  }
}

// <div className="panel panel-default">
//   <div className="panel-heading" role="tab" id="headingOne">
//       <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne" className="">
//           <h4 className="panel-title">
//           Collapsible Group Item #1
//           <button>test</button>
//           <i className="material-icons">keyboard_arrow_down</i>
//           </h4>
//       </a>
//   </div>
//   <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne" aria-expanded="true">
//     <div className="panel-body">
//       Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
//     </div>
//   </div>
// </div>
