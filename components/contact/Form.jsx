'use client'
import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';


const Form = () => {
    const form = useRef();
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        surname: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
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
            <div className="w-full flex flex-col justify-between items-center m-1">
                <label htmlFor="name" className="p-3">Imię:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    className=" w-full p-3 bg-green rounded-[15px] text-primary text-xs"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="w-full flex flex-col justify-between items-center m-1">
                <label htmlFor="surname" className="p-3">Nazwisko:</label>
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
            <div className="w-full flex flex-col justify-between items-center m-1">
                <label htmlFor="email" className="p-3">Email:</label>
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
            <div className="w-full flex flex-col justify-between items-center m-1">
                <label htmlFor="email" className="p-3">Wiadomość:</label>
                <textarea
                    id="message"
                    name="message"
                    className="w-full p-3 my-1 bg-green rounded-[15px] text-primary text-xs"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
            </div>

            <button type="submit" className="rounded-[15px] px-[40px] py-2 mt-6 box-with-darkShadow bg-contact">Wyślij</button>
            {success ? (<p className="text-center pt-5">Twoja wiadomość została wysłana. Dziękujemy za kontakt!</p>) : null}
            {error ? (<p className="text-center pt-5">Przepraszamy, Twoja wiadomość nie została wysłana. Spróbuj ponownie później!</p>) : null}
        </form>
    );

}
export default Form

