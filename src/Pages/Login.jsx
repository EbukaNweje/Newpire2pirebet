import { useState } from "react";
import "./Mycss/Style.css";
import { AiOutlineClose } from "react-icons/ai";

const Login = () => {

  const [isdisabled, setIsDisabled] = useState(true);

  return (
    <div className="Container">
        <div className="Wrapper">
          <div className="SignUpHeader">
            <h2>Login</h2>
              <div className="Close"><AiOutlineClose/></div>
          </div>
          <div className="SignUpInfo">
              <div className="BigBall"></div>
              <div className="SignupForm">
                  <div className="SignupFormWrapper">
                    <input type="email"  className="InPutForm" placeholder="Email"/>
                    <input type="password"  className="InPutForm" placeholder="Password"/> 

                      <div className="CheckForget">
                        <div className="Check">
                          <article><input type="checkbox" name="" id="" />Remember me</article>
                          <article><input type="checkbox" name="" id="" />Keep me signed in</article>
                        </div>
                        <div className="Forget">Forgot Password ?</div>
                      </div>

                    <button className="Btn" 
                      disabled={isdisabled}
                      style={{backgroundColor: `${isdisabled ? "#ddd" : "green"}`}}
                    >Login</button>

                    {/* <div className="SignUpFooter"><p>By creating an account, you agree to our <span style={{color: "green"}}>Terms & Conditions </span> and confirm that you are at least 18 years old or over and all information given is true.</p></div> */}
                  </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Login