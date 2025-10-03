import Link from "next/link";
import projects from "@/features/shared/data/projects";
import NavbarLight from "@/components/layout/navbar-light";
import Image from "next/image";
import Footer from "@/components/layout/footer";
import React from "react";

type ProjectDetailsPageProps = {
    params: Promise<{ id: string }>;
};

export default async function ProjectDetailsPage({params}: ProjectDetailsPageProps) {
    const {id} = await params;
    const project = projects.find((w) => w.id === parseInt(id));

    if (!project) {
        return (
            <div className="min-h-[80vh] w-full">
                <NavbarLight/>
                <div className="max-w-4xl h-full flex justify-center items-center mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold text-gray-900 mb-4">
                            Dieser Project konnte leider nicht gefunden werden
                        </h1>
                        <Link
                            href="/#projects"
                            className="inline-flex items-center text-gray-600 hover:text-red-600 transition-colors"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
                            </svg>
                            Zurück zu den Projects
                        </Link>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            <NavbarLight/>

            {/* Hero/Jumbotron mit Bild */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="relative w-full h-[60vh] min-h-[500px] max-h-[700px] rounded-2xl overflow-hidden">
                    {/* Bild */}
                    <div className="absolute inset-0">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                            priority
                        />
                        {/* Gradient Overlay für bessere Lesbarkeit */}
                        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
                    </div>

                    {/* Content über dem Bild */}
                    <div className="relative h-full flex flex-col justify-between p-6 sm:p-8">
                        {/* Back Button oben */}
                        <div>
                            <Link
                                href="/#projects"
                                className="inline-flex items-center text-white hover:text-red-400 transition-colors backdrop-blur-sm bg-black/20 px-4 py-2 rounded-lg"
                            >
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M15 19l-7-7 7-7"/>
                                </svg>
                                Zurück
                            </Link>
                        </div>

                        {/* Titel unten */}
                        <div className="space-y-4">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-thin text-white">
                                {project.title}
                            </h1>
                            <div className="w-32 h-0.5 bg-red-600 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Bereich */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Hauptinhalt */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Description Section */}
                        <div>
                            <div className="mb-6 italic">
                                {project.artisticDirection && (
                                    <p className="text-md  font-light">
                                        Künstlerische Leitung: {project.artisticDirection}
                                    </p>
                                )}
                            </div>

                            {/* Introduction */}
                            {project.content.introduction && (
                                <div className="space-y-4 mb-8">
                                    {project.content.introduction.map((paragraph, index) => (
                                        <p key={index} className="text-lg text-gray-700 leading-relaxed font-light">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            )}

                            {/* Vision Quote */}
                            {project.content.vision && (
                                <div className="relative rounded-xl p-6 pl-8 mb-8">
                                    <div
                                        className="absolute left-2 top-1/2 -translate-y-1/2 w-0.5 h-[80%] bg-red-600 rounded-full"></div>
                                    <p className="text-lg text-gray-800 leading-relaxed font-light italic">
                                        {project.content.vision}
                                    </p>
                                </div>
                            )}

                            {/* Approach/Methods */}
                            {project.content.approach && (
                                <div className="mb-8">
                                    <p className="text-lg text-gray-700 leading-relaxed font-light mb-6">
                                        {project.content.approach.text}
                                    </p>
                                    <div className="bg-white rounded-xl border border-gray-200 p-6">
                                        <ul className="space-y-3">
                                            {project.content.approach.methods.map((method, index) => (
                                                <li key={index} className="flex items-center text-gray-700">
                                                    <span className="text-red-600 mr-3 flex-shrink-0">•</span>
                                                    <span className="text-base">{method}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            )}

                            {/* Conclusion */}
                            {project.content.conclusion && (
                                <div className="space-y-3">
                                    {project.content.conclusion.map((paragraph, index) => (
                                        <p
                                            key={index}
                                            className={`text-lg leading-relaxed ${
                                                index === project.content.conclusion.length - 1
                                                    ? 'text-gray-900 font-medium'
                                                    : 'text-gray-700 font-light'
                                            }`}
                                        >
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Sidebar - Contact Card */}
                    <div className="lg:col-span-1">

                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    );
}