import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Banner = [
  "https://asset22.ckassets.com/resources/image/staticpage_images/Flipkart%20Generic%20TSP%20Jeans%20Trousers-1747120163.png",
  "https://asset22.ckassets.com/resources/image/staticpage_images/Flipkart%20Generic%20Top%20Fashion%20Brands-1746722016.png",
  "https://asset22.ckassets.com/resources/image/staticpage_images/Flipkart%20Generic%20TSP%20Shirt-1747119841.png",
  "https://asset22.ckassets.com/resources/image/staticpage_images/Flipkart%20Generic%20TSP%20Footwear-1747120034.png",
  "https://asset22.ckassets.com/resources/image/staticpage_images/Flipkart%20Generic%20Perfumes%20Deodorants-1747120060.png",
];

function Flipcart() {
  
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
      <h1 className="text-2xl font-bold ml-5">FlipCart - Top Deals</h1>

      <div className="ml-3 my-3">
        <Slider {...settings}>
          {Banner.map((img, index) => (
            <div
              key={index}
              className="min-w-[180px] relative m-3 cursor-pointer"
            >
              <img src={img} alt={`Image ${index}`} className="ml-1 my-1" width={410} />
              <img
                src="https://asset20.ckassets.com/resources/image/stores/flipkart.png"
                className="absolute rounded-xl left-[5%] top-[5%] right-[60%] bottom-[90%]"
                height={90}
                width={100}
                alt=""
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

export default Flipcart;
