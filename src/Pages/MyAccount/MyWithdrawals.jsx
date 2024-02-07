const MyWithdrawals = () => {
    return (
        <>
            <div className="w-full h-max">
                <div className="w-full h-12 flex items-center px-3 justify-between bg-gray-700 text-white mb-2">
                    <p className="text-2xl">My Withdrawals</p>
                    <p>Acc Bal: $3000</p>
                </div>
                <div className="w-full h-max bg-slate-700 text-white flex flex-col gap-1 p-1">
                    <div className="w-full h-max flex flex-col gap-4">
                        <div className="w-full h-max flex flex-col gap-2">
                            <p className="">Amount to withdraw</p>
                            <input
                                type="number"
                                placeholder="amount"
                                className="w-full h-10 rounded border-none outline-none pl-2 text-black"
                            />
                            <p>Value in BTC: 0.3999921</p>
                        </div>
                        <div className="w-full h-max flex flex-col">
                            <p className="w-full flex justify-between">
                                Your Wallet Address{" "}
                                <span className="pr-2 text-3xl cursor-pointer">
                                    +
                                </span>
                            </p>
                            <input
                                type="text"
                                readOnly
                                value={"bc1q40xd9vyzz2n7y9wsrjxcqgk8jc8wj5x5sthptl"}
                                className="text-black w-full h-10 rounded outline-none pl-2"
                            />
                        </div>

                        <button className="w-full h-12 rounded outline-none bg-green-400 text-xl">
                            SUBMIT
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyWithdrawals;
