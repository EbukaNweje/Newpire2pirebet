import {FaUserEdit} from "react-icons/fa";

const MyTransactions = () => {
    return (
        <>
            <div className="w-full h-max">
                <div className="w-full h-12 flex items-center px-3 justify-between bg-gray-700 text-white mb-2">
                    <p className="text-2xl">My Transactions</p>
                    <FaUserEdit className="w-6 h-6 cursor-pointer" />
                </div>
                <div className="w-full h-max  text-white flex flex-col gap-1 p-1 mb-2">
                    <div className="w-full h-10 flex items-center justify-center gap-4">
                        <div className="bg-slate-700 w-max h-max p-2 rounded cursor-pointer">Deposits</div>
                        <div className="bg-slate-700 w-max h-max p-2 rounded cursor-pointer">Withdrawals</div>
                    </div>
                </div>
                <div className="w-full h-max flex flex-col">
                  <div className="w-full h-16 bg-slate-700">

                  </div>

                </div>
            </div>
        </>
    );
};

export default MyTransactions;
