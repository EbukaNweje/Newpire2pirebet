import "./index.css";
import "./App.css";
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Verify from "./Pages/Verify";
// import TestApi from "./Pages/TestApi";
import LivescoreWidget from "./Pages/Livescorewidget";
import MainHome from "./Pages/MainHome";
import PremierLeague from "./Pages/Leagues/PremierLeague";
import FaCup from "./Pages/Leagues/FaCup";
import EflCup from "./Pages/Leagues/EflCup";
import EnglandShield from "./Pages/Leagues/EnglandShield";
import Laliga from "./Pages/Leagues/Laliga";
import SpainCDR from "./Pages/Leagues/SpainCDR";
import SpainSuperCup from "./Pages/Leagues/SpainSuperCup";
import Bundesliga from "./Pages/Leagues/Bundesliga";
import Dfbpokal from "./Pages/Leagues/Dfbpokal";
import GermanSuperCup from "./Pages/Leagues/GermanSuperCup";
// import LigueOne from "./Pages/Leagues/ligueOne";
import Trophee from "./Pages/Leagues/Trophee";
import Coupe from "./Pages/Leagues/Coupe";
import SeriaA from "./Pages/Leagues/SeriaA";
import CopaItalia from "./Pages/Leagues/CopaItalia";
import ItaliaSuperCup from "./Pages/Leagues/ItaliaSuperCup";
import Ucl from "./Pages/Leagues/Ucl";
import Uel from "./Pages/Leagues/Uel";
import UefaSuperCup from "./Pages/Leagues/UefaSuperCup";
import MyAccount from "./Pages/MyAccount/MyAccount";
import MyProfile from "./Pages/MyAccount/MyProfile";
import MyBetslips from "./Pages/MyAccount/MyBetslips";
import MyWithdrawals from "./Pages/MyAccount/MyWithdrawals";
import MyDeposits from "./Pages/MyAccount/MyDeposits";
import MyTransactions from "./Pages/MyAccount/MyTransactions";
import FrenchLeagueOne from "./Pages/Leagues/FrenchLeagueOne";


const router = createBrowserRouter([
    //Entry Route
    {
        path: "/",
        element: <Home />,
        children: [
            {
                path: "",
                element: <MainHome />,
            },
            {
                path: "uefa-champions-league",
                element: <Ucl />,
            },
            {
                path: "uefa-europa-league",
                element: <Uel />,
            },
            {
                path: "uefa-super-cup",
                element: <UefaSuperCup />,
            },
            {
                path: "premier-league",
                element: <PremierLeague />,
            },
            {
                path: "fa-cup",
                element: <FaCup />,
            },
            {
                path: "efl-cup",
                element: <EflCup />,
            },
            {
                path: "community-shield",
                element: <EnglandShield />,
            },
            {
                path: "laliga",
                element: <Laliga />,
            },
            {
                path: "copa-del-rey",
                element: <SpainCDR />,
            },
            {
                path: "spanish-super-cup",
                element: <SpainSuperCup />,
            },
            {
                path: "bundesliga",
                element: <Bundesliga />,
            },
            {
                path: "dfb-pokal",
                element: <Dfbpokal />,
            },
            {
                path: "german-super-cup",
                element: <GermanSuperCup />,
            },
            {
                path: "ligue-one",
                element: <FrenchLeagueOne />,
            },
            {
                path: "trophee-des-champions",
                element: <Trophee />,
            },
            {
                path: "coupe-de-france",
                element: <Coupe />,
            },
            {
                path: "seria-a",
                element: <SeriaA />,
            },
            {
                path: "copa-italia",
                element: <CopaItalia />,
            },
            {
                path: "italia-super-cup",
                element: <ItaliaSuperCup />,
            },
            {
                path: "live-score",
                element: <LivescoreWidget />,
            },
        ],
    },
    {path: "/login", element: <Login />},
    {path: "/signup", element: <SignUp />},
    {path: "/verify", element: <Verify />},
    {path: "/verify", element: <Verify />},
    {
        path: "/my-account",
        element: <MyAccount />,
        children: [
            {
                path: "profile",
                element: <MyProfile />,
            },
            {
                path: "betslips",
                element: <MyBetslips />,
            },
            {
                path: "withdrawals",
                element: <MyWithdrawals />,
            },
            {
                path: "deposits",
                element: <MyDeposits />,
            },
            {
                path: "transactions",
                element: <MyTransactions />,
            },
        ],
    },
    // {path: "/faq", element: <Faq />},
]);

const App = () => {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
};

export default App;
