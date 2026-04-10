import "../Style/App.css"

import Navbar from "../Component/Navbar"
import Home from "../Component/Home"
import AboutUs from "../Component/AboutUs"
import ContactUs from "../Component/ContactUs"
import LogIn from "../Component/LogIn"
import Registration from "../Page/Registration"
import TermsCondition from "../Page/TermsCondition"
import MembershipCards from "./MembershipCards"
import Trainers from "./Trainers"
import Payment from "../Page/Payment"
import Dashboard from './Dashboard';

import { Routes, Route } from "react-router-dom"


function App() {

  return (

    
    <Routes>

      
    <Route path="/" element={
    <>
    <Navbar />
    <div id="home"><Home /></div>
    <div id="aboutus"><AboutUs /></div>
    < div id="membership"> <MembershipCards /> </div>
    <Trainers />
    <div id="contactus"><ContactUs /></div>
  
      </>
    } />
   

    
    <Route path="/registration" element={<Registration />} />
    
    <Route path="/payment" element={<Payment />} />

    <Route path="/terms" element={<TermsCondition />} />
    
    <Route path="/login" element={<LogIn />} />
    
    <Route path="/dashboard" element={<Dashboard />} />


    

   </Routes>
   
  )
  
}

export default App