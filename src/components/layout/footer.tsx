import Image from "next/image";
import Link from "next/link";

export default function Footer() {

    return (
        <footer>
            <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
                <div className="flex items-center justify-between gap-3 max-lg:flex-col">
                    <div className="text-base-content flex items-center gap-2 text-xl font-bold">
                        <Image src="/culture-dynamics-logo.png" width={200} height={200}
                               className="h-8 w-auto object-contain"
                               alt="brand-logo"/>
                    </div>
                    <div className={"flex lg:flex-row flex-col gap-5 lg:gap-8 items-center"}>
                        <nav className="flex items-center gap-6">


                            <Link href="/"
                                  className="link link-animated text-base-content/80 font-medium">Home</Link>
                            <Link href="/#about"
                                  className="link link-animated text-base-content/80 font-medium">Über uns</Link>
                            <Link href="/#work-together"
                                  className="link link-animated text-base-content/80 font-medium">Workshops</Link>
                            <Link href="/#projects"
                                  className="link link-animated text-base-content/80 font-medium">Projekte</Link>
                            <Link href="/#contact"
                                  className="link link-animated text-base-content/80 font-medium">Kontakt</Link>
                        </nav>
                        <div className="divider divider-horizontal"></div>
                        <div className="text-base-content flex h-5 gap-4">
                            <a href="#" aria-label="Facebook">
                                <span className="icon-[tabler--brand-facebook] size-5"></span>
                            </a>
                            <a href="#" aria-label="Instagram">
                                <span className="icon-[tabler--brand-instagram] size-5"></span>
                            </a>
                            <a href="#" aria-label="Twitter">
                                <span className="icon-[tabler--brand-x] size-5"></span>
                            </a>
                            <a href="#" aria-label="LinkedIn">
                                <span className="icon-[tabler--brand-linkedin] size-5"></span>
                            </a>

                            <div className="lg:hidden divider divider-horizontal"></div>

                            <div className="text-base-content text-center text-sm font-normal">
                                &copy;2025
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    );
}