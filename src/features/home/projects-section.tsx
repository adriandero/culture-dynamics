"use client"

import React from "react";
import {Parallax} from "react-scroll-parallax";
import Image from "next/image";

export default function ProjectsSection() {
    return (
        <section id="projects" className="min-h-[80vh] bg-gray-50 py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Title */}
                <Parallax speed={2} className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-black mb-4 leading-tight font-thin">
                        Das ist Culture <span className="text-red-600">Dynamics</span>
                    </h2>
                    <div className="w-24 h-0.5 bg-red-600 mx-auto rounded-full"></div>
                </Parallax>

                {/* Projects Carousel */}
                <Parallax speed={1}>
                    <div id="auto-height" data-carousel='{ "isAutoHeight": true, "loadingClasses": "opacity-0" }'
                         className="relative w-full">
                        <div className="carousel">
                            <div className="carousel-body h-full relative opacity-0">

                                {/* GLAS Project */}
                                <div className="carousel-slide h-80 lg:h-96">
                                    <div className="relative h-full w-full rounded-2xl overflow-hidden">
                                        <Image
                                            src="/glas-group.png"
                                            alt="Vokalensemble GLAS"
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                        <div className="absolute inset-0 bg-black/40 flex items-end">
                                            <div className="p-6 w-full">
                                                <h3 className="text-white text-xl sm:text-2xl font-medium mb-2">
                                                    Vokalensemble GLAS
                                                </h3>
                                                <p className="text-gray-200 text-sm sm:text-base font-light">
                                                    Stimmen aus Südosteuropa im Herzen Wiens
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* VOX Slavena Chor Project */}
                                <div className="carousel-slide h-80 lg:h-96">
                                    <div className="relative h-full w-full rounded-2xl overflow-hidden">
                                        <Image
                                            src="/slavena-chor.png"
                                            alt="VOX Slavena Chor"
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-black/40 flex items-end">
                                            <div className="p-6 w-full">
                                                <h3 className="text-white text-xl sm:text-2xl font-medium mb-2">
                                                    VOX Slavena Chor
                                                </h3>
                                                <p className="text-gray-200 text-sm sm:text-base font-light">
                                                    Ein neuer Klang Wiens
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* TANZBODEN Project */}
                                <div className="carousel-slide h-80 lg:h-96">
                                    <div className="relative h-full w-full rounded-2xl overflow-hidden">
                                        <Image
                                            src="/tanzboden.png"
                                            alt="TANZBODEN"
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-black/40 flex items-end">
                                            <div className="p-6 w-full">
                                                <h3 className="text-white text-xl sm:text-2xl font-medium mb-2">
                                                    T A N Z B O D E N
                                                </h3>
                                                <p className="text-gray-200 text-sm sm:text-base font-light">
                                                    Dieses ist ein Herzenswunsch
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Navigation Buttons */}
                        <button type="button"
                                className="carousel-prev start-5 max-sm:start-3 carousel-disabled:opacity-50 size-9.5 bg-white/90 hover:bg-white flex items-center justify-center rounded-full shadow-lg transition-colors">
                            <span className="icon-[tabler--chevron-left] size-5 cursor-pointer text-gray-700"></span>
                            <span className="sr-only">Previous</span>
                        </button>

                        <button type="button"
                                className="carousel-next end-5 max-sm:end-3 carousel-disabled:opacity-50 size-9.5 bg-white/90 hover:bg-white flex items-center justify-center rounded-full shadow-lg transition-colors">
                            <span className="icon-[tabler--chevron-right] size-5 text-gray-700"></span>
                            <span className="sr-only">Next</span>
                        </button>
                    </div>
                </Parallax>

            </div>
        </section>
    );
}