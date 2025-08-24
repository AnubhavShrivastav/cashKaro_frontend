import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";

const settings = {
  dots: false, // shows navigation dots
  infinite: false, // infinite loop
  speed: 500, // transition speed in ms
  slidesToShow: 3.2, // number of slides visible
  slidesToScroll: 3, // number of slides to scroll at a time
  autoplay: false, // auto slide
  autoplaySpeed: 2000, // 2 seconds
  arrow: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />
};

const categorySettings = {
  dots: false, // shows navigation dots
  infinite: false, // infinite loop
  speed: 500, // transition speed in ms
  slidesToShow: 8.4, // number of slides visible
  slidesToScroll: 3, // number of slides to scroll at a time
  autoplay: false, // auto slide
  autoplaySpeed: 2000, // 2 seconds
  arrow: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />
};

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (

    <div className={{ className }}>
      <img
        src={"img/chevron-right.svg"}
        onClick={onClick}
        style={{ ...style }}
        className="absolute -right-10 top-1/2 w-4 h-4 md:w-10 md:h-10 bg-gray-100 cursor-pointer rounded-[50%]"
      />
    </div>

  );
}


function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={{ className }}
    >
      <img src={"img/chevron-left.svg"}
        onClick={onClick}
        style={{ ...style }}
        className="absolute z-1 -left-9 top-1/2 w-4 h-4 md:w-10 md:h-10 bg-gray-100 cursor-pointer rounded-[50%]" />
    </div>
  );
}



export { Slider, settings, categorySettings };
