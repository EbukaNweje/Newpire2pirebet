import {NavLink} from "react-router-dom";

const SubHeader = () => {
    return (
        <>
            <div className="w-full h-10 bg-[#286421] px-5 flex items-center gap-4 text-sm">
                <div className="w-max flex items-center gap-4">
                    <NavLink to={"/"}>
                        <div className="w-max h-full px-4 flex items-center justify-center cursor-pointer text-white hover:text-gray-400 transition-all duration-500">
                            Home
                        </div>
                    </NavLink>
                    <NavLink to={"markets"}>
                        <div className="w-max h-full px-4 flex items-center justify-center cursor-pointer text-white hover:text-gray-400 transition-all duration-500">
                            Markets
                        </div>
                    </NavLink>
                    <NavLink to={"live-score"}>
                        <div className="w-max h-full px-4 flex items-center justify-center cursor-pointer text-white hover:text-gray-400 transition-all duration-500">
                            Live Scores
                        </div>
                    </NavLink>
                    <NavLink to={"update-matches"}>
                        <div className="w-max h-full px-4 flex items-center justify-center cursor-pointer text-white hover:text-gray-400 transition-all duration-500">
                            Update Matches
                        </div>
                    </NavLink>
                </div>
            </div>
        </>
    );
};

export default SubHeader;
