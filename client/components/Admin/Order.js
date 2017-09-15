import React from "react";
export default props =>
  <div className="tab-pane" id={props.tabid}>
    <ul>
      <li>
        view a list of all orders, so that I can find specific orders to review
      </li>
      <li>
        filter orders by status (Created, Processing, Cancelled, Completed), so
        that I can more easily find the orders I'm interested in
      </li>
      <li>
        view details of a specific order, so that I can review it and update its
        status
      </li>
      <li>
        change the status of the order (Created -> Processing, Processing ->
        Cancelled || Completed), so that others will know what stage of the
        process the order is in
      </li>
    </ul>
  </div>;
