

import { useState } from "react";
import "../Style/Payment.css";
import SuccessMessage from "./SuccessMessage"

function Payment() {

    const selectedPlan = "Membership Plan Payment";

    const [isPaid, setIsPaid] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsPaid(true)
    }

    const goBackToPayment = () => {
        setIsPaid(false);
    }

    return (
        <div className="payment-container">

            {isPaid ? ( <SuccessMessage onBack={goBackToPayment}/> ) : (
                <>
            <h1>Complete Your Payment</h1>
            <p className="subtitle">
            Secure your membership and ready to be part of RealityFIT Family
            </p>

            <div className="plan-box">

            <h2>Plans</h2>
            <p>{selectedPlan}</p>
            </div>

            <div className="payment-card">

                <h2>Card Details</h2>

                <input type="text" placeholder="Card Holder Name" />
                
                <input type="text" placeholder="Card Number" maxLength="16" />
           

            <div className="row">

                <input type="text" placeholder="MM/YY" />
                
                <input type="text" placeholder="CVV" maxLength="3" />
            </div>
            </div>

            <form onSubmit={handleSubmit}>

            <div className="plan-box">

                <h1>Choose Your Membership Plan</h1>

                    <h3>Monthly Membership</h3>

                    <label>

                        <input type="radio" name="plan" value="monthly" required />
                        R350 - R510 per month
                    </label>

                    <br /> <br /> <br />

                    <h3>Cash Plan:</h3>

                    <label>
                        <input type="radio" name="plan" value="6months" required />
                        6 Months: R3,500
                    </label>
                       <br /> <br />
                     <label>
                        <input type="radio" name="plan" value="12months" required />
                        12 Months: R5,800
                    </label>

                     <br /> <br /> <br />

                    <h3>Student Plan</h3>
                     <label>
                        <input type="radio" name="plan" value="student" required />
                        R340 per month
                    </label>

                    <button className="pay-btn" type="submit">Confirm Payment</button>

                    </div>
                </form>

                </>
            )}
            </div>
            
        

    )
    
}

export default Payment;
