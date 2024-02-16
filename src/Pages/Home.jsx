import {Outlet} from "react-router";
import Carousel from "../Components/Carousel";
import Header from "../Components/Header";
import SubHeader from "../Components/SubHeader";
import Footer from "../Components/Footer";
import {useEffect, useState} from "react";
import {Drawer} from "antd";
import {RiDeleteBin6Line} from "react-icons/ri";
import {IoIosRemoveCircle} from "react-icons/io";
import {useSelector} from "react-redux";
import {clearSlip} from "../Global/Features";
import {useDispatch} from "react-redux";
import axios from "axios";

const Home = () => {
    const [openSlip, setOpenSlip] = useState(false);
    const betslip = useSelector(
        (state) => state.newPier2Pier.newPier2Pier.slip
    );
    console.log(betslip);
    const dispatch = useDispatch();
    const [stakeAmounts, setStakeAmounts] = useState({});

    const handleStakeChange = (bettor, value) => {
        setStakeAmounts((prevAmounts) => ({
            ...prevAmounts,
            [bettor]: value,
        }));
    };

    const calculateTotalStake = () => {
        return betslip.reduce(
            (total, item) =>
                total + parseFloat(stakeAmounts[item.userName] || 0),
            0
        );
    };

    const [exchangeRate, setExchangeRate] = useState(null);

    useEffect(() => {
        // Fetch the current exchange rate from an API (replace with a reliable API)
        axios
            .get("https://api.coindesk.com/v1/bpi/currentprice.json")
            .then((response) => {
                const rate = response.data.bpi.USD.rate.replace(",", ""); // assuming USD rate
                setExchangeRate(parseFloat(rate));
            })
            .catch((error) => {
                console.error("Error fetching exchange rate:", error);
            });
    }, []); // Empty dependency array ensures useEffect runs only once on component mount

    const stakeValueBTC = calculateTotalStake() / exchangeRate;
    const roundedTotalBTCStake = parseFloat(stakeValueBTC.toFixed(8));
    // console.log("Total BTC:",roundedTotalBTCStake);

    const calculateBTCValue = (bettor) => {
        const stakeValueBTC =
            (parseFloat(stakeAmounts[bettor]) || 0) / exchangeRate;
        return parseFloat(stakeValueBTC.toFixed(8));
    };

    const calculateTotalReturns = () => {
        return betslip.reduce(
            (totalReturns, item) =>
                totalReturns +
                item.stakeValue * parseFloat(stakeAmounts[item.bettor] || 0),
            0
        );
    };
    const totalReturnBTC = calculateTotalReturns() / exchangeRate;
    const roundedTotalReturn = parseFloat(totalReturnBTC.toFixed(8));
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
                    <p>{betslip.length}</p>
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
                            {betslip.length} Selected
                        </p>

                        <div
                            className="w-max h-max flex cursor-pointer"
                            onClick={() => dispatch(clearSlip())}
                        >
                            <RiDeleteBin6Line className="w-6 h-6 text-red-500 cursor-pointer" />
                        </div>
                    </div>
                    <div className="w-full h-[60vh] flex flex-col gap-2 overflow-y-auto overflow-hidden scrollbar-thumb-gray-300 scrollbar-track-gray-100 scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
                        {betslip.map((item, index) => (
                            <div
                                className="w-full h-max bg-[#373a45] flex flex-col gap-2 p-2 rounded"
                                key={index}
                            >
                                <div className="w-full h-max flex justify-between">
                                    <p>{item.userName} Picks</p>
                                    <p className=" ">{item.oddsPick}</p>
                                    <span>
                                        <IoIosRemoveCircle className="w-6 h-6 cursor-pointer text-red-300" />
                                    </span>
                                </div>
                                <p className="w-full h-max flex items-center justify-center gap-2">
                                    <span>{item.selectedGame.home}</span>
                                    vs
                                    <span>{item.selectedGame.away}</span>
                                </p>
                                <div className="w-full h-max flex justify-between">
                                    <p className="w-max flex gap-1 h-max items-center text-xs">
                                        USD
                                        <input
                                            type="number"
                                            placeholder="stake"
                                            className="w-20 h-8 pl-1 rounded outline-none text-black text-sm"
                                            value={
                                                stakeAmounts[item.userName] || ""
                                            }
                                            onChange={(e) =>
                                                handleStakeChange(
                                                    item.userName,
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </p>
                                    <p className="w-max flex gap-1 h-max items-center text-xs">
                                        BTC
                                        <div className="w-max h-8 px-2 rounded flex items-center outline-none text-black text-sm bg-slate-100">
                                            {calculateBTCValue(item.userName)}{" "}
                                        </div>
                                    </p>
                                </div>
                                <div className="w-full h-max flex justify-between">
                                    <p>Stake Value: {item.stakeValue}</p>
                                    <p>
                                        potential winnings
                                        <span>
                                            {item?.stakeValue *
                                                (stakeAmounts[item.userName] ||
                                                    0)}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="w-full h-32 flex flex-col gap-3 p-2">
                        <p className="w-full h-max flex justify-between text-sm">
                            Stakes ${calculateTotalStake()} <span> Stake BTC: {roundedTotalBTCStake}</span>
                        </p>
                        <p className="w-full h-max flex justify-between text-sm">
                            Returns ${calculateTotalReturns()} <span>Returns BTC: {roundedTotalReturn}</span>
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
