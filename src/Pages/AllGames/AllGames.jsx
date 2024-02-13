import {useEffect, useState} from "react";
import games from "../../assets/Games.json";
import data from "../../assets/data.json";
import {useDispatch} from "react-redux";
import {Modal} from "antd";
import {BsInfoCircle} from "react-icons/bs";
import toast from "react-hot-toast";
import {useSelector} from "react-redux";
import {betSlip} from "../../Global/Features";

const AllGames = () => {
    const prem = games[0].england.premier_league;
    const bundes = games[0].germany.bundesliga;
    const laliga = games[0].spain.laliga;
    const ligueone = games[0].france.ligue_one;
    const seriaA = games[0].italy.seria_a;

    const [selectedGame, setSelectedGame] = useState({});

    const dispatch = useDispatch();
    // console.log(prem);
    const [openFanPage, setOpenFanPage] = useState(false);

    const [selectedOddsIndices, setSelectedOddsIndices] = useState(() =>
        data.map(() => Math.floor(Math.random() * data[0]?.oddsData.length))
    );
    const fullBetSlip = useSelector(
        (state) => state.newPier2Pier.newPier2Pier.slip
    );
    console.log(fullBetSlip);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSelectedOddsIndices((prevIndices) =>
                prevIndices.map(() =>
                    Math.floor(Math.random() * data[0]?.oddsData.length)
                )
            );
        }, 600000);

        return () => clearInterval(intervalId);
    }, []);

    const [selectedTooltipIndex, setSelectedTooltipIndex] = useState(null);
    const [toolTipStates, setToolTipStates] = useState(
        Array(data.map(() => false))
    );
    typeof toolTipStates;

    const handleToolTip = (index) => {
        setSelectedTooltipIndex(index);
        setToolTipStates((prevStates) => prevStates.map((_, i) => i === index));
        toast.success(
            `${
                data[selectedTooltipIndex]?.oddsData[
                    selectedOddsIndices[selectedTooltipIndex]
                ]?.pickInfo
            } ${
                data[selectedTooltipIndex]?.oddsData[
                    selectedOddsIndices[selectedTooltipIndex]
                ]?.oddsPick
            }`
        );
    };

    const addBet = (userName, oddsPick, stakeValue) => {
        dispatch(
            betSlip({
                userName,
                oddsPick,
                stakeValue,
                selectedGame, // Include selectedGame in the dispatched data
            })
        );
    };

    const handleGameClick = (item, option) => {
        setSelectedGame({
            ...item,
            selectedOption: option,
        });
        setOpenFanPage(true);
    };
    return (
        <>
            <div className="w-full h-max px-2">
                <div className="h-10 w-full flex items-center text-white text-sm">
                    <p>All Matches Available</p>
                </div>
                <div className="w-full h-max flex flex-col gap-4">
                    {prem.map((item, index) => (
                        <div
                            className="w-full h-max flex flex-col border-t border-t-gray-200"
                            key={index}
                        >
                            <div className="w-full h-20">
                                <div className="w-full h-6 flex items-center text-[0.70rem] text-white font-light">
                                    <p>
                                        {item.time}{" "}
                                        <span>England - Premier League</span>
                                    </p>
                                </div>
                                <div className="w-full h-max flex justify-between text-white">
                                    <div className="w-max flex flex-col justify-center gap-2">
                                        <p>{item.home}</p>
                                        <p>{item.away}</p>
                                    </div>
                                    <div className="w-max h-14 flex items-center gap-2">
                                        <div
                                            className="w-max h-max px-3 py-2 cursor-pointer bg-[#333333] text-green-400 text-sm flex items-center justify-center rounded"
                                            onClick={() =>
                                                handleGameClick(item, "home")
                                            }
                                        >
                                            {item.home_win}
                                        </div>
                                        <div className="w-max h-max px-3 py-2 cursor-pointer bg-[#333333] text-green-400 text-sm flex items-center justify-center rounded">
                                            {item.draw}
                                        </div>
                                        <div
                                            className="w-max h-max px-3 py-2 cursor-pointer bg-[#333333] text-green-400 text-sm flex items-center justify-center rounded"
                                            onClick={() =>
                                                handleGameClick(item, "away")
                                            }
                                        >
                                            {item.away_win}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {laliga.map((item, index) => (
                        <div
                            className="w-full h-max flex flex-col border-t border-t-gray-200"
                            key={index}
                        >
                            <div className="w-full h-20">
                                <div className="w-full h-6 flex items-center text-[0.70rem] text-white font-light">
                                    <p>
                                        {item.time}{" "}
                                        <span>Spain - Laliga</span>
                                    </p>
                                </div>
                                <div className="w-full h-max flex justify-between text-white">
                                    <div className="w-max flex flex-col justify-center gap-2">
                                        <p>{item.home}</p>
                                        <p>{item.away}</p>
                                    </div>
                                    <div className="w-max h-14 flex items-center gap-2">
                                        <div
                                            className="w-max h-max px-3 py-2 cursor-pointer bg-[#333333] text-green-400 text-sm flex items-center justify-center rounded"
                                            onClick={() =>
                                                handleGameClick(item, "home")
                                            }
                                        >
                                            {item.home_win}
                                        </div>
                                        <div className="w-max h-max px-3 py-2 cursor-pointer bg-[#333333] text-green-400 text-sm flex items-center justify-center rounded">
                                            {item.draw}
                                        </div>
                                        <div
                                            className="w-max h-max px-3 py-2 cursor-pointer bg-[#333333] text-green-400 text-sm flex items-center justify-center rounded"
                                            onClick={() =>
                                                handleGameClick(item, "away")
                                            }
                                        >
                                            {item.away_win}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {bundes.map((item, index) => (
                        <div
                            className="w-full h-max flex flex-col border-t border-t-gray-200"
                            key={index}
                        >
                            <div className="w-full h-20">
                                <div className="w-full h-6 flex items-center text-[0.70rem] text-white font-light">
                                    <p>
                                        {item.time}{" "}
                                        <span>Germany - Bundesliga</span>
                                    </p>
                                </div>
                                <div className="w-full h-max flex justify-between text-white">
                                    <div className="w-max flex flex-col justify-center gap-2">
                                        <p>{item.home}</p>
                                        <p>{item.away}</p>
                                    </div>
                                    <div className="w-max h-14 flex items-center gap-2">
                                        <div
                                            className="w-max h-max px-3 py-2 cursor-pointer bg-[#333333] text-green-400 text-sm flex items-center justify-center rounded"
                                            onClick={() =>
                                                handleGameClick(item, "home")
                                            }
                                        >
                                            {item.home_win}
                                        </div>
                                        <div className="w-max h-max px-3 py-2 cursor-pointer bg-[#333333] text-green-400 text-sm flex items-center justify-center rounded">
                                            {item.draw}
                                        </div>
                                        <div
                                            className="w-max h-max px-3 py-2 cursor-pointer bg-[#333333] text-green-400 text-sm flex items-center justify-center rounded"
                                            onClick={() =>
                                                handleGameClick(item, "away")
                                            }
                                        >
                                            {item.away_win}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {seriaA.map((item, index) => (
                        <div
                            className="w-full h-max flex flex-col border-t border-t-gray-200"
                            key={index}
                        >
                            <div className="w-full h-20">
                                <div className="w-full h-6 flex items-center text-[0.70rem] text-white font-light">
                                    <p>
                                        {item.time}{" "}
                                        <span>Italy - Seria A</span>
                                    </p>
                                </div>
                                <div className="w-full h-max flex justify-between text-white">
                                    <div className="w-max flex flex-col justify-center gap-2">
                                        <p>{item.home}</p>
                                        <p>{item.away}</p>
                                    </div>
                                    <div className="w-max h-14 flex items-center gap-2">
                                        <div
                                            className="w-max h-max px-3 py-2 cursor-pointer bg-[#333333] text-green-400 text-sm flex items-center justify-center rounded"
                                            onClick={() =>
                                                handleGameClick(item, "home")
                                            }
                                        >
                                            {item.home_win}
                                        </div>
                                        <div className="w-max h-max px-3 py-2 cursor-pointer bg-[#333333] text-green-400 text-sm flex items-center justify-center rounded">
                                            {item.draw}
                                        </div>
                                        <div
                                            className="w-max h-max px-3 py-2 cursor-pointer bg-[#333333] text-green-400 text-sm flex items-center justify-center rounded"
                                            onClick={() =>
                                                handleGameClick(item, "away")
                                            }
                                        >
                                            {item.away_win}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {ligueone.map((item, index) => (
                        <div
                            className="w-full h-max flex flex-col border-t border-t-gray-200"
                            key={index}
                        >
                            <div className="w-full h-20">
                                <div className="w-full h-6 flex items-center text-[0.70rem] text-white font-light">
                                    <p>
                                        {item.time}{" "}
                                        <span>French - Ligue 1</span>
                                    </p>
                                </div>
                                <div className="w-full h-max flex justify-between text-white">
                                    <div className="w-max flex flex-col justify-center gap-2">
                                        <p>{item.home}</p>
                                        <p>{item.away}</p>
                                    </div>
                                    <div className="w-max h-14 flex items-center gap-2">
                                        <div
                                            className="w-max h-max px-3 py-2 cursor-pointer bg-[#333333] text-green-400 text-sm flex items-center justify-center rounded"
                                            onClick={() =>
                                                handleGameClick(item, "home")
                                            }
                                        >
                                            {item.home_win}
                                        </div>
                                        <div className="w-max h-max px-3 py-2 cursor-pointer bg-[#333333] text-green-400 text-sm flex items-center justify-center rounded">
                                            {item.draw}
                                        </div>
                                        <div
                                            className="w-max h-max px-3 py-2 cursor-pointer bg-[#333333] text-green-400 text-sm flex items-center justify-center rounded"
                                            onClick={() =>
                                                handleGameClick(item, "away")
                                            }
                                        >
                                            {item.away_win}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Modal
                open={openFanPage}
                cancelButtonProps={{hidden: true}}
                okButtonProps={{hidden: true}}
                closeIcon={true}
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
                            {data.map((item, index) => (
                                <div
                                    className="w-full h-10 flex gap-2 items-center justify-between "
                                    key={index}
                                >
                                    <div className="w-1/2 h-full flex items-center justify-center bg-slate-600">
                                        {item.userName}
                                    </div>
                                    <div
                                        className="w-1/2 h-full flex items-center justify-center bg-slate-600 cursor-pointer"
                                        onClick={() => {
                                            addBet(
                                                item.userName,
                                                item.oddsData[
                                                    selectedOddsIndices[index]
                                                ].oddsPick,
                                                item.oddsData[
                                                    selectedOddsIndices[index]
                                                ].stake
                                            );
                                        }}
                                    >
                                        <p className="w-max flex items-center gap-6">
                                            {
                                                item.oddsData[
                                                    selectedOddsIndices[index]
                                                ].oddsPick
                                            }
                                            <span
                                                onClick={() =>
                                                    handleToolTip(index)
                                                }
                                            >
                                                <BsInfoCircle className="h-5 w-5" />
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default AllGames;
