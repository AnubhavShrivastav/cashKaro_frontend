import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from "./App"
import ImageDeatils from "./Pages/ImageDeatils";
// import ProductDetails from "./Pages/ProductDetails"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
    {/* <App /> */}
    <Route path="/" element={<App />} />
    <Route path="/:category/:id" element={<ImageDeatils />}  />
    </Routes>
    </Router>
  </StrictMode>,
)
