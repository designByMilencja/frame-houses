const ProductSection = ({ title, imageUrl, description }) => (
    <div className="flex flex-col justify-evenly p-[30px]">
        <h4 className="font-bold p-8 text-2xl">{title}</h4>
        <div
            className="w-[90%] h-[400px] bg-cover bg-center mx-auto rounded-[15px]"
            style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
        <div className="flexCenter h-[200px] mt-[40px]">
            <p className="w-[90%] mx-auto sm:w-[100%] p-[20px] leading-5 my-8 text-sm shadow rounded-[15px]">
                {description}
            </p>
        </div>
    </div>
);
export default ProductSection
