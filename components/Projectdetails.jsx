"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function ProjectDetails({ project }) {
    const initialImage = (project.images && project.images.length > 0) ? project.images[0] : project.image;
    const [selectedImage, setSelectedImage] = useState(initialImage);

    // Update selected image if project changes
    // This simple version assumes the component remounts for different projects, 
    // or we can just rely on the key prop in the parent if needed. 
    // But for safety let's just default to one state. 

    // Actually, if 'project' prop changes, we might want to reset the image.
    // simpler to just use the state. 

    return (
        <div className="container my-5">
            <Link href="/#projects" className="btn btn-ghost mb-3">&larr; Back to projects</Link>
            <div className="row">
                <div className="col-md-7">
                    <h1 className="text-light">{project.title}</h1>
                    <p className="text-muted">{project.subtitle}</p>
                    <p>{project.description}</p>
                    {project.tech && project.tech.length > 0 && (
                        <div>
                            <h5 className="mt-4">Tech used</h5>
                            <ul>
                                {project.tech.map((t, index) => (
                                    <li key={index}>{t}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                    {project.link && project.link !== '#' && (
                        <a href={project.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                            View live
                        </a>
                    )}
                </div>
                <div className="col-md-5">
                    {project.images && project.images.length > 0 ? (
                        <div className="project-gallery">
                            <div className="main-image-container mb-3">
                                <img
                                    src={selectedImage}
                                    alt={project.title}
                                    className="img-fluid rounded shadow-sm w-100"
                                    style={{ objectFit: 'cover', maxHeight: '400px' }}
                                />
                            </div>
                            <div
                                className="thumbnails-container d-flex gap-2"
                                style={{ overflowX: 'auto', paddingBottom: '5px' }}
                            >
                                {project.images.map((img, index) => (
                                    <img
                                        key={index}
                                        src={img}
                                        className={`gallery-thumbnail rounded border ${selectedImage === img ? 'border-primary' : 'border-secondary'}`}
                                        style={{ cursor: 'pointer', opacity: selectedImage === img ? 1 : 0.7 }}
                                        onClick={() => setSelectedImage(img)}
                                        alt={`Thumbnail ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    ) : project.image ? (
                        <img
                            src={project.image}
                            alt={project.title}
                            className="img-fluid rounded shadow-sm"
                        />
                    ) : null}
                </div>
            </div>
        </div>
    );
}
