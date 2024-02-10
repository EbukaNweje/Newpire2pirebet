import {useState} from "react";
import data from "../../assets/Games.json";
// import {useDispatch} from 'react-redux'
// import { betSlip } from "../../Global/Features";
import {Modal} from "antd";
import {BsInfoCircle} from "react-icons/bs";

const Prem = () => {
    // console.log(data[0].england.premier_league);
    // const dispatch = useDispatch()
    const prem = data[0].england.premier_league;
    // console.log(prem);
    const [openFanPage, setOpenFanPage] = useState(false);

    return (
        <>
            {prem.map((item, index) => (
                <div
                    className="w-80 h-full bg-black flex flex-col justify-between rounded-lg p-4"
                    key={index}
                >
                    <p className="text-xs">Featured Match</p>
                    <div className="w-full h-max flex justify-between">
                        <div className="w-max h-max flex flex-col gap-1">
                            <p>{item.home}</p>
                            <p>{item.away}</p>
                        </div>
                        <div className="w-max flex flex-col items-end">
                            <p className="text-xl">{item.time}</p>
                            <p className="text-xs">{item.date}</p>
                        </div>
                    </div>
                    <div className="w-full h-max flex justify-between">
                        <div
                            className="w-[30%] h-10 rounded-lg flex justify-between bg-gray-600 p-1"
                            onClick={() => setOpenFanPage(true)}
                        >
                            <p className="w-full h-full flex justify-between py-1 px-2 cursor-pointer">
                                1 <span>{item.home_win}</span>
                            </p>
                        </div>
                        <div className="w-[30%] h-10 rounded-lg flex justify-between bg-gray-600 p-1">
                            <p className="w-full h-full flex justify-between py-1 px-2 cursor-pointer">
                                x <span>{item.draw}</span>
                            </p>
                        </div>
                        <div
                            className="w-[30%] h-10 rounded-lg flex justify-between bg-gray-600 p-1"
                            onClick={() => setOpenFanPage(true)}
                        >
                            <p className="w-full h-full flex justify-between py-1 px-2 cursor-pointer">
                                2 <span>{item.away_win}</span>
                            </p>
                        </div>
                    </div>
                </div>
            ))}
            <Modal
                open={openFanPage}
                cancelButtonProps={{hidden: true}}
                okButtonProps={{hidden: true}}
                closeIcon={false}
                onCancel={() => setOpenFanPage(false)}
            >
                <div className="w-full h-[60vh] flex flex-col items-center text-white">
                    <p className="text-xl">Fan Page</p>
                    <div className="w-full h-10 flex items-center justify-between">
                        <div className="w-1/2 flex items-center justify-center">
                            User
                        </div>
                        <div className="w-1/2 flex items-center justify-center">
                            Picks
                        </div>
                    </div>
                    <div className="w-full h-[50vh] flex flex-col gap-3 overflow-y-auto">
                        <div className="w-full h-max flex flex-col gap-3">
                            <div className="w-full h-10 flex gap-2 items-center justify-between ">
                                <div className="w-1/2 h-full flex items-center justify-center bg-slate-600">
                                    John
                                </div>
                                <div className="w-1/2 h-full flex items-center justify-center bg-slate-600">
                                    <p className="w-max flex items-center gap-4">
                                        -1x3{" "}
                                        <span>
                                            <BsInfoCircle className="w-5 h-5" />
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <div className="w-full h-10 flex gap-2 items-center justify-between ">
                                <div className="w-1/2 h-full flex items-center justify-center bg-slate-600">
                                    John
                                </div>
                                <div className="w-1/2 h-full flex items-center justify-center bg-slate-600">
                                    <p className="w-max flex items-center gap-4">
                                        -1x3{" "}
                                        <span>
                                            <BsInfoCircle className="w-5 h-5" />
                                        </span>
                                    </p>
                                </div>
                            </div>

                            <div className="w-full h-10 flex gap-2 items-center justify-between ">
                                <div className="w-1/2 h-full flex items-center justify-center bg-slate-600">
                                    John
                                </div>
                                <div className="w-1/2 h-full flex items-center justify-center bg-slate-600">
                                    <p className="w-max flex items-center gap-4">
                                        -1x3{" "}
                                        <span>
                                            <BsInfoCircle className="w-5 h-5" />
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default Prem;
