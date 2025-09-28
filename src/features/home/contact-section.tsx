"use client"

import React, {useState} from "react";
import {Parallax} from "react-scroll-parallax";

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [formStatus, setFormStatus] = useState({
        isSubmitting: false,
        message: '',
        type: '' // 'success' or 'error'
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const resetForm = () => {
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus({isSubmitting: true, message: '', type: ''});

        try {
            // Option 1: Using Next.js API route (recommended)
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setFormStatus({
                    isSubmitting: false,
                    message: 'Ihre Nachricht wurde erfolgreich gesendet! Wir werden uns bald bei Ihnen melden.',
                    type: 'success'
                });
                resetForm();
            } else {
                throw new Error('Fehler beim Senden der Nachricht');
            }
        } catch (error) {
            setFormStatus({
                isSubmitting: false,
                message: 'Es gab ein Problem beim Senden Ihrer Nachricht. Bitte versuchen Sie es später erneut.',
                type: 'error'
            });
        }

        // Clear status message after 5 seconds
        setTimeout(() => {
            setFormStatus({isSubmitting: false, message: '', type: ''});
        }, 5000);
    };

    return (
        <section id="contact" className="bg-white py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Title */}
                <Parallax speed={2} className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-black mb-4 leading-tight font-thin">
                        Kontakt <span className="text-red-600">aufnehmen</span>
                    </h2>
                    <div className="w-24 h-0.5 bg-red-600 mx-auto rounded-full"></div>
                </Parallax>

                {/* Contact Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

                    {/* Contact Information */}
                    <Parallax speed={1}>
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl sm:text-3xl font-medium text-black mb-6">
                                    Sprechen wir über Ihre Idee
                                </h3>
                                <p className="text-lg text-gray-700 leading-relaxed font-light mb-8">
                                    Haben Sie Fragen zu unseren Projekten, möchten Sie an einem Workshop teilnehmen
                                    oder haben eine Idee für eine Zusammenarbeit? Wir freuen uns darauf, von Ihnen zu
                                    hören.
                                </p>
                            </div>

                            <div className="space-y-6">
                                {/* Email */}
                                <div className="group">
                                    <div
                                        className="flex items-center space-x-4 p-4 rounded-xl group-hover:bg-gray-50 transition-colors duration-300">
                                        <div
                                            className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center group-hover:bg-red-200 transition-colors duration-300">
                                            <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor"
                                                 viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-medium text-black">E-Mail</h4>
                                            <p className="text-gray-600 font-light">info@culture-dynamics.at</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="group">
                                    <div
                                        className="flex items-center space-x-4 p-4 rounded-xl group-hover:bg-gray-50 transition-colors duration-300">
                                        <div
                                            className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center group-hover:bg-red-200 transition-colors duration-300">
                                            <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor"
                                                 viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-medium text-black">Telefon</h4>
                                            <p className="text-gray-600 font-light">+43 1 234 5678</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Location */}
                                <div className="group">
                                    <div
                                        className="flex items-center space-x-4 p-4 rounded-xl group-hover:bg-gray-50 transition-colors duration-300">
                                        <div
                                            className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center group-hover:bg-red-200 transition-colors duration-300">
                                            <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor"
                                                 viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-medium text-black">Standort</h4>
                                            <p className="text-gray-600 font-light">Wien, Österreich</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Parallax>

                    {/* Contact Form */}
                    <Parallax speed={0.5}>
                        <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-2xl">
                            {/* Status Message */}
                            {formStatus.message && (
                                <div className={`mb-6 p-4 rounded-xl ${
                                    formStatus.type === 'success'
                                        ? 'bg-green-50 border border-green-200'
                                        : 'bg-red-50 border border-red-200'
                                }`}>
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0">
                                            {formStatus.type === 'success' ? (
                                                <svg className="w-5 h-5 text-green-600" fill="currentColor"
                                                     viewBox="0 0 20 20">
                                                    <path fillRule="evenodd"
                                                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                          clipRule="evenodd"/>
                                                </svg>
                                            ) : (
                                                <svg className="w-5 h-5 text-red-600" fill="currentColor"
                                                     viewBox="0 0 20 20">
                                                    <path fillRule="evenodd"
                                                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                                          clipRule="evenodd"/>
                                                </svg>
                                            )}
                                        </div>
                                        <div className="ml-3">
                                            <p className={`text-sm ${
                                                formStatus.type === 'success' ? 'text-green-700' : 'text-red-700'
                                            }`}>
                                                {formStatus.message}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div className="space-y-6">
                                {/* Name Field */}
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                        Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        disabled={formStatus.isSubmitting}
                                        className="w-full px-4 py-3 border outline-none border-gray-200 rounded-xl focus:ring-0.5 focus:ring-red-500 focus:border-red-500 transition-colors duration-300 bg-white disabled:bg-gray-100 disabled:cursor-not-allowed"
                                        placeholder="Ihr vollständiger Name"
                                    />
                                </div>

                                {/* Email Field */}
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        E-Mail *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        disabled={formStatus.isSubmitting}
                                        className="w-full px-4 py-3 border outline-none border-gray-200 rounded-xl focus:ring-0.5 focus:ring-red-500 focus:border-red-500 transition-colors duration-300 bg-white disabled:bg-gray-100 disabled:cursor-not-allowed"
                                        placeholder="ihre.email@beispiel.com"
                                    />
                                </div>

                                {/* Subject Field */}
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                        Betreff
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        disabled={formStatus.isSubmitting}
                                        className="w-full px-4 py-3 border outline-none border-gray-200 rounded-xl focus:ring-0.5 focus:ring-red-500 focus:border-red-500 transition-colors duration-300 bg-white disabled:bg-gray-100 disabled:cursor-not-allowed"
                                        placeholder="Worum geht es?"
                                    />
                                </div>

                                {/* Message Field */}
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                        Nachricht *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        rows={5}
                                        disabled={formStatus.isSubmitting}
                                        className="w-full px-4 py-3 border outline-none border-gray-200 rounded-xl focus:ring-0.5 focus:ring-red-500 focus:border-red-500 transition-colors duration-300 bg-white resize-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                                        placeholder="Erzählen Sie uns von Ihrer Idee oder Ihren Fragen..."
                                    />
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={formStatus.isSubmitting}
                                    className="btn btn-primary btn-outline w-full transition-colors duration-300 group disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {formStatus.isSubmitting ? (
                                        <div className="flex items-center justify-center">
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-current" fill="none"
                                                 viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10"
                                                        stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor"
                                                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Senden...
                                        </div>
                                    ) : (
                                        <span
                                            className="group-hover:translate-x-1 transition-transform duration-300 inline-block">
                                            Senden
                                        </span>
                                    )}
                                </button>
                            </div>
                        </form>
                    </Parallax>

                </div>
            </div>
        </section>
    );
}