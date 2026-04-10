import "../Style/Navbar.css";
import {Link} from "react-router-dom"

function Navbar() {
    
    return (

        <div className="Navbar">

            
            <h1>RealityFit</h1>
 
           <a href="#home"> <h2>Home</h2> </a>
           <a href="#aboutus"> <h2>About Us</h2> </a>
           <a href="#membership"> <h2>Membership</h2> </a>
           <a href="#trainers"> <h2>Trainers</h2> </a>
           <a href="#contactus"> <h2>Contact Us</h2> </a>
           <Link to="/logIn"> <h2>LogIn</h2> </Link>
           
        </div>
    )
}

export default Navbar