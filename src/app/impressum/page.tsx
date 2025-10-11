export default function ImpressumPage() {
    return (
        <div className="min-h-screen bg-white">
            <section className="py-16 lg:py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Header */}
                    <div className=" mb-16">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-black mb-4 leading-tight">
                            <span className="font-thin">Impressum</span>
                        </h1>
                        <div className="w-24 h-0.5 bg-red-600  rounded-full mb-6"></div>
                        <p className="text-lg text-gray-700 font-light">
                            Angaben gemäß § 25 Mediengesetz
                        </p>
                    </div>

                    {/* Content */}
                    <div className="space-y-12">

                        {/* Medieninhaber */}
                        <div>
                            <h2 className="text-2xl sm:text-3xl font-light text-black mb-4">
                                Medieninhaber und Herausgeber
                            </h2>
                            <div className="space-y-2 text-gray-700 leading-relaxed">
                                <p className="font-medium text-black">Culture Dynamics</p>
                                <p>[Ihre vollständige Adresse]</p>
                                <p>[PLZ] Wien, Österreich</p>
                            </div>
                        </div>
                        

                        {/* Vereinsregister */}
                        <div>
                            <h2 className="text-2xl sm:text-3xl font-light text-black mb-4">
                                Vereinsregister
                            </h2>
                            <div className="space-y-2 text-gray-700 leading-relaxed">
                                <p>
                                    <span className="font-medium text-black">ZVR-Zahl:</span>{" "}
                                    [Ihre ZVR-Nummer]
                                </p>
                                <p>
                                    <span className="font-medium text-black">Vereinssitz:</span>{" "}
                                    Wien
                                </p>
                            </div>
                        </div>


                        {/* Kontakt */}
                        <div>
                            <h2 className="text-2xl sm:text-3xl font-light text-black mb-4">
                                Kontakt
                            </h2>
                            <div className="space-y-3">
                                <a
                                    href="mailto:office@culture-dynamics.at"
                                    className="flex items-center gap-2 text-gray-700 hover:text-red-600 transition-colors"
                                >
                                    <span className="icon-[tabler--mail] size-5"></span>
                                    office@culture-dynamics.at
                                </a>
                                <a
                                    href="mailto:mirkovic@culture-dynamics.at"
                                    className="flex items-center gap-2 text-gray-700 hover:text-red-600 transition-colors"
                                >
                                    <span className="icon-[tabler--mail] size-5"></span>
                                    mirkovic@culture-dynamics.at
                                </a>
                            </div>
                        </div>

                        

                        {/* Vereinszweck */}
                        <div>
                            <h2 className="text-2xl sm:text-3xl font-light text-black mb-4">
                                Vereinszweck
                            </h2>
                            <p className="text-gray-700 leading-relaxed font-light">
                                Culture Dynamics ist ein gemeinnütziger Verein zur Erforschung und Förderung
                                von Diversität und Integrität in Kunst und Kultur.
                            </p>
                        </div>

                        

                        {/* Verantwortlich */}
                        <div>
                            <h2 className="text-2xl sm:text-3xl font-light text-black mb-4">
                                Verantwortlich für den Inhalt
                            </h2>
                            <div className="space-y-2 text-gray-700 leading-relaxed">
                                <p className="font-medium text-black">[Name des Obmanns/der Obfrau]</p>
                                <p>Culture Dynamics</p>
                            </div>
                        </div>

                        

                        {/* Haftungsausschluss */}
                        <div>
                            <h2 className="text-2xl sm:text-3xl font-light text-black mb-6">
                                Haftungsausschluss
                            </h2>

                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-xl font-light text-black mb-3">
                                        Haftung für Inhalte
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed font-light">
                                        Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt.
                                        Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
                                        können wir jedoch keine Gewähr übernehmen.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-light text-black mb-3">
                                        Haftung für Links
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed font-light">
                                        Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren
                                        Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten
                                        ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                                    </p>
                                </div>
                            </div>
                        </div>

                        

                        {/* Urheberrecht */}
                        <div>
                            <h2 className="text-2xl sm:text-3xl font-light text-black mb-4">
                                Urheberrecht
                            </h2>
                            <p className="text-gray-700 leading-relaxed font-light">
                                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
                                Seiten unterliegen dem österreichischen Urheberrecht. Die Vervielfältigung,
                                Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen
                                des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen
                                Autors bzw. Erstellers.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}