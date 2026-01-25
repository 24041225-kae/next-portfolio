export default function Contact() {
    return (
        <section id="contact" className="mb-5 pt-5">
            <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                <h1>Contact</h1>
                <p className="text-light">Send me a message:</p>
                {/* Note: In Next.js App Router, form submissions usually need Server Actions or API routes. 
            For now, we keep standard POST to /contact (which would need an API route).
            Or we can use standard form submission if we create an API route. */}
                <form action="/api/contact" method="POST" className="mt-3">
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input name="name" className="form-control" required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input name="email" type="email" className="form-control" required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Message</label>
                        <textarea name="message" rows="4" className="form-control" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Send</button>
                </form>
            </div>
        </section>
    );
}
