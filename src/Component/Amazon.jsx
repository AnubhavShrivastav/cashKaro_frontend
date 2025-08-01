import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const AmazonImage = [
  {
    id: 1,
    img: "https://asset22.ckassets.com/resources/image/staticpage_images/Beauty%20Products%201-1745564957.png",
    title: "Amazon: Min. 50% Off on Beauty Products + Flat 6% Rewards",
    descripition: ""
  },

  {
    id: 2,
    img: "https://asset22.ckassets.com/resources/image/staticpage_images/Personal%20Care-1738069570.png",
    title: "",
    descripition: "Amazon: Min. 25% Off on Personal Care + Flat 3.5% Rewards"
  },

  {
    id: 3,
    img: "https://asset22.ckassets.com/resources/image/staticpage_images/Footwear-1738069495.png",
    title: "Amazon: Min. 25% Off on FootWear + Flat 3.5% Rewards",
    descripition: ""
  },
  {
    id: 4,
    img: "https://asset22.ckassets.com/resources/image/staticpage_images/Watches-1738069623.png",
    title: "Amazon: Min. 35% Off on Watches + Flat 3.5% Rewards",
    descripition: "",
  },
  {
    id: 5,
    img: "https://asset22.ckassets.com/resources/image/staticpage_images/Home%20Improvements%20Products-1738069521.png",
    title: "Amazon: Upto 60% Off on Home Improvements Products + Flat 4% Rewards",
    descripition: "",
  },
  {
    id: 6,
    img: "https://asset22.ckassets.com/resources/image/staticpage_images/Baby%20Products-1738069448.png",
    title: "Amazon: Upto 50% Off on Bags & Wallets + Flat 3.5% Rewards",
    descripition: ""
  },
  {
    id: 7,
    img: "https://asset22.ckassets.com/resources/image/staticpage_images/Luggage-1738069556.png",
    title: "Amazon: Upto 70% Off on Luggage + Flat 3.5% Rewards",
    descripition: ""
  },

  {
    id: 8,
    img: "https://asset22.ckassets.com/resources/image/staticpage_images/Jewellery-1738069535.png",
    title: "Amazon: Upto 70% Off on Jewellery + Flat 2.5% Rewards",
    descripition: ""
  },
];

export default function Amazon() {

  const settings = {
    dots: false,          // shows navigation dots
    infinite: false,      // infinite loop
    speed: 500,          // transition speed in ms
    slidesToShow: 3.5,     // number of slides visible
    slidesToScroll: 1,   // number of slides to scroll at a time
    autoplay: false,      // auto slide
    autoplaySpeed: 2000, // 2 seconds
  };

  return (
    <>
      <h1 className="text-2xl font-bold mx-7">Amazon - Top Deals</h1>

      <div className="min-w-[200px] m-7">
        < Slider {...settings}>

          {AmazonImage.map((image, index) => (
            <div
              key={index}
              className="min-w-[180px] mx-1 relative cursor-pointer"
            >
              <Link key={image.id} to={`/Amazon/${image.id}`}>

                <img src={image.img} alt={`Image ${index}`} className="" width={410} />

              </Link>
              <img
                src="https://asset20.ckassets.com/resources/image/stores/amazon-1735629515.jpg"
                className="absolute rounded-xl left-[3%] top-[4%] right-[60%] bottom-[90%]"
                height={90}
                width={100}
                alt={`Slide ${index}`}
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

export { AmazonImage };
