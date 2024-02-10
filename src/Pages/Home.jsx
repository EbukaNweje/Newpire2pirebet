import {Outlet} from "react-router";
import Carousel from "../Components/Carousel";
import Header from "../Components/Header";
import SubHeader from "../Components/SubHeader";
import Footer from "../Components/Footer";
import {useState} from "react";
import {Drawer} from "antd";
import {RiDeleteBin6Line} from "react-icons/ri";
import {IoIosRemoveCircle} from "react-icons/io";
import {useSelector} from "react-redux";
import {clearSlip} from "../Global/Features";
import {useDispatch} from "react-redux";

const Home = () => {
    const [openSlip, setOpenSlip] = useState(false);
    const betslip = useSelector(
        (state) => state.newPier2Pier.newPier2Pier.slip
    );
    console.log(betslip);
    const dispatch = useDispatch();
    return (
        <>
            <div
                className={`w-full h-max min-h-screen px-80 phone:px-0 bg-black relative`}
            >
                <Header />
                <SubHeader />
                <Carousel />
                <div className="w-full h-max min-h-[32vh] text-white">
                    <Outlet />
                </div>
                <Footer />
                <div
                    className="fixed top-[90vh] right-5 w-14 h-14 flex items-center justify-center flex-col bg-lime-700 bg-opacity-80 text-white rounded"
                    onClick={() => setOpenSlip(true)}
                >
                    <p>1</p>
                    <p className="text-sm">Betslip</p>
                </div>
            </div>
            <Drawer
                open={openSlip}
                onClose={() => setOpenSlip(false)}
                placement="right"
                maskClosable={true}
                width={350}
                title={"BETSLIP"}
                className="text-white"
                style={{background: "#1d1f1d"}}
            >
                <div className="w-full h-[90vh] flex flex-col justify-between bg-[#1d1f1d] p-3 text-white overflow-y-auto scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-slate-800 scrollbar-track-gray-300 scrollbar scrollbar-w-[0.3rem]">
                    <div className="w-full h-10 flex items-center border-b border-b-gray-500">
                        <p className="w-full flex justify-between items-center ">
                            2 Selected
                        </p>

                        <div
                            className="w-max h-max flex cursor-pointer"
                            onClick={() => dispatch(clearSlip())}
                        >
                            <RiDeleteBin6Line className="w-6 h-6 text-red-500 cursor-pointer" />
                        </div>
                    </div>
                    <div className="w-full h-[60vh] flex flex-col gap-2 overflow-y-auto overflow-hidden scrollbar-thumb-gray-300 scrollbar-track-gray-100 scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
                        <div className="w-full h-max bg-[#373a45] flex flex-col gap-2 p-2 rounded">
                            <div className="w-full h-max flex justify-between">
                                <p>Bridgeton Picks</p>
                                <p className=" ">-3x5</p>
                                <span>
                                    <IoIosRemoveCircle className="w-6 h-6 cursor-pointer text-red-300" />
                                </span>
                            </div>
                            <p className="w-full h-max flex items-center justify-center gap-2">
                                <span>Chelsea</span>
                                vs
                                <span>Man Utd</span>
                            </p>
                            <div className="w-full h-max flex justify-between">
                                <p className="w-max flex gap-1 h-max items-center text-xs">
                                    USD
                                    <input
                                        type="number"
                                        placeholder="stake"
                                        className="w-20 h-8 pl-1 rounded outline-none text-black text-sm"
                                    />
                                </p>
                                <p className="w-max flex gap-1 h-max items-center text-xs">
                                    BTC
                                    <div className="w-max h-8 px-2 rounded flex items-center outline-none text-black text-sm bg-slate-100">
                                        1000.00000
                                    </div>
                                </p>
                            </div>
                            <div className="w-full h-max flex justify-between">
                                <p>Stake Value: 2</p>
                                <p>
                                    potential winnings <span>1000 USD</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-32 flex flex-col gap-3 p-2">
                        <p className="w-full h-max flex justify-between text-sm">
                            Stakes $300 <span> Stake BTC: 0.00704913</span>
                        </p>
                        <p className="w-full h-max flex justify-between text-sm">
                            Returns $300 <span>Returns BTC: 0.00704913</span>
                        </p>
                        <button className="w-full h-12 rounded bg-green-400 flex items-center justify-center">
                            Book Bet
                        </button>
                    </div>
                </div>
            </Drawer>
        </>
    );
};

export default Home;
