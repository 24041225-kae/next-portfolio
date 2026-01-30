import { hobbies } from "../../../data";
import Link from "next/link";

export default async function HobbyPage({ params }) {
    const { slug } = await params;
    const hobby = hobbies.find((h) => h.id === slug);
    console.log("Slug:", slug, "Hobby Found:", hobby?.name);

    if (!hobby) {
        return (
            <div className="container py-5 text-center" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h1 className="mb-4">Hobby Not Found</h1>
                <Link href="/#about" className="btn btn-primary">Back to About Me</Link>
            </div>
        );
    }

    return (
        <main className="container py-5" style={{ minHeight: '100vh', paddingTop: '100px' }}>
            <div className="mb-4">
                <Link href="/#about" className="btn btn-ghost">
                    &larr; Back to About Me
                </Link>
            </div>

            <header className="mb-5 text-center">
                <h1 className="display-4 fw-bold mb-3" style={{ color: 'var(--accent)' }}>{hobby.name}</h1>
                <div className="mx-auto" style={{ height: '4px', width: '60px', background: 'var(--accent)', borderRadius: '2px' }}></div>
            </header>

            <div className="row justify-content-center mb-5">
                <div className="col-lg-8 text-center">
                    <p className="lead text-light opacity-75">{hobby.description}</p>
                </div>
            </div>

            {hobby.images && hobby.images.length > 0 ? (
                <div className="row g-4">
                    {hobby.images.map((img, index) => (
                        <div className="col-md-6 col-lg-4" key={index}>
                            <div className="card h-100 border-0 shadow-sm overflow-hidden" style={{ background: 'var(--bg-elevated)' }}>
                                <div className="card-img-wrapper" style={{ height: '300px', overflow: 'hidden' }}>
                                    <img
                                        src={img.src}
                                        alt={img.caption || hobby.name}
                                        className="w-100 h-100"
                                        style={{ objectFit: 'cover', transition: 'transform 0.3s ease' }}
                                    />
                                </div>
                                {img.caption && (
                                    <div className="card-body">
                                        <p className="card-text text-muted text-center fst-italic">{img.caption}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-5 border rounded-3" style={{ borderColor: 'var(--border-subtle)', background: 'rgba(255,255,255,0.02)' }}>
                    <p className="text-muted mb-0">No images added for this hobby yet.</p>
                </div>
            )}
        </main>
    );
}
