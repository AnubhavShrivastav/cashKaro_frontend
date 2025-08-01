import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AjioImage = [
  {
    id: 1,
    img: "https://asset22.ckassets.com/resources/image/staticpage_images/Under%20532-1747131217.png",
    title: "Ajio: Everything under Rs. 499 + Upto 10% CashKaro Cashback",
    description: [ "Everything under Rs. 499","Flat 10% Ajio Supercash on all Orders","Upto 10% CashKaro Cashback on all Orders","Cashback for New Users: 10%",
    "Cashback for Existing Users: 8%","Cashback on all Orders of Gold & Silver (Idols, Bars, Coins, and Jewellery): 0.33%"
    ]
  },
  {
    id: 2,
    img: "https://asset22.ckassets.com/resources/image/staticpage_images/Under%20531-1747131207.png",
    title: "Ajio: Everything under Rs. 399 + Upto 10% CashKaro Cashback",
    description: "",
  },

  {
    id: 3,
    img: "https://asset22.ckassets.com/resources/image/staticpage_images/Under%20530-1747131198.png",
    title: "Ajio: Everything under Rs. 299 + Upto 10% CashKaro Cashback",
    description: ""
  },

  {
    id: 4,
    img: "https://asset22.ckassets.com/resources/image/staticpage_images/Skincare-1747131065.png",
    title: "Ajio: Min. 40% Off on SkinCare + Upto 10% CashKaro Cashback",
    description: ""
  },
  
  {
    id: 5,
    img: "https://asset22.ckassets.com/resources/image/staticpage_images/MenTrousers-1747131039.png",
    title: "Ajio: Min. 50% Off on FootWear + Upto 10% CashKaro Cashback",
    description: ""
  },


  {
    id: 6,
    img: "https://asset22.ckassets.com/resources/image/staticpage_images/Pants%20Trousers-1747131097.png",
    title: "Ajio: 40% to 70% Off on Pants & Trousers + Upto 10% CashKaro Cashback",
    description: ""
  },

  {
    id: 7,
    img: "https://asset22.ckassets.com/resources/image/staticpage_images/TShirt-1747131108.png",
    title: "Ajio: 40% to 60% Off on T-Shirt + Upto 10% CashKaro Cashback",
    description: ""
  },
  {
    id: 8,
    img: "https://asset22.ckassets.com/resources/image/staticpage_images/Women%20Handbags-1747131120.png",
    title: "Ajio: Upto 70% Off on Women's HandBags + Upto 10% CashKaro Cashback",
    description: ""
  },

  {
    id: 9,
    img: "https://asset22.ckassets.com/resources/image/staticpage_images/Dress-1747131083.png",
    title: "Ajio: Under 899 on Dresses + Upto 10% CashKaro Cashback",
    description: ""
  },

  {
    id: 10,
    img: "https://asset22.ckassets.com/resources/image/staticpage_images/Under%20527-1746696315.png",
    title: "Ajio: Everything under Rs. 299 + Upto 8% CashKaro Cashback",
    description: ""
  },
];

export default function Ajio() {

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
      <h1 className="text-2xl font-bold mx-7">Ajio - Top Deals</h1>

      <div className="min-w-[200px] m-6">
        <Slider {...settings}>

          {AjioImage.map((image, index) => (
            <div
              key={index}
              className="min-w-[180px] relative cursor-pointer"
            >
              <Link key={image.id} to={`/Ajio/${image.id}`}>
                <img
                  src={image.img}
                  alt={image.title}
                  className=""
                  width={410}
                />
              </Link>

              <img
                src="https://asset20.ckassets.com/resources/image/stores/ajio-coupons-1735561339.jpg"
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

export { AjioImage };
