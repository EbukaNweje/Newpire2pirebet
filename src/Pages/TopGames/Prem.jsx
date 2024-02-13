import {useEffect, useState} from "react";
import games from "../../assets/Games.json";
import data from "../../assets/data.json";
import {useDispatch} from "react-redux";
import {Modal} from "antd";
import {BsInfoCircle} from "react-icons/bs";
import toast from "react-hot-toast";
import {useSelector} from "react-redux";
import {betSlip} from "../../Global/Features";

const Prem = () => {
    // console.log(data[0].england.premier_league);
    const prem = games[0].england.premier_league;
    const dispatch = useDispatch();
    // console.log(prem);
    const [openFanPage, setOpenFanPage] = useState(false);

    const [selectedOddsIndices, setSelectedOddsIndices] = useState(() =>
        data.map(() => Math.floor(Math.random() * data[0]?.oddsData.length))
    );
    const [selectedGame, setSelectedGame] = useState({});
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
            {prem.length > 0 ? (
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
                                    onClick={() =>
                                        handleGameClick(item, "home")
                                    }
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
                                    onClick={() =>
                                        handleGameClick(item, "away")
                                    }
                                >
                                    <p className="w-full h-full flex justify-between py-1 px-2 cursor-pointer">
                                        2 <span>{item.away_win}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </>
            ) : (
                "No matches available."
            )}

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

export default Prem;
