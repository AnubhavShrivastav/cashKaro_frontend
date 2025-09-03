import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google"
// import { jwtDecode } from "jwt-decode"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function GoogleAuth() {
  const navigate = useNavigate()

  const Client = "1035866504161-om2d5dopv4hln647gerge1n3o2o1tnbm.apps.googleusercontent.com"


  const handleSuccess = async (credentialResponse) => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/google`, {
        token: credentialResponse.credential,
      });

      console.log("Backend response:", res.data);
      navigate("/")
      // Save token in localStorage
      localStorage.setItem("token", res.data.token);

    } catch (err) {
      console.error(" Login failed:", err);
    }
  };

  return (
    <GoogleOAuthProvider clientId={Client} >
      <GoogleLogin
        onSuccess={handleSuccess}
        onError={() => console.log("Google Login Failed")}
      />
    </GoogleOAuthProvider>

  )
}

export default GoogleAuth