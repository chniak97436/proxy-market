"use client"
import { useState, useEffect, useRef } from "react"
import { FaRegArrowAltCircleRight, FaRegArrowAltCircleLeft } from "react-icons/fa";
import Image from "next/image";
export default function Caroussel() {

    const images = [
        { src: "/images/glace.jpg", alt: "image", width: 1920, height: 1080 },
        { src: "/images/glace-rouded.jpg", alt: "image", width: 1920, height: 1080 },
        { src: "/images/pain-bouchon.jpg", alt: "image", width: 1920, height: 1080 },
        { src: "/images/piment.jpg", alt: "image", width: 1920, height: 1080 },
        { src: "/images/barattolino.jpg", alt: "image", width: 1920, height: 1080 },
        { src: "/images/copa-d'oro.jpg", alt: "image", width: 1920, height: 1080 },
        { src: "/images/quotidien.jpg", alt: "image", width: 1920, height: 1080 },
        { src: "/images/red-bull.jpg", alt: "image", width: 1920, height: 1080 },
        { src: "/images/vapote.jpg", alt: "image", width: 1920, height: 1080 },
        { src: "/images/vozol.jpg", alt: "image", width: 1920, height: 1080 },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const intervalRef = useRef(null);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(intervalRef.current);
    }, []);

    const nextImage = () => {
        clearInterval(intervalRef.current);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        intervalRef.current = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
    };

    const prevImage = () => {
        clearInterval(intervalRef.current);
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
        intervalRef.current = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
    };

    return (
        <div className="relative w-full h-[200px] flex items-center justify-center overflow-hidden mb-6 border-[#b0ca0b] border shadow-lg">
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-500 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}>
            <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="object-cover w-full h-full ]"
            />
                </div>
            ))}

            <div className="absolute inset-0 flex items-center justify-between px-4">
                <span onClick={prevImage} className="cursor-pointer text-[white]">
                    <FaRegArrowAltCircleLeft size={40} />
                </span>
                <span onClick={nextImage} className="text-[white] cursor-pointer">
                    <FaRegArrowAltCircleRight size={40} />
                </span>
            </div>
        </div>
    )
}
