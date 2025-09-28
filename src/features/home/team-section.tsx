"use client"

import React from "react";
import {Parallax} from "react-scroll-parallax";
import Image from "next/image";
import natasa from "@/../public/team/natasa.png"
import alena from "@/../public/team/alena.png"
import sofija from "@/../public/team/sofija.png"
import vedrana from "@/../public/team/vedrana.png"

export default function TeamSection() {
    return (
        <section id="team" className="bg-gray-50 py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Title */}
                <Parallax speed={2} className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-black mb-4 leading-tight font-thin">
                        Unser <span className="text-red-600">Team</span>
                    </h2>
                    <div className="w-24 h-0.5 bg-red-600 mx-auto rounded-full"></div>
                </Parallax>

                {/* Team Flex Layout */}
                <Parallax speed={1}>
                    <div className="flex flex-wrap justify-center gap-8 lg:gap-12">

                        {/* Nataša Mirković */}
                        <div className="flex flex-col items-center text-center flex-shrink-0 group">
                            <div className="mb-6 group-hover:scale-105 transition-transform duration-300">
                                <div
                                    className="w-48 h-48 rounded-2xl overflow-hidden bg-gray-200    ">
                                    <Image
                                        src={natasa}
                                        alt="Mag.art. Nataša Mirković"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            <div className="group-hover:translate-y-2 transition-transform duration-300">
                                <h3 className="text-lg font-medium text-black mb-2">Mag.art. NATAŠA MIRKOVIĆ</h3>
                                <p className="text-sm text-gray-600 font-light leading-relaxed">
                                    Gründerin<br/>
                                    Künstlerische Leitung<br/>
                                    Projektleitung
                                </p>
                            </div>
                        </div>

                        {/* Alena Bukvić */}
                        <div className="flex flex-col items-center text-center flex-shrink-0 group">
                            <div className="mb-6 group-hover:scale-105 transition-transform duration-300">
                                <div
                                    className="w-48 h-48 rounded-2xl overflow-hidden bg-gray-200    ">
                                    <Image
                                        src={alena}
                                        alt="Alena Bukvic"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            <div className="group-hover:translate-y-2 transition-transform duration-300">
                                <h3 className="text-lg font-medium text-black mb-2">ALENA BUKVIĆ</h3>
                                <p className="text-sm text-gray-600 font-light leading-relaxed">
                                    Mitbegründerin<br/>
                                    Projektleitung
                                </p>
                            </div>
                        </div>

                        {/* Vedrana Passin */}
                        <div className="flex flex-col items-center text-center flex-shrink-0 group">
                            <div className="mb-6 group-hover:scale-105 transition-transform duration-300">
                                <div
                                    className="w-48 h-48 rounded-2xl overflow-hidden bg-gray-200    ">
                                    <Image
                                        src={vedrana}
                                        alt="Vedrana Passin"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            <div className="group-hover:translate-y-2 transition-transform duration-300">

                                <h3 className="text-lg font-medium text-black mb-2">VEDRANA PASSIN</h3>
                                <p className="text-sm text-gray-600 font-light leading-relaxed">
                                    Projektentwicklung<br/>
                                    Projektmanagement
                                </p>
                            </div>
                        </div>

                        {/* Dr. Sofija Bajrektarević */}
                        <div className="flex flex-col items-center text-center flex-shrink-0 group">
                            <div className="mb-6 group-hover:scale-105 transition-transform duration-300">
                                <div
                                    className="w-48 h-48 rounded-2xl overflow-hidden bg-gray-200    ">
                                    <Image
                                        src={sofija}
                                        alt="Dr. Sofija Bajrektarević"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            <div className="group-hover:translate-y-2 transition-transform duration-300">

                                <h3 className="text-lg font-medium text-black mb-2">Dr. SOFIJA BAJREKTAREVIĆ</h3>
                                <p className="text-sm text-gray-600 font-light leading-relaxed">
                                    Konsultantin<br/>
                                    Kuratorin
                                </p>
                            </div>

                        </div>

                    </div>
                </Parallax>

            </div>
        </section>
    );
}