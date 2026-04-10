
import {useEffect, useState } from 'react'
import "../Style/MembershipCards.css"

function MembershipCards() {

    const fullText = "Membership Plans";
    const [text, setText] = useState("");
    const [IsDeleting, setIsDeleting]  = useState(false);

    useEffect(() => {

        let speed = IsDeleting ? 50 : 100;

        const timer = setTimeout (() => {
            if (!IsDeleting) {
                setText(fullText.substring(0, text.length + 1))
            } else {
                setText(fullText.substring(0, text.length - 1))
            }

            if (text == fullText) {
                setTimeout(() => setIsDeleting(true), 1000);
            }

            if (text === "") {
                setIsDeleting(false);
            }
        }, speed);

        return () => clearTimeout(timer);
    }, [text, IsDeleting]);

    return (

        <div className='membership-container' id='membership'>

            <div className='membership-info'>
            <h1 className="typing">{text}</h1>

            <p>Choose a plan that fits your lifestyle and start your fitness journey today.</p>

            <button onClick={() => window.open("/payment", "_blank")}>Ready to become a member</button>

            </div>

            <div className='card-group'>

                <div className='card'>
                    <h2>Monthly <br /> Membership </h2>
                    <div className='overlay'>
                        <p> R350 - R510 per month <br /> <br />
                            Cash Plan: <br />
                            6 months: R3,500 <br />
                            12 months: R5,800
                        </p>
                    </div>
                </div>

                <div className='card'>

                    <h2>Student <br /> Plan</h2>
                    <div className='overlay'>
                        <p>R350 montly <br /> <br />
                        Requires valid student <br /> number and ID
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default MembershipCards;