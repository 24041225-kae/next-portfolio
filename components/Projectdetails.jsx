"use client";
import Link from 'next/link'; // imports link component
import useEmblaCarousel from "embla-carousel-react"; // imports carousel hook
import { DotButton, useDotButton } from "./EmblaCarouselDotButton"; // imports carousel dots
import PaletteShowcase from './PaletteShowcase';

export default function ProjectDetails({ project }) { // project details component
    // data/index.js uses 'image' key which is an array of strings or objects {src, caption}
    const rawImages = Array.isArray(project.image) ? project.image : (project.image ? [project.image] : []); // normalizes images to array
    const imageList = rawImages.map(img => typeof img === 'string' ? { src: img, caption: null } : img); // normalizes image objects

    // embla carousel state
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }); // initializes carousel
    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi); // handles dot buttons
    const currentCaption = imageList[selectedIndex]?.caption; // gets current caption

    return (
        <div className="container my-5">
            <Link href="/#projects" className="btn btn-ghost mb-3">&larr; Back to projects</Link>
            <div className="row">
                <div className="col-md-7">
                    <div className="d-flex align-items-center flex-wrap gap-3">
                        <h1 className="text-light mb-0">{project.title}</h1>
                        {project.tech && project.tech.length > 0 && (
                            <div className="d-flex gap-2">
                                {project.tech.map((t, index) => (
                                    <span key={index} className="badge bg-secondary bg-opacity-50 border border-secondary">{t}</span>
                                ))}
                            </div>
                        )}
                    </div>
                    <p className="text-light opacity-75 mb-4 fs-5 fst-italic ps-3 border-start mt-4 " style={{ borderColor: 'var(--accent)' }}>
                        {project.subtitle}
                    </p>
                    <div style={{ whiteSpace: 'pre-wrap' }} dangerouslySetInnerHTML={{ __html: project.description }} />
                    {project.link && project.link !== '#' && (
                        <a href={project.link} className="btn btn-primary mt-4" target="_blank" rel="noopener noreferrer">
                            View live
                        </a>
                    )}
                </div>
                <div className="col-md-5">
                    {imageList.length > 0 ? (
                        <div className="embla" style={{ maxWidth: '100%', '--slide-height': '400px' }}>
                            <div className="embla__viewport" ref={emblaRef} style={{ overflow: 'hidden', borderRadius: '8px' }}>
                                <div className="embla__container" style={{ display: 'flex' }}>
                                    {imageList.map((img, index) => (
                                        <div className="embla__slide" key={index} style={{ flex: '0 0 100%', minWidth: 0 }}>
                                            <img
                                                src={img.src}
                                                alt={`${project.title} ${index + 1}`}
                                                className="img-fluid w-100"
                                                style={{ objectFit: 'contain', height: '400px', width: '100%', backgroundColor: project.id === 5 ? 'white' : 'rgba(0,0,0,0.5)' }}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {imageList.length > 1 && (
                                <div className="d-flex flex-column align-items-center mt-3">
                                    <div className="embla__dots">
                                        {scrollSnaps.map((_, index) => (
                                            <DotButton
                                                key={index}
                                                onClick={() => onDotButtonClick(index)}
                                                className={'embla__dot'.concat(
                                                    index === selectedIndex ? ' embla__dot--selected' : ''
                                                )}
                                            />
                                        ))}
                                    </div>
                                    {imageList[selectedIndex].src.toLowerCase().endsWith('.gif') && (
                                        <div className="text-center mt-2" style={{ animation: 'fadeIn 0.5s ease' }}>
                                            <span className="text-muted-small text-light fs-2">Video Showcase</span>
                                        </div>
                                    )}
                                    {currentCaption && (
                                        <div className="text-center mt-3 px-2" style={{ animation: 'fadeIn 0.5s ease' }}>
                                            <p className="text-muted-small fst-italic">{currentCaption}</p>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    ) : null}

                    {project.additionalInfo && (
                        <div className="mt-4">
                            <div style={{ whiteSpace: 'pre-wrap' }} dangerouslySetInnerHTML={{ __html: project.additionalInfo }} />
                        </div>
                    )}

                    {project.category === 'UI/UX' && project.palette && (
                        <div className="mt-5">
                            <hr className="mb-4" style={{ borderColor: 'var(--border-subtle)' }} />
                            <PaletteShowcase palette={project.palette} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
