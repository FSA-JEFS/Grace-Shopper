import React from "react";
export default class extends React.Component {
  state = {orderFilter: 'ALL'}

  render() {
    const props = this.props
    const filteredOrders = this.state.orderFilter == 'ALL' ? props.orders : props.orders.filter(order => order.status == this.state.orderFilter)
    return <div className="tab-pane" id={props.tabid}>
      <div className="col-md-offset-5 col-md-2">
        <select className="selectpicker" defaultValue="ALL" data-style="btn btn-primary btn-round" title="Filter" data-size="7" onChange={e=>this.setState({orderFilter: e.target.value})}>
          <option value="ALL">ALL</option>
          <option value="CREATED">CREATED</option>
          <option value="PROCESSING">PROCESSING</option>
          <option value="CANCELLED">CANCELLED</option>
          <option value="COMPLETED">COMPLETED</option>
        </select>
      </div>
      <div className="col-md-offset-1 col-md-10">
        <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
          {filteredOrders && filteredOrders.map((order, i) => 
          <div className="panel panel-default" key={i}>
            <div className="panel-heading text-left" role="tab" id={"heading" + i}>
              <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href={"#collapse" + i} aria-expanded="false" aria-controls={"collapse" + i}>
                <h4 className="panel-title">
                  Order: {order.id} || Status: {order.status} || Subtotal: {order.subTotal}
                  <i className="material-icons">keyboard_arrow_down</i>
                </h4>
              </a>
            </div>
            <div id={"collapse" + i} className="panel-collapse collapse" role="tabpanel" aria-labelledby={"heading" + i} aria-expanded="false" style={{height: '0px'}}>
              <div className="panel-body">
                <div className="col-sm-3">
                  TODO: Make this pretty when we have new Order model {JSON.stringify(order.items)}
                </div>
                <div className="col-sm-3">
                    {/*<div className="title">
                        <h3>Change Status:</h3>
                    </div>*/}
                    <select className="selectpicker" data-style="btn btn-primary btn-round" title="Change Status" data-size="7" onChange={e=> props.adminSetOrderStatus(order.id, e.target.value)}>
                      <option disabled selected>No Change</option>
                      <option value="CREATED">CREATED</option>
                      <option value="PROCESSING">PROCESSING</option>
                      <option value="CANCELLED">CANCELLED</option>
                      <option value="COMPLETED">COMPLETED</option>
                    </select>
                </div>
              </div>
            </div>
          </div>
          )}
        </div>
      </div>
    </div>
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