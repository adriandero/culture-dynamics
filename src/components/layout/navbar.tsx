import Image from "next/image";
import logo from "@/../public/culture-dynamics-logo-invert.png"

export default function Navbar() {

    return (
        <nav className="navbar w-full backdrop-blur-md bg-white/5 text">
            <div className="w-full px-4 py-4 sm:px-6 md:flex md:items-end md:gap-2 md:px-8">
                <div className="navbar-start items-center justify-between max-md:w-full">
                    <a className="text-base-content flex items-center gap-3 text-xl font-bold md:hidden" href="#">
                        <Image src={logo} className="size-8 w-full" alt="brand-logo"/>

                    </a>

                    <div className="flex items-center md:hidden">
                        <button
                            type="button"
                            className="collapse-toggle text-white border-white btn btn-outline btn-secondary btn-square"
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
                    className="md:navbar-center transition-height collapse hidden grow overflow-hidden duration-300 md:flex w-full "
                >
                    <div
                        className="text-base-content text-white w-full gap-6 text-base font-medium max-md:mt-4 max-md:flex-col md:gap-16 flex justify-between "
                    >
                        <a className="text-base-content flex items-center gap-3 text-xl font-bold max-md:hidden"
                           href="#">
                            <Image src={logo} className="size-8 w-full" alt="brand-logo"/>

                        </a>
                        <div
                            className="text-base-content text-white flex gap-6 text-base font-medium max-md:mt-4 max-md:flex-col md:items-center md:gap-16"
                        >

                            <a href="#" className="hover:text-primary ">Projects</a>
                            <a href="#" className="hover:text-primary">About Us</a>
                            <a href="#" className="hover:text-primary">Contacts</a>
                        </div>
                    </div>
                </div>
                <div className="navbar-end max-md:hidden">
                </div>
            </div>
        </nav>);
}