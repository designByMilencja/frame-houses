const HouseGrid = ({houses}) => {
    return (
        <div id="models" className="grid md:grid-cols-2 grid-cols-1 gap-6 mt-[100px]">
            {houses.map((house) => (
                <div key={house.id} className="box-with-darkShadow bg-gray-100 p-[30px] sm:p-[10px] rounded-[15px]">
                    <h2 className="text-xl p-4 font-bold">{house.title}</h2>
                    <div className="w-[90%] h-[30vh] ss:h-[40vh] bg-cover bg-center mx-auto rounded-[15px] shadow" style={{backgroundImage: `url(${house.src})`}}></div>
                    <p className="p-4">Powierzchnia: <span className="font-bold">{house.meters}</span> Wymiary: <span className="font-bold">{house.size}</span></p>
                    <p className="w-[90%] p-4 leading-5 text-center text-green text-sm mx-auto ">{house.desc}</p>
                </div>
            ))}
        </div>
    );
}
export default HouseGrid
