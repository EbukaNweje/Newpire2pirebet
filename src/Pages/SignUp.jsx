import { useState } from "react";
import "./Mycss/Style.css";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";
import toast, {Toaster} from "react-hot-toast";
import {ClipLoader} from "react-spinners";

const SignUp = () => {
const [isdisabled, setIsDisabled] = useState(true);
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [fanClub, setFanClub] = useState("");
const [error, setError] = useState({errorState: false, errMessage: ""});
const [loading, setLoading] = useState(false);

const handleMailSender = () => {
  // toast.loading("generating OTP code")
  const url = "https://pier2pier.onrender.com/api/signupmail";
  const data = {email: email};
  axios
      .post(url, data)
      .then((response) => {
          console.log(response);
          toast.success(`${response.data.message}`);
          setTimeout(() => {
              nav(`/register-info/${data.email}`);
          }, 5000);
      })
      .catch((error) => {
          console.log(error);
          toast.error("Error sending code, please try again");
      });
};

const handleSignUp = () => {
  setLoading(true);
  if (!email) {
      setLoading(false);
      setError({errorState: true, errMessage: "Input Email Address"});
  } else if (!email.includes("@")) {
      setLoading(false);
      setError({errorState: true, errMessage: "Email must contain @"});
  } else if (!password) {
      setLoading(false);
      setError({errorState: true, errMessage: "Input Password"});
  } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
          password
      )
  ) {
      setLoading(false);
      setError({
          errorState: true,
          errMessage:
              "* Password must contain uppercase, lowercase, digit, and special character",
      });
  }  else {
      setLoading(true);
      const url = "https://pire2pirebet-back-end.vercel.app/api/sign-up";
      const data = {
          email: email,
          password: password,
          fanClub: fanClub
      };
      toast.loading("Creating User...");
      axios
          .post(url, data)
          .then((response) => {
              toast.success(
                  `User created successfully ${response.data.message}`
              );
              localStorage.setItem(
                  "verifyToken",
                  response?.data?.data?.token
              );
              console.log(response);
              const created = true;
              if (created) {
                  handleMailSender();
              } else {
                  console.log("Error Creating User");
              }
              setLoading(false);
          })
          .catch((error) => {
              console.log(error);
              setLoading(false);
              toast.error(`${error?.response?.data?.message}`);
          });
  }
};

const handelBtn = () => {
  if(fanClub > 0){
    setIsDisabled(true);
  }else{
    setIsDisabled(false);
  }
}
// const handelBtn = () => {
//   if(password.trim() === '') {
//     setIsDisabled(true);
//   }else if (password >= 0){
//     setIsDisabled(false);
//   }
// }

console.log(error );


  return (
    <div className="Container">
        <Toaster toastOptions={{duration: 4000}} />
        <div className="Wrapper">
          <div className="SignUpHeader">
            <h2>Register</h2>
              <div className="Close"><AiOutlineClose/></div>
          </div>
          <div className="SignUpInfo">
              <div className="BigBall"></div>
              <div className="SignupForm">
                  <div className="SignupFormWrapper">
                    <input type="email"  className="InPutForm" placeholder="Email"
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
                    <input type="password"  className="InPutForm" placeholder="Password"
                        value={password}
                       onChange={(e) => {
                        setPassword(e.target.value);
                        setError((prevState) => ({
                                        ...prevState,
                                        errorState: false,
                                        errMessage: "",
                                    }));
                                    
                    }}
                    /> 
                    <select name="" id="" className="InPutForm" 
                       value={fanClub}
                       onChange={(e) => {
                           setFanClub(e.target.value);
                           setError((prevState) => ({
                                        ...prevState,
                                        errorState: false,
                                        errMessage: "",
                                    }));
                                    handelBtn()
                       }}
                    >
                      <option value="">--- Select Fanpage ---</option> 
                      <option value="Me">Me</option> 
                      <option value="Mee">Mee</option> 
                    </select> 

                    <button className="Btn" 
                      disabled={isdisabled}
                      style={{backgroundColor: `${isdisabled ? "#ddd" : "green"}`}}
                      onClick={handleSignUp}
                    >
                      {loading ? (
                                <ClipLoader color="#36d7b7" />
                            ) : (
                                "Create New Account"
                            )}
                      </button>

                    <div className="SignUpFooter"><p>By creating an account, you agree to our <span style={{color: "green"}}>Terms & Conditions </span> and confirm that you are at least 18 years old or over and all information given is true.</p></div>
                  </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default SignUp