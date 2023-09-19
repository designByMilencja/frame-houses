'use client'
import Questions from "@/components/home/Questions";
import {advantages, questions1, questions2} from "@/constants";

const Advantages = () => {
    return (
        <section id="advantages">
            <h2 className="text-3xl leading-[1.5] sm:leading-[2] sm:text-4xl text-center m-4 p-4">
                {advantages.h2a} <br className="md:hidden"/>
                <span className="uppercase font-extrabold px-3 py-2 text-contact">{advantages.h2b}</span>
                <br className="sm:hidden"/> {advantages.h2c}
            </h2>
            <div className="w-full flexAround flex-col md:flex-row p-8">
                <div className="min-w-[200px] max:w-[400px] object-contain text-green">
                    <h3 className="text-2xl max-w-2xl text-center b-5">{advantages.h3}</h3>
                    <Questions questions={questions1}/>
                </div>
                <Questions questions={questions2}/>
            </div>
        </section>
    )
}
export default Advantages
