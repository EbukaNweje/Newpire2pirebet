import { useState } from "react";
import "./Mycss/Style.css";
import { AiOutlineClose } from "react-icons/ai";

const SignUp = () => {
const [isdisabled, setIsDisabled] = useState(true);



  return (
    <div className="Container">
        <div className="Wrapper">
          <div className="SignUpHeader">
            <h2>Register</h2>
              <div className="Close"><AiOutlineClose/></div>
          </div>
          <div className="SignUpInfo">
              <div className="BigBall"></div>
              <div className="SignupForm">
                  <div className="SignupFormWrapper">
                    <input type="email"  className="InPutForm" placeholder="Email"/>
                    <input type="password"  className="InPutForm" placeholder="Password"/> 
                    <select name="" id="" className="InPutForm">
                      <option value="">--- Select Fanpage ---</option>  
                    </select> 

                    <button className="Btn" 
                      disabled={isdisabled}
                      style={{backgroundColor: `${isdisabled ? "#ddd" : "green"}`}}
                    >Create New Account</button>

                    <div className="SignUpFooter"><p>By creating an account, you agree to our <span style={{color: "green"}}>Terms & Conditions </span> and confirm that you are at least 18 years old or over and all information given is true.</p></div>
                  </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default SignUp