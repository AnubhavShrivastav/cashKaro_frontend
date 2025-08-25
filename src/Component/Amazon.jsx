import { Link } from "react-router-dom";
import { Slider, settings } from "../Constant.jsx"
import useFetch from "../Hooks/UseFetch";


// const AmazonImage = [
//   {
//     id: 1,
//     img: "https://asset22.ckassets.com/resources/image/staticpage_images/Beauty%20Products%201-1745564957.png",
//     title: "Amazon: Min. 50% Off on Beauty Products + Flat 6% Rewards",
//     details: ["Minimum 50% off on Beauty Products","Flat 6% CashKaro Rewards on all Orders"]
//   },

//   {
//     id: 2,
//     img: "https://asset22.ckassets.com/resources/image/staticpage_images/Personal%20Care-1738069570.png",
//     title: "Amazon: Min. 25% Off on Personal Care + Flat 3.5% Rewards",
//     details: ["Minimum 25% Off on Personal Care","Flat 3.5% CashKaro Rewards on all Orders"]
//   },

//   {
//     id: 3,
//     img: "https://asset22.ckassets.com/resources/image/staticpage_images/Footwear-1738069495.png",
//     title: "Amazon: Min. 25% Off on FootWear + Flat 3.5% Rewards",
//     details: ["Minimum 25% Off on Footwear","Flat 3.5% CashKaro Rewards on all Orders"]
//   },

//   {
//     id: 4,
//     img: "https://asset22.ckassets.com/resources/image/staticpage_images/Watches-1738069623.png",
//     title: "Amazon: Min. 35% Off on Watches + Flat 3.5% Rewards",
//     details: ["Minimum 35% Off on Footwear","Flat 3.5% CashKaro Rewards on all Orders"]
//   },

//   {
//     id: 5,
//     img: "https://asset22.ckassets.com/resources/image/staticpage_images/Home%20Improvements%20Products-1738069521.png",
//     title: "Amazon: Upto 60% Off on Home Improvements Products + Flat 4% Rewards",
//     deatils: ["Upto 60% Off on Home Improvements Products","Flat 4% CashKaro Rewards on all Orders"]
//   },

//   {
//     id: 6,
//     img: "https://asset22.ckassets.com/resources/image/staticpage_images/Baby%20Products-1738069448.png",
//     title: "Amazon: Upto 50% Off on Bags & Wallets + Flat 3.5% Rewards",
//     details:  ["Upto 50% Off on Bags & Wallets","Flat 3.5% CashKaro Rewards on all Orders"]
//   },

//   {
//     id: 7,
//     img: "https://asset22.ckassets.com/resources/image/staticpage_images/Luggage-1738069556.png",
//     title: "Amazon: Upto 70% Off on Luggage + Flat 3.5% Rewards",
//     details: ["Upto 70% Off on Luggage","Flat 3.5% CashKaro Rewards on all Orders"]
//   },

//   {
//     id: 8,
//     img: "https://asset22.ckassets.com/resources/image/staticpage_images/Jewellery-1738069535.png",
//     title: "Amazon: Upto 70% Off on Jewellery + Flat 2.5% Rewards",
//     details: ["Upto 70% Off on Jewellery","Flat 2.5% CashKaro Rewards on all Orders"]
//   },
// ];



export default function Amazon() {

  const { data, error } = useFetch(`${import.meta.env.VITE_API_URL}/api/product`)


  const amazonProducts = Array.isArray(data.Data) && data.Data.filter((items) => {
    return items.brandDetails.Brandname === "amazon"
  })


  return (
    <>
      <h1 className="text-2xl font-bold mx-7">Amazon - Top Deals</h1>

      <div className="min-w-[200px] m-7">
        <Slider {...settings} className="mx-3">

          {Array.isArray(amazonProducts) && amazonProducts.map((image) => (
            <div
              className="min-w-[180px] mx-2 relative cursor-pointer"
            >
              <Link key={image._id} to={`/Amazon/${image._id}`}>

                <img src={image.productUrl} key={image._id} alt={error}
                  width={430} />

              </Link>
              <img
                src={image.brandDetails.BrandLogo}
                className="absolute rounded-xl left-[3%] top-[4%] right-[60%] bottom-[90%]"
                height={90}
                width={100}
                alt={error}
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

// export { AmazonImage };
