import Header from "../Component/Header.jsx"
import Footer from "../Component/Footer.jsx"
import GoogleAuth from "../Component/GoogleAuth.jsx"


function Login() {
  

  
  return (
      <>
      <Header />
      
      <div className="flex flex-col justify-center items-center border-1 border-blue-400 border-solid my-50 mx-60">
       <img src="img/arrow-left.svg" alt="arrow" className="mr-35"  /> 
       <h1 className="block text-4xl font-extrabold ml-30 mt-4">Login or signup</h1>
       <p className="ml-14 my-2">We will send the OTP to verify</p>
       <input type="text" className="p-2 ml-10 my-2" placeholder="Enter mobile number or email" />

       <GoogleAuth />

        
      </div>


      <Footer />
      </>

  )
}

export default Login