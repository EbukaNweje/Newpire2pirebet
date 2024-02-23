import {useState} from "react";
import {Modal} from "antd";

const PremTest = () => {
    const [openMkt, setOpenMkt] = useState(false);
    return (
        <>
            <div className="w-80 h-full bg-black flex flex-col justify-between rounded-lg p-4">
                <p className="text-xs">Featured Match</p>
                <div className="w-full h-max flex justify-between">
                    <div className="w-max h-max flex flex-col gap-1">
                        <p>Chelsea</p>
                        <p>Burnley</p>
                    </div>
                    <div className="w-max flex flex-col items-end">
                        <p className="text-xl">12:30</p>
                        <p className="text-xs">02-02-2024</p>
                    </div>
                </div>
                <div
                    className="w-full h-max flex justify-between"
                    onClick={() => setOpenMkt(true)}
                >
                    <div className="w-[30%] h-10 rounded-lg flex justify-between bg-gray-600 p-1">
                        <p className="w-full h-full flex justify-between py-1 px-2 cursor-pointer">
                            1 <span>20%</span>
                        </p>
                    </div>
                    <div className="w-[30%] h-10 rounded-lg flex justify-between bg-gray-600 p-1">
                        <p className="w-full h-full flex justify-between py-1 px-2 cursor-pointer">
                            x <span>15%</span>
                        </p>
                    </div>
                    <div className="w-[30%] h-10 rounded-lg flex justify-between bg-gray-600 p-1">
                        <p className="w-full h-full flex justify-between py-1 px-2 cursor-pointer">
                            2 <span>60%</span>
                        </p>
                    </div>
                </div>
            </div>
            <Modal
                open={openMkt}
                cancelButtonProps={{hidden: true}}
                okButtonProps={{hidden: true}}
                closeIcon={false}
                onCancel={() => setOpenMkt(false)}
            >
                <div className="w-full h-[65vh] flex flex-col items-center text-white">
                    <div className="w-full h-10 flex items-center justify-center gap-5 text-xl ">
                        <p>Chelsea</p>
                        <p>VS</p>
                        <p>Burnley</p>
                    </div>
                    <div className="w-full h-[60vh] flex flex-col gap-2 ">
                        <p className="w-full flex justify-center">
                            Available Market Picks
                        </p>
                        <div className="w-full h-max flex">
                            <div className="w-1/2 h-max flex flex-col items-center gap-2">
                                <p>Home Picks</p>
                                <div className="w-full h-max flex ">
                                    <div className="w-1/2 h-max flex flex-col items-center gap-2">
                                        <div className="w-max h-max px-5 py-3 rounded bg-slate-600">
                                            -1
                                        </div>
                                        <div className="w-max h-max px-5 py-3 rounded bg-slate-600">
                                            -2
                                        </div>
                                        <div className="w-max h-max px-5 py-3 rounded bg-slate-600">
                                            -3
                                        </div>
                                        <div className="w-max h-max px-5 py-3 rounded bg-slate-600">
                                            -4
                                        </div>
                                        <div className="w-max h-max px-5 py-3 rounded bg-slate-600">
                                            -5
                                        </div>
                                    </div>
                                    <div className="w-1/2 h-max flex flex-col items-center gap-2">
                                        <div className="w-max h-max px-5 py-3 rounded bg-slate-600">
                                            +1
                                        </div>
                                        <div className="w-max h-max px-5 py-3 rounded bg-slate-600">
                                            +2
                                        </div>
                                        <div className="w-max h-max px-5 py-3 rounded bg-slate-600">
                                            +3
                                        </div>
                                        <div className="w-max h-max px-5 py-3 rounded bg-slate-600">
                                            +4
                                        </div>
                                        <div className="w-max h-max px-5 py-3 rounded bg-slate-600">
                                            +5
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/2 h-max flex flex-col items-center gap-2">
                                <p>Away Picks</p>
                                <div className="w-full h-max flex ">
                                    <div className="w-1/2 h-max flex flex-col items-center gap-2">
                                        <div className="w-max h-max px-5 py-3 rounded bg-slate-600">
                                            -1
                                        </div>
                                        <div className="w-max h-max px-5 py-3 rounded bg-slate-600">
                                            -2
                                        </div>
                                        <div className="w-max h-max px-5 py-3 rounded bg-slate-600">
                                            -3
                                        </div>
                                        <div className="w-max h-max px-5 py-3 rounded bg-slate-600">
                                            -4
                                        </div>
                                        <div className="w-max h-max px-5 py-3 rounded bg-slate-600">
                                            -5
                                        </div>
                                    </div>
                                    <div className="w-1/2 h-max flex flex-col items-center gap-2">
                                        <div className="w-max h-max px-5 py-3 rounded bg-slate-600">
                                            +1
                                        </div>
                                        <div className="w-max h-max px-5 py-3 rounded bg-slate-600">
                                            +2
                                        </div>
                                        <div className="w-max h-max px-5 py-3 rounded bg-slate-600">
                                            +3
                                        </div>
                                        <div className="w-max h-max px-5 py-3 rounded bg-slate-600">
                                            +4
                                        </div>
                                        <div className="w-max h-max px-5 py-3 rounded bg-slate-600">
                                            +5
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-16 mt-5 flex items-center gap-2">
                            <input
                                type="number"
                                className="w-32 h-10 pl-2 rounded"
                                placeholder="your stake"
                            />
                            <div>
                                <p>
                                    Amount: <span>100 USD</span>
                                </p>
                                <p>
                                    Value in BTC: <span>0.003127</span>
                                </p>
                            </div>
                        </div>
                        <div className="w-full h-max flex items-center justify-center">
                            <button className="w-max h-max px-4 py-2 bg-green-700 rounded">
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default PremTest;
