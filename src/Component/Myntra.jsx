import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = [
  "https://asset22.ckassets.com/resources/image/staticpage_images/Ethnic%20wear-1738129257.png",
  "https://asset22.ckassets.com/resources/image/staticpage_images/bags-1738129192.png",
  "https://asset22.ckassets.com/resources/image/staticpage_images/speaker-1738129900.png",
  "https://asset22.ckassets.com/resources/image/staticpage_images/decor-1738129206.png",
  "https://asset22.ckassets.com/resources/image/staticpage_images/Footwear-1738129268.png",
  "https://asset22.ckassets.com/resources/image/staticpage_images/shirts-1738129356.png",
  "https://asset22.ckassets.com/resources/image/staticpage_images/Deodorants-1738129220.png",
  "https://asset22.ckassets.com/resources/image/staticpage_images/trouser-1738129946.png",
];

function Myntra() {

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
    <div className="ml-2 my-5">
      <h1 className="text-2xl font-bold ml-5">Myntra - Top Deals</h1>

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
                src="https://asset20.ckassets.com/resources/image/stores/myntra-1735792893.jpg"
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

export default Myntra;
