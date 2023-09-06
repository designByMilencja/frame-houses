'use client'
import {useState} from "react";

const Form = () => {
        const [formData, setFormData] = useState({
            name: "",
            surname: "",
            email: "",
            message: "",
        });

        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData({
                ...formData,
                [name]: value,
            });
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            // Tutaj możesz dodać logikę obsługi wysłania formularza, na przykład wysłanie danych na serwer lub wyświetlenie ich w konsoli.
            console.log(formData);
        };

        return (
            <form onSubmit={handleSubmit} className="bg-lime-400 w-full max-w-[1200px]">
                <div>
                    <label htmlFor="name">Imię:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="message">Wiadomość:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <button type="submit" className="bg-dark">Wyślij</button>
            </form>
        );

}
export default Form
