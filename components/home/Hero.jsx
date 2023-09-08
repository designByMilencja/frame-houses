'use client'
import {backgrounds} from "@/constants";

const Hero = ({backgroundIndex}) => {
    return (<>
            <div
                className="shadow absolute h-[97%] w-[97%] bg-cover bg-center rounded-[15px] transition-all duration-2000"
                style={{backgroundImage: `url("${backgrounds[backgroundIndex]}")`}}>
            </div>
            <div className="absolute h-[98%] w-[98%] bg-black opacity-30 rounded-[15px] z-[1]"></div>
        </>
    )
}
export default Hero
