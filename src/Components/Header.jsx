import {IoIosMenu} from "react-icons/io";
import logo from "../assets/PierLogo.svg";
import {Drawer} from "antd";
import {useState} from "react";
import {FaCaretDown} from "react-icons/fa";
import {NavLink} from "react-router-dom";
import {CiUser} from "react-icons/ci";

const Header = () => {
    const [openLeft, setOpenLeft] = useState(false);
    const [europe, setEurope] = useState(false);
    const [england, setEngland] = useState(false);
    const [spain, setSpain] = useState(false);
    const [germany, setGermany] = useState(false);
    const [france, setFrance] = useState(false);
    const [italy, setItaly] = useState(false);

    const user = false;
    const [drop, setDrop] = useState(false);

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
                    <img src={logo} alt="" className="w-10" />
                </div>
                <div className="w-[30%] phone:w-max h-max flex items-center justify-end gap-4">
                    {!user ? (
                        <div className="w-20 h-max flex justify-end relative">
                            <CiUser
                                className="w-8 h-8 border-2 text-white border-gray-50 rounded-full flex items-center justify-center cursor-pointer p-1"
                                onClick={() => setDrop(!drop)}
                            />
                            {drop && (
                                <div className="absolute top-10 z-20 right-0 bg-slate-800 w-56 rounded p-2 h-max flex flex-col gap-2 text-white">
                                    <div className="w-full h-max flex flex-col gap-2 text-sm bg-slate-700 rounded-lg p-1">
                                        <p>Mark Spencer</p>
                                        <p className="w-full flex gap-2">
                                            User ID <span>#2000000</span>
                                        </p>
                                    </div>
                                    <div className="w-full h-max flex flex-col gap-2 text-sm bg-slate-700 rounded-lg p-1">
                                        <p>Account Balance</p>
                                        <p className="w-full flex justify-between">
                                            $200 <span>0.30000 BTC</span>
                                        </p>
                                    </div>
                                    <NavLink to={"/my-account"}>
                                        <div className="w-full h-12 flex flex-col justify-center gap-2 text-sm bg-slate-700 rounded-lg p-1 cursor-pointer">
                                            <p>My Account</p>
                                        </div>
                                    </NavLink>
                                    <div className="w-full h-12 flex flex-col justify-center gap-2 text-sm bg-slate-700 rounded-lg p-1 cursor-pointer">
                                        <p>My Betslips</p>
                                    </div>
                                    <div className="w-full h-12 flex flex-col gap-2 justify-center text-sm bg-slate-700 rounded-lg p-1 cursor-pointer">
                                        <p>Logout</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    ) : (
                        <>
                            {" "}
                            <button className="w-max h-max flex items-center px-3 py-2 bg-[#119702] text-white text-xs font-medium rounded">
                                Sign Up
                            </button>
                            <button className="w-max h-max flex items-center px-4 py-2 border rounded text-white border-[#119702] text-xs font-medium">
                                Login
                            </button>
                        </>
                    )}
                </div>
            </div>
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
                                    <NavLink to={"/uefa-champions-league"}>
                                        <div className="w-full h-9 rounded flex items-center cursor-pointer bg-gray-700 px-4">
                                            Uefa Champions League
                                        </div>
                                    </NavLink>
                                    <NavLink to={"uefa-europa-league"}>
                                        <div className="w-full h-9 rounded flex items-center cursor-pointer bg-gray-700 px-4">
                                            Uefa Europa League
                                        </div>
                                    </NavLink>
                                    <NavLink to={"uefa-super-cup"}>
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
                                    <NavLink to={"premier-league"}>
                                        <div className="w-full h-9 rounded flex items-center cursor-pointer bg-gray-700 px-4">
                                            Premier League
                                        </div>
                                    </NavLink>
                                    <NavLink to={"fa-cup"}>
                                        <div className="w-full h-9 rounded flex items-center cursor-pointer bg-gray-700 px-4">
                                            FA Cup
                                        </div>
                                    </NavLink>
                                    <NavLink to={"efl-cup"}>
                                        <div className="w-full h-9 rounded flex items-center cursor-pointer bg-gray-700 px-4">
                                            EFL Cup
                                        </div>
                                    </NavLink>
                                    <NavLink to={"community-shield"}>
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
                                    <NavLink to={"laliga"}>
                                        <div className="w-full h-9 rounded flex items-center cursor-pointer bg-gray-700 px-4">
                                            Laliga
                                        </div>
                                    </NavLink>
                                    <NavLink to={"copa-del-rey"}>
                                        <div className="w-full h-9 rounded flex items-center cursor-pointer bg-gray-700 px-4">
                                            Copa del ray
                                        </div>
                                    </NavLink>
                                    <NavLink to={"spanish-super-cup"}>
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
                                    <NavLink to={"bundesliga"}>
                                        <div className="w-full h-9 rounded flex items-center cursor-pointer bg-gray-700 px-4">
                                            Bundesliga
                                        </div>
                                    </NavLink>
                                    <NavLink to={"dfb-pokal"}>
                                        <div className="w-full h-9 rounded flex items-center cursor-pointer bg-gray-700 px-4">
                                            DFB Pokal
                                        </div>
                                    </NavLink>
                                    <NavLink to={"german-super-cup"}>
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
                                    <NavLink to={"seria-a"}>
                                        <div className="w-full h-9 rounded flex items-center cursor-pointer bg-gray-700 px-4">
                                            Seria A
                                        </div>
                                    </NavLink>
                                    <NavLink to={"copa-italia"}>
                                        <div className="w-full h-9 rounded flex items-center cursor-pointer bg-gray-700 px-4">
                                            Copa Italia
                                        </div>
                                    </NavLink>
                                    <NavLink to={"italia-super-cup"}>
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
                                    <NavLink to={"ligue-one"}>
                                        <div className="w-full h-9 rounded flex items-center cursor-pointer bg-gray-700 px-4">
                                            Ligue 1
                                        </div>
                                    </NavLink>
                                    <NavLink to={"coupe-de-france"}>
                                        <div className="w-full h-9 rounded flex items-center cursor-pointer bg-gray-700 px-4">
                                            Coupe De France
                                        </div>
                                    </NavLink>
                                    <NavLink to={"trophee-des-champions"}>
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
        </>
    );
};

export default Header;
