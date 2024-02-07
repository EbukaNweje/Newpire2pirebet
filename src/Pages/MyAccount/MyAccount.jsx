import Header from "../../Components/Header";
import {Outlet} from "react-router";
import {Drawer} from "antd";
import {useState} from "react";

const MyAccount = () => {
    const [openProfile, setOpenProfile] = useState(false);
    return (
        <>
            <div className="w-full h-screen bg-slate-800">
                <Header />
                <div className="w-full h-max p-2">
                    <Outlet />
                </div>
            </div>
            <Drawer
                open={openProfile}
                onClose={() => setOpenProfile(false)}
                placement="left"
                maskClosable={true}
                width={300}
                title={"ACCOUNT"}
                className="text-white"
                style={{background: "#1d1f1d"}}
            >
                <div></div>
            </Drawer>
        </>
    );
};

export default MyAccount;
