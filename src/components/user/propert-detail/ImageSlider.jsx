import React, { useRef, useState } from "react";
import "./imageSlider.css";
import img1 from "../../../assets/WhatsApp Image 2024-05-28 at 2.22.11 PM (1).jpeg";
import img2 from "../../../assets/WhatsApp Image 2024-05-28 at 2.22.11 PM (2).jpeg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const ImageSlider = () => {
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
            <div className="image_slide_container">
              <img src={img1} className="image_slide_img" />
            </div>
            <div className="image_slide_container">
              <img src={img2} className="image_slide_img" />
            </div>
            <div className="image_slide_container">
              <img src={img2} className="image_slide_img" />
            </div>
            <div className="image_slide_container">
              <img src={img2} className="image_slide_img" />
            </div>
          </Slider>
        </div>
        <div className="image_slider_galary">
          <div className="image_slider_items">
            <img
              onClick={() => changeSlidenum(0)}
              src={img1}
              className="image_slider_item_img"
            />
            <img
              onClick={() => changeSlidenum(1)}
              src={img2}
              className="image_slider_item_img"
            />
          </div>
          <div className="image_slider_items">
            <img
              onClick={() => changeSlidenum(2)}
              src={img1}
              className="image_slider_item_img"
            />
            <img
              onClick={() => changeSlidenum(3)}
              src={img2}
              className="image_slider_item_img"
            />
          </div>
          <div className="image_slider_items">
            <img
              onClick={() => changeSlidenum(4)}
              src={img1}
              className="image_slider_item_img"
            />
            <img
              onClick={() => changeSlidenum(5)}
              src={img2}
              className="image_slider_item_img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
