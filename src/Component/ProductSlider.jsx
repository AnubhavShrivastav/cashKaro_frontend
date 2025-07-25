import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "https://asset20.ckassets.com/resources/image/category/banking-finance-offers-4684-17455848681.png",
  "https://asset20.ckassets.com/resources/image/category/biggest-sales-5257-17352940050.png",
  "https://asset20.ckassets.com/resources/image/category/loans-offers-5376-17455651671.png",
  "https://asset20.ckassets.com/resources/image/category/fashion-offers-4199-17352129510.png",
  "https://asset20.ckassets.com/resources/image/category/health-medicine-offers-4203-17352130130.png",
  "https://asset20.ckassets.com/resources/image/category/mobiles-phones-offers-4200-17352851830.png",
  "https://asset20.ckassets.com/resources/image/category/electronics-offers-4205-17352127230.png",
  "https://asset20.ckassets.com/resources/image/category/new-on-ck-4908-17352852140.png",
  "https://asset20.ckassets.com/resources/image/category/beauty-personal-care-offers-4206-17352128850.png",
  "https://asset20.ckassets.com/resources/image/category/health-and-wellness-4900-17352129720.png",
  "https://asset20.ckassets.com/resources/image/category/food-and-grocery-4901-17352860840.png",
  "https://asset20.ckassets.com/resources/image/category/departmental-offers-4204-17352129310.png",
  "https://asset20.ckassets.com/resources/image/category/travel-offers-4207-17352130220.png",
  "https://asset20.ckassets.com/resources/image/category/home-kitchen-offers-4209-17352129920.png",
  "https://asset20.ckassets.com/resources/image/category/domain-hosting-offers-4686-17352857680.png",
  "https://asset20.ckassets.com/resources/image/category/education-offers-4445-17352857240.png",
];

// const ProductName = [
//   "Credit Cards",
//   "Biggest Sales",
//   "Loans",
//   "Fashion",
//   "Pharmancy",
//   "Mobile",
//   "Electronics",
//   "New on CashKaro",
//   "Beauty & Grooming",
//   "Health & Wellness",
//   "Food & Grocery",
//   "Departmental",
//   "Flight & Hotels",
//   "Home $ Kitchen",
//   "Hosting",
//   "Education",
// ];


function ProductSlider() {

  const settings = {
    dots: true,          // shows navigation dots
    infinite: false,      // infinite loop
    speed: 500,          // transition speed in ms
    slidesToShow: 8.4,     // number of slides visible
    slidesToScroll: 3,   // number of slides to scroll at a time
    autoplay: false,      // auto slide
    autoplaySpeed: 2000, // 2 seconds
  };

  

  return (
    <div className="min-w-[200px] ml-8 mr-10 my-3">
      <h1 className="text-2xl font-bold py-6 mb-2">Top Categories</h1>

      <div className="">
        <Slider {...settings}>
          {images.map((item, index) => (
            <div className="px-1 mb-6">
              <img
                src={item}
                key={index}
                className="mx-1 hover:scale-105"
                height={125}
                width={135}
              />
              
            </div>
            
          ))}
          </Slider>
      </div>
    </div>
  );
}

export default ProductSlider;
