"use client"

import React from "react";
import {Parallax} from "react-scroll-parallax";

export default function VisionSection() {
    return (
        <section id="about" className="bg-white py-16 lg:py-24">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28">


                {/* Vision Section - Content Left, Title Right */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center ">
                    <Parallax speed={12} className="order-2 lg:order-1 lg:col-span-3">
                        <div className="p-8 border border-gray-200 rounded-2xl">
                            <p className="text-lg text-gray-700 leading-relaxed font-light">
                                Kunst und Kultur sind für uns <strong className="text-red-600">kraftvolle
                                Mittel</strong>, um das gesellschaftliche Selbstbewusstsein in all seiner Vielfalt zu
                                formen und zu stärken. Wir wollen kulturellen Ausdruck sichtbar machen – von der
                                österreichischen Volkskultur bis zu den Stimmen aller in Wien und Österreich lebenden
                                Volksgruppen. Kunst und Kultur sollen <strong className="text-black">Räume schaffen für
                                Begegnung, Austausch, Empowerment</strong> – und für das Erzählen auch unbequemer
                                Geschichten.
                            </p>
                        </div>
                    </Parallax>

                    <Parallax speed={4} className="order-1 lg:order-2 lg:col-span-2">
                        <div className="text-center lg:text-right">
                            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-black leading-tight font-thin">
                                Unsere <span className="text-red-600">Vision</span>
                            </h2>
                            <div className="w-24 h-0.5 bg-red-600 mx-auto lg:ml-auto lg:mr-0 mt-6 rounded-full"></div>
                        </div>
                    </Parallax>
                </div>

                {/* Why Section - Title Left, Content Right */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
                    <Parallax speed={2} className="lg:col-span-2">
                        <div className="text-center lg:text-left">
                            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-black leading-tight font-thin">
                                Unser <span className="text-red-600">warum</span>
                            </h2>
                            <div className="w-24 h-0.5 bg-red-600 mx-auto lg:mx-0 mt-6 rounded-full"></div>
                        </div>
                    </Parallax>

                    <Parallax speed={8} className="lg:col-span-3">
                        <div className="space-y-6">
                            <div className="p-6 border border-gray-200 rounded-xl">
                                <p className="text-lg text-gray-700 leading-relaxed font-light">
                                    Wien und Österreich stehen international für Tradition – wir zeigen, dass sie ebenso
                                    für <strong className="text-black">zeitgemäße Kunst und kulturelle
                                    Innovation</strong> stehen können. Unser Ziel ist es, ein modernes, kreatives Wien
                                    und Österreich zu präsentieren: als Vorreiter im sensiblen Umgang mit der eigenen
                                    Kultur und der Vielfalt Anderer – auf höchstem künstlerischen Niveau.
                                </p>
                            </div>

                            <div className="p-6 border border-gray-200 rounded-xl">
                                <p className="text-lg text-gray-700 leading-relaxed font-light">
                                    Junge Künstler:innen, sowie wertvolle andere professionelle Kunst dieses Landes verdienen <strong className="text-red-600">Sichtbarkeit,
                                    Relevanz und eine starke Bühne</strong> – auch international.
                                </p>
                            </div>

                            <div className="p-6 border border-gray-200 rounded-xl">
                                <p className="text-lg text-gray-700 leading-relaxed font-light">
                                    Dafür braucht es einen klaren Blick nach innen. Genau den wagen wir: Wir beleuchten,
                                    wer wir sind, was wir tun – und machen den <strong className="text-black">kulturellen
                                    Dialog sichtbar, erlebbar und zugänglich</strong>.
                                </p>
                            </div>
                        </div>
                    </Parallax>
                </div>

            </div>
        </section>
    );
}