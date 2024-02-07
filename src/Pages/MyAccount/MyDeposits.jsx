import {Modal} from "antd";
import {useState} from "react";
import toast from "react-hot-toast";

const MyDeposits = () => {
    const [openIsPayed, setOpenIsPayed] = useState(false);
    const [selectedFileName, setSelectedFileName] = useState("Click to select");
    const [file, setFile] = useState();
    const [fileInput, setFileInput] = useState();
    console.log("POP", file);

    const handleSubmitPop = () => {
        const loadingId = toast.loading("Please wait...");
        setTimeout(() => {
            toast.dismiss(loadingId);
            toast.success("Deposit successful, pending confirmation");
            handleBack();
        }, 5000);
    };

    const handleFileChange = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            setFile(file);
            setSelectedFileName(file.name);
        }
    };

    const handleBack = () => {
        if (fileInput) {
            // Reset the file input value
            fileInput.value = "";
        }
        setOpenIsPayed(false);
        setSelectedFileName("Click to select");
    };

    return (
        <>
            <div className="w-full h-max">
                <div className="w-full h-12 flex items-center px-3 justify-between bg-gray-700 text-white mb-2">
                    <p className="text-2xl">My Deposits</p>
                </div>
                <div className="w-full h-max bg-slate-700 text-white flex flex-col gap-1 p-1">
                    <div className="w-full h-max flex flex-col gap-2">
                        <div className="w-full h-max flex flex-col gap-2">
                            <p>Amount to deposit</p>
                            <input
                                type="number"
                                placeholder="Enter amount"
                                className="w-full h-10 outline-none rounded pl-2 text-black"
                            />
                            <p>You are to pay in btc 0.00</p>
                        </div>
                        <div className="w-full h-max flex flex-col gap-2">
                            <p>Wallet Address</p>
                            <input
                                type="text"
                                readOnly
                                value={
                                    "bc1q40xd9vyzz2n7y9wsrjxcqgk8jc8wj5x5sthptl"
                                }
                                className="text-black w-full h-10 rounded outline-none pl-2"
                            />
                            <p className="text-xs">
                                Please pay only to this address
                            </p>
                        </div>
                        <button
                            className="w-full h-10 bg-yellow-500 rounded outline-none"
                            onClick={() => setOpenIsPayed(true)}
                        >
                            I have made payment
                        </button>
                    </div>
                </div>
            </div>
            <Modal
                open={openIsPayed}
                onOk={handleSubmitPop}
                onCancel={handleBack}
                // cancelButtonProps={{hidden: true}}
                okButtonProps={{
                    className: "bg-[#0A503D] text-white",
                    size: "large",
                    style: {
                        backgroundColor: "#0A503D",
                    },
                }}
                closeIcon={true}
            >
                <div className="w-full h-80 flex flex-col gap-2 py-6">
                    <div className="w-full h-max flex flex-col gap-3">
                        <div className="w-full h-24 border border-[rgb(205,159,12)] bg-[#fef7e2] rounded flex flex-col items-center justify-center gap-1">
                            <p className="text-sm text-[rgb(205,159,12)]">
                                {" "}
                                Attach your proof of payment below.
                            </p>
                            <p className="text-sm text-[rgb(205,159,12)] font-medium">
                                {" "}
                                Accepted format: .JPG, .PNG, .GIF, .PDF
                            </p>
                        </div>
                        <div className="w-full h-10 border border-gray-300 rounded flex">
                            <input
                                type="file"
                                accept="image/jpeg, image/png, image/gif, application/pdf"
                                className="hidden"
                                onChange={handleFileChange}
                                ref={(input) => setFileInput(input)}
                                id="fileInput"
                            />
                            <label
                                className="cursor-pointer w-full h-full border-none outline-none flex justify-center items-center bg-gray-200 rounded"
                                htmlFor="fileInput"
                            >
                                <div className="w-max px-2 flex items-center justify-center h-full">
                                    {selectedFileName}
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default MyDeposits;
