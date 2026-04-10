

import "../Style/Registration.css"



function Registration() {

     const handleSubmit = (e) => {

        e.preventDefault();

        window.open("/terms", "_blank")
    }
   
    return(
        <div className="Registration" id="registrations">

            <h1>Reality Goal Fitness Center</h1>
            <p>Hi, New here? Sign Up to start your fitness journey with us.</p>

            <form className="RegistrationForm" onSubmit={handleSubmit}>
                
               <label>First Name:</label><input type="text" name="FirstName" placeholder="Enter your firstname" required />
               <label>Last Name:</label><input type="text" name="LastName" placeholder="Enter your lastname" required />
               <label>ID Number:</label><input type="number" name="IDNumber" placeholder="Enter your ID number" required />
               <label>Email:</label><input type="email" name="Email" placeholder="Enter your email" required />
               <label>Phone Number:</label><input type="number" name="PhoneNumber" placeholder="Enter your number" required />
               <label>Address:</label><input type="address" name="Address" placeholder="Enter your address" required />
               <label>Password:</label><input type="password" name="Password" placeholder="Enter your password" required />
               <label>Re-Password:</label><input type="password" name="Re-Password" placeholder="Enter your re-password" required />
               <label>Country:</label><input type="country" name="Country" placeholder="Enter your lastname" required />


              <button type="submit" >Sign Up</button>


            </form>

        </div>
    )
}
export default Registration;