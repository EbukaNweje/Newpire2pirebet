import {useState} from "react";
import {useSelector} from "react-redux";

const MyBetslips = () => {
    const [drop, setDrop] = useState(false);
    const betSlips = useSelector(
        (state) => state.newPier2Pier.newPier2Pier.user.betslips
    );

    return (
        <>
            <div className="w-full h-max">
                <div className="w-full h-12 flex items-center px-3 justify-between bg-gray-700 text-white mb-2">
                    <p className="text-2xl">My Betslips</p>
                </div>
                <div className="w-full h-max  text-white flex flex-col gap-1 p-1">
                    {betSlips.map((item, index) => (
                        <div className="w-full h-max " key={index}>
                            <div
                                className="w-full h-20 bg-slate-700 p-1"
                                onClick={() => setDrop(!drop)}
                            >
                                <p className="w-full flex justify-between">
                                    Game: #{item?._id.slice(10).toUpperCase()}{" "}
                                    <span>Single</span>
                                </p>
                                <p className="w-full flex justify-between">
                                    Total Stake: ${item?.stake}
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
                                        {item?.game}
                                    </p>
                                    <p className="w-full flex justify-between">
                                        Picks: {item?.pick} <span>Outcome: </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default MyBetslips;
