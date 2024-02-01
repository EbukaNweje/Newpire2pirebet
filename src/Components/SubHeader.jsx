const SubHeader = () => {
    return (
        <>
            <div className="w-full h-10 bg-[#286421] px-5 flex items-center gap-4 text-sm">
                <div className="w-max h-full px-4 flex items-center justify-center cursor-pointer text-white hover:text-gray-400 transition-all duration-500">
                    Home
                </div>
                <div className="w-max h-full px-4 flex items-center justify-center cursor-pointer text-white hover:text-gray-400 transition-all duration-500">
                    Live Scores
                </div>
            </div>
        </>
    );
};

export default SubHeader;
