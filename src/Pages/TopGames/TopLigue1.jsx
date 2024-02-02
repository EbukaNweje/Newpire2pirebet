const TopLigue1 = () => {
    return (
        <>
            <div className="w-80 h-full bg-black flex flex-col justify-between rounded-lg p-4">
                <p className="text-xs">Featured Match</p>
                <div className="w-full h-max flex justify-between">
                    <div className="w-max h-max flex flex-col gap-1">
                        <p>Paris Saint German</p>
                        <p>Toulouse</p>
                    </div>
                    <div className="w-max flex flex-col items-end">
                        <p className="text-xl">16:30</p>
                        <p className="text-xs">31/01/2023</p>
                    </div>
                </div>
                <div className="w-full h-max flex justify-between">
                    <div className="w-[30%] h-10 rounded-lg flex justify-between bg-gray-600 p-1">
                        <p className="w-full h-full flex justify-between py-1 px-2 cursor-pointer">
                            1 <span>1.20</span>
                        </p>
                    </div>
                    <div className="w-[30%] h-10 rounded-lg flex justify-between bg-gray-600 p-1">
                        <p className="w-full h-full flex justify-between py-1 px-2 cursor-pointer">
                            x <span>4.30</span>
                        </p>
                    </div>
                    <div className="w-[30%] h-10 rounded-lg flex justify-between bg-gray-600 p-1">
                        <p className="w-full h-full flex justify-between py-1 px-2 cursor-pointer">
                            2 <span>7.10</span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TopLigue1;
