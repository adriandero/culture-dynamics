import LandingSection from "@/features/landing-section";
import Navbar from "@/components/layout/navbar";
import React from "react";
import Footer from "@/components/layout/footer";

export default function Home() {
    return (
        <div>
            <main className="flex flex-col h-full">
                <Navbar></Navbar>
                <LandingSection></LandingSection>
                <Footer></Footer>
            </main>
        </div>
    );
}