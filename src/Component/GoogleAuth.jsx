import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google"
import { jwtDecode } from "jwt-decode"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function GoogleAuth() {
  const navigate = useNavigate()

  const Client = `${import.meta.env.VITE_CLIENT}`
  console.log(`CLIENT_id: ${Client}`)
  console.log(import.meta.env.VITE_API_URL)


  const handleSuccess = async (credentialResponse) => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/google`, {
        token: credentialResponse.credential,
      });

      console.log(`token: ${credentialResponse.credential}`)
      console.log(jwtDecode(credentialResponse.credential))

      console.log("Backend response:", res.data);
      // Save token in localStorage
      localStorage.setItem("token", res.data.token);
      navigate("/")

    } catch (err) {
      console.error(" Login failed:", err);
    }
  };

  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_CLIENT} >
      <GoogleLogin
        onSuccess={handleSuccess}
        onError={() => console.log("Google Login Failed")}
      />
    </GoogleOAuthProvider>

  )
}

export default GoogleAuth