"use client"

import React from "react";
import {Parallax} from "react-scroll-parallax";

export default function WorkSection() {
    return (
        <section id="work" className="min-h-screen bg-white py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

                    <Parallax speed={2} className="lg:sticky lg:top-24">
                        <div className="text-left">
                            <h2 className="text-4xl sm:text-5xl md:text-6xl  font-light text-black leading-tight font-thin">
                                Unsere <span className="text-red-600">Arbeit</span>
                                <br/>
                                & Schwerpunkte
                            </h2>
                            <div className="w-24 h-0.5 bg-red-600 mt-6 rounded-full"></div>
                        </div>
                    </Parallax>

                    <Parallax speed={1}>
                        <ul className="timeline timeline-snap-icon timeline-compact timeline-vertical w-full">

                            <li>
                                <div className="timeline-middle">
                                    <span className="bg-red-100 flex size-4.5 items-center justify-center rounded-full">
                                        <span className="bg-red-600 size-3 rounded-full p-0"></span>
                                    </span>
                                </div>
                                <div className="timeline-end mb-0 ms-1 w-full rounded-lg p-4 pt-1">
                                    <h3 className="text-black mb-3 font-medium text-lg">
                                        Förderung der österreichischen Volkskultur
                                    </h3>
                                    <p className="text-gray-700 font-light leading-relaxed">
                                        Präsentation vielfältiger kultureller und künstlerischer Ausdrucksformen, die
                                        internationale Aufmerksamkeit verdienen.
                                    </p>
                                </div>
                                <hr className="border-gray-200"/>
                            </li>

                            <li>
                                <hr className="border-gray-200"/>
                                <div className="timeline-middle">
                                    <span className="bg-red-100 flex size-4.5 items-center justify-center rounded-full">
                                        <span className="bg-red-600 size-3 rounded-full p-0"></span>
                                    </span>
                                </div>
                                <div className="timeline-end mb-0 ms-1 w-full rounded-lg p-4 pt-1">
                                    <h3 className="text-black mb-3 font-medium text-lg">
                                        Unterstützung der Volksgruppen
                                    </h3>
                                    <p className="text-gray-700 font-light leading-relaxed">
                                        Präsentation der in Wien und Österreich lebenden Volksgruppen und ihrer oft
                                        unterrepräsentierten Perspektiven für nationale und internationale Anerkennung.
                                    </p>
                                </div>
                                <hr className="border-gray-200"/>
                            </li>

                            <li>
                                <hr className="border-gray-200"/>
                                <div className="timeline-middle">
                                    <span className="bg-red-100 flex size-4.5 items-center justify-center rounded-full">
                                        <span className="bg-red-600 size-3 rounded-full p-0"></span>
                                    </span>
                                </div>
                                <div className="timeline-end mb-0 ms-1 w-full rounded-lg p-4 pt-1">
                                    <h3 className="text-black mb-3 font-medium text-lg">
                                        Stärkung der sprachlichen Vielfalt
                                    </h3>
                                    <p className="text-gray-700 font-light leading-relaxed">
                                        Förderung durch künstlerische Ausdrucksformen und kreative Projekte in Wien und
                                        Österreich.
                                    </p>
                                </div>
                                <hr className="border-gray-200"/>
                            </li>

                            <li>
                                <hr className="border-gray-200"/>
                                <div className="timeline-middle">
                                    <span className="bg-red-100 flex size-4.5 items-center justify-center rounded-full">
                                        <span className="bg-red-600 size-3 rounded-full p-0"></span>
                                    </span>
                                </div>
                                <div className="timeline-end mb-0 ms-1 w-full rounded-lg p-4 pt-1">
                                    <h3 className="text-black mb-3 font-medium text-lg">
                                        Hochwertige Kulturprojekte
                                    </h3>
                                    <p className="text-gray-700 font-light leading-relaxed">
                                        Realisierung von Kunst- und Kulturprojekten mit gesellschaftspolitischem
                                        Anspruch, die zum Dialog anregen.
                                    </p>
                                </div>
                                <hr className="border-gray-200"/>
                            </li>

                            <li>
                                <hr className="border-gray-200"/>
                                <div className="timeline-middle">
                                    <span className="bg-red-100 flex size-4.5 items-center justify-center rounded-full">
                                        <span className="bg-red-600 size-3 rounded-full p-0"></span>
                                    </span>
                                </div>
                                <div className="timeline-end mb-0 ms-1 w-full rounded-lg p-4 pt-1">
                                    <h3 className="text-black mb-3 font-medium text-lg">
                                        Forschung zur Diversität und Integrität
                                    </h3>
                                    <p className="text-gray-700 font-light leading-relaxed">
                                        Erforschung kultureller und künstlerischer Diversität und Integrität zur
                                        Schärfung des öffentlichen Bewusstseins und Erweiterung des
                                        kunstwissenschaftlichen Diskurses.
                                    </p>
                                </div>
                                <hr className="border-gray-200"/>
                            </li>

                            {/* Bildungsprogramme */}
                            <li>
                                <hr className="border-gray-200"/>
                                <div className="timeline-middle">
                                    <span className="bg-red-100 flex size-4.5 items-center justify-center rounded-full">
                                        <span className="bg-red-600 size-3 rounded-full p-0"></span>
                                    </span>
                                </div>
                                <div className="timeline-end mb-0 ms-1 w-full rounded-lg p-4 pt-1">
                                    <h3 className="text-black mb-3 font-medium text-lg">
                                        Workshops & Bildungsprogramme
                                    </h3>
                                    <p className="text-gray-700 font-light leading-relaxed">
                                        Wir entwickeln zeitgemäße Vermittlungsformate und Bildungsprogramme, die
                                        kulturelle Teilhabe ermöglichen und neue Zugänge zur Kunst eröffnen.
                                    </p>
                                </div>
                                <hr className="border-gray-200"/>
                            </li>

                            {/* Vernetzung */}
                            <li>
                                <hr className="border-gray-200"/>
                                <div className="timeline-middle">
                                    <span className="bg-red-100 flex size-4.5 items-center justify-center rounded-full">
                                        <span className="bg-red-600 size-3 rounded-full p-0"></span>
                                    </span>
                                </div>
                                <div className="timeline-end mb-0 ms-1 w-full rounded-lg p-4 pt-1">
                                    <h3 className="text-black mb-3 font-medium text-lg">
                                        Internationale Vernetzung
                                    </h3>
                                    <p className="text-gray-700 font-light leading-relaxed">
                                        Nationale und internationale Vernetzung von Kulturschaffenden zur Förderung von
                                        Austausch, Kooperation und nachhaltigen Partnerschaften.
                                    </p>
                                </div>
                                <hr className="border-gray-200"/>
                            </li>

                            {/* Junge Talente */}
                            <li>
                                <hr className="border-gray-200"/>
                                <div className="timeline-middle">
                                    <span className="bg-red-100 flex size-4.5 items-center justify-center rounded-full">
                                        <span className="bg-red-600 size-3 rounded-full p-0"></span>
                                    </span>
                                </div>
                                <div className="timeline-end mb-0 ms-1 w-full rounded-lg p-4 pt-1">
                                    <h3 className="text-black mb-3 font-medium text-lg">
                                        Förderung junger Talente
                                    </h3>
                                    <p className="text-gray-700 font-light leading-relaxed">
                                        Gezielte Unterstützung junger und etablierten Künstler:innen und um die
                                        österreichische Vielfalt zu repräsentieren.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </Parallax>

                </div>
            </div>
        </section>
    );
}