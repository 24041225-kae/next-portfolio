"use client";
import React, { useEffect } from 'react'; // imports react and useeffect
import anime from 'animejs'; // imports animejs for animations
import Navbar from '../components/Navbar'; // imports navbar component
import Hero from '../components/Hero'; // imports hero component
import About from '../components/About'; // imports about component
import Projects from '../components/Projects'; // imports projects component
import Contact from '../components/Contact'; // imports contact component
import Footer from '../components/Footer'; // imports footer component

export default function Home() { // main home page function
    useEffect(() => { // runs when the page loads
        anime({ // animates the page elements
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
            <Navbar /> {/* displays navbar */}
            <Hero /> {/* displays hero section */}
            <main className="container my-5">
                {/* main content container */}

                <About /> {/* displays about section */}
                <hr className="my-5" /> {/* divider */}
                <Projects /> {/* displays projects section */}
                <hr className="my-5" /> {/* divider */}
                <Contact /> {/* displays contact section */}
            </main>
            <Footer /> {/* displays footer */}
        </>
    );
}
