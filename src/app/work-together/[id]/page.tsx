import Link from "next/link";
import workshops from "@/features/shared/data/workshops";
import NavbarLight from "@/components/layout/navbar-light";
import Image from "next/image";
import Footer from "@/components/layout/footer";
import React from "react";

type WorkshopDetailsPageProps = {
    params: Promise<{ id: string }>;
};

export default async function WorkshopDetailsPage({params}: WorkshopDetailsPageProps) {
    const {id} = await params;
    const workshop = workshops.find((w) => w.id === parseInt(id));

    if (!workshop) {
        return (
            <div className="min-h-[80vh] w-full">
                <NavbarLight/>
                <div className="max-w-4xl h-full flex justify-center items-center mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold text-gray-900 mb-4">
                            Dieser workshop konnte leider nicht gefunden werden
                        </h1>
                        <Link
                            href="/#work-together"
                            className="inline-flex items-center text-gray-600 hover:text-red-600 transition-colors"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
                            </svg>
                            Zurück zu den workshops
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

            {/* Back Button */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <Link
                    href="/#work-together"
                    className="inline-flex items-center text-gray-600 hover:text-red-600 transition-colors"
                >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
                    </svg>
                    Zurück
                </Link>
            </div>

            {/* Workshop Header */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Image */}
                    <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden">
                        <Image
                            src={workshop.image}
                            alt={workshop.title}
                            className="w-full h-full object-cover"
                            width={800}
                            height={600}
                        />
                    </div>

                    {/* Workshop Info */}
                    <div className="space-y-6">
                        <div>
                            <h1 className="text-3xl sm:text-4xl font-light text-black mb-3">
                                {workshop.title}
                            </h1>
                            {workshop.subtitle && (
                                <p className="text-lg text-gray-600 font-light mb-4">
                                    {workshop.subtitle}
                                </p>
                            )}
                            <div className="w-24 h-0.5 bg-red-600 rounded-full"></div>
                        </div>

                        {/* Contact Card */}
                        <div className="bg-white rounded-xl border border-gray-200 p-6">
                            <h3 className="text-lg font-medium text-black mb-4">Workshop jetzt buchen!</h3>
                            <p className="text-gray-700 mb-4">
                                Kontaktieren Sie uns um einen workshop zu buchen, für Informationen oder
                                individuelle Beratung.
                            </p>
                            <div className="space-y-4">
                                <a
                                    href="mailto:info@culturedynamics.at"
                                    className="flex items-center text-gray-700 hover:text-red-600 transition-colors group gap-2"
                                >
                                    <div
                                        className="w-10 h-10 rounded-lg bg-gray-100 group-hover:bg-red-50 flex items-center justify-center mr-3 transition-colors">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                        </svg>
                                    </div>
                                    <span className="text-sm">info@culturedynamics.at</span>
                                </a>
                                <a
                                    href="tel:+4312345678"
                                    className="flex items-center text-gray-700 hover:text-red-600 transition-colors group gap-2"
                                >
                                    <div
                                        className="w-10 h-10 rounded-lg bg-gray-100 group-hover:bg-red-50 flex items-center justify-center mr-3 transition-colors">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                        </svg>
                                    </div>
                                    <span className="text-sm">+43 1 234 5678</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Workshop Details */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Description Section */}
                        <div>
                            {/* Introduction */}
                            {workshop.content.introduction && (
                                <div className="space-y-4 mb-8">
                                    {workshop.content.introduction.map((paragraph, index) => (
                                        <p key={index} className="text-lg text-gray-700 leading-relaxed font-light">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            )}

                            {workshop.content.vision && (
                                <div
                                    className="relative rounded-xl p-6 pl-8 mb-8">
                                    <div
                                        className="absolute left-2 top-1/2 -translate-y-1/2 w-0.5 h-[80%] bg-red-600 rounded-full"></div>
                                    <p className="text-lg text-gray-800 leading-relaxed font-light italic">
                                        {workshop.content.vision}
                                    </p>
                                </div>
                            )}

                            {/* Approach/Methods */}
                            {workshop.content.approach && (
                                <div className="mb-8">
                                    <p className="text-lg text-gray-700 leading-relaxed font-light mb-6">
                                        {workshop.content.approach.text}
                                    </p>
                                    <div className="bg-white rounded-xl border border-gray-200 p-6">
                                        <ul className="space-y-3">
                                            {workshop.content.approach.methods.map((method, index) => (
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
                            {workshop.content.conclusion && (
                                <div className="space-y-3">
                                    {workshop.content.conclusion.map((paragraph, index) => (
                                        <p
                                            key={index}
                                            className={`text-lg leading-relaxed ${
                                                index === workshop.content.conclusion.length - 1
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
                </div>
            </div>
            <Footer/>
        </div>
    );
}