import useFetch from "../Hooks/UseFetch";
import { Slider, settings } from "../Constant.jsx"

// const Banner = [
//   { image: "https://asset22.ckassets.com/resources/image/staticpage_images/Vajor-1754553346-68945c02c2cd7.png", brandLogo: "https://asset20.ckassets.com/resources/image/stores/estuary-world-coupons-1741361039.png" },
//   { image: "https://asset22.ckassets.com/resources/image/staticpage_images/Vajor-1754638375-6895a827aa016.png", brandLogo: "https://asset20.ckassets.com/resources/image/stores/strch-coupons-1735648158.jpg" },
//   { image: "https://asset22.ckassets.com/resources/image/staticpage_images/Vajor-1754553507-68945ca328144.png", brandLogo: "https://asset20.ckassets.com/resources/image/stores/bajaj-prime-coupons-1742820629.png" },
//   { image: "https://asset22.ckassets.com/resources/image/staticpage_images/Vajor-1754553489-68945c917869d.png", brandLogo: "https://asset20.ckassets.com/resources/image/stores/indigo-hotels-coupons-1753248566.png" },
//   { image: "https://asset22.ckassets.com/resources/image/staticpage_images/Vajor-1754553471-68945c7fe7ef4.png", brandLogo: "https://asset20.ckassets.com/resources/image/stores/times-prime-coupons-1735635238.jpg" },
//   { image: "https://asset22.ckassets.com/resources/image/staticpage_images/Vajor-1754638387-6895a83368fa8.png", brandLogo: "https://asset20.ckassets.com/resources/image/stores/house-of-koala-offers-1745230983.png" },
//   { image: "https://asset22.ckassets.com/resources/image/staticpage_images/Vajor-1754638403-6895a8441075d.png", brandLogo: "https://asset20.ckassets.com/resources/image/stores/zop-coupons-test-1749805371.png" },
//   { image: "https://asset22.ckassets.com/resources/image/staticpage_images/Vajor-1754638415-6895a84fc024c.png", brandLogo: "https://asset20.ckassets.com/resources/image/stores/mini-klub-offers-test-1752212624.png" },
//   { image: "https://asset22.ckassets.com/resources/image/staticpage_images/Vajor-1754551695-6894558f3243d.png", brandLogo: "https://asset20.ckassets.com/resources/image/stores/koparoclean-coupons-1735633997.jpg" },
//   { image: "https://asset22.ckassets.com/resources/image/staticpage_images/The%20SG%20Store-1754681365.png",    brandLogo: "https://asset20.ckassets.com/resources/image/stores/thesgstore-coupons-test-1754639086.png" },
//   { image: "https://asset22.ckassets.com/resources/image/staticpage_images/Vajor-1754553388-68945c2cd378e.png", brandLogo: "https://asset20.ckassets.com/resources/image/stores/kindlife-coupons-1735627247.jpg" },
//   { image: "https://asset22.ckassets.com/resources/image/staticpage_images/Vajor-1754553287-68945bc735f6b.png", brandLogo: "https://asset20.ckassets.com/resources/image/stores/scentials-offers-1745214254.png" },
//   { image: "https://asset22.ckassets.com/resources/image/staticpage_images/Vajor-1754553308-68945bdc54277.png", brandLogo: "https://asset20.ckassets.com/resources/image/stores/veeba-coupons-1747720329.png" },

// ];

function FlashDeal() {

  const { data, error } = useFetch(`http://13.203.244.27/api/flashdeal`)

  return (
    <>

      <div className="flex justify-center my-3 md:my-5 relative w-full h-lvh bg-cover bg-center bg-[url('/img/FlashDeal.png')]">

        <div className="my-10 absolute">
          <h1 className="font-bold text-6xl text-white">FLASH DEAL</h1>
          <p className="my-5 mx-14 bg-white px-12 py-1 text-gray-800 rounded-xs">🕓 Ends in 01 day</p>
        </div>
         
        <Slider {...settings} className="overflow-hidden absolute mx-10">
          {Array.isArray(data.Data) && data.Data.map((img) => (
            <div className="mt-50">

              <img
                src={img.imageUrl}
                className="w-[430px] mx-6 mt-6 object-cover"
                alt={error}
              />

              <img
                src={img.brandLogo}
                className="absolute bottom-[40%] w-[130px] h-[50px] mx-10 object-cover"

              />

              <button className="mx-20 cursor-pointer inline rounded-lg px-3 py-1 bg-blue-700 text-white font-bold text-lg">Grab deal</button>

            </div>

          ))}

        </Slider>
        <button className="absolute bottom-10 left-[40%] bg-zinc-400 opacity-70 border-white px-30 py-2 text-white font-extrabold text-xl">View All</button>

      </div>

    </>
  )
}

export default FlashDeal