import Image from "next/image";
import logo from "@/../public/culture-dynamics-logo.png"
import Link from "next/link";

export default function NavbarLight() {

    return (
        <nav className="navbar w-full text-black">
            <div className="w-full px-4 py-4 sm:px-6 md:flex md:items-end md:gap-2 md:px-8">
                <div className="navbar-start items-center justify-between max-md:w-full">
                    <Link className="text-base-content flex items-center gap-3 text-xl font-bold md:hidden" href="/">
                        <Image src={logo} className="size-8 w-full" alt="brand-logo"/>

                    </Link>

                    <div className="flex items-center md:hidden">
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
                    className="md:navbar-center transition-height collapse hidden grow overflow-hidden duration-300 md:flex w-full "
                >
                    <div
                        className="text-base-content text-black w-full gap-6 text-base font-medium max-md:mt-4 max-md:flex-col md:gap-16 flex justify-between "
                    >
                        <Link className="text-base-content flex items-center gap-3 text-xl font-bold max-md:hidden"
                              href="/">
                            <Image src={logo} className="size-8 w-full" alt="brand-logo"/>

                        </Link>
                        <div
                            className="text-base-content text-black flex gap-6 text-base font-medium max-md:mt-4 max-md:flex-col md:items-center md:gap-16"
                        >

                            <Link href="/#work-together" className="hover:text-primary ">Lernwerkstatt</Link>
                            <Link href="/#about" className="hover:text-primary">About Us</Link>
                            <Link href="/#team" className="hover:text-primary">Contacts</Link>
                        </div>
                    </div>
                </div>
                <div className="navbar-end max-md:hidden">
                </div>
            </div>
        </nav>);
}