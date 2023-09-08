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
        <div className={`w-full min-h-screen min-w-[300px] bg-primary overflow-hidden font-mont`}>
            <div className={`h-[100%] mx-auto max-w-[1200px] flex flex-col justify-center items-center relative`}>
                <Navigation/>
            </div>
            <main className="flex flex-col justify-center items-center relative">
                {children}
            </main>
            <div className={`h-[100%] w-full flex-col justify-center items-around relative`}>
                <Contact/>
            </div>
        </div>
        </body>
        </html>
    )
}
