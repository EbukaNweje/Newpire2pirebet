import {CgDanger} from "react-icons/cg";

const Ucl = () => {
    return (
        <>
            <div className="w-full h-max">
                <div className="h-[30vh] w-full flex items-center flex-col gap-4 justify-center ">
                    <CgDanger className="w-10 h-10"/>
                    <p>No Available matches</p>
                </div>
            </div>
        </>
    );
};

export default Ucl;
