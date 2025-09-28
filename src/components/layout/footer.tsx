import Image from "next/image";
import Link from "next/link";

export default function Footer() {

    return (
        <footer>
            <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
                <div className="flex items-center justify-between gap-3 max-md:flex-col">
                    <div className="text-base-content flex items-center gap-2 text-xl font-bold">
                        <Image src="/culture-dynamics-logo.png" width={200} height={200} className="size-8 w-full"
                               alt="brand-logo"/>
                    </div>
                    <div className={"flex md:flex-row flex-col gap-5 md:gap-8 items-center"}>
                        <nav className="flex items-center gap-6">


                            <Link href="/"
                                  className="link link-animated text-base-content/80 font-medium">Home</Link>
                            <Link href="/#about"
                                  className="link link-animated text-base-content/80 font-medium">About Us</Link>
                            <Link href="/#work-together"
                                  className="link link-animated text-base-content/80 font-medium">Workshops</Link>
                            <Link href="/#projects"
                                  className="link link-animated text-base-content/80 font-medium">Projects</Link>
                            <Link href="/#contacts"
                                  className="link link-animated text-base-content/80 font-medium">Contacts</Link>
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

                            <div className="md:hidden divider divider-horizontal"></div>

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