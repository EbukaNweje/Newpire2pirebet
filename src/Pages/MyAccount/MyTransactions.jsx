import {useState} from "react";

const MyTransactions = () => {
    const [deposit, setDeposit] = useState(true);
    const [withdrawal, setWithdrawal] = useState(false);

    const handleShowDeposit = () => {
        setDeposit(true);
        setWithdrawal(false);
    };
    const handleShowWithdrawal = () => {
        setDeposit(false);
        setWithdrawal(true);
    };
    return (
        <>
            <div className="w-full h-max">
                <div className="w-full h-12 flex items-center px-3 justify-between bg-gray-700 text-white mb-2">
                    <p className="text-2xl">My Transactions</p>
                </div>
                <div className="w-full h-max  text-white flex flex-col gap-1 p-1 mb-2">
                    <div className="w-full h-10 flex items-center justify-center gap-4">
                        <div
                            className={`${
                                deposit ? "bg-slate-700" : "border"
                            } w-max h-max p-2 rounded cursor-pointer`}
                            onClick={handleShowDeposit}
                        >
                            Deposits
                        </div>
                        <div
                            className={`${
                                withdrawal ? "bg-slate-700" : "border"
                            } w-max h-max p-2 rounded cursor-pointer`}
                            onClick={handleShowWithdrawal}
                        >
                            Withdrawals
                        </div>
                    </div>
                </div>
                <div className="w-full h-max">
                    {deposit ? (
                        <>
                            <div className="w-full h-max flex flex-col gap-2">
                                <div className="w-full h-20 bg-slate-700 flex text-white">
                                    <div className="w-1/2 h-full flex flex-col p-1">
                                        <p>10-10-2010</p>
                                        <p>$2000</p>
                                        <p>BTC</p>
                                    </div>
                                    <div className="w-1/2 h-full flex flex-col p-1">
                                        <p className="w-max flex items-center gap-4">
                                            Success{" "}
                                            <span className="w-4 h-4 rounded-full bg-green-500"></span>
                                        </p>
                                        <p>Close</p>
                                        <p>bc1qcr8te4kr609gcaqlc</p>
                                    </div>
                                </div>
                                <div className="w-full h-20 bg-slate-700 flex text-white">
                                    <div className="w-1/2 h-full flex flex-col p-1">
                                        <p>10-10-2010</p>
                                        <p>$2000</p>
                                        <p>BTC</p>
                                    </div>
                                    <div className="w-1/2 h-full flex flex-col p-1">
                                        <p className="w-max flex items-center gap-4">
                                            Failed{" "}
                                            <span className="w-4 h-4 rounded-full bg-red-500"></span>
                                        </p>
                                        <p>Close</p>
                                        <p>bc1qcr8te4kr609gcaqlc</p>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : withdrawal ? (
                        <>
                            <div className="w-full h-max flex flex-col gap-2">
                                <div className="w-full h-20 bg-slate-700 flex text-white">
                                    <div className="w-1/2 h-full flex flex-col p-1">
                                        <p>10-10-2010</p>
                                        <p>$2000</p>
                                        <p>BTC</p>
                                    </div>
                                    <div className="w-1/2 h-full flex flex-col p-1">
                                        <p className="w-max flex items-center gap-4">
                                            Pending{" "}
                                            <span className="w-4 h-4 rounded-full bg-yellow-500"></span>
                                        </p>
                                        <p>open</p>
                                        <p>bc1qcr8te4kr609gcaqlc</p>
                                    </div>
                                </div>
                                <div className="w-full h-20 bg-slate-700 flex text-white">
                                    <div className="w-1/2 h-full flex flex-col p-1">
                                        <p>10-10-2010</p>
                                        <p>$2000</p>
                                        <p>BTC</p>
                                    </div>
                                    <div className="w-1/2 h-full flex flex-col p-1">
                                        <p className="w-max flex items-center gap-4">
                                            Failed{" "}
                                            <span className="w-4 h-4 rounded-full bg-red-500"></span>
                                        </p>
                                        <p>Close</p>
                                        <p>bc1qcr8te4kr609gcaqlc</p>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : null}
                </div>
            </div>
        </>
    );
};

export default MyTransactions;
