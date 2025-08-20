import useFetch from "../Hooks/UseFetch";
import { Slider, settings } from "../Constant.js"


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

  const { data, error } = useFetch("http://localhost:3000/api/banner")


  return (

    <div className="my-6 mx-10 sm:mx-9 sm:my-10 sm:mt-28">
      <Slider {...settings}>

        {Array.isArray(data.Data) && data.Data.map((img) => (
          <div className="px-1 sm:px-2">
            <img
              src={img.imageUrl}
              key={img.id}
              alt={error}
              className="w-[400px] h-[100px] md:w-[534px] md:h-[248px] rounded-xl"
            />
          </div>
        ))}
      </Slider>

    </div>

  );
}

export default BannerSlider;
