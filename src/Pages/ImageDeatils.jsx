import { useParams, Link, useLocation } from "react-router-dom"
import Header from "../Component/Header"
import Footer from "../Component/Footer";

function ImageDeatils() {


  return (
    <>
      <Header />

      <div className="my-4 mx-5 md:mt-22 md:mx-15 text-sm inline-block">
        <Link to={"/"} className="text-gray-800">Home</Link> / <strong>brands</strong>
      </div>

      <div className="flex justify-center relative mb-5 sm:mt-6 md:mt-5">

        <img src="https://asset22.ckassets.com/resources/image/staticpage_images/Under%20574-1758200347.png" className="w-[350px] h-[250px] md:w-[450px] md:h-[300px]" />

      </div>

      <div className="flex justify-center mb-7">
        <button className="bg-orange-500 px-41 py-4 rounded-lg text-white text-lg font-medium cursor-pointer">Grab Deal</button>
      </div>

      <div>

        <div className="my-8 mx-8 md:my-9 md:mx-45">
          <h1 className="text-lg font-bold my-2 -ml-4">About this Offer</h1>
          <ul className="list-disc mb-10">
            <li>Everything under Rs. 499</li>
            <li>Upto 10% CashKaro Cashback on all Orders</li>
            <li>Flat 10% AJIO Supercash on all Orders</li>
          </ul>

          <h1 className="md:text-lg font-bold my-2 mt-10 -ml-4">CashKaro Cashback Details </h1>
          <ul className="list-disc mb-10">
            <li>Cashback for New Users: 10%</li>
            <li>Cashback for Existing Users: 8%</li>
            <li>Cashback on all Orders of Gold & Silver (Idols, Bars, Coins, and Jewellery): 0.33%</li>
          </ul>

          <h1 className="md:text-lg font-bold my-2 -ml-4">Important Information</h1>
          <ul className="list-disc mb-10">
            <li>No Cashback on EMP code order & Alliance code orders</li>
            <li>No Cashback on transactions via Ajio Business Account</li>
            <li>Cashback is calculated on order amount excluding what is paid via Ajio wallets, Reliance point or gift vouchers</li>
            <li>Cashback is not applicable on Bulk Transactions</li>
          </ul>

          <h1 className="md:text-lg font-bold my-2 -ml-4">CashKaro Cashback Related</h1>
          <ul className="list-disc mb-10">
            <li>Tracking Time: 30 Minutes</li>
            <li>Confirmation Timeline: 70 Days</li>
            <li>Cashback on Ajio App orders: Applicable</li>
          </ul>

          <h1 className="md:text-lg font-bold my-2 -ml-4">How to get this Offer</h1>
          <ul className="list-disc mb-10">
            <li>Click on the Orange Button and visit Ajio</li>
            <li>Shop there as you normally do</li>
            <li>Cashback will be added to your CashKaro Account</li>
          </ul>

        </div>


      </div>



      <Footer />
    </>
  )
}

export default ImageDeatils