

import "../Style/Home.css"

function Home() {

    const openRegistration = () => {

        window.open("/registration", "_blank");
    }
    
    return(
        <div className="Home-Background">
            <div className="Home">
            <h1>Reality Goal Fitness Center</h1>
            <p>Your Goal. Your Work. Your Result</p>

           
            <button onClick={openRegistration}>Start your journey</button> 

        
           
            </div>
        </div>
    )
}
export default Home;