import { Link } from "react-router-dom"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useFetch from "../Hooks/UseFetch";



// const MCaffeineImage = [
//   {
//     id: 1,
//     img:"https://asset22.ckassets.com/resources/image/staticpage_images/Coffee%20Body%20Scrub-1743077422.png",
//     title: "MCaffeine: 2 X Coffee Body Scrub At ₹449 + Flat 18% Rewards",
//     details: ["2 X Coffee Body Scrub At ₹449","Earn Flat 18% CashKaro Cashback"],
//   },

//   {
//     id: 2,
//     img: "https://asset22.ckassets.com/resources/image/staticpage_images/Blueberry%20Blast%20Body%20Wash-1743077446.png",
//     title: "MCaffeine: 2 X BlueBerry Blast Body Wash At ₹399 + Flat 18% Rewards",
//     details: ["2 X BlueBerry Blast Body Wash At ₹399","Earn Flat 18% CashKaro Cashback"],
//   },

//   {
//    id: 3, 
//    img: "https://asset22.ckassets.com/resources/image/staticpage_images/Brightening%20Raspberry%20Body%20Wash-1743077469.png",
//    title: "MCaffeine: 2 X Brightening Raspberry Body Wash At ₹399 + Flat 18% Rewards",
//    details: ["2 X Brightening Raspberry Body Wash At ₹399","Earn Flat 18% CashKaro Cashback"],
//   },

//   {id: 4,
//    img: "https://asset22.ckassets.com/resources/image/staticpage_images/Sweet%20Escape%20Perfume%20Body%20Lotion-1743077491.png",
//    title: "MCaffeine: 2 X Sweet Escape Body Lotion At ₹499 + Flat 18% Rewards",
//    details: ["2 X Sweet Escape Body Lotion At ₹499","Earn Flat 18% CashKaro Cashback"],
//   },

//   {
//    id: 5,
//    img: "https://asset22.ckassets.com/resources/image/staticpage_images/Breeze%20Perfume%20Body%20Lotion-1743077512.png",
//    title: "MCaffeine: 2 X Breeze Perfume Body Lotion At ₹499 + Flat 18% Rewards",
//    details: ["2 X Breeze Perfume Body Lotion At ₹499","Earn Flat 18% CashKaro Cashback"],
//   },

//   {
//    id: 6,
//    img: "https://asset22.ckassets.com/resources/image/staticpage_images/Brightening%20Raspberry%20Sunscreen-1743077529.png",
//    title: "MCaffeine: 2 X Brightening Raspberry Sunscreen At ₹549 + Flat 18% Rewards",
//    details: [" 2 X Brightening Raspberry Sunscreen At ₹549","Earn Flat 18% CashKaro Cashback"],
//   },

//   {
//     id: 7,
//     img: "https://asset22.ckassets.com/resources/image/staticpage_images/Super%20Glow%20Flash%20Facial%20Mask-1743077571.png",
//     title: "MCaffeine: 2 X Super Glow Flash Facial Mask At ₹599 + Flat 18% Rewards",
//     details: ["2 X Super Glow Flash Facial Mask At ₹599","Earn Flat 18% CashKaro Cashback"],
//   },

//   { 
//     id: 8,
//     img: "https://asset22.ckassets.com/resources/image/staticpage_images/Glow%20Boost%20Grapefruit%20Body%20Wash-1743077603.png",
//     title: "MCaffeine: Glow Grapefruit Body Wash At ₹399 + Flat 18% Rewards",
//     details: ["Glow Grapefruit Body Wash At ₹399","Earn Flat 18% CashKaro Cashback"]
//   },

//   {
//     id: 9,
//     img: "https://asset22.ckassets.com/resources/image/staticpage_images/Sun%20Glaze%20Mist%20Face%20Sunscreen%20Spray-1743077636.png",
//     title: "MCaffeine: Sun Glaze Sunscreen Spary At ₹699 + Flat 18% Rewards",
//     details: ["Sun Glaze Sunscreen Spary At ₹699","Earn Flat 18% CashKaro Cashback"],
//   },
// ];

export default function MCaffeine() {

  const { data, error } = useFetch("http://localhost:3000/api/product")

  const settings = {
    dots: false,          // shows navigation dots
    infinite: false,      // infinite loop
    speed: 500,          // transition speed in ms
    slidesToShow: 3.5,     // number of slides visible
    slidesToScroll: 1,   // number of slides to scroll at a time
    autoplay: false,      // auto slide
    autoplaySpeed: 2000, // 2 seconds
  };

  const MCaffeineProducts = Array.isArray(data.Data) && data.Data.filter((items) => {
    return items.brandDetails.Brandname === "Mcaffeine"
  })

  return (
    <>
      <h1 className="text-2xl font-bold mx-7">mCaffeine - Buy 1 Get 1 Free</h1>

      <div className="min-w-[200px] m-7">
        <Slider {...settings}>
          {Array.isArray(MCaffeineProducts) && MCaffeineProducts.map((image) => (
            <div
              className="min-w-[180px] relative cursor-pointer"
            >
              <Link key={image._id} to={`/Mcaffeine/${image._id}`}>
                <img
                  src={image.productUrl}
                  key={image._id}
                  alt={error}
                  width={410}
                />
              </Link>
              <img
                src={image.brandDetails.BrandLogo}
                className="absolute rounded-xl left-[3%] top-[4%] right-[60%] bottom-[90%]"
                height={90}
                width={100}
              />

              <button className="absolute cursor-pointer inline bottom-[6%] left-[71%] rounded-lg px-3 py-1 bg-white text-blue-700 font-semibold text-lg">
                Grab Deal
              </button>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

// export { MCaffeineImage };
