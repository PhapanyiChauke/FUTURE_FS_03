import '../Style/Dashboard.css';
import HomeWorkout from "../assets/home-workout.jpg"
import GymSession from "../assets/gymsession.jpg"

function Dashboard() {
    
    
const username = localStorage.getItem("username") || "Guest";

return (
    <div className='dashboard-container'>

    <h1>Hello, {username} </h1>

    <p>Welcome back to RealityFIT website. <br /> <br /> 
       Ready to start your home workout or gym session?
    </p>

    <div className='dash-card'>

        <img src={HomeWorkout} alt="" />
        <h3>Home Workout</h3>

    </div>

    <div className='dash-card'>

    <img src={GymSession} alt="" />
    <h3>Gym Training</h3>

    </div>

    <button className='Cancel' onClick={() => window.open("/", "_blank")}>Cancel</button>

    </div>
)
}

export default Dashboard;