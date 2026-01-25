"use client";
import { certifications } from '../data';
import { useState } from 'react';
import { createPortal } from 'react-dom';

export default function About() {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <section id="about" className="about-section mb-5 pt-5">
            <div className="about-header">
                <h1 className="about-title">About Me</h1>
                <div className="about-divider"></div>
            </div>

            <p className="about-lead">
                I am a student at Republic Polytechnic, pursuing a Diploma in Digital Design & Development.
                I enjoy designing and building meaningful digital experiences — from dashboards to event
                pages,
                and simple interactive apps.
            </p>

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

                <div className="d-flex gap-4">
                    <div className="highlight-box flex-fill">
                        <h4>Languages</h4>
                        <p>English — Native proficiency</p>
                        <p>Chinese — Limited working proficiency</p>
                    </div>

                    <div className="highlight-box flex-fill">
                        <div className="d-flex align-items-center gap-2 mb-2">
                            <h4 className="mb-0">Experiences & Volunteer</h4>
                            <img src="/images/cat.svg" alt="cat" width="24" height="24" className="animate-bob" />
                        </div>
                        <ul>
                            <li>OCBC Ignite Challenge</li>
                            <li>Peer Teacher</li>
                            <li>BuildingBlocs</li>
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
                                                    onClick={() => setSelectedImage(c.image)}
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
            {selectedImage && typeof document !== 'undefined' && createPortal(
                <div className="lightbox-overlay" onClick={() => setSelectedImage(null)}>
                    <img
                        src={selectedImage}
                        alt="Certificate Full View"
                        className="lightbox-image"
                        onClick={(e) => e.stopPropagation()}
                    />
                    <button
                        className="btn btn-close btn-close-white position-absolute top-0 end-0 m-4"
                        onClick={() => setSelectedImage(null)}
                        aria-label="Close"
                    ></button>
                </div>,
                document.body
            )}
        </section>
    );
}
