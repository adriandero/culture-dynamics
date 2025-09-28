import LandingSection from "@/features/home/landing-section";
import Navbar from "@/components/layout/navbar";
import React from "react";
import Footer from "@/components/layout/footer";
import AboutSection from "@/features/home/about-section";
import WorkSection from "@/features/home/work-section";
import ProjectsSection from "@/features/home/projects-section";
import VisionSection from "@/features/home/vision-section";

export default function Home() {
    return (
        <div className="min-h-screen  w-full flex flex-col">
            <main className=" ">
                <LandingSection></LandingSection>
                <AboutSection></AboutSection>
                <VisionSection></VisionSection>
                <WorkSection></WorkSection>
                <ProjectsSection></ProjectsSection>
            </main>
            <Footer></Footer>
        </div>
    )
        ;
}