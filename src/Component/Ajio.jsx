import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = [
  "https://asset22.ckassets.com/resources/image/staticpage_images/Under%20532-1747131217.png",
  "https://asset22.ckassets.com/resources/image/staticpage_images/Under%20531-1747131207.png",
  "https://asset22.ckassets.com/resources/image/staticpage_images/Under%20530-1747131198.png",
  "https://asset22.ckassets.com/resources/image/staticpage_images/Skincare-1747131065.png",
  "https://asset22.ckassets.com/resources/image/staticpage_images/MenTrousers-1747131039.png",
  "https://asset22.ckassets.com/resources/image/staticpage_images/Skincare-1747131065.png",
  "https://asset22.ckassets.com/resources/image/staticpage_images/Pants%20Trousers-1747131097.png",
  "https://asset22.ckassets.com/resources/image/staticpage_images/TShirt-1747131108.png",
  "https://asset22.ckassets.com/resources/image/staticpage_images/Women%20Handbags-1747131120.png",
  "https://asset22.ckassets.com/resources/image/staticpage_images/Dress-1747131083.png",
  "https://asset22.ckassets.com/resources/image/staticpage_images/Under%20527-1746696315.png",
];

function Ajio() {

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
      <h1 className="text-2xl font-bold ml-5">Ajio - Top Deals</h1>

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
                src="https://asset20.ckassets.com/resources/image/stores/ajio-coupons-1735561339.jpg"
                className="absolute rounded-xl left-[5%] top-[5%] right-[60%] bottom-[90%]"
                height={90}
                width={100}
                alt={`Slide ${index}`}
              />

              <button className="absolute cursor-pointer inline bottom-[6%] left-[65%] rounded-lg px-3 py-1 bg-white text-blue-700 font-semibold text-lg">
                Grab Deal
              </button>
            </div>
          ))}
          </Slider>
      </div>

      </div>
  );
}

export default Ajio;
