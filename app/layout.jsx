import '../styles/globals.css'
import Navigation from "@/components/Navigation";
import Contact from "@/components/contact/Contact";

export const metadata = {
    title: 'Space Mobile House - Strona główna',
    description: 'Domki mobilne, Realizacje pod klucz, Wysoka jakość wykonania',
}

export default function RootLayout({children}) {
    return (
        <html lang="pl">
        <body>
        <div className={`bg-primary w-full min-h-screen min-w-[300px] overflow-hidden`}>
            <div className={`mx-auto max-w-[1200px] flex flex-col justify-center items-center h-[100%] relative`}>
                <Navigation/>
            </div>
            <main className="relative flex justify-center items-center flex-col">
                {children}
            </main>
            <div className={`w-full flex-col justify-center items-around h-[100%] relative`}>
                <Contact/>
            </div>
        </div>
        </body>
        </html>
    )
}
