import {pluses} from "@/constants";

const Plus = () => {
  return (
      <div>
          <h2 className="py-7 mt-8 font-bold text-2xl text-green ">
              Zalety domów mobilnych i modułowych
          </h2>
          <ul className="flex flex-wrap justify-around items-center px-[10px] mb-[60px]">
              {pluses.map((pluse, index)=>
                  (

                      <li key={index} className="flex p-2 md:m-4 flex-col justify-around items-center flex-wrap">
                          <div className="flex justify-center items-center p-1">
                          <img src='/assets/icons/checkmark-done-outline.svg' alt="checkmark icon"
                               className="w-[38px] p-1"/>
                          <h4 className="py-5 text-extrabold text-lg text-dark">{pluse.title}</h4>
                          </div>
                          <p className="px-3 py-8 max-w-[350px] min-w-[320px] bg-gradient-to-b from-light to-dark shadow  rounded-[20px] text-primary">{pluse.desc}</p>
                      </li>
                  ))}
          </ul>
      </div>
  )
}
export default Plus