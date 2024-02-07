import { FaUserEdit } from "react-icons/fa";

const MyProfile = () => {
    return (
        <>
            <div className="w-full h-max">
                <div className="w-full h-12 flex items-center px-3 justify-between bg-gray-700 text-white">
                    <p className="text-2xl">My Profile</p>
                    <FaUserEdit className="w-6 h-6 cursor-pointer"/>
                </div>
                <div className="w-full h-max bg-slate-700 text-white flex flex-col gap-1 p-1">
                    <div className="w-full h-16 flex justify-between items-center border-b">
                        <p>Fullname</p>
                        <p>John Mayer</p>
                    </div>
                    <div className="w-full h-16 flex justify-between items-center border-b">
                        <p>Email</p>
                        <p>test@gmail.com</p>
                    </div>
                    <div className="w-full h-16 flex justify-between items-center border-b">
                        <p>Btc Wallet</p>
                        <p>dhbsdhgdsjs28xnssnjsjjj </p>
                    </div>
                    <div className="w-full h-16 flex justify-between items-center border-b">
                        <p>Password</p>
                        <p>**********</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyProfile;
