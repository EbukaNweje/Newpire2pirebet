import { useState } from "react";
import "./Mycss/Style.css";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";
import toast, {Toaster} from "react-hot-toast";
import {ClipLoader} from "react-spinners";

const Verify = () => {
 const [isdisabled, setIsDisabled] = useState(true);
 const [email, setEmail] = useState("");
 const [loading, setLoading] = useState(false);

  return (
    <div className="Container">
    <div className="Wrapper">
      <div className="SignUpHeader">
        <h2>verify your account</h2>
          <div className="Close"><AiOutlineClose/></div>
      </div>
      <div className="SignUpInfo">
          <div className="BigBall"></div>
          <div className="SignupForm">
              <div className="SignupFormWrapper"  style={{justifyContent: "center", paddingTop: "0px"}}>
                <input type="email"  className="InPutForm" placeholder="Email"  style={{margin: "0px"}}
                 value={email}
                 onChange={(e) => {
                     setEmail(e.target.value);
                     setError((prevState) => ({
                                   ...prevState,
                                   errorState: false,
                                   errMessage: "",
                               }));
                 }}
                />
                <button className="Btn" 
                  disabled={isdisabled}
                  style={{backgroundColor: `${isdisabled ? "#ddd" : "green"}`}}
                >
                    {loading ? (
                                <ClipLoader color="#36d7b7" />
                            ) : (
                                "verify"
                            )}
                </button>

                {/* <div className="SignUpFooter"><p>By creating an account, you agree to our <span style={{color: "green"}}>Terms & Conditions </span> and confirm that you are at least 18 years old or over and all information given is true.</p></div> */}
              </div>
          </div>
      </div>
    </div>
</div>
  )
}

export default Verify