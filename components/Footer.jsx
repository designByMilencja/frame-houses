'use client'
import {useEffect, useState} from "react";

const Footer = () => {
    const [year, setYear] = useState(0)
    useEffect(() => {
        const handleCurrentYear = new Date().getFullYear();
        setYear(handleCurrentYear)
    }, [])
    return (
        <div className="flex flex-row rounded-[20px] p-3">
            <p className="w-full text-black text-center text-xs"> <span>&copy;</span> Website: <a href="https://github.com/designByMilencja"  className="text-gradient ml-2"> DesignByMilencja </a>{year}</p>
        </div>
    )
}
export default Footer