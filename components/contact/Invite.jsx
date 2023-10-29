import React from "react";
import {invite} from "@/constants";
import Image from "next/image";

const Invite = () => {
    return (
        <section id="invite" className="w-full my-[50px]">
            <div className="flexAround flex-col sm:flex-row">
                <div className="flexCenter flex-col my-8">
                    <h2 className="text-3xl sm:text-2xl p-8 sm:p-3 text-green font-bold leading-10">{invite.h2}</h2>
                    <p className="px-7 py-4 w-full max-w-[600px]">{invite.p}</p>
                    <div className="mb-8 p-4">
                        <button type="submit"
                                className="rounded-[15px] px-[40px] py-2 mt-3 box-with-darkShadow bg-contact font-bold hover:text-primary">{invite.button}
                        </button>
                    </div>
                </div>
                <div className="bg-green flexCenter rounded-[15px] sm:mr-1 ">
                    <Image src="/assets/images/arrow.jpg" alt="arrow showing form section" width={300} height={200} className="xs:w-[400px] md:w-[500px] rounded-[15px] p-5"/>
                </div>
            </div>
        </section>
    )
}
export default Invite
