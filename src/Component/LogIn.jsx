import "../Style/LogIn.css"

function LogIn() {

    const handleLogin = (e) => {
        e.preventDefault();

        const username = e.target.Email.value;

        localStorage.setItem("username", username);

        window.open("/dashboard", "_blank");
    }
    
    return(
        <div className="LogIn-Background" id="logIn">
        <div className="LogIn">

            <h1>Welcome back to Reality Goal Fitness Center</h1>
             <p>Welcome back to <span>Reality Goal Fitness Center! </span><br />Please log in to access your account.</p>

            
            <form className="LogInForm" onSubmit={handleLogin}>
                
               <label>Email:</label><input type="email" name="Email" placeholder="Enter your email" required /> 
               <label>Password:</label><input type="password" name="Password" placeholder="Enter your password" required />

               <p>Forgot Password</p>
              

               <button type="submit">Sign In</button>

               <h4 className="SignUp">Don't have an account? <span>Sign Up </span></h4>

            </form>

        </div>
        </div>
    )
}
export default LogIn

