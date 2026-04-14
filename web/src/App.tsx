import AboutSection from './components/sections/AboutSection';
import ContactSection from './components/sections/ContactSection';
import GMLetterSection from './components/sections/GMLetterSection';
import HeroSection from './components/sections/HeroSection';
import OrgPlaceSection from './components/sections/OrgPlaceSection';
import ProductsSection from './components/sections/ProductsSection';
import TeamSection from './components/sections/TeamSection';
import { useLenis } from './hooks/useLenis';

export default function App() {
    useLenis();

    return (
        <main>
            <HeroSection />
            <AboutSection />
            <OrgPlaceSection />
            <GMLetterSection />
            <TeamSection />
            <ProductsSection />
            <ContactSection />
        </main>
    );
}
