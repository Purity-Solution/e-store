import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./productSlider.scss";
import { productSliders } from "./productSliderApi";
const ProductSlider = () => {
  return (
    <div className="container">
      <Slider {...settings}>
        {productSliders.map((x, i) => (
          <div key={i}>
            <div
              className="imageWrap"
              style={{ backgroundImage: `url(${x.url})` }}
            >
              <p className="paragrafh">{x.detail}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductSlider;
const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
