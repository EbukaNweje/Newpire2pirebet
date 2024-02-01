import {IoIosMenu} from "react-icons/io";
import logo from "../assets/PierLogo.svg";
import {Drawer} from "antd";
import {useState} from "react";
import {FaCaretDown} from "react-icons/fa";

const Header = () => {
    const [openLeft, setOpenLeft] = useState(false);
    const [europe, setEurope] = useState(false);
    const [england, setEngland] = useState(false);
    const [spain, setSpain] = useState(false);
    const [germany, setGermany] = useState(false);
    const [france, setFrance] = useState(false);
    const [italy, setItaly] = useState(false);

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
                    <button className="w-max h-max flex items-center px-3 py-2 bg-[#119702] text-white text-xs font-medium rounded">
                        Sign Up
                    </button>
                    <button className="w-max h-max flex items-center px-4 py-2 border rounded text-white border-[#119702] text-xs font-medium">
                        Login
                    </button>
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
                                            ? "max-h-56 overflow-hidden transition-max-h duration-700 ease-in-out"
                                            : "max-h-0 overflow-hidden transition-max-h duration-700 ease-in-out "
                                    }  w-full flex flex-col gap-2 px-2`}
                                >
                                    <div className="w-full h-9 rounded flex items-center cursor-pointer bg-gray-700 px-4">
                                        Uefa Champions League
                                    </div>
                                    <div className="w-full h-9 rounded flex items-center cursor-pointer bg-gray-700 px-4">
                                        Uefa Europa League
                                    </div>
                                    <div className="w-full h-9 rounded flex items-center cursor-pointer bg-gray-700 px-4">
                                        Uefa Conference Leage
                                    </div>
                                    <div className="w-full h-9 rounded flex items-center cursor-pointer bg-gray-700 px-4 mb-2">
                                        Uefa Super Cup
                                    </div>
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
                                    <div className="w-full h-9 rounded flex items-center cursor-pointer bg-gray-700 px-4">
                                        Premier League
                                    </div>
                                    <div className="w-full h-9 rounded flex items-center cursor-pointer bg-gray-700 px-4">
                                        FA Cup
                                    </div>
                                    <div className="w-full h-9 rounded flex items-center cursor-pointer bg-gray-700 px-4">
                                        EFL Cup
                                    </div>
                                    <div className="w-full h-9 rounded flex items-center cursor-pointer bg-gray-700 px-4 mb-2">
                                        Community Shield
                                    </div>
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
                                    <div className="w-full h-9 rounded flex items-center cursor-pointer bg-gray-700 px-4">
                                        Laliga
                                    </div>
                                    <div className="w-full h-9 rounded flex items-center cursor-pointer bg-gray-700 px-4">
                                        Copa del ray
                                    </div>
                                    <div className="w-full h-9 rounded flex items-center cursor-pointer bg-gray-700 px-4 mb-2">
                                        Spanish Super Cup
                                    </div>
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
                                    <div className="w-full h-9 rounded flex items-center cursor-pointer bg-gray-700 px-4">
                                        Bundesliga
                                    </div>
                                    <div className="w-full h-9 rounded flex items-center cursor-pointer bg-gray-700 px-4">
                                        DFB Pokal
                                    </div>

                                    <div className="w-full h-9 rounded flex items-center cursor-pointer bg-gray-700 px-4 mb-2">
                                        German Super Cup
                                    </div>
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
                                    <div className="w-full h-9 rounded flex items-center cursor-pointer bg-gray-700 px-4">
                                        Seria A
                                    </div>
                                    <div className="w-full h-9 rounded flex items-center cursor-pointer bg-gray-700 px-4">
                                        Copa Italia
                                    </div>

                                    <div className="w-full h-9 rounded flex items-center cursor-pointer bg-gray-700 px-4 mb-2">
                                        Italia Super Cup
                                    </div>
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
                                    <div className="w-full h-9 rounded flex items-center cursor-pointer bg-gray-700 px-4">
                                        Ligue 1
                                    </div>
                                    <div className="w-full h-9 rounded flex items-center cursor-pointer bg-gray-700 px-4">
                                        Coupe De France
                                    </div>
                                    <div className="w-full h-9 rounded flex items-center cursor-pointer bg-gray-700 px-4 mb-2">
                                        Trophee des champions
                                    </div>
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
