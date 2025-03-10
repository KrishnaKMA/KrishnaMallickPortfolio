import Header from './Header';
import Footer from './Footer';
import ParticlesBackground from '../components/ui/ParticlesBackground'; // Import the ParticlesBackground component

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Particle Background */}
            <ParticlesBackground />

            {/* Header */}
            <Header />

            {/* Main Content */}
            <main className="flex-grow relative z-10">{children}</main>

            {/* Footer */}
            <Footer />
        </div>
    );
}
