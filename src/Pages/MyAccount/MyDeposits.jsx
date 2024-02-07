import { FaUserEdit } from "react-icons/fa";

const MyDeposits = () => {
    return (
        <>
            <div className="w-full h-max">
                <div className="w-full h-12 flex items-center px-3 justify-between bg-gray-700 text-white">
                    <p className="text-2xl">My Deposits</p>
                    <FaUserEdit className="w-6 h-6 cursor-pointer" />
                </div>
                <div className="w-full h-max bg-slate-700 text-white flex flex-col gap-1 p-1"></div>
            </div>
        </>
    );
};

export default MyDeposits;
