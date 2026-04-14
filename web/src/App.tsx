import { MotionConfig } from 'motion/react';

import WheelNav from './components/nav/WheelNav';
import AboutSection from './components/sections/AboutSection';
import ComingNextSection from './components/sections/ComingNextSection';
import ContactSection from './components/sections/ContactSection';
import GMLetterSection from './components/sections/GMLetterSection';
import HeroSection from './components/sections/HeroSection';
import KeyUpdatesSection from './components/sections/KeyUpdatesSection';
import OrgPlaceSection from './components/sections/OrgPlaceSection';
import ProductsSection from './components/sections/ProductsSection';
import TeamSection from './components/sections/TeamSection';

export default function App() {
    return (
        <MotionConfig reducedMotion="user">
            <main>
                <HeroSection />
                <AboutSection />
                <OrgPlaceSection />
                <GMLetterSection />
                <KeyUpdatesSection />
                <TeamSection />
                <ProductsSection />
                <ContactSection />
                <ComingNextSection />
            </main>
            <WheelNav />
        </MotionConfig>
    );
}
