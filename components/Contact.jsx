import ContactForm from './ContactForm'; // imports contact form component

export default function Contact() { // contact component
    return (
        <section id="contact" className="mb-5 pt-5">
            <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                <h1>Contact</h1>
                <p className="text-light">Send me a message:</p>
                <ContactForm /> {/* displays contact form */}
            </div>
        </section>
    );
}
