"use client";
import { useState, useEffect } from "react";
import { projects } from "../data";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from "./EmblaCarouselArrowButtons";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const filtered = projects.filter(
    (p) => filter === "all" || p.category.toLowerCase() === filter
  );

  useEffect(() => {
    if (emblaApi) emblaApi.scrollTo(0);
  }, [filter, emblaApi]);

  return (
    <section id="projects" className="mb-5 pt-5 position-relative">
      <div className="section-title mb-3">
        <h1 className="mb-0">Projects</h1>
        <p className="text-muted-small mb-0">A selection of work and school projects</p>
      </div>

      <nav className="filter-tabs mb-4">
        {["all", "ui/ux", "unity", "coding"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`nav-link ${filter === f ? "active" : ""}`}
          >
            {f.charAt(0).toUpperCase() + f.slice(1).replace("ui/ux", "UI/UX")}
          </button>
        ))}
      </nav>

      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {filtered.map((p) => (
              <div className="embla__slide" key={p.id}>
                <article className="project-card d-flex flex-column text-center">
                  {p.image && (
                    <div className="img-box mb-3">
                      <img
                        src={Array.isArray(p.image) ? p.image[0] : p.image}
                        className="project-img"
                        alt={p.title}
                      />
                    </div>
                  )}

                  <div className="p-3 d-flex flex-column align-items-center flex-grow-1">
                    <h3 className="mb-2">{p.title}</h3>

                    {p.tech?.length && (
                      <div className="mb-3">
                        {p.tech.map((t, i) => (
                          <span key={i} className="badge bg-light text-dark me-1 mb-1">
                            {t}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="mt-auto">
                      <Link href={`/projects/${p.id}`} className="btn btn-outline-light">
                        Details
                      </Link>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        {/* ----------  controls  ---------- */}
        <div className="embla__controls">
          <div className="embla__buttons">
            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
            <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
          </div>

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
        </div>
      </div>
    </section>
  );
}

