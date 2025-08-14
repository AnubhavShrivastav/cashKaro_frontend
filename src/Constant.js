import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";

const settings = {
  dots: false, // shows navigation dots
  infinite: false, // infinite loop
  speed: 500, // transition speed in ms
  slidesToShow: 3.1, // number of slides visible
  slidesToScroll: 3, // number of slides to scroll at a time
  autoplay: false, // auto slide
  autoplaySpeed: 2000, // 2 seconds
  arrow: true,
};

export { Slider, settings };
