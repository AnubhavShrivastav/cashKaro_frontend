import Header from "../Component/Header.jsx"
import Footer from "../Component/Footer.jsx"
import GoogleAuth from "../Component/GoogleAuth.jsx"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function Login() {

  const [phone, setPhone] = useState("")

  const navigate = useNavigate()

  const sendOTP = async () => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/phone`, {
        phone: phone
      });
      console.log("backend response", res.data)
      navigate("/verifyotp", { state: phone })

    } catch (error) {
      console.log("failed to generate OTP", error)
    }
  }

  return (
    <>
      <Header />

      <div className="flex flex-col justify-center items-center border-1 border-blue-400 border-solid my-50 mx-60">
        <img src="img/arrow-left.svg" alt="arrow" className="mr-35" />
        <h1 className="block text-4xl font-extrabold ml-30 mt-4">Login or signup</h1>
        <p className="ml-14 my-2">We will send the OTP to verify</p>
        <input type="text" className="p-2 ml-10 my-2 border-1 border-gray-400 rounded-lg" placeholder="Enter Mobile Number" value={phone} max={10} onChange={(e) => setPhone(e.target.value)} />
        <button onClick={sendOTP} className="bg-blue-600 text-white p-2 font-bold inline rounded-xs my-4 cursor-pointer">Send OTP</button>
        <span className="w-[0.5%] bg-red-600 h-0.5 m-4">
        </span>
        <p className="text-xl inline">or</p>
        <span className="w-[0.5%] bg-red-600 h-0.5 m-4">
        </span>

        <p className="m-4">Continue with Google</p>
        <GoogleAuth />

        <p className="m-2">By continuing, you agree to CashKaro's terms &<br /> conditions and privacy policy</p>

      </div>


      <Footer />
    </>

  )
}

export default Login