
const HeroHouses = () => {
    return (<>
            <div className="absolute inset-0 rounded-[20px] overflow-hidden z-[1]">
                <video src="/assets/video/house.mp4" className="absolute p-3 w-full h-full object-cover transition-all duration-2000 rounded-[20px]" autoPlay muted></video>
            </div>
            <div className="absolute inset-0 bg-black opacity-30 rounded-[20px] z-[2]"></div>
        </>
    )
}
export default HeroHouses
