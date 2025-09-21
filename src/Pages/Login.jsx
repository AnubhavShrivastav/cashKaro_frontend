import Header from "../Component/Header.jsx"
import Footer from "../Component/Footer.jsx"
import GoogleAuth from "../Component/GoogleAuth.jsx"
import { useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"

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

      <div className="flex flex-col sm:my-20 md:justify-center md:items-center md:my-50 md:mx-60">
        <Link to={"/"}>
          <img src="img/arrow-left.svg" alt="arrow" className="my-5 mx-2 md:mr-35" />
        </Link>
        <h1 className="text-3xl mx-3 md:text-4xl font-extrabold md:ml-30 md:mt-4">Login or signup</h1>
        <p className="my-2 mx-3 text-sm md:ml-8">We will send the OTP to verify</p>
        <input type="text" className="p-2 mx-3 md:ml-40 my-5 border-1 border-gray-400 rounded-lg md:w-80" placeholder="Enter Mobile Number" value={phone} max={10} onChange={(e) => setPhone(e.target.value)} />
        <button onClick={sendOTP} className="bg-blue-600 text-white mx-20 p-2 font-bold inline md:rounded-xs rounded-xl my-4 cursor-pointer">Send OTP</button>
        <p className="text-xl inline mx-50 my-3">or</p>

        <p className="text-sm mx-36 my-3 md:m-8">Continue with Google</p>
        <GoogleAuth />

        <p className="text-sm m-5 md:m-2">By continuing, you agree to CashKaro's terms &<br /> conditions and privacy policy</p>

      </div>
      <Footer />
    </>

  )
}

export default Login