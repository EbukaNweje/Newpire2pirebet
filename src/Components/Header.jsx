import {IoIosMailUnread, IoIosMenu} from "react-icons/io";
import logo from "../assets/PierLogo.svg";
import {Drawer, Modal} from "antd";
import {useEffect, useState} from "react";
import {FaCaretDown} from "react-icons/fa";
import {NavLink} from "react-router-dom";
import {CiUser} from "react-icons/ci";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {userData, isLoggedInUser, logout, loginToken} from "../Global/Features";

const Header = () => {
    const [openInbox, setOpenInbox] = useState(false);
    const [openAcceptModal, setOpenAcceptModal] = useState(false);
    // const testData = [1, 2, 3, 4, 5];
    const [openLeft, setOpenLeft] = useState(false);
    const [europe, setEurope] = useState(false);
    const [england, setEngland] = useState(false);
    const [spain, setSpain] = useState(false);
    const [germany, setGermany] = useState(false);
    const [france, setFrance] = useState(false);
    const [italy, setItaly] = useState(false);
    const [drop, setDrop] = useState(false);
    const [myAccount, setMyAccount] = useState(false);
    const [openSignUp, setOpenSignUp] = useState(false);
    const [openLogin, setOpenLogin] = useState(false);
    const nav = useNavigate();
    const dispatch = useDispatch();

    const user = useSelector((state) => state.newPier2Pier.newPier2Pier.user);
    const userToken = useSelector(
        (state) => state.newPier2Pier.newPier2Pier.userToken
    );

    const isLoggedIn = useSelector(
        (state) => state.newPier2Pier.newPier2Pier.isLoggedIn
    );
    // console.log("Is it logged in?", isLoggedIn);
    console.log("Is User?", user);
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPwd, setLoginPwd] = useState("");
    const [loading, setLoading] = useState(false);
    const [loadingSignUp, setLoadingSignup] = useState(false);
    const [loadingVerify, setLoadingVerify] = useState(false);
    const [signUpmail, setSignUpMail] = useState("");
    const [signUpFname, setSignUpFname] = useState("");
    const [signUpUname, setSignUpUname] = useState("");
    const [signUpPwd, setSignupPwd] = useState("");
    const [FanPage, setFanPage] = useState("");
    const [openVerify, setOpenVerify] = useState(false);

    const handleResendOTP = () => {
        const loadingToast = toast.loading("Generating OTP...");
        const url =
            "https://pier2pier.onrender.com/api/user/resend-verification-otp";
        const data = {email: loginEmail};
        axios
            .post(url, data)
            .then((response) => {
                console.log(response);
                toast.dismiss(loadingToast);
                toast.success(`${response?.data?.message}`);
                localStorage.setItem("pierVerifyToken", response?.data?.token);
                localStorage.setItem("pierEmailSignUp", loginEmail);
                setOpenVerify(true);
            })
            .catch((error) => {
                toast.dismiss(loadingToast);
                console.log(error);
                toast.error("Error sending code, please try again");
            });
    };

    const handleLogin = (e) => {
        e.preventDefault();
        if (!loginPwd && !loginEmail) {
            toast.error("Please enter both email and password");
        } else {
            setLoading(true);
            const data = {email: loginEmail, password: loginPwd};
            const loadingToast = toast.loading("Logging In...");
            const url = "https://pire2pirebet-back-end.vercel.app/api/sign-in";
            axios
                .post(url, data)
                .then((res) => {
                    console.log(res.data);
                    toast.dismiss(loadingToast);
                    setLoading(false);
                    setOpenLogin(false);
                    dispatch(loginToken(res.data.token));
                    dispatch(userData(res.data.user));
                    dispatch(isLoggedInUser(true));
                    setLoginEmail("");
                    setLoginPwd("");
                })
                .catch((err) => {
                    console.log(err);
                    toast.dismiss(loadingToast);
                    setLoading(false);
                    // setOpenLogin(false);
                    toast.error(err.response.data.message);
                    if (
                        err.response.data.message ===
                        "Email Not Verified, Please verify your email to log in."
                    ) {
                        handleResendOTP();
                    }
                });
        }
    };

    const handleMailSender = () => {
        const loadingId = toast.loading("generating OTP code");
        const url = "https://pier2pier.onrender.com/api/signupmail";
        const data = {email: signUpmail};
        axios
            .post(url, data)
            .then((response) => {
                console.log(response);
                toast.dismiss(loadingId);
                toast.success(`${response.data.message}`);
                setOpenVerify(true);
            })
            .catch((error) => {
                toast.dismiss(loadingId);
                console.log(error);
                toast.error("Error sending code, please try again");
            });
    };

    const handleSignUp = (e) => {
        e.preventDefault();
        if (
            !signUpmail &&
            !signUpPwd &&
            !FanPage &&
            !signUpFname &&
            !signUpUname
        ) {
            toast.err("Please enter all fields");
        } else {
            setLoadingSignup(true);
            const data = {
                email: signUpmail,
                password: signUpPwd,
                fanClub: FanPage,
                fullName: signUpFname,
                userName: signUpUname,
            };
            const loadingToast = toast.loading("Loading In...");
            const url = "https://pire2pirebet-back-end.vercel.app/api/sign-up";
            axios
                .post(url, data)
                .then((res) => {
                    console.log(res);
                    localStorage.setItem(
                        "pierVerifyToken",
                        res?.data?.data?.token
                    );
                    localStorage.setItem("pierEmailSignUp", signUpmail);
                    toast.dismiss(loadingToast);
                    toast.success(res.data.message);
                    // const created = true;
                    if (res.data.data.isVerified === false) {
                        handleMailSender();
                    } else {
                        toast.error("Error Creating User");
                    }
                    setOpenSignUp(false);
                    setLoadingSignup(false);
                })
                .catch((err) => {
                    console.log(err);
                    toast.dismiss(loadingToast);
                    toast.error(err?.response.data.message);
                    setLoadingSignup(false);
                });
        }
    };

    const [otp, setOtp] = useState("");

    const token = localStorage.getItem("pierVerifyToken");
    const emailLS = localStorage.getItem("pierEmailSignUp");

    const handleVerify = () => {
        if (!otp) {
            alert("Please enter the OTP");
        } else {
            setLoadingVerify(true);
            const url = `https://pier2pier.onrender.com/api/user/verify/${token}`;
            const data = {otp: otp};
            axios
                .post(url, data)
                .then((response) => {
                    console.log(response);
                    toast.success(`${response.data.message}`);
                    setLoadingVerify(false);
                    setOpenVerify(false);
                    setOpenLogin(true);
                })
                .catch((error) => {
                    console.log(error);
                    toast.error(`${error.response.data.message}`);
                    setLoadingVerify(false);
                });
        }
    };

    const [exchangeRate, setExchangeRate] = useState(null);

    useEffect(() => {
        // Fetch the current exchange rate from an API (replace with a reliable API)
        axios
            .get("https://api.coindesk.com/v1/bpi/currentprice.json")
            .then((response) => {
                const rate = response.data.bpi.USD.rate.replace(",", ""); // assuming USD rate
                setExchangeRate(parseFloat(rate));
            })
            .catch((error) => {
                console.error("Error fetching exchange rate:", error);
            });
    }, []); // Empty dependency array ensures useEffect runs only once on component mount

    const stakeValueBTC = user.balance / exchangeRate;
    const roundedTotalBTCStake = parseFloat(stakeValueBTC.toFixed(8));

    const [offerData, setOfferData] = useState([]);

    const handleGetAllOffers = () => {
        const url = `https://pire2pirebet-back-end.vercel.app/api/alloffers`;
        const headers = {
            Authorization: `Bearer ${userToken}`,
        };
        axios
            .get(url, {headers})
            .then((response) => {
                console.log(response);
                setOfferData(response?.data?.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        if (userToken) {
            handleGetAllOffers();
        } else {
            console.log("No User");
        }
    }, []);

    return (
        <>
            <div className="w-full h-16 bg-lime-950 flex items-center justify-between px-5">
                <div className="w-[30%] h-max flex items-center justify-start">
                    <IoIosMenu
                        className="w-8 h-8 text-white"
                        onClick={() => setOpenLeft(true)}
                    />
                </div>
                <div className="w-[30%] h-max flex items-center justify-center">
                    <img
                        src={logo}
                        alt=""
                        className="w-10 cursor-pointer"
                        onClick={() => nav("/")}
                    />
                </div>
                <div className="w-[30%] phone:w-max h-max flex items-center justify-end gap-4">
                    {isLoggedIn ? (
                        <div className="w-20 h-max flex justify-end gap-2 relative">
                            <IoIosMailUnread
                                className="w-8 h-8 border-2 text-white border-gray-50 rounded-full flex items-center justify-center cursor-pointer p-1"
                                onClick={() => setOpenInbox(!openInbox)}
                            />

                            <CiUser
                                className="w-8 h-8 border-2 text-white border-gray-50 rounded-full flex items-center justify-center cursor-pointer p-1"
                                onClick={() => setDrop(!drop)}
                            />
                            {drop && (
                                <div className="absolute top-10 z-20 right-0 bg-slate-800 w-56 rounded p-2 h-max flex flex-col gap-2 text-white">
                                    <div className="w-full h-max flex flex-col gap-2 text-sm bg-slate-700 rounded-lg p-1">
                                        <p>{user?.fullName}</p>
                                        <p className="w-full flex gap-2">
                                            User ID{" "}
                                            <span>
                                                {user._id
                                                    .slice(14)
                                                    .toUpperCase()}
                                            </span>
                                        </p>
                                    </div>
                                    <div className="w-full h-max flex flex-col gap-2 text-sm bg-slate-700 rounded-lg p-1">
                                        <p>Account Balance</p>
                                        <p className="w-full flex justify-between">
                                            ${user.balance}{" "}
                                            <span>
                                                {roundedTotalBTCStake} BTC
                                            </span>
                                        </p>
                                    </div>
                                    {/* <NavLink to={"/my-account"}> */}
                                    <div className="w-full h-max flex flex-col justify-center text-sm bg-slate-800 rounded-lg cursor-pointer ">
                                        <div
                                            className="w-full h-12 flex items-center px-1 justify-between bg-slate-700 rounded-lg"
                                            onClick={() =>
                                                setMyAccount(!myAccount)
                                            }
                                        >
                                            <p>My Account</p>
                                            <FaCaretDown
                                                className={`w-5 h-5 transition-all duration-700 ${
                                                    myAccount
                                                        ? "transform -rotate-180"
                                                        : ""
                                                }`}
                                            />
                                        </div>
                                        <div
                                            className={`w-full ${
                                                myAccount
                                                    ? "max-h-64 overflow-hidden transition-max-h duration-700 ease-in-out"
                                                    : "max-h-0 overflow-hidden transition-max-h duration-700 ease-in-out "
                                            } flex flex-col gap-2 px-2 text-xs`}
                                        >
                                            <NavLink to={"/my-account/profile"}>
                                                <div className="w-full h-9 flex items-center pl-2 bg-slate-700 rounded  mt-2">
                                                    <p>My Profile</p>
                                                </div>
                                            </NavLink>
                                            <NavLink
                                                to={"/my-account/betslips"}
                                            >
                                                <div className="w-full h-9 flex items-center pl-2 bg-slate-700 rounded">
                                                    <p>My Betslips</p>
                                                </div>
                                            </NavLink>
                                            <NavLink
                                                to={"/my-account/transactions"}
                                            >
                                                <div className="w-full h-9 flex items-center pl-2 bg-slate-700 rounded">
                                                    <p>My Transactions</p>
                                                </div>
                                            </NavLink>
                                            <NavLink
                                                to={"/my-account/withdrawals"}
                                            >
                                                <div className="w-full h-9 flex items-center pl-2 bg-slate-700 rounded">
                                                    <p>Withdrawal</p>
                                                </div>
                                            </NavLink>
                                            <NavLink
                                                to={"/my-account/deposits"}
                                            >
                                                <div className="w-full h-9 flex items-center pl-2 bg-slate-700 rounded">
                                                    <p>Deposit</p>
                                                </div>
                                            </NavLink>
                                        </div>
                                    </div>
                                    {/* </NavLink> */}
                                    <div className="w-full h-12 flex flex-col justify-center gap-2 text-sm bg-slate-700 rounded-lg p-1 cursor-pointer">
                                        <p>My Betslips</p>
                                    </div>
                                    <div
                                        className="w-full h-12 flex flex-col gap-2 justify-center text-sm bg-slate-700 rounded-lg p-1 cursor-pointer"
                                        onClick={() => dispatch(logout())}
                                    >
                                        <p>Logout</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    ) : (
                        <>
                            {" "}
                            <button
                                className="w-max h-max flex items-center px-3 py-2 bg-[#119702] text-white text-xs font-medium rounded"
                                onClick={() => setOpenSignUp(true)}
                            >
                                Sign Up
                            </button>
                            <button
                                className="w-max h-max flex items-center px-4 py-2 border rounded text-white border-[#119702] text-xs font-medium"
                                onClick={() => setOpenLogin(true)}
                            >
                                Login
                            </button>
                        </>
                    )}
                </div>
            </div>
            <Drawer
                open={openInbox}
                onClose={() => setOpenInbox(false)}
                placement="right"
                maskClosable={true}
                width={300}
                title={"INBOX"}
                className="text-white"
                style={{background: "#1d1f1d"}}
            >
                <div className="w-full h-[90vh] overflow-y-auto flex flex-col gap-2 p-2">
                    {offerData.map((item, index) => (
                        <div
                            className="w-full h-max bg-slate-700 rounded flex flex-col gap-1 p-1"
                            key={index}
                        >
                            <p className="w-full h-max flex justify-between">
                                Game <span>Chelsea vs Man Utd</span>
                            </p>
                            <p className="w-full h-max flex justify-between">
                                Pick <span>Home -1</span>
                            </p>
                            <p className="w-full h-max flex justify-between">
                                Amount stake <span>${item.offerAmount}</span>
                            </p>
                            <p className="w-full h-max flex justify-between">
                                Offer against: {item?.offerType}{" "}
                                <span>Returns: $300</span>
                            </p>
                        </div>
                    ))}
                </div>
            </Drawer>
            <Modal
                open={openAcceptModal}
                cancelButtonProps={{hidden: true}}
                okButtonProps={{hidden: true}}
                closeIcon={true}
                onCancel={() => setOpenAcceptModal(false)}
            >
                <div className="w-full h-max flex flex-col items-center text-white">
                    <p>Confirm Offer</p>
                    <div className="w-full h-max flex flex-col gap-2">
                        <p className="w-full h-max flex justify-between">
                            Game: <span>Chelsea vs Man Utd</span>
                        </p>
                        <p className="w-full h-max flex justify-between">
                            Your Pick: <span>Home -1</span>
                        </p>
                        <p className="w-full h-max flex justify-between">
                            Offer against: <span>x3</span>
                        </p>
                        <p className="w-full h-max flex justify-between">
                            Your Stake: <span>100 USD</span>
                        </p>
                        <p className="w-full h-max flex justify-between">
                            Total Returns: <span>$300</span>
                        </p>
                        <p className="w-full h-max flex justify-between">
                            Total Returns BTC: <span>0.0049138 BTC</span>
                        </p>
                    </div>
                    <div className="w-full h-max p-2 flex items-center justify-center gap-3">
                        <button className="w-max h-max px-4 py-2 rounded bg-green-600">
                            Accept
                        </button>
                        <button
                            className="w-max h-max px-4 py-2 rounded bg-red-600"
                            onClick={() => setOpenAcceptModal(false)}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </Modal>
            <Drawer
                open={openLeft}
                onClose={() => setOpenLeft(false)}
                placement="left"
                maskClosable={true}
                width={300}
                title={"MENU"}
                className="text-white"
                style={{background: "#1d1f1d"}}
            >
                <div className="w-full h-[90vh] bg-[#1d1f1d] p-3 text-white overflow-y-auto scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-slate-800 scrollbar-track-gray-300 scrollbar scrollbar-w-[0.3rem]">
                    <div className="w-full h-max">
                        <div className="w-full h-10 pl-4 rounded flex items-center bg-gray-700">
                            Top Leagues
                        </div>
                        <div className="w-full h-max pt-4 overflow-y-auto">
                            <div className="w-full h-max rounded flex flex-col gap-2 ">
                                <div
                                    className="w-full h-10 rounded flex items-center cursor-pointer justify-between bg-gray-700 px-4"
                                    onClick={() => setEurope(!europe)}
                                >
                                    <p>Europe</p>
                                    <FaCaretDown
                                        className={`w-5 h-5 transition-all duration-700 ${
                                            europe
                                                ? "transform -rotate-180"
                                                : ""
                                        }`}
                                    />
                                </div>
                                <div
                                    className={` ${
                                        europe
                                            ? "max-h-44 overflow-hidden transition-max-h duration-700 ease-in-out"
                                            : "max-h-0 overflow-hidden transition-max-h duration-700 ease-in-out "
                                    }  w-full flex flex-col gap-2 px-2`}
                                >
                                    <NavLink
                                        onClick={() => setOpenLeft(false)}
                                        to={"/uefa-champions-league"}
                                    >
                                        <div className="w-full h-9 rounded flex items-center cursor-pointer bg-gray-700 px-4">
                                            Uefa Champions League
                                        </div>
                                    </NavLink>
                                    <NavLink
                                        onClick={() => setOpenLeft(false)}
                                        to={"uefa-europa-league"}
                                    >
                                        <div className="w-full h-9 rounded flex items-center cursor-pointer bg-gray-700 px-4">
                                            Uefa Europa League
                                        </div>
                                    </NavLink>
                                    <NavLink
                                        onClick={() => setOpenLeft(false)}
                                        to={"uefa-super-cup"}
                                    >
                                        <div className="w-full h-9 rounded flex items-center cursor-pointer bg-gray-700 px-4 mb-2">
                                            Uefa Super Cup
                                        </div>
                                    </NavLink>
                                </div>
                            </div>
                            <div className="w-full h-max rounded flex flex-col gap-2 ">
                                <div
                                    className="w-full h-10 rounded flex items-center cursor-pointer justify-between bg-gray-700 px-4"
                                    onClick={() => setEngland(!england)}
                                >
                                    <p>England</p>
                                    <FaCaretDown
                                        className={`w-5 h-5 transition-all duration-700 ${
                                            england
                                                ? "transform -rotate-180"
                                                : ""
                                        }`}
                                    />
                                </div>
                                <div
                                    className={` ${
                                        england
                                            ? "max-h-56 overflow-hidden transition-max-h duration-700 ease-in-out"
                                            : "max-h-0 overflow-hidden transition-max-h duration-700 ease-in-out "
                                    }  w-full flex flex-col gap-2 px-2`}
                                >
                                    <NavLink
                                        onClick={() => setOpenLeft(false)}
                                        to={"premier-league"}
                                    >
                                        <div className="w-full h-9 rounded flex items-center cursor-pointer bg-gray-700 px-4">
                                            Premier League
                                        </div>
                                    </NavLink>
                                    <NavLink
                                        onClick={() => setOpenLeft(false)}
                                        to={"fa-cup"}
                                    >
                                        <div className="w-full h-9 rounded flex items-center cursor-pointer bg-gray-700 px-4">
                                            FA Cup
                                        </div>
                                    </NavLink>
                                    <NavLink
                                        onClick={() => setOpenLeft(false)}
                                        to={"efl-cup"}
                                    >
                                        <div className="w-full h-9 rounded flex items-center cursor-pointer bg-gray-700 px-4">
                                            EFL Cup
                                        </div>
                                    </NavLink>
                                    <NavLink
                                        onClick={() => setOpenLeft(false)}
                                        to={"community-shield"}
                                    >
                                        <div className="w-full h-9 rounded flex items-center cursor-pointer bg-gray-700 px-4 mb-2">
                                            Community Shield
                                        </div>
                                    </NavLink>
                                </div>
                            </div>
                            <div className="w-full h-max rounded flex flex-col gap-2 ">
                                <div
                                    className="w-full h-10 rounded flex items-center cursor-pointer justify-between bg-gray-700 px-4"
                                    onClick={() => setSpain(!spain)}
                                >
                                    <p>Spain</p>
                                    <FaCaretDown
                                        className={`w-5 h-5 transition-all duration-700 ${
                                            spain ? "transform -rotate-180" : ""
                                        }`}
                                    />
                                </div>
                                <div
                                    className={` ${
                                        spain
                                            ? "max-h-44 overflow-hidden transition-max-h duration-700 ease-in-out"
                                            : "max-h-0 overflow-hidden transition-max-h duration-700 ease-in-out "
                                    }  w-full flex flex-col gap-2 px-2`}
                                >
                                    <NavLink
                                        onClick={() => setOpenLeft(false)}
                                        to={"laliga"}
                                    >
                                        <div className="w-full h-9 rounded flex items-center cursor-pointer bg-gray-700 px-4">
                                            Laliga
                                        </div>
                                    </NavLink>
                                    <NavLink
                                        onClick={() => setOpenLeft(false)}
                                        to={"copa-del-rey"}
                                    >
                                        <div className="w-full h-9 rounded flex items-center cursor-pointer bg-gray-700 px-4">
                                            Copa del ray
                                        </div>
                                    </NavLink>
                                    <NavLink
                                        onClick={() => setOpenLeft(false)}
                                        to={"spanish-super-cup"}
                                    >
                                        <div className="w-full h-9 rounded flex items-center cursor-pointer bg-gray-700 px-4 mb-2">
                                            Spanish Super Cup
                                        </div>
                                    </NavLink>
                                </div>
                            </div>
                            <div className="w-full h-max rounded flex flex-col gap-2 ">
                                <div
                                    className="w-full h-10 rounded flex items-center cursor-pointer justify-between bg-gray-700 px-4"
                                    onClick={() => setGermany(!germany)}
                                >
                                    <p>Germany</p>
                                    <FaCaretDown
                                        className={`w-5 h-5 transition-all duration-700 ${
                                            germany
                                                ? "transform -rotate-180"
                                                : ""
                                        }`}
                                    />
                                </div>
                                <div
                                    className={` ${
                                        germany
                                            ? "max-h-44 overflow-hidden transition-max-h duration-700 ease-in-out"
                                            : "max-h-0 overflow-hidden transition-max-h duration-700 ease-in-out "
                                    }  w-full flex flex-col gap-2 px-2`}
                                >
                                    <NavLink
                                        onClick={() => setOpenLeft(false)}
                                        to={"bundesliga"}
                                    >
                                        <div className="w-full h-9 rounded flex items-center cursor-pointer bg-gray-700 px-4">
                                            Bundesliga
                                        </div>
                                    </NavLink>
                                    <NavLink
                                        onClick={() => setOpenLeft(false)}
                                        to={"dfb-pokal"}
                                    >
                                        <div className="w-full h-9 rounded flex items-center cursor-pointer bg-gray-700 px-4">
                                            DFB Pokal
                                        </div>
                                    </NavLink>
                                    <NavLink
                                        onClick={() => setOpenLeft(false)}
                                        to={"german-super-cup"}
                                    >
                                        <div className="w-full h-9 rounded flex items-center cursor-pointer bg-gray-700 px-4 mb-2">
                                            German Super Cup
                                        </div>
                                    </NavLink>
                                </div>
                            </div>
                            <div className="w-full h-max rounded flex flex-col gap-2 ">
                                <div
                                    className="w-full h-10 rounded flex items-center cursor-pointer justify-between bg-gray-700 px-4"
                                    onClick={() => setItaly(!italy)}
                                >
                                    <p>Italy</p>
                                    <FaCaretDown
                                        className={`w-5 h-5 transition-all duration-700 ${
                                            italy ? "transform -rotate-180" : ""
                                        }`}
                                    />
                                </div>
                                <div
                                    className={` ${
                                        italy
                                            ? "max-h-44 overflow-hidden transition-max-h duration-700 ease-in-out"
                                            : "max-h-0 overflow-hidden transition-max-h duration-700 ease-in-out "
                                    }  w-full flex flex-col gap-2 px-2`}
                                >
                                    <NavLink
                                        onClick={() => setOpenLeft(false)}
                                        to={"seria-a"}
                                    >
                                        <div className="w-full h-9 rounded flex items-center cursor-pointer bg-gray-700 px-4">
                                            Seria A
                                        </div>
                                    </NavLink>
                                    <NavLink
                                        onClick={() => setOpenLeft(false)}
                                        to={"copa-italia"}
                                    >
                                        <div className="w-full h-9 rounded flex items-center cursor-pointer bg-gray-700 px-4">
                                            Copa Italia
                                        </div>
                                    </NavLink>
                                    <NavLink
                                        onClick={() => setOpenLeft(false)}
                                        to={"italia-super-cup"}
                                    >
                                        <div className="w-full h-9 rounded flex items-center cursor-pointer bg-gray-700 px-4 mb-2">
                                            Italia Super Cup
                                        </div>
                                    </NavLink>
                                </div>
                            </div>
                            <div className="w-full h-max rounded flex flex-col gap-2 ">
                                <div
                                    className="w-full h-10 rounded flex items-center cursor-pointer justify-between bg-gray-700 px-4"
                                    onClick={() => setFrance(!france)}
                                >
                                    <p>France</p>
                                    <FaCaretDown
                                        className={`w-5 h-5 transition-all duration-700 ${
                                            france
                                                ? "transform -rotate-180"
                                                : ""
                                        }`}
                                    />
                                </div>
                                <div
                                    className={` ${
                                        france
                                            ? "max-h-44 overflow-hidden transition-max-h duration-700 ease-in-out"
                                            : "max-h-0 overflow-hidden transition-max-h duration-700 ease-in-out "
                                    }  w-full flex flex-col gap-2 px-2`}
                                >
                                    <NavLink
                                        onClick={() => setOpenLeft(false)}
                                        to={"ligue-one"}
                                    >
                                        <div className="w-full h-9 rounded flex items-center cursor-pointer bg-gray-700 px-4">
                                            Ligue 1
                                        </div>
                                    </NavLink>
                                    <NavLink
                                        onClick={() => setOpenLeft(false)}
                                        to={"coupe-de-france"}
                                    >
                                        <div className="w-full h-9 rounded flex items-center cursor-pointer bg-gray-700 px-4">
                                            Coupe De France
                                        </div>
                                    </NavLink>
                                    <NavLink
                                        onClick={() => setOpenLeft(false)}
                                        to={"trophee-des-champions"}
                                    >
                                        <div className="w-full h-9 rounded flex items-center cursor-pointer bg-gray-700 px-4 mb-2">
                                            Trophee des champions
                                        </div>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-max">
                        <div className="w-full h-10 flex items-center bg-gray-700 rounded">
                            My Fan Page
                        </div>
                    </div>
                </div>
            </Drawer>

            <Modal
                open={openVerify}
                cancelButtonProps={{hidden: true}}
                okButtonProps={{hidden: true}}
                closeIcon={true}
                onCancel={() => setOpenVerify(false)}
            >
                <div className="w-full h-max text-white">
                    <div className="w-full h-20 flex items-center justify-center text-2xl">
                        Verify
                    </div>
                    <div className="w-full h-max flex items-center justify-center mb-3">
                        <p>Enter the otp sent to {emailLS}</p>
                    </div>
                    <div className="w-full h-max flex flex-col items-center gap-4">
                        <input
                            type="text"
                            value={otp.trim()}
                            onChange={(e) => setOtp(e.target.value)}
                            className="w-1/2 h-10 rounded text-center text-black"
                            placeholder="Enter otp"
                        />
                    </div>
                    <div className="w-full h-20 flex items-center justify-center">
                        <button
                            className="px-4 py-2 rounded bg-green-900 text-white disabled:bg-green-500 disabled:cursor-not-allowed"
                            disabled={loadingVerify}
                            onClick={handleVerify}
                        >
                            Verify
                        </button>
                    </div>
                </div>
            </Modal>
            <Modal
                open={openSignUp}
                cancelButtonProps={{hidden: true}}
                okButtonProps={{hidden: true}}
                closeIcon={true}
                onCancel={() => {
                    setOpenSignUp(false);
                    setLoadingSignup(false);
                }}
            >
                <div className="w-full h-max text-white">
                    <div className="w-full h-20 flex items-center justify-center text-2xl">
                        Register
                    </div>
                    <div className="w-full h-max flex flex-col gap-4">
                        <div className="w-full h-max">
                            <p>Full Name</p>
                            <input
                                type="text"
                                className="w-full h-10 rounded border border-gray-400 outline-none pl-3 text-black"
                                value={signUpFname}
                                onChange={(e) => setSignUpFname(e.target.value)}
                            />
                        </div>
                        <div className="w-full h-max">
                            <p>User Name</p>
                            <input
                                type="email"
                                className="w-full h-10 rounded border border-gray-400 outline-none pl-3 text-black"
                                value={signUpUname}
                                onChange={(e) => setSignUpUname(e.target.value)}
                            />
                        </div>
                        <div className="w-full h-max">
                            <p>Email</p>
                            <input
                                type="email"
                                className="w-full h-10 rounded border border-gray-400 outline-none pl-3 text-black"
                                value={signUpmail}
                                onChange={(e) => setSignUpMail(e.target.value)}
                            />
                        </div>
                        <div>
                            <p>Password</p>
                            <input
                                type="password"
                                className="w-full h-10 rounded border border-gray-400 outline-none pl-3 text-black"
                                value={signUpPwd}
                                onChange={(e) => setSignupPwd(e.target.value)}
                            />
                        </div>
                        <div className="w-full h-max text-black">
                            <select
                                name=""
                                id=""
                                className="w-full h-10 rounded border border-gray-400 outline-none pl-3"
                                value={FanPage}
                                onChange={(e) => setFanPage(e.target.value)}
                            >
                                <option value="">---Select Fanpage---</option>
                                <option value="CHE">Chelsea</option>
                                <option value="MANUTD">Man Utd</option>
                                <option value="BAR">Barcelona</option>
                                <option value="LIV">Liverpool</option>
                                <option value="REAL">Real Madrid</option>
                                <option value="PSG">PSG</option>
                                <option value="MON">Monacco</option>
                                <option value="ARS">Arsenal</option>
                                <option value="BAY">Bayern Munich</option>
                                <option value="DOR">Dortmund</option>
                                <option value="JUV">Juventus</option>
                                <option value="INT">Inter Milan</option>
                            </select>
                        </div>
                    </div>
                    <div className="w-full h-20 flex items-center justify-center">
                        <button
                            className="px-4 py-2 rounded bg-green-900 text-white disabled:cursor-not-allowed disabled:bg-gray-600"
                            disabled={loadingSignUp}
                            onClick={handleSignUp}
                        >
                            Register
                        </button>
                    </div>
                    <p className="text-xs">
                        By creating an account, you agree to our Terms &
                        Conditions and confirm that you are at least 18 years
                        old or over and all information given is true.
                    </p>
                </div>
            </Modal>
            <Modal
                open={openLogin}
                cancelButtonProps={{hidden: true}}
                okButtonProps={{hidden: true}}
                closeIcon={true}
                onCancel={() => {
                    setOpenLogin(false);
                    setLoading(false);
                }}
            >
                <div className="w-full h-max text-white">
                    <div className="w-full h-20 flex items-center justify-center text-2xl">
                        Login
                    </div>
                    <div className="w-full h-max flex flex-col gap-4">
                        <div className="w-full h-max">
                            <p>Email</p>
                            <input
                                type="email"
                                className="w-full h-10 rounded border border-gray-400 outline-none pl-3 text-black"
                                value={loginEmail}
                                onChange={(e) => setLoginEmail(e.target.value)}
                                placeholder="email@example.com"
                            />
                        </div>
                        <div>
                            <p>Password</p>
                            <input
                                type="email"
                                className="w-full h-10 rounded border border-gray-400 outline-none pl-3 text-black"
                                value={loginPwd}
                                onChange={(e) => setLoginPwd(e.target.value)}
                                placeholder="enter your password"
                            />
                        </div>
                    </div>
                    <div className="w-full h-20 flex items-center justify-center">
                        <button
                            className="px-4 py-2 rounded bg-green-900 text-white disabled:cursor-not-allowed disabled:bg-gray-500"
                            disabled={loading}
                            onClick={handleLogin}
                        >
                            {loading ? "Loading..." : "Log In"}
                        </button>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default Header;
