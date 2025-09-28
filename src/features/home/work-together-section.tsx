"use client"

import React, {useState} from "react";
import {Parallax} from "react-scroll-parallax";
import Image from "next/image";
import Link from "next/link";
import workshops from "@/features/shared/data/workshops"

export default function WorkTogetherSection() {
    const [activeWorkshop, setActiveWorkshop] = useState(0);

    return (
        <section id="work-together" className="min-h-[80vh] bg-white py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Title */}
                <Parallax speed={2} className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-black mb-4 leading-tight font-thin">
                        Unsere <span className="text-red-600">Workshops</span>
                    </h2>
                    <div className="w-24 h-0.5 bg-red-600 mx-auto rounded-full"></div>
                </Parallax>

                {/* Two Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

                    {/* Left Side - Carousel */}
                    <Parallax speed={1}>
                        <div className="relative w-full">
                            <div className="flex space-x-4">

                                {/* Vertically Scrollable Thumbnails */}
                                <div className="flex-none">
                                    <div
                                        className="w-24 h-80 flex flex-col gap-2 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 pr-2">
                                        {workshops.map((workshop, index) => (
                                            <img
                                                key={workshop.id}
                                                src={workshop.image}
                                                className={`w-full h-16 object-cover rounded-lg cursor-pointer transition-opacity ${
                                                    activeWorkshop === index ? 'opacity-100  ' : 'opacity-30 hover:opacity-60'
                                                }`}
                                                alt={workshop.title}
                                                onClick={() => setActiveWorkshop(index)}
                                            />
                                        ))}
                                    </div>
                                </div>

                                {/* Main Image Display */}
                                <div className="relative flex-1 overflow-hidden rounded-2xl ">
                                    <div className="h-80">
                                        <img
                                            src={workshops[activeWorkshop].image}
                                            className="w-full h-full object-cover"
                                            alt={workshops[activeWorkshop].title}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Parallax>

                    {/* Right Side - Workshop Details */}
                    <Parallax speed={0.5}>
                        <div className="lg:pl-8">
                            <div className="space-y-8">

                                {/* Workshop Title */}
                                <div>
                                    <h3 className="text-2xl sm:text-3xl font-medium text-black mb-4">
                                        {workshops[activeWorkshop].title}
                                    </h3>
                                    <div className="w-16 h-0.5 bg-red-600 rounded-full"></div>
                                </div>

                                <div className="space-y-6">
                                    {workshops[activeWorkshop].descriptions.map((description, index) => (
                                        <div
                                            key={index}
                                            className={`rounded-xl `}
                                        >
                                            <p
                                                className="text-lg text-gray-700 leading-relaxed font-light"
                                                dangerouslySetInnerHTML={{__html: description}}
                                            />
                                        </div>
                                    ))}
                                </div>

                                {/* Updated Details Button with Navigation */}
                                <Link href={`/work-together/${workshops[activeWorkshop].id}`}>
                                    <button className="btn btn-outline btn-primary">
                                        Details
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </Parallax>
                </div>
            </div>
        </section>
    );
}