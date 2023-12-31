import '../styles/globals.css'
import Navigation from "@/components/Navigation";
import Footer from "@/components/footer/Footer";

export const metadata = {
    title: 'Space Mobile House - Strona główna',
    description: 'Domki mobilne, Realizacje pod klucz, Wysoka jakość wykonania',
}

export default function RootLayout({children}) {
    return (
        <html lang="pl">
        <body>
        <div className="w-full min-h-screen min-w-[300px] bg-primary overflow-hidden font-mont">
            <header className="h-[100%] mx-auto max-w-[1200px] flexCenter flex-col relative">
                <Navigation/>
            </header>
            <main className="flexCenter flex-col relative">
                {children}
            </main>
            <div className="h-[100%] w-full flexAround flex-col relative">
                <Footer/>
            </div>
        </div>
        </body>
        </html>
    )
}
