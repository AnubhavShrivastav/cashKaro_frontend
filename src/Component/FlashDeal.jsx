

const Banner = [
  "https://asset22.ckassets.com/resources/image/staticpage_images/CLOVE%2011%202%20(1)-1745507182.png",
  "https://asset22.ckassets.com/resources/image/staticpage_images/bajaj%20prime%201-1744884840.png",
  "https://asset22.ckassets.com/resources/image/staticpage_images/axis%20fk-1746787909.png",
  "https://asset22.ckassets.com/resources/image/staticpage_images/colors%20queen-1747209902.png",
  "https://asset22.ckassets.com/resources/image/staticpage_images/weryze-1744895890.png",
  "https://asset22.ckassets.com/resources/image/staticpage_images/cleevo%201-1747123670.png",
  "https://asset22.ckassets.com/resources/image/staticpage_images/time%20prime%20(1)-1746768415.png",
  "https://asset22.ckassets.com/resources/image/staticpage_images/ramam-1744270496.png",
  "https://asset22.ckassets.com/resources/image/staticpage_images/CLOVE%2023-1747122400.png",
  "https://asset22.ckassets.com/resources/image/staticpage_images/SBI-1743060547.png",
  "https://asset22.ckassets.com/resources/image/staticpage_images/fitspire-1746777129.png",
];

function FlashDeal() {
  

  return (
    <div className="my-8">
      <div className="relative">
        <img
          src="https://asset22.ckassets.com/resources/image/dynamicpage_images/Desktop_Background-1740145506.png"
          height={5000}
          width={3500}
          alt=""
        />

        <div className="">
          <h1 className="absolute right-[40%] left-[42%] bottom-[90%] text-white text-4xl font-extrabold">
            FLASH DEAL
          </h1>
          <p className="absolute right-[40%] left-[40%] bottom-[80%] p-1 text-gray-500 text-center bg-white">
            🕓 Ends in 01 day
          </p>

          <div className="flex items-center overflow-auto my-2 min-w-[200px] h-[300px] absolute bottom-[20%] left-[3%]">
            {Banner.map((image, index) => (
              <img
                src={image}
                key={index}
                className="mx-2 inline"
                width={400}
                height={250}
              />
            ))}
          </div>

          {/* <button className="block relative right-[30%]  left-[40%] bottom-[20%] m-3 rounded-lg px-30 py-3 bg-red-400 text-white">
          View All
        </button> */}

          {/* <button className="block bg-blue-800 rounded-xl px-3 py-2 mt-2 ml-2 text-white font-semibold">
            Grab Deal
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default FlashDeal;
