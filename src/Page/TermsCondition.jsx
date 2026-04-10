
import "../style/TermsCondition.css"

function TermsCondition() {

   const handleDone = () => {
    window.open("/", "_blank")
   }
    return(

        <div className="TermsCondition">

            <h1>Reality Goal Fitness Center Terms And Conditions</h1>

            <p>1. Membership: Is a valid for the period specified at sign up. Access to facilities & services is subject to our rules and policies. <br /> <br />

                2. Use of facilities: Members must use equipment and facilities responsibility and as intended. No guests allowed without prior approval. <br /> <br />

                3. Safety: Members must report any injuries or issues to staff immediately. Follow all safety guideliness and instructions. <br /> <br />

                4. Payments: Are non-refundable. Late payments may incur additional fees. <br /> <br />

                5. Conduct: Respect other members and staff. No harassment, aggression or inappropriate behaviour tolerated.
            </p>

            <h4>Please confirm you've read and agree to these terms to proceed. <br /> <br />
            <input type="checkbox" id="agree" /> I agree to the Terms & Conditions </h4>

            <button onClick={handleDone}>Done</button>
        </div>
    )
}

export default TermsCondition
