import { useState } from "react"; // imports usestate hook
import { projects } from "../data"; // imports projects data
import Link from "next/link"; // imports link component
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"; // imports icons

export default function Projects() { // projects component
  const [filter, setFilter] = useState("all"); // filter state

  const filtered = projects.filter( // filters projects based on category
    (p) => filter === "all" || p.category.toLowerCase() === filter.toLowerCase()
  );

  return (
    <section id="projects" className="mb-5 pt-5 position-relative">
      <div className="section-title mb-3">
        <h1 className="mb-0">Projects</h1>
        <p className="text-muted-small mb-0">A selection of work and school projects</p>
      </div>

      <nav className="filter-tabs mb-4">
        {["all", "UI/UX", "AR/VR development", "coding"].map((f) => ( // maps through filter options
          <button
            key={f}
            onClick={() => setFilter(f)} // sets filter on click
            className={`nav-link ${filter === f ? "active" : ""}`} // adds active class if selected
            type="button"
          >
            {f.charAt(0).toUpperCase() + f.slice(1).replace("ui/ux", "UI/UX")}
          </button>
        ))}
      </nav>

      <div className="projects-grid">
        {filtered.map((p) => ( // maps through filtered projects
          <article className="project-card d-flex flex-column text-center" key={p.id}>
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
                  {p.tech.map((t, i) => ( // maps through tech stack
                    <span key={i} className="badge bg-light text-dark me-1 mb-1">
                      {t}
                    </span>
                  ))}
                </div>
              )}

              <div className="mt-auto">
                <Link href={`/projects/${p.id}`} className="btn btn-outline-light btn-sm">
                  Details
                </Link>
                {p.github && (
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light btn-sm ms-2">
                    <FaGithub />
                  </a>
                )}
                {p.link && p.link !== '#' && (
                  <a href={p.link} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light btn-sm ms-2">
                    <FaExternalLinkAlt />
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

