
import "../Style/Trainers.css"
import coach1 from "../assets/coach1.jpg"
import coach4 from "../assets/coach4.webp"
import coach3 from "../assets/coach3.jpg"
import trainer1 from "../assets/trainer1.jpg"
import trainer2 from "../assets/trainer2.avif"
import trainer3 from "../assets/trainer3.jpg"

function Trainers() {
    
    return (

        <div className="trainers-container" id="trainers">

            <h1>Our Coaches And Trainers</h1>
            <p>Meet our professional team ready to guide you</p>


            <div className="trainer-group">

                <div className="trainer-card"  >
                
                    <img src={coach1} alt="coach1" />

                <div className="trainer-overlay">

                    <h2>John Smith</h2> <br />

                </div>
                </div>

                 <div className="trainer-card">
                    
                    <img src={coach4} alt="coach4" />

                    <div className="trainer-overlay">

                        <h2>Emily Clark</h2> <br />

                    </div>

                </div>

                 <div className="trainer-card">
                    
                    <img src={coach3} alt="coach3" />

                    <div className="trainer-overlay">

                        <h2>Tshepo Mahlangu</h2> <br />

                    </div>

                </div>

                <div className="trainer-card">
                    
                        <img src={trainer1} alt="coach1" />

                    <div className="trainer-overlay">

                        <h2>Sarah Lee</h2> <br />

                    </div>

                </div>


                
                <div className="trainer-card">
                    
                    <img src={trainer2} alt="trainer1" />

                    <div className="trainer-overlay">

                        <h2>Michael Green</h2> <br />

                    </div>

                </div>

                <div className="trainer-card">
                    
                    <img src={trainer3} alt="trainer3" />

                    <div className="trainer-overlay">

                        <h2>Emily Clark</h2> <br />

                    </div>

                </div>


            </div>





        </div>
    )
}

export default Trainers;