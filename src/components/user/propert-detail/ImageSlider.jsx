import React, { useRef, useState } from "react";
import "./imageSlider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const ImageSlider = ({ detail }) => {
  const [slideNmu, setSlideNum] = useState(0);
  const slideRef = useRef(null);
  const changeSlidenum = (num) => {
    if (slideRef.current) {
      slideRef.current.slickGoTo(num);
    }

    setSlideNum(num);
  };

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScrol: 1,
  };

  return (
    <div className="image_slider_main">
      <div className="image_slider_row">
        <div className="image_slider">
          <Slider ref={slideRef} {...settings}>
            {detail?.galary?.map((item, index) => {
              return (
                <div key={index} className="image_slide_container">
                  <img src={item} className="image_slide_img" />
                </div>
              );
            })}
          </Slider>
        </div>
        <div className="image_slider_galary">
          {detail?.galary?.map((item, index) => {
            return (
              <div key={index} className="image_slider_items">
                <img
                  onClick={() => changeSlidenum(index)}
                  src={item}
                  className="image_slider_item_img"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
