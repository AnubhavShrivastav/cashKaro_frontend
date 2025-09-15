import useFetch from "../Hooks/UseFetch"
import { Slider, settings } from "../Constant.jsx"


const Brands = () => {

  const { data, error } = useFetch(`http://localhost:3000/api/brand`)
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

  const { data, error } = useFetch(`http://localhost:3000/api/product/${productId}`)

  return (
    <div className="min-w-[200px] m-7">

      <Slider {...settings} className="mx-3">
        {
          Array.isArray(data.Data) && data.Data.map((productdata) => (
            <div className="min-w-[180px] mx-2 relative cursor-pointer">
              <img src={productdata.productUrl} key={productdata._id}
                alt={error} width={430} />
              <img
                src={productdata.brandDetails.BrandLogo}
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

  )
}

export { Brands, Products }





