"use client"

import React from "react";
import Navbar from "@/components/layout/navbar";
import Image from "next/image";
import mainImage from "../../../public/cd-glas-main.jpg"
import {Parallax} from "react-scroll-parallax";

export default function LandingSection() {
    return (
        <div id="landing" className="relative min-h-screen h-screen w-screen">
            {/* Background Video */}
            <Image src={mainImage} alt="mainImage" className="absolute top-0 left-0 w-screen h-full object-cover z-10"/>

            <div className="relative z-10 flex flex-col h-full justify-between ">
                <Navbar/>
                <div className={"backdrop-blur-xs  w-full h-full flex items-center justify-center"}>

                    <Parallax speed={4} className="text-center max-w-4xl mx-auto">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6 leading-tight font-thin
">
                            <span className="">Diversität & Integrität</span>
                            <br/>
                            <span
                                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-200 font-extralight">
                                in der Kunst und Kultur
                            </span>
                        </h1>
                    </Parallax>
                </div>
            </div>
        </div>
    );
}
