import "./index.css";
import "./App.css";
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Verify from "./Pages/Verify";

const router = createBrowserRouter([
    //Entry Route
    {path: "/", element: <Home />},
    {path: "/login", element: <Login />},
    {path: "/signup", element: <SignUp />},
    {path: "/verify", element: <Verify />},
]);

const App = () => {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
};

export default App;
