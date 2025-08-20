import useFetch from "../Hooks/UseFetch";

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


  const { data, error } = useFetch("http://localhost:3000/api/flashdeal")

  return (
    <div className="my-50 sm:my-8">
      <div className="relative">
        <img
          src="https://asset22.ckassets.com/resources/image/dynamicpage_images/Desktop_Background-1740145506.png"
          height={6000}
          width={3500}
          alt={error}
        />

        <div className="">
          <h1 className="absolute right-[40%] left-[42%] bottom-[90%] text-white text-4xl font-extrabold">
            FLASH DEAL
          </h1>
          <p className="absolute right-[40%] left-[40%] bottom-[80%] p-1 text-gray-500 text-center bg-white">
            🕓 Ends in 01 day
          </p>

          <div className="flex overflow-auto min-w-[200px] h-[330px] absolute bottom-[20%] left-[3%]">
            {Array.isArray(data.Data) && data.Data.map((img) => (
              <img
                src={img.imageUrl}
                className="mx-2 inline"
              />

            ))}


          </div>

          <button className="block absolute right-[34%] left-[40%] bottom-[5%] m-3 rounded-lg px-30 py-3 bg-neutral-300 opacity-300 text-white font-bold">
            View All
          </button>


        </div>
      </div>
    </div>
  );
}

export default FlashDeal;
