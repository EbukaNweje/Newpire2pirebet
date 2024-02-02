import {Outlet} from "react-router";
import Carousel from "../Components/Carousel";
import Header from "../Components/Header";
import SubHeader from "../Components/SubHeader";
import Footer from "../Components/Footer";
import Tops from "./TopGames/Tops";

const Home = () => {
    return (
        <>
            <div className="w-full h-max px-80 phone:px-0 bg-black">
                <Header />
                <SubHeader />
                <Carousel />
                <Tops />
                <div className="w-full h-max">
                    <Outlet />
                </div>
                <Footer />
            </div>
        </>
    );
};

export default Home;
