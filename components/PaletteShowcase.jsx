"use client";

export default function PaletteShowcase({ palette }) {
    if (!palette || palette.length === 0) return null;

    const isMulti = palette[0].colors !== undefined;

    if (isMulti) {
        return (
            <div className="card p-4 mb-4 border-0 bg-transparent">
                <h3 className="mb-3 text-light">Colour Palettes</h3>
                {palette.map((p, idx) => (
                    <div key={idx} className="mb-4">
                        <h5 className="text-muted-small mb-3" style={{ letterSpacing: '0.1em', textTransform: 'uppercase' }}>{p.name}</h5>
                        <div className="d-flex flex-wrap gap-3">
                            {p.colors.map((c, cIdx) => (
                                <ColorSwatch key={cIdx} color={c} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        )
    }

    return (
        <div className="card p-4 mb-4 border-0 bg-transparent">
            <h3 className="mb-3 text-light">Colour Palette</h3>
            <div className="d-flex flex-wrap gap-3">
                {palette.map((c, index) => (
                    <ColorSwatch key={index} color={c} />
                ))}
            </div>
        </div>
    );
}

function ColorSwatch({ color }) {
    return (
        <div className="text-center">
            <div
                className="rounded-circle mb-2 border border-secondary"
                style={{
                    width: "60px",
                    height: "60px",
                    backgroundColor: color.code,
                    boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
                }}
                title={color.code}
            ></div>
            <small className="text-light opacity-50" style={{ fontSize: "0.7rem", fontFamily: 'monospace' }}>
                {color.code}
            </small>
        </div>
    );
}
