import { useParams, Link, useLocation } from "react-router-dom"
import { useEffect } from 'react'
import { AjioImage } from "../Component/Ajio"
import Header from "../Component/Header"
import { AmazonImage } from "../Component/Amazon"
import { flipkartImage } from "../Component/Flipcart"
import { MyntraImage } from "../Component/Myntra"
import { MCaffeineImage } from "../Component/MCaffeine"
import Footer from "../Component/Footer";

function ImageDeatils() {
  const { category, id } = useParams();
  const { pathName } = useLocation();

  useEffect(() => {
    window.scrollTo(0,0)
  },[pathName])

  const allData = {
    Amazon: AmazonImage,
    Ajio: AjioImage,
    Flipcart: flipkartImage,
    Myntra: MyntraImage,
    Mcaffeine: MCaffeineImage,
  }

  const selectedImage = allData[category] || []


  const picture = selectedImage.find((image) => image.id === parseInt(id));

  if (!picture) return <p>Image not found</p>;


  return (
    <>
      <Header />

      <div className="mt-22 mx-15 text-sm inline-block">
        <Link to={"/"} className="text-gray-800">Home</Link> / <strong>{picture.title}</strong>
      </div>

      <div className="flex justify-center mt-5 relative mb-5">

        <img src={picture.img} alt={picture.title} height={30} width={450} />

      </div>

      <div className="flex justify-center mb-7">
        <button className="bg-orange-500 px-41 py-4 rounded-lg text-white text-lg font-medium cursor-pointer">Grab Deal</button>
      </div>
      <hr />

      <div>
        {
          selectedImage === AjioImage ?
            <div className="my-6 mx-45">
              <h1 className="text-lg font-bold my-2 -ml-4">About this Offer</h1>

              {
                picture.details.map((desc, index) => (
                  <ul className="list-disc">
                    <li key={index}>{desc}</li>
                  </ul>
                ))
              }


              <h1 className="text-lg font-bold my-2 mt-10 -ml-4">CashKaro Cashback Details </h1>
              <ul className="list-disc mb-10">
                <li>Cashback for New Users: 10%</li>
                <li>Cashback for Existing Users: 8%</li>
                <li>Cashback on all Orders of Gold & Silver (Idols, Bars, Coins, and Jewellery): 0.33%</li>
              </ul>

              <h1 className="text-lg font-bold my-2 -ml-4">Important Information</h1>
              <ul className="list-disc mb-10">
                <li>No Cashback on EMP code order & Alliance code orders</li>
                <li>No Cashback on transactions via Ajio Business Account</li>
                <li>Cashback is calculated on order amount excluding what is paid via Ajio wallets, Reliance point or gift vouchers</li>
                <li>Cashback is not applicable on Bulk Transactions</li>
              </ul>

              <h1 className="text-lg font-bold my-2 -ml-4">CashKaro Cashback Related</h1>
              <ul className="list-disc mb-10">
                <li>Tracking Time: 30 Minutes</li>
                <li>Confirmation Timeline: 70 Days</li>
                <li>Cashback on Ajio App orders: Applicable</li>
              </ul>

              <h1 className="text-lg font-bold my-2 -ml-4">How to get this Offer</h1>
              <ul className="list-disc mb-10">
                <li>Click on the Orange Button and visit Ajio</li>
                <li>Shop there as you normally do</li>
                <li>Cashback will be added to your CashKaro Account</li>
              </ul>

            </div>
            : ""
        }
      </div>

      <div>
        {
          selectedImage === AmazonImage ?
            <div className="my-10 mx-45">
              <h1 className="text-lg font-bold my-1 -ml-4">About this Offer</h1>

              {
                picture.details.map((desc, index) => (
                  <ul className="list-disc">
                    <li key={index}>{desc}</li>
                  </ul>
                ))
              }

              <h1 className="text-lg font-bold my-2 mt-7 -ml-4">Extra Discount</h1>
              <ul className="list-disc mb-6">
                <li>Get 10% Instant Discount on Selected Bank Credit Cards</li>
              </ul>

              <h1 className="text-lg font-bold my-2 -ml-4">Important Information</h1>
              <ul className="list-disc mb-6">
                <li>Add products to your Amazon cart/wishlist/Saved For Later only after going via CashKaro</li>
                <li>No CashKaro Rewards on transactions through Amazon Business Account</li>
              </ul>

              <h1 className="text-lg font-bold my-2 -ml-4">CashKaro Rewards Details</h1>
              <div className="mb-8">
                <table className="table-auto w-full border border-gray-500">
                  <tr>
                    <th className="px-4 py-2 text-center">Category</th>
                    <th className="px-4 py-2 text-center">CashKaro Rewards</th>
                  </tr>

                  <tr>
                    <td className="border px-4 py-2">Rewards on Beauty | Luxury Beauty | Apparel</td>
                    <td className="border px-4 py-2">5.5%</td>
                  </tr>


                  <tr>
                    <td className="border px-4 py-2">Rewards on Home Improvement | Luggage | Shoes, Handbags & Accessories | Watches (excluding Smartwatches)</td>
                    <td className="border px-4 py-2">4.5%</td>
                  </tr>

                  <tr>
                    <td className="border px-4 py-2">Rewards on Sports | Lawn & Garden | Kitchen & Dining</td>
                    <td className="border px-4 py-2">4%</td>
                  </tr>

                  <tr>
                    <td className="border px-4 py-2">Rewards on Baby Products | Pet Products | Health and Personal Care	</td>
                    <td className="border px-4 py-2">3.5%</td>
                  </tr>

                  <tr>
                    <td className="border px-4 py-2">Rewards on Business Equipment | Automotive | Home | Furniture</td>
                    <td className="border px-4 py-2">2.5%</td>
                  </tr>

                  <tr>
                    <td className="border px-4 py-2">Rewards on Jewellery (excluding Gold Coins, Gold Bars, Silver Coins, Gold Jewellery, Silver Jewellery & other Precious Jewellery)</td>
                    <td className="border px-4 py-2">2.5%</td>
                  </tr>

                  <tr>
                    <td className="border px-4 py-2">Rewards on Samsung S25 5G, S25 Ultra 5G, S25 Plus 5G, A55, S25 Edge, Flip 7R, Flip7, Fold7, Galaxy M36 5G</td>
                    <td className="border px-4 py-2">2.5%</td>
                  </tr>

                  <tr>
                    <td className="border px-4 py-2">Rewards on Grocery | Samsung M06</td>
                    <td className="border px-4 py-2">2%</td>
                  </tr>

                  <tr>
                    <td className="border px-4 py-2">Rewards on Samsung M16, M56, Galaxy A26 5G, Galaxy A36 5G	</td>
                    <td className="border px-4 py-2">1.5%</td>
                  </tr>

                  <tr>
                    <td className="border px-4 py-2">Rewards on Musical Instruments | Camera | Electronics | PCs (Laptops, Tabs and Smartwatches) | Health and Personal Care Appliances | Books</td>
                    <td className="border px-4 py-2">1.5%</td>
                  </tr>

                  <tr>
                    <td className="border px-4 py-2">Rewards on all Recharge/Bill Payments except adding Amazon Pay Balance, Credit Card Bill, Metro Card Recharge, FASTag Recharge and Insurance Payments (Min. amount of Rs.10)	</td>
                    <td className="border px-4 py-2">Rs.1</td>
                  </tr>

                  <tr>
                    <td className="border px-4 py-2">Rewards on Large Appliances	</td>
                    <td className="border px-4 py-2">0.75%</td>
                  </tr>

                  <tr>
                    <td className="border px-4 py-2">Rewards on Honour 200, X9C | Motorola razr 60 Ultra | OnePlus Nord CE4 Lite, Nord 5, Nord CE5 | Oppo Reno14 5G, Reno14Pro 5G | Realme Narzo 80 Lite 5G | Vivo V50 5G, V50e 5G | Xiaomi 14 Civi	</td>
                    <td className="border px-4 py-2">0.5%</td>
                  </tr>

                  <tr>
                    <td className="border px-4 py-2">Rewards on Acer Super ZX | iQOO Z10x 5G, Z105G, Neo 10R 5G, Neo 10, 13, Z10 Lite 5G | Lava Bold N1 Pro, Shark 5G | OnePlus 13R, 13, OP13S, Nord 4, Nord CE 4 | Poco M6 5G	</td>
                    <td className="border px-4 py-2">0.25%</td>
                  </tr>

                  <tr>
                    <td className="border px-4 py-2">Rewards on Realme GT 7Pro, Narzo 80x 5G, Narzo 80 pro 5G, GT 7, GT7 T, GT7 Dream Edition | Samsung S24 Ultra | Xiaomi Redmi Note 14 5G, Redmi A4, Redmi 14C 5G, Xiaomi 15, Redmi A4 5G, Redmi Note 14 Pro 5G, Redmi Note 14 Pro+ 5G	</td>
                    <td className="border px-4 py-2">0.25%</td>
                  </tr>

                  <tr>
                    <td className="border px-4 py-2">Rewards on Office Supplies | Wireless Accessories | Home Entertainment	</td>
                    <td className="border px-4 py-2">0</td>
                  </tr>

                  <tr>
                    <td className="border px-4 py-2">Rewards on All Apple products & any other mobile phones not mentioned above	</td>
                    <td className="border px-4 py-2">0</td>
                  </tr>

                  <tr>
                    <td className="border px-4 py-2">Rewards on Prime Membership | Travel & Insurance | Toys and Games | Pay Balance | Gift Cards | Credit Card Bills | Echo and Alexa devices | Pantry, Fresh | All Categories not mentioned	</td>
                    <td className="border px-4 py-2">0</td>
                  </tr>

                </table>
              </div>

              <h1 className="text-lg font-bold my-2 -ml-4">CashKaro Cashback Related</h1>
              <ul className="list-disc mb-7">
                <li>Tracking Time: 30 Minutes</li>
                <li>Confirmation Timeline: 70 Days</li>
                <li>Cashback on Ajio App orders: Applicable</li>
              </ul>

              <h1 className="text-lg font-bold my-2 -ml-4">How to get this Offer</h1>
              <ul className="list-disc mb-10">
                <li>Click on the Orange Button and visit Ajio</li>
                <li>Shop there as you normally do</li>
                <li>Cashback will be added to your CashKaro Account</li>
              </ul>

            </div>
            : ""
        }
      </div>

      
      <div>
        {
          selectedImage === flipkartImage ?
            <div className="my-10 mx-45">
              <h1 className="text-lg font-bold my-1 -ml-4">About this Offer</h1>

              {
                picture.details.map((desc, index) => (
                  <ul className="list-disc">
                    <li key={index}>{desc}</li>
                  </ul>
                ))
              }

          
              <h1 className="text-lg font-bold my-5 -ml-4">CashKaro Rewards Details</h1>
              <div className="mb-8">
                <table className="table-auto w-full border border-gray-500">
                  <tr>
                    <th className="px-4 py-2 text-center">Category</th>
                    <th className="px-4 py-2 text-center">CashKaro Rewards</th>
                  </tr>

                  <tr>
                    <td className="border px-4 py-2">Cashback on Men's Sports Footwear & Luggage / Travel Accessories (Max Cashback: Rs.35)	</td>
                    <td className="border px-4 py-2">7%</td>
                  </tr>


                  <tr>
                    <td className="border px-4 py-2">Cashback on Pharma on Flipkart Minutes ( Applicable on Delhi and Bengaluru only)	</td>
                    <td className="border px-4 py-2">7%</td>
                  </tr>

                  <tr>
                    <td className="border px-4 py-2">Cashback on Fashion and Lifestyle (Bags, Clothing, Footwear, Eyewear, Watches, Lingerie, Accessories and Fashion Jewellery)	</td>
                    <td className="border px-4 py-2">4.2%</td>
                  </tr>

                  <tr>
                    <td className="border px-4 py-2">Cashback on Men's Fashion & Lifestyle (Rest of the Super Categories)</td>
                    <td className="border px-4 py-2">3.5%</td>
                  </tr>

                  <tr>
                    <td className="border px-4 py-2">Cashback on Flipkart Kilos & Grocery Orders	</td>
                    <td className="border px-4 py-2">2.8%</td>
                  </tr>

                  <tr>
                    <td className="border px-4 py-2">Cashback on Furniture (Bed, Sofa, Shoe Cabinet, Bookshelf, Kitchen Cabinets, Cupboards, Bean Bag, Stool, TV Mount, Coffee Table, Office Study table etc.)	</td>
                    <td className="border px-4 py-2">2.80%</td>
                  </tr>

                  <tr>
                    <td className="border px-4 py-2">Cashback on Samsung Galaxy-A35 5G, Tecno POVA 7 Series	</td>
                    <td className="border px-4 py-2">2.8%</td>
                  </tr>

                  <tr>
                    <td className="border px-4 py-2">Cashback on Books & General Merchandise (Beauty, Auto Accessory, Toys, Personal Care, Books & Media, Baby Care, Sports, Food & Nutrition)	</td>
                    <td className="border px-4 py-2">2.8%</td>
                  </tr>

                  <tr>
                    <td className="border px-4 py-2">Cashback on Fully Automatic, Front Load, Washing Machine, Clothes Dryer,Dishwasher, Refrigerators (Single Door, Double Door, Side-by-Side, Mini Fridge) (Max Cashback:Rs.140)	</td>
                    <td className="border px-4 py-2">2.1%</td>
                  </tr>

                  <tr>
                    <td className="border px-4 py-2">Cashback on Water Purifier, Sewing Machine, Chimney, Water Dispenser, Humidifer, Vacuum cleaner, Service (Installation, Repair, AMC, Cleaning)(Max Cashback: Rs 140)</td>
                    <td className="border px-4 py-2">2.1%</td>
                  </tr>

                  <tr>
                    <td className="border px-4 py-2">Cashback on Juicer Mixer Grinder, Electric Vegatable cutter, Electric Rice Cooker, Inverter Battery, Voltage Stabilizer,Toaster, Sandwich Maker, Induction, Electric Kettle, Air Fryer (Max Cashback:Rs.140)	</td>
                    <td className="border px-4 py-2">2.1%</td>
                  </tr>

                  <tr>
                    <td className="border px-4 py-2">Cashback on Window AC, Split AC, Inverter AC, Microwave (Solo, Grill, Convection), Projectors, Sound Systems Large Screen TVs,( Except 32 inch)(Max Cashback:Rs.140)	</td>
                    <td className="border px-4 py-2">2.1%</td>
                  </tr>

                  <tr>
                    <td className="border px-4 py-2">Cashback on Desert Air Cooler, Personal Air Cooler, Ceiling Fan, Table Fan, Exhaust Fan, Pedestal Fan, Tower Fan (Max Cashback:Rs.140)	</td>
                    <td className="border px-4 py-2">2.1%</td>
                  </tr>

                  <tr>
                    <td className="border px-4 py-2">Cashback on Samsung F16 5G,Galaxy-F06 5G,Samsung Galaxy S24 FE	</td>
                    <td className="border px-4 py-2">2.1%</td>
                  </tr>

                  <tr>
                    <td className="border px-4 py-2">Cashback on 32 inch TV (Max Cashback: Rs.70)	</td>
                    <td className="border px-4 py-2">2.1%</td>
                  </tr>

                  <tr>
                    <td className="border px-4 py-2">Cashback on Home (Home Decor, Home Furnishing, Home Improvement, Household Supplies, Kitchen & Dining, Kitchen, Cookware, Pet Supplies,Tools & Hardware)	</td>
                    <td className="border px-4 py-2">1.40%</td>
                  </tr>

                  <tr>
                    <td className="border px-4 py-2">Cashback on Alcatel V3 Classic 5G, Alcatel V3 Pro 5G, Alcatel V3 Ultra 5G	</td>
                    <td className="border px-4 py-2">1.4%</td>
                  </tr>

                  <tr>
                    <td className="border px-4 py-2">Cashback on OnePlus 12R,OnePlus N20 SE,OnePlus Nord 3 5G,OnePlus Nord CE4,OnePlus Nord CE4 lite 5G,OnePlus Nord CE3 5G(Max Cashback: Rs.70)	</td>
                    <td className="border px-4 py-2">0.7%</td>
                  </tr>

                  <tr>
                    <td className="border px-4 py-2">Cashback on OnePlus Nord CE 3 Lite 5G,OnePlus Nord 4 5G,Vivo Y300 Plus 5G,Vivo V40e 5G,OPPO Reno10 Pro 5G,Samsung Galaxy A34 5G(Max Cashback: Rs.70)	</td>
                    <td className="border px-4 py-2">0.7%</td>
                  </tr>

                  <tr>
                    <td className="border px-4 py-2">Cashback on Samsung Galaxy Z Flip3 5G,Vivo V29 Pro 5G,Vivo V30e,Realme GT 6,VIVO X Fold3 Pro,Xiaomi 14 Civi,realme 14 Pro 5G(Max Cashback: Rs.70)	</td>
                    <td className="border px-4 py-2">0.7%</td>
                  </tr>

                  <tr>
                    <td className="border px-4 py-2">Cashback on Realme 14 Pro+ 5G,OPPO F21s Pro,OPPO F27 Pro+,OPPO F27 5G,OPPO Find X8 5G,OPPO Find X8 Pro 5G,Samsung Galaxy A15 5G(Max Cashback: Rs.70)	</td>
                    <td className="border px-4 py-2">0.7%</td>
                  </tr>

                   <tr>
                    <td className="border px-4 py-2">Cashback on Samsung Galaxy S25 5G,Samsung Galaxy A55 5G,Samsung Galaxy S25 Ultra 5G,Samsung Galaxy Z Flip5, Xiaomi 14 Ultra,VIVO V50(Max Cashback: Rs.70)	</td>
                    <td className="border px-4 py-2">0.7%</td>
                  </tr>

                  <tr>
                    <td className="border px-4 py-2">Cashback on Samsung Galaxy A54 5G,Samsung Galaxy Z Fold6 5G,Samsung Galaxy Z Fold5,Samsung Galaxy S25 Plus 5G,Samsung Galaxy Z Flip4 5G(Max Cashback: Rs.70)	</td>
                    <td className="border px-4 py-2">0.7%</td>
                  </tr>

                  <tr>
                   <td className="border px-4 py-2">Cashback on Vivo Y300 5G,Vivo V30 5G,Vivo V30 Pro 5G,Vivo V40 5G,Vivo V40 Pro 5G,Vivo X200 5G,Vivo Y200 Pro 5G,Vivo X200 Pro 5G,Vivo X200 Pro 5G(Max Cashback: Rs.70)	</td>
                    <td className="border px-4 py-2">0.7%</td>
                  </tr>

                  <tr>
                   <td className="border px-4 py-2">Cashback on vivo T3 Lite 5G,Samsung Galaxy A14 5G,Redmi 13c 5G,Redmi Note 13 5G,Realme C67 5G,OPPO A18,OPPO F21 Pro,realme 11 5G(Max Cashback: Rs.70)	</td>
                    <td className="border px-4 py-2">0.35%</td>
                  </tr>

                  <tr>
                   <td className="border px-4 py-2">Cashback on Realme C11 2021,realme GT Neo 3T,Realme X3 SuperZoom,Redmi Note 12 5G,Samsung Galaxy A23 5G,Vivo Y16,OPPO A3x 5G(Max Cashback: Rs.70)	</td>
                    <td className="border px-4 py-2">0.35%</td>
                  </tr>

                  <tr>
                   <td className="border px-4 py-2">Cashback on Vivo Y18t,Vivo Y28e 5G,Vivo Y22,Vivo Y18i,Vivo Y36,Vivo Y100A,Vivo Y27(Max Cashback: Rs.70)	</td>
                    <td className="border px-4 py-2">0.35%</td>
                  </tr>

                  <tr>
                   <td className="border px-4 py-2">Cashback on Flipkart Gift Cards | Apple Audio	</td>
                    <td className="border px-4 py-2">0%</td>
                  </tr>

                   <tr>
                   <td className="border px-4 py-2">Cashback on Gemstones, Precious Jewellery, Gold and Silver Coins	</td>
                    <td className="border px-4 py-2">0%</td>
                  </tr>

                  <tr>
                   <td className="border px-4 py-2">Cashback on Flipkart Minutes | Home and Kitchen Electronic Appliances | All other Categories not mentioned	</td>
                    <td className="border px-4 py-2">0%</td>
                  </tr>
                  

                </table>
              </div>

              
              <h1 className="text-lg font-bold my-2 -ml-4">How to get this Offer</h1>
              <ul className="list-disc mb-10">
                <li>Click on the Orange Button and visit Ajio</li>
                <li>Shop there as you normally do</li>
                <li>Cashback will be added to your CashKaro Account</li>
              </ul>

              <h1 className="text-lg font-bold my-2 -ml-4">Important Information</h1>
              <ul className="list-disc mb-10">
                <li>Shipping charges as applicable depending upon order value and pincode</li>
                
              </ul>

            </div>
            : ""
        }
      </div>

 
      <div>
        {
          selectedImage === MyntraImage ?
            <div className="my-10 mx-45">
              <h1 className="text-lg font-bold my-2 -ml-4">About this Offer</h1>

              {
                picture.details.map((desc, index) => (
                  <ul className="list-disc">
                    <li key={index}>{desc}</li>
                  </ul>
                ))
              }

             

              <h1 className="text-lg font-bold mb-2 mt-8 -ml-4">Cashback Rates</h1>
              <div className="mb-8">
                <table className="table-auto w-full border border-gray-500">
                  <tr>
                    <th className="px-4 py-2 text-center">Category</th>
                    <th className="px-4 py-2 text-center">CashKaro Rewards</th>
                  </tr>

                  <tr>
                    <td className="border px-4 py-2">Cashback on Home and Kitchen (New Users)	</td>
                    <td className="border px-4 py-2">6%</td>
                  </tr>


                  <tr>
                    <td className="border px-4 py-2">Cashback on Beauty and Personal Care (New Users)	</td>
                    <td className="border px-4 py-2">5.4%</td>
                  </tr>

                  <tr>
                    <td className="border px-4 py-2">Cashback on All Footwear and Toys (New Users)	</td>
                    <td className="border px-4 py-2">4.8%</td>
                  </tr>

                  <tr>
                    <td className="border px-4 py-2">Cashback on Home and Kitchen (Existing Users)	</td>
                    <td className="border px-4 py-2">3%</td>
                  </tr>

                  <tr>
                    <td className="border px-4 py-2">Cashback on Beauty and Personal Care, Footwear and Toys (Existing Users)	</td>
                    <td className="border px-4 py-2">2.4%</td>
                  </tr>

                  <tr>
                    <td className="border px-4 py-2">Cashback on Apparel</td>
                    <td className="border px-4 py-2">1.8%</td>
                  </tr>

                  <tr>
                    <td className="border px-4 py-2">Cashback on Gourmet | Jewellery (Ethnic, Western, Fine) & Accessories (Electronics & Others)	</td>
                    <td className="border px-4 py-2">1.2%</td>
                  </tr>

                  <tr>
                    <td className="border px-4 py-2">Cashback on Myntra Gift Card, Myntra Myncash, Silver and Gold coins, Gold and Silver Jewellery and Everything else	</td>
                    <td className="border px-4 py-2">0%</td>
                  </tr>

                </table>
              </div>

              <h1 className="text-lg font-bold my-2 -ml-4">Important Information</h1>
              <ul className="list-disc mb-7">
                <li>Delivery Fee: Rs. 149 for Orders below Rs. 499</li>
                <li>Free Shipping on Orders over Rs. 499</li>
                <li>Shipping fee on Orders Below Rs. 499: Rs. 100</li>
              </ul>

              <h1 className="text-lg font-bold my-2 -ml-4">How to get this Offer</h1>
              <ul className="list-disc mb-10">
                <li>Click on the Orange Button and visit Ajio</li>
                <li>Shop there as you normally do</li>
                <li>Cashback will be added to your CashKaro Account</li>
              </ul>

            </div>
            : ""
        }
      </div>

      <div>
        {
          selectedImage === MCaffeineImage ?
            <div className="my-6 mx-45">
              <h1 className="text-lg font-bold my-2 -ml-4">About this Offer</h1>

              {
                picture.details.map((desc, index) => (
                  <ul className="list-disc">
                    <li key={index}>{desc}</li>
                  </ul>
                ))
              }


              <h1 className="text-lg font-bold my-2 mt-10 -ml-4">CashKaro Cashback Details </h1>
              <ul className="list-disc mb-10">
                <li>Cashback for New Users: 10%</li>
                <li>Cashback for Existing Users: 8%</li>
                <li>Cashback on all Orders of Gold & Silver (Idols, Bars, Coins, and Jewellery): 0.33%</li>
              </ul>

              

              <h1 className="text-lg font-bold my-2 -ml-4">CashKaro Cashback Related</h1>
              <ul className="list-disc mb-10">
                <li>Tracking Time: 30 Minutes</li>
                <li>Confirmation Timeline: 70 Days</li>
                <li>Cashback on Mcaffeine App orders: Applicable</li>
              </ul>

              <h1 className="text-lg font-bold my-2 -ml-4">How to get this Offer</h1>
              <ul className="list-disc mb-10">
                <li>Click on the Orange Button and visit Mcaffeine</li>
                <li>Shop there as you normally do</li>
                <li>Cashback will be added to your CashKaro Account</li>
              </ul>

            </div>
            : ""
        }
      </div>
      

      <Footer />
    </>
  )
}

export default ImageDeatils