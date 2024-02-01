import Cr1 from "../assets/my1.jpg";
import Cr2 from "../assets/my2.jpg";
import Cr3 from "../assets/my3.jpg";
import Cr4 from "../assets/m4.jpg";
import {useEffect, useState} from "react";
import {FaAngleLeft, FaAngleRight} from "react-icons/fa";

const Carousel = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const imageArray = [Cr1, Cr2, Cr3, Cr4];
    const totalImages = imageArray.length;

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % totalImages);
    };

    const handlePrevImage = () => {
        setCurrentImageIndex(
            (prevIndex) => (prevIndex - 1 + totalImages) % totalImages
        );
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            handleNextImage();
        }, 3000);

        return () => clearInterval(intervalId);
    }, [currentImageIndex]);
    return (
        <>
            <div className="w-full h-[40vh]">
                <div className="w-full h-full relative">
                    <span
                        className="absolute left-2 bg-[#807c7c] w-8 h-8 rounded-full flex items-center justify-center text-white top-[50%] cursor-pointer"
                        onClick={handlePrevImage}
                    >
                        <FaAngleLeft />
                    </span>
                    <img
                        src={imageArray[currentImageIndex]}
                        alt=""
                        className="w-full h-full object-cover"
                    />
                    <span
                        className="absolute right-2 bg-[#807c7c] w-8 h-8 rounded-full flex items-center justify-center text-white top-[50%] cursor-pointer"
                        onClick={handleNextImage}
                    >
                        <FaAngleRight />
                    </span>
                </div>
            </div>
        </>
    );
};

export default Carousel;
