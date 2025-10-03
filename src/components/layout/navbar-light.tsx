import Image from "next/image";
import logo from "@/../public/culture-dynamics-logo.png"
import Link from "next/link";

export default function NavbarLight() {

    return (
        <nav className="navbar w-full text-black">
            <div className="w-full px-4 py-4 sm:px-6 lg:flex lg:items-end lg:gap-2 lg:px-8">
                <div className="navbar-start items-center justify-between max-lg:w-full">
                    <Link className="text-base-content flex items-center gap-3 text-xl font-bold lg:hidden" href="/">
                        <Image src={logo} className="h-8 w-auto object-contain" alt="brand-logo"/>

                    </Link>

                    <div className="flex items-center lg:hidden">
                        <button
                            type="button"
                            className="collapse-toggle text-black border-none btn btn-outline btn-secondary btn-square"
                            data-collapse="#navbar-block-5"
                            aria-controls="navbar-block-5"
                            aria-label="Toggle navigation"
                        >
                            <span className="icon-[tabler--menu-2] collapse-open:hidden size-5.5"></span>
                            <span className="icon-[tabler--x] collapse-open:block hidden size-5.5"></span>
                        </button>
                    </div>
                </div>
                <div
                    id="navbar-block-5"
                    className="lg:navbar-center transition-height collapse hidden grow overflow-hidden duration-300 lg:flex w-full "
                >
                    <div
                        className="text-base-content text-black w-full gap-6 text-base font-medium max-lg:mt-4 max-lg:flex-col lg:gap-16 flex justify-between "
                    >
                        <Link className="text-base-content flex items-center gap-3 text-xl font-bold max-lg:hidden"
                              href="/">
                            <Image src={logo} className="h-8 w-auto object-contain" alt="brand-logo"/>

                        </Link>
                        <div
                            className="text-base-content text-black flex gap-6 text-base font-medium max-lg:mt-4 max-lg:flex-col lg:items-center lg:gap-16"
                        >
                            <Link href="/" className="link link-animated text-black hover:text-black ">Home</Link>
                            <Link href="/#about" className="link link-animated  text-black hover:text-black">Über uns</Link>
                            <Link href="/#projects"
                                  className="link link-animated text-black hover:text-black">Projekte</Link>
                            <Link href="/#work-together"
                                  className="link link-animated  text-black hover:text-black">Workshops</Link>
                            <Link href="/#contact"
                                  className="link link-animated text-black hover:text-black">Kontakt</Link>
                        </div>
                    </div>
                </div>
                <div className="navbar-end max-lg:hidden">
                </div>
            </div>
        </nav>);
}