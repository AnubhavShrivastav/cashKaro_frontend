import useFetch from "../Hooks/UseFetch";
import { Slider, settings } from "../Constant.jsx"


function FlashDeal() {

  const { data, error } = useFetch(`${import.meta.env.VITE_API_URL}/api/flashdeal`)

  return (
    <>

      <div className="flex justify-center md:my-5 relative w-full min-h-screen bg-cover bg-center bg-[url('/img/FlashDeal.png')]">

        <div className="my-10 absolute">
          <h1 className="font-bold text-6xl text-white">FLASH DEAL</h1>
          <p className="my-5 mx-14 bg-white px-12 py-1 text-gray-800 rounded-xs">🕓 Ends in 01 day</p>
        </div>

        <Slider {...settings} className="overflow-hidden mx-10 h-full w-full absolute">
          {Array.isArray(data.Data) && data.Data.map((img) => (
            <div className="mt-50">

              <img
                src={img.imageUrl}
                className="w-[410px] mx-1 md:mx-6 mt-6 object-cover"
                alt={error}
              />

              <img
                src={img.brandLogo}
                className="absolute bottom-[38%] w-[130px] h-[50px] mx-10 object-cover"

              />

              <button className="mx-72 sm:mx-77 absolute bottom-6 cursor-pointer rounded-lg px-3 py-1 bg-blue-700 text-white font-bold text-lg">Grab deal</button>

            </div>

          ))}

        </Slider>
        <button className="absolute cursor-pointer bottom-10 md:left-[40%] bg-gray-800 rounded-xl opacity-70 px-30 py-2 text-white font-extrabold text-xl">View All</button>

      </div>

    </>
  )
}

export default FlashDeal