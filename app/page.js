"use client";
import React, { useEffect } from 'react';
import anime from 'animejs';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
    useEffect(() => {
        anime({
            targets: 'main',
            opacity: [0, 1],
            translateY: [20, 0],
            easing: 'easeOutExpo',
            duration: 1000,
            delay: 200
        });
    }, []);

    return (
        <>
            <Navbar />
            <Hero />
            <main className="container my-5">
                {/* Flash message placeholder - can be implemented with useSearchParams if needed */}

                <About />
                <hr className="my-5" />
                <Projects />
                <hr className="my-5" />
                <Contact />
            </main>
            <Footer />
        </>
    );
}
