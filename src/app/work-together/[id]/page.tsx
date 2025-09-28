import Navbar from "@/components/layout/navbar";
import Link from "next/link";
import workshops from "@/features/shared/data/workshops";
import NavbarLight from "@/components/layout/navbar-light";

interface WorkshopDetailsPageProps {
    params: {
        id: string;
    };
}

export default function WorkshopDetailsPage({
                                                params,
                                            }: WorkshopDetailsPageProps) {

    // Find workshop by ID
    const workshop = workshops.find(w => w.id === parseInt(params.id));

    // Handle workshop not found
    if (!workshop) {
        return (
            <div className="min-h-screen w-full">
                <NavbarLight/>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold text-gray-900 mb-4">Dieser workshop konnte leider nicht
                            gefunden werden</h1>

                        <Link
                            href="/"
                            className="inline-flex items-center text-gray-600 hover:text-red-600 transition-colors "
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
                            </svg>
                            Zurück zu den workshops
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            <NavbarLight/>

            {/* Back Button */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <Link
                    href="/"
                    className="inline-flex items-center text-gray-600 hover:text-red-600 transition-colors "
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
                        <img
                            src={workshop.image}
                            alt={workshop.title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Workshop Info */}
                    <div className="space-y-6">
                        <div>
                            <h1 className="text-3xl sm:text-4xl font-light text-black mb-4">
                                {workshop.title}
                            </h1>
                            <div className="w-24 h-0.5 bg-red-600 rounded-full"></div>
                        </div>

                        {/* Quick Info Cards */}
                        <div className="flex flex-col">

                            {/* Contact Card */}
                            <div className="bg-white rounded-xl border border-gray-200 p-6">
                                <h3 className="text-lg font-medium text-black mb-4">Workshop jetzt buchen!</h3>
                                <p className="text-gray-700 mb-4">
                                    Kontaktieren Sie uns um einen workshop zu buchen, für Informationen oder
                                    individuelle Beratung.
                                </p>
                                <div className="space-y-3">
                                    <div className="flex items-center text-gray-700">
                                        <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor"
                                             viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                        </svg>
                                        info@culturedynamics.at
                                    </div>
                                    <div className="flex items-center text-gray-700">
                                        <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor"
                                             viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                        </svg>
                                        +43 1 234 5678
                                    </div>
                                </div>
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

                        {/* Description */}
                        <div>
                            <h2 className="text-2xl font-medium text-black mb-6">Workshop Beschreibung</h2>
                            <div className="space-y-6">
                                {workshop.descriptions.map((description, index) => (
                                    <div key={index} className=" rounded-xl">
                                        <p
                                            className="text-lg text-gray-700 leading-relaxed font-light"
                                            dangerouslySetInnerHTML={{__html: description}}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* What's Included */}
                        <div>
                            <h2 className="text-2xl font-medium text-black mb-6">Im Workshop enthalten</h2>
                            <div className="bg-white rounded-xl border border-gray-200 p-6">
                                <ul className="space-y-3">
                                    {workshop.includes.map((item, index) => (
                                        <li key={index} className="flex items-center text-gray-700">
                                            <svg className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" fill="none"
                                                 stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                      d="M5 13l4 4L19 7"/>
                                            </svg>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    );
}