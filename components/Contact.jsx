import ContactForm from './ContactForm';

export default function Contact() {
    return (
        <section id="contact" className="mb-5 pt-5">
            <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                <h1>Contact</h1>
                <p className="text-light">Send me a message:</p>
                <ContactForm />
            </div>
        </section>
    );
}
