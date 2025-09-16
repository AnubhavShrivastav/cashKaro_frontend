import { useState } from 'react';
import axios from "axios"
import { useNavigate, useLocation } from "react-router-dom"
import OtpInput from 'react-otp-input';
import Header from './Header';
import Footer from './Footer';

export default function OTP() {
  const [otp, setOtp] = useState('');
  const navigate = useNavigate()
  const location = useLocation()
  const phone = location.state

  const verifyOTP = async () => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/verifyotp`, {
        phone, otp
      })
      console.log("backend response :", res.data)
      localStorage.setItem("token", res.data.Data.mytoken)
      navigate("/")

    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <Header />

      <div className='flex items-center flex-col justify-center h-screen bg-gray-100'>
        <img src="img/arrow-left.svg" className='mr-40 my-6' alt="arrow" />
        <h1 className='my-4 mx-16 font-bold text-4xl'>Enter OTP</h1>
        <p>OTP send to {phone}</p>

        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={4}
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input {...props} />}
          inputStyle={{ width: "50px", height: "50px", margin: "14px", border: 1, borderColor: "gray", borderStyle: "solid", fontSize: "30px", borderRadius: "4px", }}
        />
        <button onClick={verifyOTP} className='m-10 bg-blue-700 px-24 py-4 rounded-xl text-white cursor-pointer text-xl font-semibold'>Verify OTP</button>
      </div>
      <Footer />
    </>
  );
}