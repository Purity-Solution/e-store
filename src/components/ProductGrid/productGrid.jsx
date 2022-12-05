import React from "react";
import { Link } from "react-router-dom";
import "./productGrid.scss";
import { lists } from "./productGridApi";
import { listCategory } from "./productListApi";
import { option } from "./productOptionApi";
import { item } from "./productItemApi";
import { video } from "./productVideoApi";
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
          <div className="col-12 col-sm-4">
            <div className="option">
              <span>0 Items</span>
              <select className="selectOption">
                {option.map((x) => (
                  <option className="listNo">{x.option}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {item.map((x) => (
            <div className="col-12 col-sm-4">
              <div className="gridItem">
                <Link to="/" className="productLink">
                  <div className="imageWrap">
                    <div
                      className="overly"
                      style={{ backgroundImage: `url(${x.wave})` }}
                    ></div>
                    <Link className="title">
                      <img src={x.image} alt="brush" className="wrap" />
                    </Link>
                  </div>
                  <div className="discription">
                    <h6 className="pricevariation">{x.price}</h6>
                    <div className="productvariation">
                      <h6 className="pricevariation">
                        <span className="startPrice">{x.line}</span>
                        <span className="currency">{x.curr}</span>
                        "15.75"
                      </h6>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="videoSection">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-7">
              <div className="discription">
                <p></p>
              </div>
            </div>
            <div className="col-12 col-sm-5">
              {video.map((x) => (
                <div className="thumb">
                  <div
                    className="videoThum"
                    style={{ backgroundImage: `url(${x.pigeons})` }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
