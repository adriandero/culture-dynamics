import Image from "next/image";
import logo from "@/../public/culture-dynamics-logo-invert.png"
import Link from "next/link";

export default function Navbar() {

    return (
        <nav className="navbar w-full backdrop-blur-lg bg-white/5 text">
            <div className="w-full px-4 py-4 sm:px-6 lg:flex lg:items-end lg:gap-2 lg:px-8">
                <div className="navbar-start items-center justify-between max-lg:w-full">
                    <a className="text-base-content flex items-center gap-3 text-xl font-bold lg:hidden" href="#">
                        <Image src={logo} className="size-8 w-full" alt="brand-logo"/>

                    </a>

                    <div className="flex items-center lg:hidden">
                        <button
                            type="button"
                            className="collapse-toggle text-white border-none btn btn-outline btn-secondary btn-square"
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
                        className="text-base-content text-white w-full gap-6 text-base font-medium max-lg:mt-4 max-lg:flex-col lg:gap-16 flex justify-between "
                    >
                        <a className="text-base-content flex items-center gap-3 text-xl font-bold max-lg:hidden"
                           href="#">
                            <Image src={logo} className="size-8 w-full" alt="brand-logo"/>

                        </a>
                        <div
                            className="text-base-content text-white flex gap-6 text-base font-medium max-lg:mt-4 max-lg:flex-col lg:items-center lg:gap-16"
                        >


                            <Link href="/" className="hover:text-primary ">Home</Link>
                            <Link href="/#about" className="hover:text-primary">About Us</Link>
                            <Link href="/#projects" className="hover:text-primary ">Projects</Link>
                            <Link href="/#work-together" className="hover:text-primary ">Workshops</Link>
                            <Link href="/#contacts" className="hover:text-primary">Contacts</Link>
                        </div>
                    </div>
                </div>
                <div className="navbar-end max-lg:hidden">
                </div>
            </div>
        </nav>);
}