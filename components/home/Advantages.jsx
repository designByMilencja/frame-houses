'use client'
import Questions from "@/components/home/Questions";
import {questions1, questions2} from "@/constants";

const Advantages = () => {
    return (
        <section id="advantages">
            <h2 className="m-4 p-4 text-3xl font-extrabold leading-[1.5] sm:leading-[2] text-text sm:text-4xl font-bricolage text-center">
                Zastanawiasz się czy <br className="md:hidden"/>
                <span className="uppercase rounded-[10px] px-3 py-2 text-green">mobilny dom</span>
                <br className="sm:hidden"/> to właściwe rozwiązanie?
            </h2>
            <div className="w-full flex flex-col md:flex-row justify-around items-center p-8 rounded-[30px]">
                <div className="min-w-[200px] max:w-[400px] object-contain">
                    <p className="mb-5 text-2xl text-text max-w-2xl text-center font-bricolage">
                        Sprawdź czy odpowiedź na którekolwiek z tych pytań jest Ci bliska!
                    </p>
                        <Questions questions={questions1}/>
                </div>
                <Questions questions={questions2}/>
            </div>
        </section>
    )
}
export default Advantages
