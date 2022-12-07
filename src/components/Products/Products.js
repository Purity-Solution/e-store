import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import { product } from "./productsApi";
import { Link } from "react-router-dom";
import ProductSlider from "../ProductSlider/ProductSlider";
import "./products.scss";
const Products = () => {
  return (
    <div className="mainProducts">
      <div className="babyPic">
        <div className="title">
          <h1>Our Products</h1>
        </div>
      </div>
      <div className="theme">
        <div className="container">
          <div className="productList">
            <ol className="product">
              <Link to="/" className="backHome">
                <li className="home">Home</li>
              </Link>

              <li className="productMnu"> Our Products</li>
            </ol>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {product.map((items) => (
            <div className="col-12 col-sm-4 gridWrap">
              <div
                className="productItem"
                style={{ backgroundImage: `url(${items.url})` }}
              >
                <div className="itemWrap">
                  <Link to="/productList" className="itemText">
                    <p>{items.text}</p>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <ProductSlider />
        <div className="viewButton">
          <CustomButton name={"View All Products"} className="productsButton" />
        </div>
      </div>
    </div>
  );
};

export default Products;
