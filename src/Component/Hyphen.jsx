import { Link } from "react-router-dom";
import { Slider, settings } from "../Constant.jsx"
import useFetch from "../Hooks/UseFetch";


// const HyphenImage = [
//   {
//     id: 1,
//     img: "https://asset22.ckassets.com/resources/image/staticpage_images/SUNSCREEN%2050ML-1-1753789242.png",
//     title: "Hyphen: 2X All I Need Sunscreen - 50ml At ₹499 + Flat 15% Rewards",
//     details: ["Buy 2X All I Need Sunscreen Spf 50 Pa++++ 50Ml at Rs. 449", "Add 2 products in cart, no code needed", "Get lower-priced product for free",
//       "Extra 5% Prepaid Discount", "Flat 15% CashKaro Cashback on this Deal"]
//   },

//   {
//     id: 2,
//     img: "https://asset22.ckassets.com/resources/image/staticpage_images/GLOW%20SERUM%2030ML-1753789228.png",
//     title: "Hyphen: 2X Golden Hour Glow Serum - 30ml At ₹649 + Flat 15% Rewards",
//     details: ["Buy 2X Golden Hour Glow Serum 30Ml at Rs. 649", "Add 2 products in cart, no code needed",
//       "Get lower-priced product for free", "Extra 5% Prepaid Discount", "Flat 15% CashKaro Cashback on this Deal"]
//   },

//   {
//     id: 3,
//     img: "https://asset22.ckassets.com/resources/image/staticpage_images/3-%20GLOW%20SERUM%2030ML-1753788982.png",
//     title: "Hyphen: 2X Golden Hour Glow Screen SPF 50 PA++++ - 50ml At ₹549 + Flat 15% Rewards",
//     details: ["", "Flat 3.5% CashKaro Rewards on all Orders"]
//   },

//   {
//     id: 4,
//     img: "https://asset22.ckassets.com/resources/image/staticpage_images/4-ULTRA%20LIGHT%20WATER%20SUNSCREEN%2050ML-1753789014.png",
//     title: "Hyphen: 2X Ultra Light Water Sunscreen - 50ml At ₹549  + Flat 15% Rewards",
//     details: ["Minimum 35% Off on Footwear", "Flat 3.5% CashKaro Rewards on all Orders"]
//   },

//   {
//     id: 5,
//     img: "https://asset22.ckassets.com/resources/image/staticpage_images/5-%20MANGO%20LIP%20SCREEN-1753789032.png",
//     title: "Hyphen: 2X Mango Lip Screen At ₹399 + Flat 15% Rewards",
//     deatils: ["Upto 60% Off on Home Improvements Products", "Flat 4% CashKaro Rewards on all Orders"]
//   },

//   {
//     id: 6,
//     img: "https://asset22.ckassets.com/resources/image/staticpage_images/6-%20VITAMIN%20INFUSED%20PEPTIDE%20LIP%20BALM%20-%2010G-1753789046.png",
//     title: "Hyphen: 2X Vitamin Infused Peptide Lip Balm - 10g At ₹399 + Flat 15% Rewards",
//     deatils: ["Upto 60% Off on Home Improvements Products", "Flat 4% CashKaro Rewards on all Orders"]
//   },

//   {
//     id: 7,
//     img: "https://asset22.ckassets.com/resources/image/staticpage_images/7-%20VITAMIN%20INFUSED%20PEPTIDE%20LIP%20BALM%20-%2010G-1753789063.png",
//     title: "Hyphen: 2X 7% Ceramides-Nmf Milky Toner - 100ml At ₹495 + Flat 15% Rewards",
//     deatils: ["Upto 60% Off on Home Improvements Products", "Flat 4% CashKaro Rewards on all Orders"]
//   },

//   {
//     id: 8,
//     img: "https://asset22.ckassets.com/resources/image/staticpage_images/8-%20HEARTLEAF%20&%20CERAMIDES%20FACE%20CREAM-%2050ML-1753789090.png",
//     title: "Hyphen: 2X Ceramides Rich Pillow Moisturizer - 50ml At ₹449 + Flat 15% Rewards",
//     deatils: ["Upto 60% Off on Home Improvements Products", "Flat 4% CashKaro Rewards on all Orders"]
//   },

//   {
//     id: 9,
//     img: "https://asset22.ckassets.com/resources/image/staticpage_images/9-%20VITAMIN%20INFUSED%20LIP%20BALM%20-%2010G-1753789137.png",
//     title: "Hyphen: 2X Vitamin Infused Lip Bam - 10g At ₹399 + Flat 15% Rewards",
//     deatils: ["Upto 60% Off on Home Improvements Products", "Flat 4% CashKaro Rewards on all Orders"]
//   },

//   {
//     id: 10,
//     img: "https://asset22.ckassets.com/resources/image/staticpage_images/10-TRANEXAMIC%20ACID%20&%20KOJIC%20ACID%20GLOW%20SERUM-1753789161.png",
//     title: "Hyphen: 2X Advanced De-Pigmentation Serum At ₹649 + Flat 15% Rewards",
//     deatils: ["Upto 60% Off on Home Improvements Products", "Flat 4% CashKaro Rewards on all Orders"]
//   },




// ];

export default function Hyphen() {

  const { data, error } = useFetch(`http://13.203.244.27/api/product`)


  const HyphenProducts = Array.isArray(data.Data) && data.Data.filter((items) => {
    return items.brandDetails.Brandname === "Hyphen"
  })

  return (
    <>
      <h1 className="text-2xl font-bold mx-7">Hyphen - Buy 1 Get 1 Free</h1>

      <div className="min-w-[200px] m-7">
        <Slider {...settings} className="mx-3">

          {Array.isArray(HyphenProducts) && HyphenProducts.map((image, index) => (
            <div
              className="min-w-[180px] mx-2 relative cursor-pointer"
            >
              <Link key={image._id} to={`/Hyphen/${image._id}`}>

                <img src={image.productUrl} key={image._id}
                  alt={error} width={430} />

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

// export { HyphenImage };
