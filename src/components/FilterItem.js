import React from "react";

function FilterItem() {
  return (
    <div>
      <div className="footer">
        <span>filter: </span>
        <ul className="list-control-fiter">
          <li>
            <span className="selected" href="">
              all
            </span>
          </li>
          <li>
            <span href="">active</span>
          </li>
          <li>
            <span href="">completed</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FilterItem;
