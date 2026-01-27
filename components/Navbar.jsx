'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function Navbar() {
    const pathname = usePathname();

    // Highlight active link simple logic or standard bootstrap behavior
    // For scrolling sections, usually we need JS to detect scroll position. 
    // For now we keep it simple as per original bootstrap behavior.

    return (
        <nav className="navbar navbar-expand-lg navbar-glass sticky-top">
            <div className="container">
                <Link className="navbar-brand d-flex align-items-center" href="/">
                    <img src="/images/logo.png" width="50" alt="Logo" className="logo me-2 rounded-circle" />
                    <span className="brand-text me-2">Kaelynn Fong</span>
                    <img src="/images/cat.svg" width="30" alt="Cat" className="animate-bob" />
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav me-3">
                        <li className="nav-item">
                            <Link className="nav-link" href="#home">Home</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                About
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" href="#about">About Me</Link></li>
                                <li><Link className="dropdown-item" href="#certifications">Certifications</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="#projects">Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="#contact">Contact</Link>
                        </li>
                    </ul>

                    <div className="d-flex align-items-center gap-2">
                        <a href="/Kaelynn_RP_resume.pdf" download="Kaelynn_RP_resume.pdf" className="btn btn-outline-primary btn-sm">
                            <i className="fa fa-download me-1"></i> Resume
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
