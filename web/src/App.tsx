import HeroSection from './components/sections/HeroSection';
import { useLenis } from './hooks/useLenis';

export default function App() {
    useLenis();

    return (
        <main>
            <HeroSection />
        </main>
    );
}
