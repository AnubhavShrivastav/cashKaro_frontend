import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from "./App"
import Login from "./Pages/Login";
// import ImageDeatils from "./Pages/ImageDeatils";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
    <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/app" element={<App />} />
    {/* <Route path="/:category/:id" element={<ImageDeatils />}  /> */}
    </Routes>
    </Router>
  </StrictMode>,
)
