import "./index.css";
import "./App.css";
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Verify from "./Pages/Verify";
import TestApi from "./Pages/TestApi";
import LivescoreWidget from "./Pages/Livescorewidget";

const router = createBrowserRouter([
    //Entry Route
    {
        path: "/",
        element: <Home />,
        children: [
            {
                path: "login",
                element: <Login />,
            },
        ],
    },
    {path: "/login", element: <Login />},
    {path: "/signup", element: <SignUp />},
    {path: "/verify", element: <Verify />},
    {path: "/testapi", element: <TestApi />},
    {path: "/livescore", element: <LivescoreWidget />},
]);

const App = () => {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
};

export default App;
