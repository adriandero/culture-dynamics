export default function LegalPage() {
    return (
        <div className="min-h-screen bg-white">
            <section className="py-16 lg:py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Header */}
                    <div className="mb-16">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-thin text-black mb-4 leading-tight">
                            Datenschutzerklärung
                        </h1>
                        <div className="w-24 h-0.5 bg-red-600 rounded-full mb-6"></div>
                        <p className="text-lg text-gray-700 font-light">
                            Informationen gemäß DSGVO
                        </p>
                    </div>

                    {/* Content */}
                    <div className="space-y-12">

                        {/* Intro */}
                        <div>
                            <h2 className="text-2xl sm:text-3xl font-light text-black mb-4">
                                Datenschutz
                            </h2>
                            <p className="text-gray-700 leading-relaxed font-light">
                                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst.
                                Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der
                                gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                            </p>
                        </div>


                        {/* Verantwortliche Stelle */}
                        <div>
                            <h2 className="text-2xl sm:text-3xl font-light text-black mb-4">
                                Verantwortliche Stelle
                            </h2>
                            <div className="space-y-2 text-gray-700 leading-relaxed">
                                <p className="font-medium text-black">Culture Dynamics</p>
                                <p>[Ihre Adresse]</p>
                                <a
                                    href="mailto:office@culture-dynamics.at"
                                    className="flex items-center gap-2 hover:text-red-600 transition-colors"
                                >
                                    <span className="icon-[tabler--mail] size-5"></span>
                                    office@culture-dynamics.at
                                </a>
                            </div>
                        </div>


                        {/* Erhebung und Speicherung */}
                        <div>
                            <h2 className="text-2xl sm:text-3xl font-light text-black mb-6">
                                Erhebung und Speicherung personenbezogener Daten
                            </h2>

                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-xl font-light text-black mb-3">
                                        Besuch unserer Website
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed font-light">
                                        Beim Aufrufen unserer Website werden durch den auf Ihrem Endgerät zum Einsatz
                                        kommenden Browser automatisch Informationen an den Server unserer Website
                                        gesendet.
                                        Diese Informationen werden temporär in einem sogenannten Logfile gespeichert.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-light text-black mb-3">
                                        Kontaktformular
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed font-light">
                                        Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben
                                        aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten
                                        zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns
                                        gespeichert.
                                    </p>
                                </div>
                            </div>
                        </div>


                        {/* Ihre Rechte */}
                        <div>
                            <h2 className="text-2xl sm:text-3xl font-light text-black mb-4">
                                Ihre Rechte
                            </h2>
                            <p className="text-gray-700 font-light mb-6">
                                Sie haben jederzeit das Recht auf:
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3 text-gray-700 font-light">
                                    <span className="text-red-600 mt-1.5">•</span>
                                    <span>Auskunft über Ihre bei uns gespeicherten Daten und deren Verarbeitung zu erhalten</span>
                                </li>
                                <li className="flex items-start gap-3 text-gray-700 font-light">
                                    <span className="text-red-600 mt-1.5">•</span>
                                    <span>Berichtigung unrichtiger personenbezogener Daten zu verlangen</span>
                                </li>
                                <li className="flex items-start gap-3 text-gray-700 font-light">
                                    <span className="text-red-600 mt-1.5">•</span>
                                    <span>Löschung Ihrer bei uns gespeicherten Daten zu verlangen</span>
                                </li>
                                <li className="flex items-start gap-3 text-gray-700 font-light">
                                    <span className="text-red-600 mt-1.5">•</span>
                                    <span>Einschränkung der Datenverarbeitung zu verlangen</span>
                                </li>
                                <li className="flex items-start gap-3 text-gray-700 font-light">
                                    <span className="text-red-600 mt-1.5">•</span>
                                    <span>Widerspruch gegen die Verarbeitung Ihrer Daten zu erheben</span>
                                </li>
                                <li className="flex items-start gap-3 text-gray-700 font-light">
                                    <span className="text-red-600 mt-1.5">•</span>
                                    <span>Datenübertragbarkeit zu verlangen</span>
                                </li>
                            </ul>
                        </div>


                        {/* Kontakt */}
                        <div>
                            <h2 className="text-2xl sm:text-3xl font-light text-black mb-4">
                                Kontakt für Datenschutzfragen
                            </h2>
                            <p className="text-gray-700 leading-relaxed font-light mb-4">
                                Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer personenbezogenen Daten,
                                bei Auskünften, Berichtigung, Sperrung oder Löschung von Daten wenden Sie sich bitte an:
                            </p>
                            <a
                                href="mailto:office@culture-dynamics.at"
                                className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 transition-colors font-light"
                            >
                                <span className="icon-[tabler--mail] size-5"></span>
                                office@culture-dynamics.at
                            </a>
                        </div>

                        {/* Footer Note */}
                        <div className=" pt-8">
                            <p className="text-sm text-gray-500 font-light">
                                Stand: {new Date().toLocaleDateString('de-AT', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}