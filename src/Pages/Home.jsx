import {Outlet} from "react-router";
import Carousel from "../Components/Carousel";
import Header from "../Components/Header";
import SubHeader from "../Components/SubHeader";

const Home = () => {
    return (
        <>
            <div className="w-full h-screen px-80 phone:px-0 bg-black">
                <Header />
                <SubHeader />
                <Carousel />
                <div className="w-full h-max">
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default Home;
