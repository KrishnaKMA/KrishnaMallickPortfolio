import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col min-h-screen">


            {/* Header */}
            <Header />

            {/* Main Content */}
            <main className="flex-grow relative z-10">{children}</main>

            {/* Footer */}
            <Footer />
        </div>
    );
}
