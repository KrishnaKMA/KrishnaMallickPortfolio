// components/ui/ParticlesBackground.tsx
import { useEffect } from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Particles from 'particles.js';


const ParticlesBackground = () => {
    useEffect(() => {
        // Initialize Particles.js
        particlesJS.load('particles-js', '/particles.json', () => {
            console.log('Particles.js loaded!');
        });

        // Cleanup on unmount
        return () => {
            const canvas = document.querySelector('#particles-js canvas');
            if (canvas) {
                canvas.remove();
            }
        };
    }, []);

    return (
        <div
            id="particles-js"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1, // Ensure it's behind your content
            }}
        />
    );
};

export default ParticlesBackground;