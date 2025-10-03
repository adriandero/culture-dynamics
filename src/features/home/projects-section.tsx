"use client"

import React from "react";
import {Parallax} from "react-scroll-parallax";
import Image from "next/image";
import Link from "next/link";
import projects from "@/features/shared/data/projects";

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

                                {projects.map((project) => (
                                    <div key={project.id} className="carousel-slide h-80 lg:h-96">
                                        <Link
                                            href={`/projects/${project.id}`}
                                            className="block relative h-full w-full rounded-2xl overflow-hidden group"
                                        >
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                priority={project.id === 1}
                                            />
                                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300 flex items-end">
                                                <div className="p-6 w-full flex items-end justify-between">
                                                    <div className="flex-1">
                                                        <h3 className="text-white text-xl sm:text-2xl font-medium mb-2">
                                                            {project.title}
                                                        </h3>
                                                        <p className="text-gray-200 text-sm sm:text-base font-light">
                                                            {project.subtitle}
                                                        </p>
                                                    </div>
                                                    <div className="ml-4 flex-shrink-0">
                                                        <div className="inline-flex items-center text-white hover:text-red-400 transition-colors backdrop-blur-sm bg-black/20 px-4 py-2 rounded-lg">
                                                            Mehr erfahren
                                                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                ))}

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