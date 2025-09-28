"use client"

import React from "react";
import {Parallax} from "react-scroll-parallax";
import Image from "next/image";
import logo from "@/../public/cd-logo-big.png"

export default function AboutSection() {
    return (
        <section id="about" className=" bg-gray-50  lg:py-24">
            <div className="max-w-4xl min-h-[80vh] flex items-center mx-auto px-4 sm:px-6 lg:px-8">

                {/* Centered Logo and Content */}
                <div className="text-center">

                    {/* Logo */}
                    <Parallax speed={4} className="mb-12">
                        <div className="flex justify-center mb-8">
                            <Image
                                src={logo}
                                alt="Culture Dynamics Logo"
                                width={200}
                                height={200}
                                className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-contain"
                                priority
                            />
                        </div>
                    </Parallax>

                    {/* About Text */}
                    <Parallax speed={2}>
                        <div className="p-8 rounded-2xl max-w-3xl mx-auto">
                            <p className="text-lg text-gray-700 leading-relaxed font-light text-center">
                                <strong className="text-black">Culture Dynamics</strong> ist ein gemeinnütziger Verein
                                zur Erforschung und Förderung von Diversität und Integrität in Kunst und Kultur. Unser
                                Ziel ist es, die kulturelle und künstlerische Vielfalt der österreichischen Kunst- und
                                Kulturszene stärker in den gesellschaftlichen Diskurs zu integrieren und international
                                sichtbar zu machen. Dabei umfasst unser Fokus nicht nur Musik und bildende Kunst,
                                sondern auch die <strong className="text-red-600">sprachliche Vielfalt</strong> – von
                                Wiener Mundart und österreichischen Dialekten bis hin zu den zahlreichen Sprachen der
                                unterschiedlichen Volksgruppen im Land.
                            </p>
                        </div>
                    </Parallax>

                </div>

            </div>
        </section>
    );
}