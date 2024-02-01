import {Outlet} from "react-router";
import Carousel from "../Components/Carousel";
import Header from "../Components/Header";
import SubHeader from "../Components/SubHeader";
import Prem from "./TopGames/Prem";

const Home = () => {
    return (
        <>
            <div className="w-full h-screen px-80 phone:px-0 bg-black">
                <Header />
                <SubHeader />
                <Carousel />
                <div className="w-full h-max flex flex-col text-white justify-center gap-2">
                    <div className="w-full h-10 flex items-center text-sm">
                        Top Leagues
                    </div>
                    <div className="w-full h-8 flex items-center gap-4 overflow-x-auto">
                        <div className="w-max h-full flex items-center gap-4 ">
                            <div className="w-max h-full bg-gray-900 hover:bg-gray-800 transition-all duration-500 rounded cursor-pointer text-xs flex items-center justify-center px-4">
                                Premier League
                            </div>
                            <div className="w-max h-full bg-gray-900 hover:bg-gray-800 transition-all duration-500 rounded cursor-pointer text-xs flex items-center justify-center px-4">
                                Laliga
                            </div>
                            <div className="w-max h-full bg-gray-900 hover:bg-gray-800 transition-all duration-500 rounded cursor-pointer text-xs flex items-center justify-center px-4">
                                Seria A
                            </div>
                            <div className="w-max h-full bg-gray-900 hover:bg-gray-800 transition-all duration-500 rounded cursor-pointer text-xs flex items-center justify-center px-4">
                                Bundesliga
                            </div>
                            <div className="w-max h-full bg-gray-900 hover:bg-gray-800 transition-all duration-500 rounded cursor-pointer text-xs flex items-center justify-center px-4">
                                Ligue 1
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-52 bg-sky-950 overflow-x-auto">
                        <div className="w-max h-full flex gap-4 p-4">
                            <Prem/>
                        </div>
                    </div>
                </div>
                <div className="w-full h-max">
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default Home;
