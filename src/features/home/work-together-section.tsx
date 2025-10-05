"use client"

import React, {useState} from "react";
import {Parallax} from "react-scroll-parallax";
import Link from "next/link";
import workshops from "@/features/shared/data/workshops"
import Image from "next/image";

export default function WorkTogetherSection() {
    const [activeWorkshop, setActiveWorkshop] = useState(0);

    // Filter out the program overview from workshops
    const actualWorkshops = workshops.filter(w => w.id !== 1);
    const programOverview = workshops.find(w => w.id === 1);

    return (
        <section id="work-together" className="bg-white py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Program Introduction */}
                {programOverview && (
                    <Parallax speed={2} className="">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-black mb-4 leading-tight font-thin">
                                <span className="text-red-600">Next-Level</span> Music Practice
                            </h2>
                            <div className="w-24 h-0.5 bg-red-600 mx-auto rounded-full"></div>
                        </div>

                        <div className="max-w-4xl mx-auto">
                            <div className="space-y-6 text-center mb-8">
                                {programOverview.shortDescription.map((desc, index) => (
                                    <p
                                        key={index}
                                        className="text-lg text-gray-700 leading-relaxed font-light"
                                        dangerouslySetInnerHTML={{__html: desc}}
                                    />
                                ))}
                            </div>
                            <div className="text-center">
                                <Link href={`/work-together/${programOverview.id}`}>
                                    <button className="btn btn-outline btn-primary">
                                        Mehr über das Programm
                                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor"
                                             viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                  d="M9 5l7 7-7 7"/>
                                        </svg>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </Parallax>
                )}

                {/*/!* Divider *!/*/}
                {/*<div className="flex items-center justify-center my-16">*/}
                {/*    <div className="flex-1 border-t border-gray-200"></div>*/}
                {/*    <span className="px-6 text-gray-500 font-light">Unsere Workshops</span>*/}
                {/*    <div className="flex-1 border-t border-gray-200"></div>*/}
                {/*</div>*/}

                <div className="divider text-gray-500 font-light  my-20">Unsere Workshops</div>


                {/* Individual Workshops Section */}
                {/*<Parallax speed={1} className="text-center mb-12">*/}
                {/*    <h3 className="text-3xl sm:text-4xl font-light text-black mb-4">*/}
                {/*        Workshop <span className="text-red-600">Angebote</span>*/}
                {/*    </h3>*/}
                {/*    <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">*/}
                {/*        Wählen Sie aus unseren spezialisierten Workshops im Rahmen von Next-Level Music Practice*/}
                {/*    </p>*/}
                {/*</Parallax>*/}

                {/* Two Column Layout - Workshops Carousel */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

                    {/* Left Side - Carousel */}
                    <Parallax speed={1}>
                        <div className="relative w-full">
                            <div className="flex space-x-4">

                                {/* Vertically Scrollable Thumbnails */}
                                <div className="flex-none">
                                    <div
                                        className="w-24 h-80 flex flex-col gap-2 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 pr-2">
                                        {actualWorkshops.map((workshop, index) => (
                                            <Image
                                                key={workshop.id}
                                                src={workshop.image}
                                                className={`w-full h-16 object-cover rounded-lg cursor-pointer transition-opacity ${
                                                    activeWorkshop === index ? 'opacity-100' : 'opacity-30 hover:opacity-60'
                                                }`}
                                                width={200}
                                                height={200}
                                                alt={workshop.title}
                                                onClick={() => setActiveWorkshop(index)}
                                            />
                                        ))}
                                    </div>
                                </div>

                                {/* Main Image Display */}
                                <div className="relative flex-1 overflow-hidden rounded-2xl">
                                    <div className="h-80">
                                        <Image
                                            src={actualWorkshops[activeWorkshop].image}
                                            className="w-full h-full object-cover"
                                            width={200}
                                            height={200}
                                            alt={actualWorkshops[activeWorkshop].title}
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

                                {/* Workshop Title & Subtitle */}
                                <div>
                                    <h3 className="text-2xl sm:text-3xl font-medium text-black mb-3">
                                        {actualWorkshops[activeWorkshop].title}
                                    </h3>
                                    {actualWorkshops[activeWorkshop].subtitle && (
                                        <p className="text-lg text-gray-600 font-light mb-4">
                                            {actualWorkshops[activeWorkshop].subtitle}
                                        </p>
                                    )}
                                    <div className="w-16 h-0.5 bg-red-600 rounded-full"></div>
                                </div>

                                <div className="space-y-6">
                                    {actualWorkshops[activeWorkshop].shortDescription.map((description, index) => (
                                        <div
                                            key={index}
                                            className="rounded-xl"
                                        >
                                            <p
                                                className="text-lg text-gray-700 leading-relaxed font-light"
                                                dangerouslySetInnerHTML={{__html: description}}
                                            />
                                        </div>
                                    ))}
                                </div>

                                {/* Updated Details Button with Navigation */}
                                <Link href={`/work-together/${actualWorkshops[activeWorkshop].id}`}>
                                    <button className="btn btn-outline btn-primary">
                                        Mehr erfahren
                                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor"
                                             viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                  d="M9 5l7 7-7 7"/>
                                        </svg>
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