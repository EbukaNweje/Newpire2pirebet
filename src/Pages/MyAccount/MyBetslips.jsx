import {useState} from "react";

const MyBetslips = () => {
    const [drop, setDrop] = useState(false);
    const [drop2, setDrop2] = useState(false);
    const [drop3, setDrop3] = useState(false);
    return (
        <>
            <div className="w-full h-max">
                <div className="w-full h-12 flex items-center px-3 justify-between bg-gray-700 text-white mb-2">
                    <p className="text-2xl">My Betslips</p>
                </div>
                <div className="w-full h-max  text-white flex flex-col gap-1 p-1">
                    <div className="w-full h-max ">
                        <div
                            className="w-full h-20 bg-slate-700"
                            onClick={() => setDrop(!drop)}
                        >
                            <p className="w-full flex justify-between">
                                Game: #123456 <span>Single</span>
                            </p>
                            <p className="w-full flex justify-between">
                                Total Stake: $200{" "}
                                <span>Total Winning:5000</span>
                            </p>
                            <p className="w-full flex justify-between">
                                Status: Pending <span>v</span>
                            </p>
                        </div>
                        <div
                            className={`w-full ${
                                drop
                                    ? "max-h-64 overflow-hidden transition-max-h duration-700 ease-in-out"
                                    : "max-h-0 overflow-hidden transition-max-h duration-700 ease-in-out "
                            } flex flex-col gap-2 px-2`}
                        >
                            <div className="w-full h-20 bg-slate-700 mt-2">
                                <p className="w-full flex justify-between">
                                    02-10-2023 <span>20:00</span>
                                </p>
                                <p className="w-full flex justify-center gap-4">
                                    Chealsea <span>VS Liverpool</span>
                                </p>
                                <p className="w-full flex justify-between">
                                    Picks: -1x4 <span>Outcome: </span>
                                </p>
                            </div>
                            <div className="w-full h-20 bg-slate-700">
                                <p className="w-full flex justify-between">
                                    02-10-2023 <span>20:00</span>
                                </p>
                                <p className="w-full flex justify-center gap-4">
                                    Chealsea <span>VS Liverpool</span>
                                </p>
                                <p className="w-full flex justify-between">
                                    Picks: -1x4 <span>Outcome: </span>
                                </p>
                            </div>
                            <div className="w-full h-20 bg-slate-700">
                                <p className="w-full flex justify-between">
                                    02-10-2023 <span>20:00</span>
                                </p>
                                <p className="w-full flex justify-center gap-4">
                                    Chealsea <span>VS Liverpool</span>
                                </p>
                                <p className="w-full flex justify-between">
                                    Picks: -1x4 <span>Outcome: </span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-max ">
                        <div
                            className="w-full h-20 bg-slate-700"
                            onClick={() => setDrop2(!drop2)}
                        >
                            <p className="w-full flex justify-between">
                                Game: #123456 <span>Single</span>
                            </p>
                            <p className="w-full flex justify-between">
                                Total Stake: $200{" "}
                                <span>Total Winning:5000</span>
                            </p>
                            <p className="w-full flex justify-between">
                                Status: Pending <span>v</span>
                            </p>
                        </div>
                        <div
                            className={`w-full ${
                                drop2
                                    ? "max-h-64 overflow-hidden transition-max-h duration-700 ease-in-out"
                                    : "max-h-0 overflow-hidden transition-max-h duration-700 ease-in-out "
                            } flex flex-col gap-2 px-2`}
                        >
                            <div className="w-full h-20 bg-slate-700 mt-2">
                                <p className="w-full flex justify-between">
                                    02-10-2023 <span>20:00</span>
                                </p>
                                <p className="w-full flex justify-center gap-4">
                                    Chealsea <span>VS Liverpool</span>
                                </p>
                                <p className="w-full flex justify-between">
                                    Picks: -1x4 <span>Outcome: </span>
                                </p>
                            </div>
                            <div className="w-full h-20 bg-slate-700">
                                <p className="w-full flex justify-between">
                                    02-10-2023 <span>20:00</span>
                                </p>
                                <p className="w-full flex justify-center gap-4">
                                    Chealsea <span>VS Liverpool</span>
                                </p>
                                <p className="w-full flex justify-between">
                                    Picks: -1x4 <span>Outcome: </span>
                                </p>
                            </div>
                            <div className="w-full h-20 bg-slate-700">
                                <p className="w-full flex justify-between">
                                    02-10-2023 <span>20:00</span>
                                </p>
                                <p className="w-full flex justify-center gap-4">
                                    Chealsea <span>VS Liverpool</span>
                                </p>
                                <p className="w-full flex justify-between">
                                    Picks: -1x4 <span>Outcome: </span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-max ">
                        <div
                            className="w-full h-20 bg-slate-700"
                            onClick={() => setDrop3(!drop3)}
                        >
                            <p className="w-full flex justify-between">
                                Game: #123456 <span>Single</span>
                            </p>
                            <p className="w-full flex justify-between">
                                Total Stake: $200{" "}
                                <span>Total Winning:5000</span>
                            </p>
                            <p className="w-full flex justify-between">
                                Status: Pending <span>v</span>
                            </p>
                        </div>
                        <div
                            className={`w-full ${
                                drop3
                                    ? "max-h-64 overflow-hidden transition-max-h duration-700 ease-in-out"
                                    : "max-h-0 overflow-hidden transition-max-h duration-700 ease-in-out "
                            } flex flex-col gap-2 px-2`}
                        >
                            <div className="w-full h-20 bg-slate-700 mt-2">
                                <p className="w-full flex justify-between">
                                    02-10-2023 <span>20:00</span>
                                </p>
                                <p className="w-full flex justify-center gap-4">
                                    Chealsea <span>VS Liverpool</span>
                                </p>
                                <p className="w-full flex justify-between">
                                    Picks: -1x4 <span>Outcome: </span>
                                </p>
                            </div>
                            <div className="w-full h-20 bg-slate-700">
                                <p className="w-full flex justify-between">
                                    02-10-2023 <span>20:00</span>
                                </p>
                                <p className="w-full flex justify-center gap-4">
                                    Chealsea <span>VS Liverpool</span>
                                </p>
                                <p className="w-full flex justify-between">
                                    Picks: -1x4 <span>Outcome: </span>
                                </p>
                            </div>
                            <div className="w-full h-20 bg-slate-700">
                                <p className="w-full flex justify-between">
                                    02-10-2023 <span>20:00</span>
                                </p>
                                <p className="w-full flex justify-center gap-4">
                                    Chealsea <span>VS Liverpool</span>
                                </p>
                                <p className="w-full flex justify-between">
                                    Picks: -1x4 <span>Outcome: </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyBetslips;
