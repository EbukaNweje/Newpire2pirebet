import {useEffect, useState} from "react";
import {Modal} from "antd";
import games from "../../assets/Games.json";
import {useSelector} from "react-redux";
import toast from "react-hot-toast";
import axios from "axios";

const Dfbpokal = () => {
    const dataGame = games[0].germany.dfb_pokal

    const token = useSelector(
        (state) => state.newPier2Pier.newPier2Pier.userToken
    );

    const [openMkt, setOpenMkt] = useState(false);
    const [loading, setLoading] = useState(false);
    const [pick, setPick] = useState("");
    const [game, setGame] = useState({});
    const [stakeValue, setStakeValue] = useState("");

    const handleSelected = (item) => {
        setOpenMkt(true);
        // console.log(item);
        setGame(item);
    };

    const dataToBook = {
        game: `${game.home} VS ${game.away}`,
        pick: pick,
        stake: stakeValue,
    };
    const url = "https://pire2pirebet-back-end.vercel.app/api/stake";
    const headers = {
        Authorization: `Bearer ${token}`,
    };

    const handleBookGame = (e) => {
        e.preventDefault();
        if (token === "") {
            toast.error("Please login to book a game");
        } else if (pick === "") {
            toast.error("Make a pick");
        } else if (!stakeValue) {
            toast.error("Add Your stake");
        } else {
            setLoading(true);
            const loadingId = toast.loading("Please wait...");
            axios
                .post(url, dataToBook, {headers})
                .then((response) => {
                    console.log(response);
                    toast.dismiss(loadingId);
                    setLoading(false);
                    toast.success(response?.data?.message);
                    setTimeout(() => {
                        setPick("");
                        setStakeValue("");
                        dataToBook.game = "";
                        setOpenMkt(false);
                    }, 2000);
                })
                .catch((error) => {
                    toast.dismiss(loadingId);
                    console.log(error);
                    setLoading(false);
                    toast.error(error?.response?.data?.message);
                });
        }
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

    const stakeValueBTC = stakeValue / exchangeRate;
    const roundedTotalBTCStake = parseFloat(stakeValueBTC.toFixed(8));
    return (
        <>
            <div className="w-full h-max px-2">
                <div className="h-10 w-full flex items-center text-white text-sm">
                    <p>All Matches Available</p>
                </div>
                <div className="w-full h-max flex flex-col gap-4">
                    {dataGame.map((item, index) => (
                        <div
                            className="w-full h-max flex flex-col border-t border-t-gray-200"
                            key={index}
                        >
                            <div className="w-full h-20">
                                <div className="w-full h-6 flex items-center text-[0.70rem] text-white font-light">
                                    <p>
                                        {item.time}{" "}
                                        <span>Germany - DFB Pokal</span>
                                    </p>
                                </div>
                                <div className="w-full h-max flex justify-between text-white">
                                    <div className="w-max flex flex-col justify-center gap-2">
                                        <p>{item.home}</p>
                                        <p>{item.away}</p>
                                    </div>
                                    <div
                                        className="w-max h-14 flex items-center gap-2"
                                        onClick={() => handleSelected(item)}
                                    >
                                        <div className="w-max h-max px-3 py-2 cursor-pointer bg-[#333333] text-green-400 text-sm flex items-center justify-center rounded">
                                            {item.home_win}
                                        </div>
                                        <div className="w-max h-max px-3 py-2 cursor-pointer bg-[#333333] text-green-400 text-sm flex items-center justify-center rounded">
                                            {item.draw}
                                        </div>
                                        <div className="w-max h-max px-3 py-2 cursor-pointer bg-[#333333] text-green-400 text-sm flex items-center justify-center rounded">
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
                open={openMkt}
                cancelButtonProps={{hidden: true}}
                okButtonProps={{hidden: true}}
                closeIcon={false}
                onCancel={() => {
                    setPick("");
                    setStakeValue("");
                    dataToBook.game = "";
                    setOpenMkt(false);
                }}
            >
                <div className="w-full h-[30rem] flex flex-col items-center text-white">
                    <div className="w-full h-10 flex items-center justify-center gap-5 text-xl ">
                        <p>{game.home}</p>
                        <p>VS</p>
                        <p>{game.away}</p>
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
                                        <div
                                            className={`w-max h-max px-5 py-3 rounded cursor-pointer transition-all duration-500 ${
                                                pick === "Home -1"
                                                    ? "bg-green-600"
                                                    : "bg-slate-600"
                                            }`}
                                            onClick={() => setPick("Home -1")}
                                        >
                                            -1
                                        </div>
                                        <div
                                            className={`w-max h-max px-5 py-3 rounded cursor-pointer transition-all duration-500 ${
                                                pick === "Home -2"
                                                    ? "bg-green-600"
                                                    : "bg-slate-600"
                                            }`}
                                            onClick={() => setPick("Home -2")}
                                        >
                                            -2
                                        </div>
                                        <div
                                            className={`w-max h-max px-5 py-3 rounded cursor-pointer transition-all duration-500 ${
                                                pick === "Home -3"
                                                    ? "bg-green-600"
                                                    : "bg-slate-600"
                                            }`}
                                            onClick={() => setPick("Home -3")}
                                        >
                                            -3
                                        </div>
                                        <div
                                            className={`w-max h-max px-5 py-3 rounded cursor-pointer transition-all duration-500 ${
                                                pick === "Home -4"
                                                    ? "bg-green-600"
                                                    : "bg-slate-600"
                                            }`}
                                            onClick={() => setPick("Home -4")}
                                        >
                                            -4
                                        </div>
                                        <div
                                            className={`w-max h-max px-5 py-3 rounded cursor-pointer transition-all duration-500 ${
                                                pick === "Home -5"
                                                    ? "bg-green-600"
                                                    : "bg-slate-600"
                                            }`}
                                            onClick={() => setPick("Home -5")}
                                        >
                                            -5
                                        </div>
                                    </div>
                                    <div className="w-1/2 h-max flex flex-col items-center gap-2">
                                        <div
                                            className={`w-max h-max px-5 py-3 rounded cursor-pointer transition-all duration-500 ${
                                                pick === "Home +1"
                                                    ? "bg-green-600"
                                                    : "bg-slate-600"
                                            }`}
                                            onClick={() => setPick("Home +1")}
                                        >
                                            +1
                                        </div>
                                        <div
                                            className={`w-max h-max px-5 py-3 rounded cursor-pointer transition-all duration-500 ${
                                                pick === "Home +2"
                                                    ? "bg-green-600"
                                                    : "bg-slate-600"
                                            }`}
                                            onClick={() => setPick("Home +2")}
                                        >
                                            +2
                                        </div>
                                        <div
                                            className={`w-max h-max px-5 py-3 rounded cursor-pointer transition-all duration-500 ${
                                                pick === "Home +3"
                                                    ? "bg-green-600"
                                                    : "bg-slate-600"
                                            }`}
                                            onClick={() => setPick("Home +3")}
                                        >
                                            +3
                                        </div>
                                        <div
                                            className={`w-max h-max px-5 py-3 rounded cursor-pointer transition-all duration-500 ${
                                                pick === "Home +4"
                                                    ? "bg-green-600"
                                                    : "bg-slate-600"
                                            }`}
                                            onClick={() => setPick("Home +4")}
                                        >
                                            +4
                                        </div>
                                        <div
                                            className={`w-max h-max px-5 py-3 rounded cursor-pointer transition-all duration-500 ${
                                                pick === "Home +5"
                                                    ? "bg-green-600"
                                                    : "bg-slate-600"
                                            }`}
                                            onClick={() => setPick("Home +5")}
                                        >
                                            +5
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/2 h-max flex flex-col items-center gap-2">
                                <p>Away Picks</p>
                                <div className="w-full h-max flex ">
                                    <div className="w-1/2 h-max flex flex-col items-center gap-2">
                                        <div
                                            className={`w-max h-max px-5 py-3 rounded cursor-pointer transition-all duration-500 ${
                                                pick === "Away -1"
                                                    ? "bg-green-600"
                                                    : "bg-slate-600"
                                            }`}
                                            onClick={() => setPick("Away -1")}
                                        >
                                            -1
                                        </div>
                                        <div
                                            className={`w-max h-max px-5 py-3 rounded cursor-pointer transition-all duration-500 ${
                                                pick === "Away -2"
                                                    ? "bg-green-600"
                                                    : "bg-slate-600"
                                            }`}
                                            onClick={() => setPick("Away -2")}
                                        >
                                            -2
                                        </div>
                                        <div
                                            className={`w-max h-max px-5 py-3 rounded cursor-pointer transition-all duration-500 ${
                                                pick === "Away -3"
                                                    ? "bg-green-600"
                                                    : "bg-slate-600"
                                            }`}
                                            onClick={() => setPick("Away -3")}
                                        >
                                            -3
                                        </div>
                                        <div
                                            className={`w-max h-max px-5 py-3 rounded cursor-pointer transition-all duration-500 ${
                                                pick === "Away -4"
                                                    ? "bg-green-600"
                                                    : "bg-slate-600"
                                            }`}
                                            onClick={() => setPick("Away -4")}
                                        >
                                            -4
                                        </div>
                                        <div
                                            className={`w-max h-max px-5 py-3 rounded cursor-pointer transition-all duration-500 ${
                                                pick === "Away -5"
                                                    ? "bg-green-600"
                                                    : "bg-slate-600"
                                            }`}
                                            onClick={() => setPick("Away -5")}
                                        >
                                            -5
                                        </div>
                                    </div>
                                    <div className="w-1/2 h-max flex flex-col items-center gap-2">
                                        <div
                                            className={`w-max h-max px-5 py-3 rounded cursor-pointer transition-all duration-500 ${
                                                pick === "Away +1"
                                                    ? "bg-green-600"
                                                    : "bg-slate-600"
                                            }`}
                                            onClick={() => setPick("Away +1")}
                                        >
                                            +1
                                        </div>
                                        <div
                                            className={`w-max h-max px-5 py-3 rounded cursor-pointer transition-all duration-500 ${
                                                pick === "Away +2"
                                                    ? "bg-green-600"
                                                    : "bg-slate-600"
                                            }`}
                                            onClick={() => setPick("Away +2")}
                                        >
                                            +2
                                        </div>
                                        <div
                                            className={`w-max h-max px-5 py-3 rounded cursor-pointer transition-all duration-500 ${
                                                pick === "Away +3"
                                                    ? "bg-green-600"
                                                    : "bg-slate-600"
                                            }`}
                                            onClick={() => setPick("Away +3")}
                                        >
                                            +3
                                        </div>
                                        <div
                                            className={`w-max h-max px-5 py-3 rounded cursor-pointer transition-all duration-500 ${
                                                pick === "Away +4"
                                                    ? "bg-green-600"
                                                    : "bg-slate-600"
                                            }`}
                                            onClick={() => setPick("Away +4")}
                                        >
                                            +4
                                        </div>
                                        <div
                                            className={`w-max h-max px-5 py-3 rounded cursor-pointer transition-all duration-500 ${
                                                pick === "Away +5"
                                                    ? "bg-green-600"
                                                    : "bg-slate-600"
                                            }`}
                                            onClick={() => setPick("Away +5")}
                                        >
                                            +5
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-16 mt-5 flex items-center gap-2">
                            <input
                                type="number"
                                className="w-32 h-10 pl-2 rounded text-black"
                                placeholder="your stake"
                                value={stakeValue}
                                onChange={(e) =>
                                    setStakeValue(Number(e.target.value))
                                }
                            />
                            <div>
                                <p>
                                    Amount: <span>{stakeValue} USD</span>
                                </p>
                                <p>
                                    Value in BTC:{" "}
                                    <span>{roundedTotalBTCStake}</span>
                                </p>
                            </div>
                        </div>
                        <div className="w-full h-max flex items-center justify-center">
                            <button
                                className="w-max h-max px-4 py-2 bg-green-700 rounded disabled:cursor-not-allowed disabled:bg-gray-400"
                                disabled={loading}
                                onClick={handleBookGame}
                            >
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default Dfbpokal;
