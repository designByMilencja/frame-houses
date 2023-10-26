'use client'
import {useEffect, useState} from "react";

const Footer = () => {
    const [year, setYear] = useState(0)
    useEffect(() => {
        const handleCurrentYear = new Date().getFullYear();
        setYear(handleCurrentYear)
    }, [])
    return (
        <footer className="flex flex-row p-3 bg-primary w-full">
            <p className="w-full text-green text-center text-xs"> <span>&copy;</span> Website: <a href="https://github.com/designByMilencja"  className="text-gradient ml-2 hover:text-contact"> DesignByMilencja </a>{year}</p>
        </footer>
    )
}
export default Footer
