import React from "react";
export default props =>
  <div className="tab-pane" id={props.tabid}>
    <ul>
      <li>
        create and edit products with name, description, price and one or more
        photos, so that visitors can see the latest info on what we have to
        offer
      </li>
      <li>
        create categories for items, so that users can continue to have useful
        filters as our inventory grows in variety
      </li>
      <li>
        add/remove categories from items, so that users will see them when they
        refine their searches
      </li>
      <li>Acceptance Criteria: items must have multiple categories</li>
      <li>
        manage the availability of a product, so that users will know whether or
        not they can purchase that product
      </li>
      <li>
        Acceptance Criteria: If a product is no longer available, users will not
        see it while browsing, but they can view the product detail page if
        they've ordered it previously or have a direct link. On that product
        detail page, it should say "Currently Unavailable" (edited)
      </li>
    </ul>
  </div>;
