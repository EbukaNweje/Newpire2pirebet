import {Outlet} from "react-router";
import Carousel from "../Components/Carousel";
import Header from "../Components/Header";
import SubHeader from "../Components/SubHeader";
import Footer from "../Components/Footer";
import {useState} from "react";
import {Drawer} from "antd";
import {RiDeleteBin6Line} from "react-icons/ri";

const Home = () => {
    const [openSlip, setOpenSlip] = useState(false);
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
                <div className="w-full h-[90vh] bg-[#1d1f1d] p-3 text-white overflow-y-auto scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-slate-800 scrollbar-track-gray-300 scrollbar scrollbar-w-[0.3rem]">
                    <div className="w-full h-10 flex items-center ">
                        <p className="w-full flex justify-between items-center ">
                            Bet Slip<span>2 Selected</span>
                        </p>
                    </div>
                    <div className="w-full h-10 flex justify-end items-center gap-3">
                        <div className="w-max h-max flex items-center justify-end gap-3 cursor-pointer">
                            Clear All
                            <RiDeleteBin6Line className="w-6 h-6 text-red-500 cursor-pointer" />
                        </div>
                    </div>
                </div>
            </Drawer>
        </>
    );
};

export default Home;
