
import "../Style/SuccessMessage.css"

function Success () {

    const handleDone = () => {
    window.open("/", "_blank")
   }
    
    return (
        <div className="success-container">

            <h1> Payment Successful </h1>
            <p>Thank you for join Reality Goal Fitness Center. <br /><br />
            Your membership is now active. </p>

            
            <button onClick={handleDone}>Ok</button>
        </div>
    )
}

export default Success;