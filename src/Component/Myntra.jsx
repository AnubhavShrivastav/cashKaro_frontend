import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MyntraImage = [
  {
    id: 1,
    img: "https://asset22.ckassets.com/resources/image/staticpage_images/Ethnic%20wear-1738129257.png",
    title: "Myntra: Upto 60% Off On Ethnic Wear + Upto 6% CashKaro CashBack",
    details: ["Up to 60% on Ethnic wear","Flat 6% Cashback"],
  },

  {
    id: 2,
    img: "https://asset22.ckassets.com/resources/image/staticpage_images/bags-1738129192.png",
    title: "Myntra: Upto 60% Off On Trolly Bags, Bagpacks + Upto 6% CashKaro CashBack",
    details: ["Up to 60% on Trolly Bags, Bagpacks","Flat 6% Cashback"],
  },

  {
    id: 3,
    img: "https://asset22.ckassets.com/resources/image/staticpage_images/speaker-1738129900.png",
    title: "Myntra: Upto 70% Off On Headphones & Speakers + Upto 6% CashKaro CashBack",
    details: ["Up to 70% on Headphones & Speakers","Flat 6% Cashback"],
  },


  {
    id: 4,
    img: "https://asset22.ckassets.com/resources/image/staticpage_images/decor-1738129206.png",
    title: "Myntra: Upto 70% Off On Home Decor + Upto 6% CashKaro CashBack",
    details: ["Up to 70% on Home Decor","Flat 6% Cashback"],
  },

  {
    id: 5,
    img: "https://asset22.ckassets.com/resources/image/staticpage_images/Footwear-1738129268.png",
    title: "Myntra: Upto 70% Off On FootWear + Upto 6% CashKaro CashBack",
    details: ["Up to 70% on Home FootWear","Flat 6% Cashback"],
  },

  {
    id: 6,
    img: "https://asset22.ckassets.com/resources/image/staticpage_images/shirts-1738129356.png",
    title: "Myntra: Men's Shirts Under ₹599 + Upto 6% CashKaro CashBack",
    deatils:  ["Men's Shirts Under Rs ₹599","Flat 6% Cashback"],
  },

  {
    id: 7,
    img: "https://asset22.ckassets.com/resources/image/staticpage_images/Deodorants-1738129220.png",
    title: "Myntra: Deodorants Under ₹199 + Upto 6% CashKaro CashBack",
    details: ["Deodorants Under Rs ₹199","Flat 6% Cashback"],
  },

  {
    id: 8,
    img: "https://asset22.ckassets.com/resources/image/staticpage_images/trouser-1738129946.png",
    title: "Myntra: Men's Trousers Under ₹799 + Upto 6% CashKaro CashBack",
    details: ["Men's Trousers Under Rs ₹799","Flat 6% Cashback"],
  },
];

export default function Myntra() {

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
      <h1 className="text-2xl font-bold mx-7">Myntra - Top Deals</h1>

      <div className="min-w-[200px] m-7">
        <Slider {...settings}>
          {MyntraImage.map((image, index) => (
            <div
              key={index}
              className="min-w-[180px] relative cursor-pointer"
            >
              <Link key={`${image.id}`} to={`/Myntra/${image.id}`}>
                <img
                  src={image.img}
                  alt={`Image ${index}`}
                  className=""
                  width={410}
                />
              </Link>
              <img
                src="https://asset20.ckassets.com/resources/image/stores/myntra-1735792893.jpg"
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

export { MyntraImage };
