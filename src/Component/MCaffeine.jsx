import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Banner = [
  "https://asset22.ckassets.com/resources/image/staticpage_images/Coffee%20Body%20Scrub-1743077422.png",
  "https://asset22.ckassets.com/resources/image/staticpage_images/Blueberry%20Blast%20Body%20Wash-1743077446.png",
  "https://asset22.ckassets.com/resources/image/staticpage_images/Brightening%20Raspberry%20Body%20Wash-1743077469.png",
  "https://asset22.ckassets.com/resources/image/staticpage_images/Sweet%20Escape%20Perfume%20Body%20Lotion-1743077491.png",
  "https://asset22.ckassets.com/resources/image/staticpage_images/Breeze%20Perfume%20Body%20Lotion-1743077512.png",
  "https://asset22.ckassets.com/resources/image/staticpage_images/Brightening%20Raspberry%20Sunscreen-1743077529.png",
  "https://asset22.ckassets.com/resources/image/staticpage_images/Super%20Glow%20Flash%20Facial%20Mask-1743077571.png",
  "https://asset22.ckassets.com/resources/image/staticpage_images/Glow%20Boost%20Grapefruit%20Body%20Wash-1743077603.png",
  "https://asset22.ckassets.com/resources/image/staticpage_images/Sun%20Glaze%20Mist%20Face%20Sunscreen%20Spray-1743077636.png",
];

function MCaffeine() {

  const settings = {
    dots: true,          // shows navigation dots
    infinite: false,      // infinite loop
    speed: 500,          // transition speed in ms
    slidesToShow: 3.5,     // number of slides visible
    slidesToScroll: 1,   // number of slides to scroll at a time
    autoplay: false,      // auto slide
    autoplaySpeed: 2000, // 2 seconds
  };

  
  return (
    <div className="ml-2 my-7">
      <h1 className="text-2xl font-bold ml-5">mCaffeine - Buy 1 Get 1 Free</h1>

      <div className="ml-3 my-3">
        <Slider {...settings}>
          {Banner.map((img, index) => (
            <div
              key={index}
              className="min-w-[180px] relative m-3 cursor-pointer"
            >
              <img
                src={img}
                alt={`Image ${index}`}
                className="ml-1 my-1"
                width={410}
              />
              <img
                src="https://asset20.ckassets.com/resources/image/stores/mcaffeine-coupons-1735628969.jpg"
                className="absolute rounded-xl left-[5%] top-[5%] right-[60%] bottom-[90%]"
                height={90}
                width={100}
                alt={`Slide ${index}`}
              />

              <button className="absolute cursor-pointer inline bottom-[6%] left-[70%] rounded-lg px-3 py-1 bg-white text-blue-700 font-semibold text-lg">
                Grab Deal
              </button>
            </div>
          ))}
          </Slider>
      </div>
    </div>
  );
}

export default MCaffeine;
