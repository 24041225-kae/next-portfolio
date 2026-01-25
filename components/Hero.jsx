'use client';

import { useEffect, useRef } from 'react';
import anime from 'animejs';
import Link from 'next/link';

export default function Hero() {
    const wrapperRef = useRef(null);

    useEffect(() => {
        // Animate the orb
        anime({
            targets: '.orb-main',
            translateX: [-20, 20],
            translateY: [-10, 10],
            scale: [1, 1.05],
            duration: 5000,
            direction: 'alternate',
            loop: true,
            easing: 'easeInOutSine'
        });

        // Animate text elements on load
        anime({
            targets: ['.eyebrow', '.hero-title', '.hero-subtitle', '.hero-body', '.hero-actions'],
            translateY: [20, 0],
            opacity: [0, 1],
            delay: anime.stagger(100, { start: 200 }),
            duration: 1000,
            easing: 'easeOutExpo'
        });

        // Wave animations calling anime on the path 'd' attribute or translation
        // Since we don't have the original wave images, we're using SVGs
        anime({
            targets: '#wave-path-1',
            d: [
                { value: 'M0,192L80,186.7C160,181,320,171,480,181.3C640,192,800,224,960,218.7C1120,213,1280,171,1360,149.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z' },
                { value: 'M0,160L80,176C160,192,320,224,480,213.3C640,203,800,149,960,138.7C1120,128,1280,160,1360,176L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z' }
            ],
            duration: 5000,
            loop: true,
            direction: 'alternate',
            easing: 'easeInOutQuad'
        });

        anime({
            targets: '#wave-path-2',
            translateX: [-50, 0],
            duration: 8000,
            loop: true,
            direction: 'alternate',
            easing: 'easeInOutSine'
        });

    }, []);

    return (
        <header className="hero" id="home" ref={wrapperRef}>
            {/* visual background: waves + orb */}
            <div className="hero-visual">
                <div className="orb orb-main"></div>

                {/* SVG Waves replacement for missing images */}
                <div className="wave-container" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', overflow: 'hidden', lineHeight: 0, zIndex: 0 }}>
                    {/* Wave 3 (Back) */}
                    <svg style={{ position: 'absolute', bottom: 0, left: 0, opacity: 0.3, zIndex: 1 }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#a855f7" fillOpacity="1" d="M0,96L80,122.7C160,149,320,203,480,202.7C640,203,800,149,960,138.7C1120,128,1280,160,1360,176L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                    </svg>

                    {/* Wave 2 (Middle) */}
                    <svg id="wave-2-svg" style={{ position: 'absolute', bottom: 0, left: '-5%', width: '110%', opacity: 0.5, zIndex: 2 }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path id="wave-path-2" fill="#14b8a6" fillOpacity="1" d="M0,224L80,213.3C160,203,320,181,480,186.7C640,192,800,224,960,218.7C1120,213,1280,171,1360,149.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                    </svg>

                    {/* Wave 1 (Front) */}
                    <svg style={{ position: 'absolute', bottom: 0, left: 0, opacity: 0.8, zIndex: 3 }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path id="wave-path-1" fill="#050712" fillOpacity="0.8" d="M0,288L80,272C160,256,320,224,480,224C640,224,800,256,960,266.7C1120,277,1280,267,1360,261.3L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                    </svg>
                </div>
            </div>

            <div className="container hero-content">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <p className="eyebrow mb-2">Hello, I’m</p>
                        <h1 className="hero-title">
                            <span className="name-title">Kaelynn Fong</span>
                            <span className="hero-tag">Digital Design & Development</span>
                        </h1>
                        <p className="hero-subtitle">
                            I create friendly digital experiences for students, events, and communities.
                        </p>
                        <p className="hero-body">
                            Currently a Diploma in Digital Design and Development student at Republic Polytechnic,
                            exploring UI/UX, web design, and front-end development.
                        </p>
                        <div className="hero-actions mt-4">
                            <Link href="#projects" className="btn btn-primary me-2">View Projects</Link>
                            <Link href="#about" className="btn btn-ghost">More about me</Link>
                        </div>
                    </div>
                    <div className="col-lg-5 hero-side text-lg-end text-center">
                        <div className="hero-pill">
                            <span className="pill-label">Available for:</span>
                            <span className="pill-value">Internships & collaborations</span>
                        </div>
                        <div className="hero-stats mt-4">
                            <div>
                                <span className="stat-value">2+</span>
                                <span className="stat-label">Semesters of<br />design projects</span>
                            </div>
                            <div>
                                <span className="stat-value">10+</span>
                                <span className="stat-label">School & personal<br />prototypes</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
