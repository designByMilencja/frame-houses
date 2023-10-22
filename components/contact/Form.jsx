'use client'
import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import {formLabel} from "@/constants";


const Form = () => {
    const form = useRef();
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        surname: "",
        email: "",
        message: "",
    });
    const [privacyPolicyAccepted, setPrivacyPolicyAccepted] = useState(false);

    const handlePrivacyPolicyChange = (e) => {
        const { checked } = e.target;
        setPrivacyPolicyAccepted(checked);
    };


    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!privacyPolicyAccepted) {
            return;
        }
        emailjs.sendForm( process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, process.env.NEXT_PUBLIC_PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                setFormData({
                    name: "",
                    surname: "",
                    email: "",
                    message: "",
                });
                setSuccess(true)
            }, (error) => {
                console.log(error.text);
                setError(true)
            });
    };

    return (
        <form ref={form} onSubmit={handleSubmit} className="bg-primary w-full h-[100%] font-bold flexCenter flex-col">
            <div className="w-full flexBetween flex-col m-1">
                <label htmlFor="name" className="p-3">{formLabel.name}</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full p-3 bg-green rounded-[15px] text-primary text-xs"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="w-full flexBetween flex-col m-1">
                <label htmlFor="surname" className="p-3">{formLabel.surname}</label>
                <input
                    type="text"
                    id="surname"
                    name="surname"
                    className="w-full p-3 my-1 bg-green rounded-[15px] text-primary text-xs"
                    value={formData.surname}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="w-full flexBetween flex-col m-1">
                <label htmlFor="email" className="p-3">{formLabel.email}</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full p-3 my-1 bg-green rounded-[15px] text-primary text-xs"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="w-full flexBetween flex-col m-1">
                <label htmlFor="message" className="p-3">{formLabel.message}</label>
                <textarea
                    id="message"
                    name="message"
                    className="w-full p-3 my-1 bg-green rounded-[15px] text-primary text-xs"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="w-full flex mt-3">
                <input
                    type="checkbox"
                    id="privacyPolicy"
                    name="privacyPolicy"
                    checked={privacyPolicyAccepted}
                    onChange={handlePrivacyPolicyChange}
                    required
                />
                <label htmlFor="privacyPolicy" className="p-3 font-normal text-xs text-center">
                    Oświadczam, że zapoznałem/am się z polityką prywatności -
                    <a href="/privacy-policy" className="font-bold hover:text-contact"> Polityka prywatności</a>
                </label>
            </div>
            <button type="submit" className="rounded-[15px] px-[40px] py-2 mt-6 box-with-darkShadow bg-contact">{formLabel.button}</button>
            {success ? (<p className="text-center pt-5">{formLabel.success}</p>) : null}
            {error ? (<p className="text-center pt-5">{formLabel.error}</p>) : null}
        </form>
    );

}
export default Form

