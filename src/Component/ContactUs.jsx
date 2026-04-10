
import "../Style/ContactUs.css"
import PhoneImg from "../assets/telephone.png"
import EmailImage from "../assets/email.png"
import LocationImage from "../assets/location.png"

function ContactUs() {
    
    return (
        <div className="ContactUs">
            
            <h1>Contact Us</h1>

            <div className="ContactUs-TextImg">

            <div className="Contact-Row"><img src={PhoneImg} alt="Phone" /><p>Phone: 0998765674 </p></div>
            <div className="Contact-Row"><img src={EmailImage} alt="Email" /><p>Email: info@gmail.com </p></div>
            <div className="Contact-Row"><img src={LocationImage} alt="Location" /><p>Location: South Africa</p></div>

            </div>

                <div className="hours">

                <h3>Opening Hours</h3>
                <p>Mon - Friday: 7 AM - 5 PM <br /> 
                   Saturday: 7 AM - 3 PM <br />
                   Sunday: 7 AM - 1 PM
                </p>

            </div>

        </div>
    )

}
export default ContactUs
