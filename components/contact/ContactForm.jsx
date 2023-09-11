import Form from "@/components/contact/Form";

const ContactForm = () => {
    return (
        <section id="form" className="w-full mb-[100px] bg-green my-[50px] rounded-[15px]">
            <div className="mx-auto max-w-[1200px] w-[100%] relative flex flex-col sm:flex-row items-center">
                <div>
                <h3 className="text-primary text-center min-w-[300px] max-w-[500px] p-8">Prześlij nam wiadomość a odpowiemy na nią najszybciej
                    jak to możliwe:</h3>
                </div>
                <div className="bg-primary p-8 w-[300px] ss:w-[400px] box-with-darkShadow max-w-[1000px] rounded-[15px] mx-auto my-[20px] sm:my-[-50px] ">
                    <Form/>
                </div>
            </div>
        </section>
    )
}
export default ContactForm
