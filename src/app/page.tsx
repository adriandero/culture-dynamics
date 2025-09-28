import LandingSection from "@/features/home/landing-section";
import React from "react";
import Footer from "@/components/layout/footer";
import AboutSection from "@/features/home/about-section";
import WorkSection from "@/features/home/work-section";
import ProjectsSection from "@/features/home/projects-section";
import VisionSection from "@/features/home/vision-section";
import TeamSection from "@/features/home/team-section";
import WorkTogetherSection from "@/features/home/work-together-section";
import ContactSection from "@/features/home/contact-section";

export default function Home() {
    return (
        <div className="min-h-screen  w-full flex flex-col">
            <main className=" ">
                <LandingSection></LandingSection>
                <AboutSection></AboutSection>
                <VisionSection></VisionSection>
                <ProjectsSection></ProjectsSection>
                <WorkSection></WorkSection>
                <WorkTogetherSection></WorkTogetherSection>
                <TeamSection></TeamSection>
                <ContactSection></ContactSection>
            </main>
            <Footer></Footer>
        </div>
    )
        ;
}