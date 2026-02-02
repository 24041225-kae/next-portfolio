"use client";
import { certifications } from '../data';
import { useState } from 'react';
import Link from 'next/link';
import { createPortal } from 'react-dom';
import { FaBicycle, FaBook, FaGamepad, FaFilm, FaMusic, FaPlane } from "react-icons/fa";
import { MdWorkspacePremium } from "react-icons/md";
import { IoNewspaperOutline } from "react-icons/io5";


export default function About() {
    // selectedContent: { src, caption } | [{ src, caption }] | null
    const [selectedContent, setSelectedContent] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openModal = (content) => {
        setSelectedContent(content);
        setCurrentIndex(0);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedContent(null);
        setCurrentIndex(0);
        document.body.style.overflow = 'unset';
    };

    const nextImage = (e) => {
        e.stopPropagation();
        if (Array.isArray(selectedContent)) {
            setCurrentIndex((prev) => (prev + 1) % selectedContent.length);
        }
    };

    const prevImage = (e) => {
        e.stopPropagation();
        if (Array.isArray(selectedContent)) {
            setCurrentIndex((prev) => (prev - 1 + selectedContent.length) % selectedContent.length);
        }
    };

    const currentItem = Array.isArray(selectedContent) ? selectedContent[currentIndex] : selectedContent;

    return (
        <section id="about" className="about-section mb-5 pt-5">
            <div className="about-header">
                <h1 className="about-title">About Me</h1>
                <div className="about-divider"></div>
            </div>

            <div className="card mb-5 border-0 shadow-lg overflow-hidden mx-auto" style={{ background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', maxWidth: '850px' }}>
                <div className="row g-0">
                    <div className="col-md-4 d-flex align-items-center justify-content-center p-3">
                        <div className="position-relative">
                            {/* Thought Bubble */}
                            <div className="thought-bubble">
                                <div className="d-flex gap-2 justify-content-center align-items-center">
                                    <img
                                        src="/images/fred.JPG"
                                        alt="Fred"
                                        className="rounded-circle"
                                        style={{ width: '35px', height: '35px', objectFit: 'cover', cursor: 'pointer' }}
                                        onClick={() => openModal({ src: '/images/fred.JPG', caption: 'Fred' })}
                                    />
                                    <img
                                        src="/images/fredandgeorge.jpg"
                                        alt="Fred & George"
                                        className="rounded-circle"
                                        style={{ width: '45px', height: '45px', objectFit: 'cover', cursor: 'pointer' }}
                                        onClick={() => openModal({ src: '/images/fredandgeorge.jpg', caption: 'Fred & George' })}
                                    />
                                    <img
                                        src="/images/george.jpg"
                                        alt="George"
                                        className="rounded-circle"
                                        style={{ width: '35px', height: '35px', objectFit: 'cover', cursor: 'pointer' }}
                                        onClick={() => openModal({ src: '/images/george.jpg', caption: 'George' })}
                                    />
                                </div>
                            </div>

                            <img
                                src="/images/profilepic.JPG"
                                className="img-fluid rounded-circle shadow"
                                alt="Profile"
                                style={{ objectFit: 'cover', objectPosition: 'center 20%', width: '160px', height: '160px' }}
                            />
                        </div>
                    </div>
                    <div className="col-md-8 d-flex align-items-center">
                        <div className="card-body p-4">
                            <div className="about-text-content">
                                <p className="about-lead mb-3 text-light opacity-75">
                                    I want to be a <strong>Game Developer</strong> in the future. I also enjoy:
                                </p>
                                <div className="d-flex flex-wrap gap-3">
                                    <Link href="/hobbies/cycling" className="hobby-pill text-decoration-none" style={{ animationDelay: '0s' }}>
                                        <FaBicycle className="text-primary" /> Cycling
                                    </Link>
                                    <Link href="/hobbies/reading" className="hobby-pill text-decoration-none" style={{ animationDelay: '0.2s' }}>
                                        <FaBook className="text-warning" /> Reading
                                    </Link>
                                    <Link href="/hobbies/traveling" className="hobby-pill text-decoration-none" style={{ animationDelay: '0.4s' }}>
                                        <FaPlane className="text-info" /> Traveling
                                    </Link>
                                </div>

                                <div className="mt-4">
                                    <p className="about-lead mb-2 text-light opacity-75">Fun fact, this is one of my <i>favourite</i> songs!</p>
                                    <iframe
                                        style={{ borderRadius: '12px' }}
                                        src="https://open.spotify.com/embed/track/5cRKj1kynNFqiliT2ndZ3y?utm_source=generator"
                                        width="100%"
                                        height="152"
                                        frameBorder="0"
                                        allowFullScreen=""
                                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                        loading="lazy"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Highlight Boxes */}
            <div className="about-highlight-grid">

                <div className="highlight-box">
                    <div className="d-flex flex-column gap-4">
                        {/* Row 1 */}
                        <div className="carousel">
                            <div className="group">
                                {["Microsoft Excel", "Power BI", "Word", "Canva", "Illustrator"].map((skill, index) => (
                                    <div className="skill" key={index}>{skill}</div>
                                ))}
                            </div>
                            <div aria-hidden className="group">
                                {["Microsoft Excel", "Power BI", "Word", "Canva", "Illustrator"].map((skill, index) => (
                                    <div className="skill" key={`dup-${index}`}>{skill}</div>
                                ))}
                            </div>
                        </div>

                        {/* Row 2 (Reverse) */}
                        <div className="carousel carousel-reverse">
                            <div className="group">
                                {["Photoshop", "Figma", "Python", "HTML", "CSS"].map((skill, index) => (
                                    <div className="skill" key={index}>{skill}</div>
                                ))}
                            </div>
                            <div aria-hidden className="group">
                                {["Photoshop", "Figma", "Python", "HTML", "CSS"].map((skill, index) => (
                                    <div className="skill" key={`dup-${index}`}>{skill}</div>
                                ))}
                            </div>
                        </div>

                        {/* Row 3 */}
                        <div className="carousel">
                            <div className="group">
                                {["JavaScript", "C#", "UI/UX fundamentals", "MySQL", "React"].map((skill, index) => (
                                    <div className="skill" key={index}>{skill}</div>
                                ))}
                            </div>
                            <div aria-hidden className="group">
                                {["JavaScript", "C#", "UI/UX fundamentals", "MySQL", "React"].map((skill, index) => (
                                    <div className="skill" key={`dup-${index}`}>{skill}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="d-flex gap-4 mt-5">
                    <div className="highlight-box flex-fill">
                        <h4>Languages</h4>
                        <p>English — Native proficiency</p>
                        <p>Chinese — Limited working proficiency</p>
                    </div>

                    <div className="highlight-box flex-fill">
                        <div className="d-flex align-items-center gap-2 mb-2">
                            <h4 className="mb-0">Experiences & Volunteer</h4>
                        </div>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <button className="btn-link text-decoration-none text-light p-0 border-0 bg-transparent text-start"
                                    onClick={() => openModal([
                                        { src: '/images/ocbcignite.jpg', caption: 'OCBC Ignite Challenge' },
                                        { src: '/images/ocbcignite2.jpg', caption: 'OCBC Ignite Challenge - ATM Services: For now, and beyond' }
                                    ])}>
                                    • OCBC Ignite Challenge
                                </button>
                            </li>
                            <li className="mb-2">
                                <button className="btn-link text-decoration-none text-light p-0 border-0 bg-transparent text-start"
                                    onClick={() => openModal({ src: '/images/buildingblocs.jpg', caption: 'BuildingBlocs hackathon and classes, learning more about javascript, css and other js libraries' })}>
                                    • BuildingBlocs
                                </button>
                            </li>
                            <li className="mb-2">
                                <button className="btn-link text-decoration-none text-light p-0 border-0 bg-transparent text-start"
                                    onClick={() => openModal({ src: '/images/youthcorps.jpg', caption: 'Youth Corps Singapore, teaching coding to kids (Coding for All)' })}>
                                    • Youth Corps Singapore
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>


            {/* Certifications Section */}
            <div className="mt-5" id="certifications">
                <h3 className="mb-4">Certifications</h3>
                <div className="row g-3">
                    {certifications && certifications.length > 0 ? (
                        certifications.map((c, index) => (
                            <div className="col-md-6" key={index}>
                                <div className="card h-100 border-0 shadow-sm" style={{ background: 'var(--bg-soft)' }}>
                                    <div className="card-body d-flex align-items-center gap-3">
                                        {c.image && (
                                            <div className="flex-shrink-0">
                                                <img
                                                    src={c.image}
                                                    alt={c.name}
                                                    className="cert-thumbnail"
                                                    style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '8px', cursor: 'zoom-in' }}
                                                    onClick={() => openModal({ src: c.image, caption: c.name })}
                                                />
                                            </div>
                                        )}
                                        <div>
                                            <h6 className="card-title mb-1">
                                                {c.name}
                                            </h6>
                                            <p className="card-text text-muted-small mb-0">
                                                {c.issuer} • {c.year}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-muted">No certifications loaded.</p>
                    )}
                </div>
            </div>

            {/* Lightbox Modal (Portal) */}
            {selectedContent && typeof document !== 'undefined' && createPortal(
                <div className="lightbox-overlay" onClick={closeModal}>
                    <div className="d-flex flex-column align-items-center position-relative" style={{ maxWidth: '90%', maxHeight: '90%', width: '100%' }}>

                        {/* Carousel Controls */}
                        {Array.isArray(selectedContent) && selectedContent.length > 1 && (
                            <>
                                <button className="btn btn-link text-white position-absolute start-0 top-50 translate-middle-y fs-1" onClick={prevImage} style={{ zIndex: 1060 }}>
                                    &lt;
                                </button>
                                <button className="btn btn-link text-white position-absolute end-0 top-50 translate-middle-y fs-1" onClick={nextImage} style={{ zIndex: 1060 }}>
                                    &gt;
                                </button>
                            </>
                        )}

                        <img
                            src={currentItem.src}
                            alt="Full View"
                            className="lightbox-image mb-3"
                            style={{ maxHeight: '80vh', maxWidth: '100%', objectFit: 'contain' }}
                            onClick={(e) => e.stopPropagation()}
                        />
                        {currentItem.caption && (
                            <p className="text-white text-center mt-2 bg-dark bg-opacity-75 p-2 rounded">
                                {currentItem.caption}
                                {Array.isArray(selectedContent) && selectedContent.length > 1 && ` (${currentIndex + 1}/${selectedContent.length})`}
                            </p>
                        )}
                    </div>
                    <button
                        className="btn btn-close btn-close-white position-absolute top-0 end-0 m-4"
                        onClick={closeModal}
                        aria-label="Close"
                        style={{ zIndex: 1070 }}
                    ></button>
                </div>,
                document.body
            )}
        </section>
    );
}
