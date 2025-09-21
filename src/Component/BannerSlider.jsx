import useFetch from "../Hooks/UseFetch";
import { Slider, settings } from "../Constant.jsx"



// export const images = [
//   "https://asset22.ckassets.com/resources/image/staticpage_images/Desktop%20Banner-1746783373.png",
//   "https://asset22.ckassets.com/resources/image/staticpage_images/Desktop%20Banner-1747036591.png",
//   "https://asset22.ckassets.com/resources/image/staticpage_images/Desktop%20Banner-1746783405.png",
//   "https://asset22.ckassets.com/resources/image/staticpage_images/Desktop%20Banner-1746696683.png",
//   "https://asset22.ckassets.com/resources/image/staticpage_images/Desktop%20Banner-1754588059.png",
//   "https://asset22.ckassets.com/resources/image/staticpage_images/Desk%20Banner-1746596178.png",
//   "https://asset22.ckassets.com/resources/image/staticpage_images/cleevo%20desk-1746037053.png",
//   "https://asset22.ckassets.com/resources/image/staticpage_images/Desktop%20Banner-1746037110.png",
//   "https://asset22.ckassets.com/resources/image/staticpage_images/Desktop%20Banner-1746851354.png",
//   "https://asset22.ckassets.com/resources/image/staticpage_images/Desktop%20Banner-1754657668.png",
//   "https://asset22.ckassets.com/resources/image/staticpage_images/M-site%20Banner-1747037559.png",
//   "https://asset22.ckassets.com/resources/image/staticpage_images/Desktop%20Banner-1747715287.png",
//   "https://asset22.ckassets.com/resources/image/staticpage_images/Desktop%20Banner-1748359393.png",
//   "https://asset22.ckassets.com/resources/image/staticpage_images/Desktop%20Bannner-1753159745.png",
//   "https://asset22.ckassets.com/resources/image/staticpage_images/Desktop%20Banner-1747740557.png",
// ];


function BannerSlider() {

  const { data, error } = useFetch(`${import.meta.env.VITE_API_URL}/api/banner`)

  return (

    <div className="my-6 mx-12 sm:mx-10 sm:my-8 sm:mt-28">
      <Slider {...settings}>

        {Array.isArray(data.Data) && data.Data.map((img) => (
          <div className="px-1 sm:px-2">
            <img
              src={img.imageUrl}
              key={img.id}
              alt={error}
              className="w-[450px] h-[180px] sm:w-[400px] sm:h-[160px] md:w-[540px] md:h-[255px] rounded-xl"
            />
          </div>
        ))}
      </Slider>

    </div>

  );
}

export default BannerSlider;
