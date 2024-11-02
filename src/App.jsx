import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Thankyoupage from "./components/Thankyoupage";


function App() {
  

  return (
    <>
      <Router>
      <div>
        <Routes>
          <Route path="/" element={<Header/>} />
          <Route path="/thankyou" element={<Thankyoupage/>} />
       </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
