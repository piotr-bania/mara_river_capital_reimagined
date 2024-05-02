import Navbar from './components/layout/Navbar'
import './globals.scss'

export const metadata = {
    title: "Mara River Capital Reimagined: An Interactive 3D Web Experience",
    description: "Experience the innovative redesign of the Mara River Capital website, now with immersive 3D features. This project showcases a dynamic, interactive representation of Mara River's commitment to asymmetric investment strategies, highlighting their detailed market research and advanced risk management in a visually engaging format. Perfect for financial professionals and web design aficionados alike.",
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body suppressHydrationWarning>
                <Navbar />
                {children}
            </body>
        </html>
    )
}
