import { Link } from "react-router-dom";
import { Slider, settings } from "../Constant.jsx"
import useFetch from "../Hooks/UseFetch";

// const AjioImage = [
//   {
//     id: 1,
//     img: "https://asset22.ckassets.com/resources/image/staticpage_images/Under%20532-1747131217.png",
//     title: "Ajio: Everything under Rs. 499 + Upto 10% CashKaro Cashback",
//     details: ["Everything under Rs. 499", "Flat 10% Ajio Supercash on all Orders", "Upto 10% CashKaro Cashback on all Orders"],
//   },

//   {
//     id: 2,
//     img: "https://asset22.ckassets.com/resources/image/staticpage_images/Under%20531-1747131207.png",
//     title: "Ajio: Everything under Rs. 399 + Upto 10% CashKaro Cashback",
//     details: ["Everything under Rs. 399", "Flat 10% Ajio Supercash on all Orders", "Upto 10% CashKaro Cashback on all Orders"]  
//   },

//   {
//     id: 3,
//     img: "https://asset22.ckassets.com/resources/image/staticpage_images/Under%20530-1747131198.png",
//     title: "Ajio: Everything under Rs. 299 + Upto 10% CashKaro Cashback",
//     details: ["Everything under Rs. 299", "Flat 10% Ajio Supercash on all Orders", "Upto 10% CashKaro Cashback on all Orders"],  
//   },

//   {
//     id: 4,
//     img: "https://asset22.ckassets.com/resources/image/staticpage_images/Skincare-1747131065.png",
//     title: "Ajio: Min. 40% Off on SkinCare + Upto 10% CashKaro Cashback",
//     details: ["Minimum 40% Off on Skincare", "Flat 10% Ajio Supercash on all Orders", "Upto 10% CashKaro Cashback on all Orders"],
//   },

//   {
//     id: 5,
//     img: "https://asset22.ckassets.com/resources/image/staticpage_images/MenTrousers-1747131039.png",
//     title: "Ajio: Min. 50% Off on FootWear + Upto 10% CashKaro Cashback",
//     details: ["Minimum 50% Off on Footwear", "Flat 10% Ajio Supercash on all Orders", "Upto 10% CashKaro Cashback on all Orders"],
//   },

//   {
//     id: 6,
//     img: "https://asset22.ckassets.com/resources/image/staticpage_images/Pants%20Trousers-1747131097.png",
//     title: "Ajio: 40% to 70% Off on Pants & Trousers + Upto 10% CashKaro Cashback",
//     details: ["40-70% Off on Trousers and Pants", "Flat 10% Ajio Supercash on all Orders", "Upto 10% CashKaro Cashback on all Orders"],  
//   },

//   {
//     id: 7,
//     img: "https://asset22.ckassets.com/resources/image/staticpage_images/TShirt-1747131108.png",
//     title: "Ajio: 40% to 60% Off on T-Shirt + Upto 10% CashKaro Cashback",
//     details: ["40-60% Off on Tshirt", "Flat 10% Ajio Supercash on all Orders", "Upto 10% CashKaro Cashback on all Orders"],  
//   },

//   {
//     id: 8,
//     img: "https://asset22.ckassets.com/resources/image/staticpage_images/Women%20Handbags-1747131120.png",
//     title: "Ajio: Upto 70% Off on Women's HandBags + Upto 10% CashKaro Cashback",
//     details: ["Up to 70% Off on Women Handbags", "Flat 10% Ajio Supercash on all Orders", "Upto 10% CashKaro Cashback on all Orders"],
//   },

//   {
//     id: 9,
//     img: "https://asset22.ckassets.com/resources/image/staticpage_images/Dress-1747131083.png",
//     title: "Ajio: Under 899 on Dresses + Upto 10% CashKaro Cashback",
//     details: ["Dresses under Rs. 899", "Flat 10% Ajio Supercash on all Orders", "Upto 10% CashKaro Cashback on all Orders"],
//   },

//   {
//     id: 10,
//     img: "https://asset22.ckassets.com/resources/image/staticpage_images/Under%20527-1746696315.png",
//     title: "Ajio: Everything under Rs. 299 + Upto 8% CashKaro Cashback",
//     details: ["Everything under Rs. 299", "Flat 10% Ajio Supercash on all Orders", "Upto 10% CashKaro Cashback on all Orders"],
//   },

// ];


export default function Ajio() {

  const { data, error } = useFetch(`${import.meta.env.VITE_API_URL}/api/product`)


  const AjioProducts = Array.isArray(data.Data) && data.Data.filter((items) => {
    return items.brandDetails.Brandname === "AJIO"
  })

  return (
    <>
      <h1 className="text-2xl font-bold mx-7">Ajio - Top Deals</h1>

      <div className="min-w-[200px] m-7">
        <Slider {...settings} className="mx-3">

          {Array.isArray(AjioProducts) && AjioProducts.map((image) => (
            <div
              className="min-w-[180px] mx-2 relative cursor-pointer"
            >

              <Link key={image._id} to={`/Ajio/${image._id}`}>
                <img
                  src={image.productUrl}
                  key={image._id}
                  alt={error}
                  width={430}
                />
              </Link>

              <img
                src={image.brandDetails.BrandLogo}
                className="absolute rounded-xl left-[3%] top-[4%] right-[60%] bottom-[90%]"
                height={90}
                width={100}
              />

              <button className="absolute cursor-pointer inline bottom-[6%] left-[68%] rounded-lg px-3 py-1 bg-white text-blue-700 font-semibold text-lg">
                Grab Deal
              </button>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );

}

