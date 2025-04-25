"use client";
import React from 'react';
import DwainChambersSection from './elements/DwainChambersSection';
import HeroSection from './elements/HeroSection';
import AboutCampSection from './elements/AboutTheCamp';
import LearningOutcomesSection from './elements/LearningOutcomesSection';
import MediaSection from './elements/MediaSection';
import CTASection from './elements/CTAsection';
import TeamSupportSection from './elements/TeamSupportSection';
export default function Page() {
    return (
        <section>
        <HeroSection />
        <DwainChambersSection />
        <AboutCampSection />
        <LearningOutcomesSection />
        <MediaSection />
        <TeamSupportSection />
        <CTASection />
        </section>
    );
}