import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../App.css"

export const images = [
  "https://asset22.ckassets.com/resources/image/staticpage_images/Desktop%20Banner-1746783373.png",
  "https://asset22.ckassets.com/resources/image/staticpage_images/Desktop%20Banner-1747036591.png",
  "https://asset22.ckassets.com/resources/image/staticpage_images/Desktop%20Banner-1746783405.png",
  "https://asset22.ckassets.com/resources/image/staticpage_images/Desktop%20Banner-1746696683.png",
  "https://asset22.ckassets.com/resources/image/staticpage_images/Desktop%20Banner-1746851314.png",
  "https://asset22.ckassets.com/resources/image/staticpage_images/Desk%20Banner-1746596178.png",
  "https://asset22.ckassets.com/resources/image/staticpage_images/cleevo%20desk-1746037053.png",
  "https://asset22.ckassets.com/resources/image/staticpage_images/Desktop%20Banner-1746037110.png",
  "https://asset22.ckassets.com/resources/image/staticpage_images/Desktop%20Banner-1746851354.png",
  "https://asset22.ckassets.com/resources/image/staticpage_images/Desktop%20Banner-1746938100.png",
  "https://asset22.ckassets.com/resources/image/staticpage_images/M-site%20Banner-1747037559.png",
  "https://asset22.ckassets.com/resources/image/staticpage_images/Desktop%20Banner-1747715287.png",
  "https://asset22.ckassets.com/resources/image/staticpage_images/Desktop%20Banner-1747740557.png",
  "https://asset22.ckassets.com/resources/image/staticpage_images/Desktop%20Banner-1748264779.png",
  "https://asset22.ckassets.com/resources/image/staticpage_images/Desktop%20Banner-1748359393.png",
  "https://asset22.ckassets.com/resources/image/staticpage_images/Desktop%20Bannner-1753159745.png",
];

function BannerSlider() {

  const settings = {
    dots: false,          // shows navigation dots
    infinite: false,      // infinite loop
    speed: 500,          // transition speed in ms
    slidesToShow: 3.1,     // number of slides visible
    slidesToScroll: 1,   // number of slides to scroll at a time
    autoplay: false,      // auto slide
    autoplaySpeed: 2000, // 2 seconds
    arrow: true
  };

  return (
    
    <div className="min-w-[200px] ml-8 mr-10 mt-28">
      <Slider {...settings}>

        {images.map((banner, index) => (
          <div className="px-2">
            <img
              src={banner}
              key={index}
              className="w-[534px] h-[248px] rounded-xl"
              
            />
          </div>
        ))}
      </Slider>

    </div>

  );
}

export default BannerSlider;
