import { Slider, categorySettings } from "../Constant.jsx"
import useFetch from "../Hooks/UseFetch"



// const images = [
//   { productImage: "https://asset20.ckassets.com/resources/image/category/banking-finance-offers-4684-17455848681.png", productName: "Credit Cards" },
//   { productImage: "https://asset20.ckassets.com/resources/image/category/biggest-sales-5257-17352940050.png", productName: "Biggest Sales" },
//   { productImage: "https://asset20.ckassets.com/resources/image/category/loans-offers-5376-17455651671.png", productName: "Loans" },
//   { productImage: "https://asset20.ckassets.com/resources/image/category/fashion-offers-4199-17352129510.png", productName: "Fashion" },
//   { productImage: "https://asset20.ckassets.com/resources/image/category/health-medicine-offers-4203-17352130130.png", productName: "Pharmancy" },
//   { productImage: "https://asset20.ckassets.com/resources/image/category/mobiles-phones-offers-4200-17352851830.png", productName: "Mobile" },
//   { productImage: "https://asset20.ckassets.com/resources/image/category/electronics-offers-4205-17352127230.png", productName: "Electronics" },
//   { productImage: "https://asset20.ckassets.com/resources/image/category/new-on-ck-4908-17352852140.png", productName: "New on CashKaro" },
//   { productImage: "https://asset20.ckassets.com/resources/image/category/beauty-personal-care-offers-4206-17352128850.png", productName: "Beauty & Grooming" },
//   { productImage: "https://asset20.ckassets.com/resources/image/category/health-and-wellness-4900-17352129720.png", productName: "Health & Wellness" },
//   { productImage: "https://asset20.ckassets.com/resources/image/category/food-and-grocery-4901-17352860840.png", productName: "Food & Grocery" },
//   { productImage: "https://asset20.ckassets.com/resources/image/category/departmental-offers-4204-17352129310.png", productName: "Departmental" },
//   { productImage: "https://asset20.ckassets.com/resources/image/category/travel-offers-4207-17352130220.png", productName: "Flight & Hotels" },
//   { productImage: "https://asset20.ckassets.com/resources/image/category/home-kitchen-offers-4209-17352129920.png", productName: "Home & Kitchen" },
//   { productImage: "https://asset20.ckassets.com/resources/image/category/domain-hosting-offers-4686-17352857680.png", productName: "Hosting" },
//   { productImage: "https://asset20.ckassets.com/resources/image/category/education-offers-4445-17352857240.png", productName: "Education" },
// ];



 function CategorySlider() {


  const { data, error } = useFetch(`http://13.203.244.27/api/category`)


  return (
    <div className="min-w-[200px] my-3">
      <h1 className="text-2xl font-bold py-6 mb-2 mx-10">Top Categories</h1>

      <div className="min-w-[200px] mx-11 my-3">
        <Slider {...categorySettings}>
          {Array.isArray(data.Data) && data.Data.map((item) => (
            <div className="px-1 mb-6">
              <img
                src={item.imageUrl}
                className="mx-1 hover:scale-105 cursor-pointer"
                alt={error}
                height={125}
                width={135}
              />

              <p className="my-4 mx-9 text-gray-600 font-bold">{item.name}</p>

            </div>

          ))}
        </Slider>
      </div>
    </div>
  );
}

export default CategorySlider;
