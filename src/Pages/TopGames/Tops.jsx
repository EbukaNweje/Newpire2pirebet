import Prem from "./Prem";
import TopLaliga from "./TopLaliga";
import TopSeriaA from "./TopSeriaA";
import TopBundes from "./TopBundes";
import TopLigue1 from "./TopLigue1";
import {useState} from "react";
import PremTest from "./PremTest";

const Tops = () => {
    const [topStatus, setTopStatus] = useState(0);
    return (
        <>
            <div className="w-full h-max text-white">
                <div className="w-full h-max flex flex-col text-white justify-center gap-2 px-2">
                    <div className="w-full h-10 flex items-center text-sm">
                        Top Leagues
                    </div>
                    <div className="w-full h-8 flex items-center gap-4 overflow-x-auto">
                        <div className="w-max h-full flex items-center gap-4 ">
                            <div
                                className={`w-max h-full ${
                                    topStatus === 0
                                        ? "bg-lime-800"
                                        : "bg-gray-900"
                                }   transition-all duration-500 rounded cursor-pointer text-xs flex items-center justify-center px-4`}
                                onClick={() => setTopStatus(0)}
                            >
                                Premier League
                            </div>
                            <div
                                className={`w-max h-full ${
                                    topStatus === 1
                                        ? "bg-lime-800"
                                        : "bg-gray-900"
                                }   transition-all duration-500 rounded cursor-pointer text-xs flex items-center justify-center px-4`}
                                onClick={() => setTopStatus(1)}
                            >
                                Laliga
                            </div>
                            <div
                                className={`w-max h-full ${
                                    topStatus === 2
                                        ? "bg-lime-800"
                                        : "bg-gray-900"
                                }   transition-all duration-500 rounded cursor-pointer text-xs flex items-center justify-center px-4`}
                                onClick={() => setTopStatus(2)}
                            >
                                Seria A
                            </div>
                            <div
                                className={`w-max h-full ${
                                    topStatus === 3
                                        ? "bg-lime-800"
                                        : "bg-gray-900"
                                }   transition-all duration-500 rounded cursor-pointer text-xs flex items-center justify-center px-4`}
                                onClick={() => setTopStatus(3)}
                            >
                                Bundesliga
                            </div>
                            <div
                                className={`w-max h-full ${
                                    topStatus === 4
                                        ? "bg-lime-800"
                                        : "bg-gray-900"
                                }   transition-all duration-500 rounded cursor-pointer text-xs flex items-center justify-center px-4`}
                                onClick={() => setTopStatus(4)}
                            >
                                Ligue 1
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-52 bg-sky-950 overflow-x-auto scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-slate-800 scrollbar-track-gray-300 scrollbar-none scrollbar-h-0">
                        <div className="w-max h-full flex gap-4 p-4">
                            {topStatus === 0 ? (
                                <PremTest />
                            ) : topStatus === 1 ? (
                                <TopLaliga />
                            ) : topStatus === 2 ? (
                                <TopSeriaA />
                            ) : topStatus === 3 ? (
                                <TopBundes />
                            ) : topStatus === 4 ? (
                                <TopLigue1 />
                            ) : null}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Tops;
