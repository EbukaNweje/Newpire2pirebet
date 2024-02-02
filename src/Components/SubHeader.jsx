import {NavLink} from "react-router-dom";

const SubHeader = () => {
    return (
        <>
            <div className="w-full h-10 bg-[#286421] px-5 flex items-center gap-4 text-sm">
                <NavLink to={"/"}>
                    <div className="w-max h-full px-4 flex items-center justify-center cursor-pointer text-white hover:text-gray-400 transition-all duration-500">
                        Home
                    </div>
                </NavLink>
                <NavLink to={"live-score"}>
                    <div className="w-max h-full px-4 flex items-center justify-center cursor-pointer text-white hover:text-gray-400 transition-all duration-500">
                        Live Scores
                    </div>
                </NavLink>
            </div>
        </>
    );
};

export default SubHeader;
