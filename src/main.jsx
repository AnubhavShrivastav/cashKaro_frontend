import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from "./App"
import Login from "./Pages/Login";
import OTP from "./Component/OtpValidate";
// import ImageDeatils from "./Pages/ImageDeatils";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
    <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/" element={<App />} />
    <Route path="/verifyotp" element={<OTP />} />
    {/* <Route path="/:category/:id" element={<ImageDeatils />}  /> */}
    </Routes>
    </Router>
  </StrictMode>,
)
