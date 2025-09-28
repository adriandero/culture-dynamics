import "./globals.css";

import FlyonuiScript from "../components/FlyonuiScript";
import {Providers} from "@/app/providers";

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className="h-screen w-screen justify-center flex bg-base-100">
        <Providers>{children}</Providers>
        </body>
        <FlyonuiScript/>
        </html>
    );
}
