import useFetch from "../Hooks/UseFetch"
import { Slider, settings } from "../Constant.jsx"


const Brands = () => {

  const { data, error } = useFetch(`${import.meta.env.VITE_API_URL}/api/brand`)
  return (
    <>
      {
        Array.isArray(data.Data) && data.Data.map((brandData) => (
          <div key={brandData._id}>
            <h1 className="text-2xl font-bold mx-12">{brandData.Brandname} - Top Deals</h1>
            <Products productId={brandData._id} />
          </div>
        ))
      }
    </>
  )
}

const Products = ({ productId }) => {

  const { data, error } = useFetch(`${import.meta.env.VITE_API_URL}/api/product/${productId}`)

  return (
    <div className="min-w-[200px] m-7">

      <Slider {...settings} className="mx-3">
        {
          Array.isArray(data.Data) && data.Data.map((productdata) => (
            <div className="min-w-[180px] mx-2 relative cursor-pointer">
              <img src={productdata.productUrl} key={productdata._id}
                alt={error} className="w-[390px] md:w-[410px] lg:w-[430px] " />
              <img
                src={productdata.brandDetails.BrandLogo}
                className="absolute w-[100px] h-[50px] sm:w-[60px] sm:h-[40px] lg:w-[100px] lg:h-[50px] rounded-xl left-[3%] top-[4%] right-[60%] bottom-[90%]"
                alt={error}
              />
              <button className="absolute left-[62%] cursor-pointer inline bottom-[6%] md:left-[71%] rounded-lg px-3 py-1 bg-white text-blue-700 font-semibold text-lg sm:text-sm xl:text-lg">
                Grab Deal
              </button>
            </div>
          ))}

      </Slider>
    </div>

  )
}

export { Brands, Products }





