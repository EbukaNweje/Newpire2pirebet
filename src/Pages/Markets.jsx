import {useEffect, useState} from "react";
import {Modal} from "antd";
import axios from "axios";
import {useSelector} from "react-redux";
import toast from "react-hot-toast";

const Markets = () => {
    const [openOffer, setOpenOffer] = useState(false);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    // const testData = [1, 2, 3, 4, 5];
    const token = useSelector(
        (state) => state.newPier2Pier.newPier2Pier.userToken
    );
    const [gameId, setGameId] = useState("");
    const [offerType, setOfferType] = useState("");

    const getAllGames = () => {
        const url = "https://pire2pirebet-back-end.vercel.app/api/allgames";
        axios
            .get(url)
            .then((response) => {
                console.log(response?.data);
                setData(response?.data?.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        getAllGames();
    }, []);

    const handleOpenOffer = (item) => {
        setOpenOffer(true);
        console.log(item);
        setGameId(item._id);
    };

    const handlePostOffer = (e) => {
        e.preventDefault();
        const data = {
            offerType: offerType,
        };
        const url = `https://pire2pirebet-back-end.vercel.app/api/offer/${gameId}`;
        const headers = {
            Authorization: `Bearer ${token}`,
        };
        if (offerType === "") {
            toast.error("Please select an option!");
        } else {
            const loadingId = toast.loading("Please wait...");
            setLoading(true);
            axios
                .post(url, data, {headers})
                .then((response) => {
                    toast.dismiss(loadingId);
                    console.log(response);
                    toast.success(response.data?.message);
                    setLoading(false);
                    setOfferType(false);
                    setOfferType("");
                })
                .catch((error) => {
                    toast.dismiss(loadingId);
                    console.log(error);
                    toast.error(error?.response?.data?.message);
                    setLoading(false);
                    setOfferType(false);
                    setOfferType("");
                });
        }
    };

    return (
        <>
            <div className="w-full min-h-[40vh] flex flex-col gap-3 p-2 mt-2">
                {data.length === 0
                    ? "No Games Found"
                    : data.map((item, index) => (
                          <div
                              className="w-full h-max flex flex-col bg-slate-600 p-2 rounded"
                              key={index}
                          >
                              <p className="w-full h-max flex justify-between">
                                  Posted By <span>{item?.user.name}</span>
                              </p>
                              <p className="w-full h-max flex justify-between">
                                  Game: <span>{item?.game}</span>
                              </p>
                              <p className="w-full h-max flex justify-between">
                                  Pick: <span>{item?.pick}</span>
                              </p>
                              <p className="w-full h-max flex justify-between">
                                  Stake: <span>$ {item?.stake}</span>
                              </p>
                              <div className="w-full h-max flex items-center justify-center">
                                  <button
                                      className="w-max h-max px-4 py-2 bg-green-600 rounded"
                                      onClick={() => handleOpenOffer(item)}
                                  >
                                      Make Offer
                                  </button>
                              </div>
                          </div>
                      ))}
            </div>
            <Modal
                open={openOffer}
                cancelButtonProps={{hidden: true}}
                okButtonProps={{hidden: true}}
                closeIcon={false}
                onCancel={() => {
                    setOpenOffer(false);
                    setOfferType("");
                }}
            >
                <div className="w-full h-max flex flex-col gap-3 items-center text-white">
                    <p className="text-lg">
                        Place an offer against this market.
                    </p>
                    <div className="w-full h-max flex justify-between gap-2 p-2">
                        <div
                            className={`w-max h-max px-5 py-3 rounded cursor-pointer transition-all duration-500 ${
                                offerType === "1"
                                    ? "bg-green-600"
                                    : "bg-slate-600"
                            }`}
                            onClick={() => setOfferType("1")}
                        >
                            X1
                        </div>
                        <div
                            className={`w-max h-max px-5 py-3 rounded cursor-pointer transition-all duration-500 ${
                                offerType === "2"
                                    ? "bg-green-600"
                                    : "bg-slate-600"
                            }`}
                            onClick={() => setOfferType("2")}
                        >
                            X2
                        </div>
                        <div
                            className={`w-max h-max px-5 py-3 rounded cursor-pointer transition-all duration-500 ${
                                offerType === "3"
                                    ? "bg-green-600"
                                    : "bg-slate-600"
                            }`}
                            onClick={() => setOfferType("3")}
                        >
                            X3
                        </div>
                        <div
                            className={`w-max h-max px-5 py-3 rounded cursor-pointer transition-all duration-500 ${
                                offerType === "4"
                                    ? "bg-green-600"
                                    : "bg-slate-600"
                            }`}
                            onClick={() => setOfferType("4")}
                        >
                            X4
                        </div>
                        <div
                            className={`w-max h-max px-5 py-3 rounded cursor-pointer transition-all duration-500 ${
                                offerType === "5"
                                    ? "bg-green-600"
                                    : "bg-slate-600"
                            }`}
                            onClick={() => setOfferType("5")}
                        >
                            X5
                        </div>
                    </div>
                    <div className="w-full h-max flex items-center justify-center">
                        <button
                            className="w-max h-max px-4 py-2 bg-green-600 rounded disabled:cursor-not-allowed disabled:bg-gray-400"
                            onClick={handlePostOffer}
                            disabled={loading}
                        >
                            Make Offer
                        </button>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default Markets;
