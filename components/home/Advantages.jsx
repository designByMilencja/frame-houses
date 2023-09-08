'use client'
import Questions from "@/components/home/Questions";
import {questions1, questions2} from "@/constants";

const Advantages = () => {
    return (
        <section id="advantages">
            <h2 className="text-3xl leading-[1.5] sm:leading-[2] sm:text-4xl text-center m-4 p-4">
                Zastanawiasz się czy <br className="md:hidden"/>
                <span className="uppercase font-extrabold px-3 py-2 text-green">mobilny dom</span>
                <br className="sm:hidden"/> to właściwe rozwiązanie?
            </h2>
            <div className="w-full flex flex-col md:flex-row justify-around items-center p-8">
                <div className="min-w-[200px] max:w-[400px] object-contain text-green">
                    <p className="text-2xl max-w-2xl text-center b-5">
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
