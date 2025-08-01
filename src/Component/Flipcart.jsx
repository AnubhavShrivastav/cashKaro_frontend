import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const flipCartImage = [
{
  id: 1 ,
  img: "https://asset22.ckassets.com/resources/image/staticpage_images/Flipkart%20Generic%20TSP%20Jeans%20Trousers-1747120163.png",
  title: "FlipCart: Upto 85% Off On Jeans & Trousers + Flat 2.1% Rewards",
  descripition: "",
},

{
  id: 2,  
  img: "https://asset22.ckassets.com/resources/image/staticpage_images/Flipkart%20Generic%20Top%20Fashion%20Brands-1746722016.png",
  title: "FlipCart: Upto 75% Off On Top Fashion Brands + Flat 2.1% Rewards",
  descripition: "",
},

 {
  id: 3,
  img: "https://asset22.ckassets.com/resources/image/staticpage_images/Flipkart%20Generic%20TSP%20Shirt-1747119841.png",
  title: "FlipCart: Upto 85% Off On Shirts + Flat 2.1% Rewards",
  descripition: "",
},

 {
  id: 4,
  img: "https://asset22.ckassets.com/resources/image/staticpage_images/Flipkart%20Generic%20TSP%20Footwear-1747120034.png",
  title: "FlipCart: Upto 80% Off On FootWear + Flat 2.1% Rewards",
  descripition: "",
},

{
  id: 5,
  img: "https://asset22.ckassets.com/resources/image/staticpage_images/Flipkart%20Generic%20Perfumes%20Deodorants-1747120060.png",
  title: "FlipCart: Upto 80% Off On Perfumes & Deodorants + Flat 2.1% Rewards",
  descripition: "",
},

];

export default function Flipcart() {

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
    <h1 className="text-2xl font-bold mx-7">FlipCart - Top Deals</h1>

      <div className="min-w-[200px] m-7">
        <Slider {...settings}>
          {flipCartImage.map((image, index) => (
            <div
              key={index}
              className="min-w-[180px] relative cursor-pointer"
            >
              <Link key={image.id} to={`/Flipcart/${image.id}`}>
              <img src={image.img} alt={`Image ${index}`} className="" width={410} />
              </Link>
              <img
                src="https://asset20.ckassets.com/resources/image/stores/flipkart.png"
                className="absolute rounded-xl left-[3%] top-[4%] right-[60%] bottom-[90%]"
                height={90}
                width={100}
                alt=""
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

export { flipCartImage };
