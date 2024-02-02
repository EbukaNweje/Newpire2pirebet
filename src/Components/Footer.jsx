import logo from "../assets/PierLogo.svg";
import {TbRating18Plus} from "react-icons/tb";

const Footer = () => {
    return (
        <>
            <div className="w-full h-[20vh] bg-lime-950 flex justify-between px-10">
                <div className="w-1/3 h-full flex flex-col justify-center gap-4 ">
                    <img src={logo} alt="" className="w-16 h-16" />
                    <p className="text-sm text-white">
                        Unparalelled Excitement @ Pier2Pier
                    </p>
                </div>
                <div className="w-1/3 h-full flex flex-col gap-4">
                    <ul className="w-full h-full flex flex-col justify-center gap-2 text-white text-sm">
                        <li className="w-max cursor-pointer">Home</li>
                        <li className="w-max cursor-pointer">Deposit</li>
                        <li className="w-max cursor-pointer">Withdrawal</li>
                        <li className="w-max cursor-pointer">
                            Terms and conditions
                        </li>
                    </ul>
                </div>
                <div className="w-1/3 h-full flex flex-col items-center justify-end py-4 gap-2 text-white text-sm">
                    <TbRating18Plus className="w-10 h-10 " />
                    <p>Bet Responsibly</p>
                    <p>
                        ©{new Date().getFullYear()} Pier2Pier | All rights
                        reserved
                    </p>
                </div>
            </div>
        </>
    );
};

export default Footer;
