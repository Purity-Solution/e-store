import React from "react";
import "./productGrid.scss";
import { lists } from "./productGridApi";
import { listCategory } from "./productListApi";
const ProductGrid = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-7">
            <div className="category">
              <select className="selectProduct">
                {lists.map((x) => (
                  <option className="listNo">{x.list}</option>
                ))}
              </select>
              <select className="selectProduct">
                {listCategory.map((x) => (
                  <option className="listNo">{x.category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
