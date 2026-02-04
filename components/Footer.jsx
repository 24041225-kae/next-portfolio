export default function Footer() { // footer component
    return (
        <footer className="mt-5">
            <div className="container text-center py-4">
                <p className="mb-1">&copy; {new Date().getFullYear()} Kaelynn Fong</p>
                <p className="small text-light mb-2">Student Portfolio</p>
                {/* social media links */}
                <div>
                    <a href="https://www.linkedin.com/in/kaelynnfong" target="_blank" rel="noreferrer" className="text-light me-3 text-decoration-none">
                        <i className="fab fa-linkedin fa-lg"></i>
                    </a>
                    <a href="https://github.com/24041225-kae" target="_blank" rel="noreferrer" className="text-light me-3 text-decoration-none">
                        <i className="fab fa-github fa-lg"></i>
                    </a>
                    <a href="mailto:kaelynn.fong@gmail.com" className="text-light me-3 text-decoration-none">
                        <i className="fa fa-envelope fa-lg"></i>
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=6592355164" target="_blank" rel="noreferrer" className="text-light text-decoration-none">
                        <i className="fab fa-whatsapp fa-lg"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
}
