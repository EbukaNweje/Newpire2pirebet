import {useState} from "react";
import {Modal} from "antd";

const Markets = () => {
    const [openOffer, setOpenOffer] = useState(false);
    const testData = [1, 2, 3, 4, 5];
    return (
        <>
            <div className="w-full min-h-[40vh] flex flex-col gap-3 p-2 mt-2">
                {testData.map((index) => (
                    <div
                        className="w-full h-max flex flex-col bg-slate-600 p-2 rounded"
                        key={index}
                    >
                        <p className="w-full h-max flex justify-between">
                            Game ID <span>#ABCD1234</span>
                        </p>
                        <p className="w-full h-max flex justify-between">
                            Game: <span>Chelsea vs Man Utd</span>
                        </p>
                        <p className="w-full h-max flex justify-between">
                            Pick: <span>Home -1</span>
                        </p>
                        <p className="w-full h-max flex justify-between">
                            Stake: <span>$100</span>
                        </p>
                        <div className="w-full h-max flex items-center justify-center">
                            <button
                                className="w-max h-max px-4 py-2 bg-green-600 rounded"
                                onClick={() => setOpenOffer(true)}
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
                onCancel={() => setOpenOffer(false)}
            >
                <div className="w-full h-max flex flex-col gap-3 items-center text-white">
                    <p className="text-lg">
                        Place an offer against this market.
                    </p>
                    <div className="w-full h-max flex justify-between gap-2 p-2">
                        <div className="w-max h-max flex items-center justify-center px-5 rounded-sm py-2 bg-slate-500">
                            X1
                        </div>
                        <div className="w-max h-max flex items-center justify-center px-5 rounded-sm py-2 bg-slate-500">
                            X2
                        </div>
                        <div className="w-max h-max flex items-center justify-center px-5 rounded-sm py-2 bg-slate-500">
                            X3
                        </div>
                        <div className="w-max h-max flex items-center justify-center px-5 rounded-sm py-2 bg-slate-500">
                            X4
                        </div>
                        <div className="w-max h-max flex items-center justify-center px-5 rounded-sm py-2 bg-slate-500">
                            X5
                        </div>
                    </div>
                    <div className="w-full h-max flex items-center justify-center">
                        <button className="w-max h-max px-4 py-2 bg-green-600 rounded">
                            Make Offer
                        </button>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default Markets;
