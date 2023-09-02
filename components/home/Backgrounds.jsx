'use client'
import {backgroundsSmall} from "@/constants";

const Backgrounds = ({backgroundIndex, handleBackgroundChange}) => {
  return (<div className="absolute h-[80%] flex items-end hidden sm:block top-[70%] z-20">
      <div className="flex">
        {backgroundsSmall.map((bg, index) => (
            <div key={index} className="mx-2 flex bg-primary">
            <div
                className={`w-[150px] h-[150px] bg-cover bg-center mt-2 mb-3 mx-3 cursor-pointer box-with-shadow
                                    ${backgroundIndex === index ? 'border-4 border-dark' : ''}`}
                style={{ backgroundImage: `url("${bg}")` }}
                onClick={() => handleBackgroundChange(index)}
            ></div>  </div>
        ))}
      </div>
  </div>)
}
export default Backgrounds
