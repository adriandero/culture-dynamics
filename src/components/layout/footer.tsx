import Image from "next/image";
import Link from "next/link";
import cdLogoLeftText from "../../../public/cd-logo-left-text.png"
import LegalPage from "@/app/legal/page";

export default function Footer() {
    return (
        <footer className="bg-base-200">
            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
                    {/* Logo & Description */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <Image
                                src={cdLogoLeftText}
                                width={200}
                                height={200}
                                className="h-auto w-64 object-contain"
                                alt="Culture Dynamics Logo"
                            />
                        </div>

                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-base-content font-semibold mb-4">Navigation</h3>
                        <nav className="flex flex-col gap-3">
                            <Link href="/" className="link link-hover text-base-content/70 text-sm">
                                Home
                            </Link>
                            <Link href="/#about" className="link link-hover text-base-content/70 text-sm">
                                Über uns
                            </Link>
                            <Link href="/#work-together" className="link link-hover text-base-content/70 text-sm">
                                Workshops
                            </Link>
                            <Link href="/#projects" className="link link-hover text-base-content/70 text-sm">
                                Projekte
                            </Link>
                            <Link href="/#contact" className="link link-hover text-base-content/70 text-sm">
                                Kontakt
                            </Link>
                        </nav>
                    </div>

                    {/* Contact & Legal */}
                    <div>
                        <h3 className="text-base-content font-semibold mb-4">Kontakt & Legal</h3>
                        <div className="flex flex-col gap-3">
                            <a
                                href="mailto:office@culture-dynamics.at"
                                className="link link-hover text-base-content/70 text-sm flex items-center gap-2"
                            >
                                <span className="icon-[tabler--mail] size-4"></span>
                                office@culture-dynamics.at
                            </a>
                            <a
                                href="mailto:mirkovic@culture-dynamics.at"
                                className="link link-hover text-base-content/70 text-sm flex items-center gap-2"
                            >
                                <span className="icon-[tabler--mail] size-4"></span>
                                mirkovic@culture-dynamics.at
                            </a>
                            <div className="divider my-2"></div>
                            <Link href="/impressum" className="link link-hover text-base-content/70 text-sm">
                                Impressum
                            </Link>
                            <Link href="/legal" className="link link-hover text-base-content/70 text-sm">
                                Datenschutz
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="divider my-6"></div>
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-base-content/60 text-sm text-center sm:text-left">
                        &copy; {new Date().getFullYear()} Culture Dynamics. Alle Rechte vorbehalten.
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-4">
                        <a href="#" aria-label="Facebook"
                           className="text-base-content/70 hover:text-base-content transition-colors">
                            <span className="icon-[tabler--brand-facebook] size-5"></span>
                        </a>
                        <a href="#" aria-label="Instagram"
                           className="text-base-content/70 hover:text-base-content transition-colors">
                            <span className="icon-[tabler--brand-instagram] size-5"></span>
                        </a>
                        <a href="#" aria-label="Twitter"
                           className="text-base-content/70 hover:text-base-content transition-colors">
                            <span className="icon-[tabler--brand-x] size-5"></span>
                        </a>
                        <a href="#" aria-label="LinkedIn"
                           className="text-base-content/70 hover:text-base-content transition-colors">
                            <span className="icon-[tabler--brand-linkedin] size-5"></span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}