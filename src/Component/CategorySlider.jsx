import { Slider, categorySettings } from "../Constant.jsx"
import useFetch from "../Hooks/UseFetch"

function CategorySlider() {

  const { data, error } = useFetch(`${import.meta.env.VITE_API_URL}/api/category`)

  return (
    <div className="min-w-[200px] my-6 md:my-4">
      <h1 className="text-2xl font-bold py-6 mb-2 mx-10">Top Categories</h1>

      <div className="min-w-[200px] m-10 my-3">
        <Slider {...categorySettings}>
          {Array.isArray(data.Data) && data.Data.map((item) => (
            <div className="px-1 mb-6">
              <img
                src={item.imageUrl}
                className="mx-1 hover:scale-105 h-[85px] w-[100px] md:h-[125px] md:w-[135px] cursor-pointer"
                alt={error}
              />

              <p className="my-4 mx-5 text-sm sm:mx-9 md:mx-7 text-gray-600 font-bold">{item.name}</p>

            </div>

          ))}
        </Slider>
      </div>
    </div>
  );
}

export default CategorySlider;
