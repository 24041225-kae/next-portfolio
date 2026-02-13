import 'bootstrap/dist/css/bootstrap.min.css'; // imports bootstrap css
import './globals.css'; // imports global css
import Script from 'next/script';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // imports script component

export const metadata = {
    title: 'Portfolio | Kaelynn Fong',
    description: 'Digital Design & Development Portfolio',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Bitcount+Prop+Single:wght@100..900&family=Exo+2:ital,wght@0,100..900;1,100..900&family=Inter:wght@100..900&display=swap" rel="stylesheet" />
            </head>
            <body>
                {children}
                <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" />
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                />
            </body>
        </html>
    )
}
