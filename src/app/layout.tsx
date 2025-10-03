import "./globals.css";

import FlyonuiScript from "../components/FlyonuiScript";
import {Providers} from "@/app/providers";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Culture Dynamics",
    description: 'Gemeinnütziger Verein zur Erforschung und Förderung von Diversität und Integrität in Kunst und Kultur',

    icons: {
        icon: '/favicon.ico',
        shortcut: "/favicon.ico",
        apple: '/icon.ico',
    },
};

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
