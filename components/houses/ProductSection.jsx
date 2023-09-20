const ProductSection = ({ title, imageUrl, description }) => (
    <div className="flex flex-col justify-evenly items-center px-[50px]">
        <h4 className="font-bold p-6 text-2xl">{title}</h4>
        <div
            className="w-[90%] h-[300px] bg-cover bg-center mx-auto rounded-[15px]"
            style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
        <div className="flexCenter shadow my-[20px] rounded-[15px] m-[20px]">
            <p className="w-[90%] mx-auto sm:w-[100%] p-6 leading-5 text-sm">
                {description}
            </p>
        </div>
    </div>
);
export default ProductSection
