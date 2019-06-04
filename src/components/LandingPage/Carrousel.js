import React from "react";
import Slider from "react-slick";
import slide_one from "../../components/images/the art box.png";
import slide_two from "../../components/images/the art box (2).png";

const Carrousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000
  };
  return (
    <div
      className="carrousel_wrapper"
      style={{ height: "95vh", overflow: "hidden" }}
    >
      <Slider {...settings}>
        <div
          className="carrousel_image"
          // style={{
          //   background: `url(${slide_one})`,
          //   height: `${window.innerHeight}px`
          // }}
        >
          <img
            src={slide_one}
            alt="slide"
            style={{
              height: "95vh",
              width: "100%"
            }}
          />
        </div>

        <div
          className="carrousel_image"
          // style={{
          //   background: `url(${slide_two})`,
          //   height: `${window.innerHeight}px`
          // }}
        >
          <img
            src={slide_two}
            alt="othrslide"
            style={{ width: "100%", height: "95vh" }}
          />
        </div>
      </Slider>
    </div>
  );
};

export default Carrousel;
