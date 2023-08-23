const About = () => {
    return (
        <section className="w-full min-h-screen">
            <div className="relative bg-gradient-to-b from-green to-transparent custom-shape px-3">
                <video src="/assets/video/home.mp4" autoPlay loop muted
                       className="custom-shape-video"></video>
            </div>
            <div>
                <p>Space Mobile House to innowacyjna firma specjalizująca się w projektowaniu, produkcji i dostarczaniu
                    wysokiej jakości domków mobilnych. Nasza firma łączy funkcjonalność,
                    estetykę i mobilność, aby stworzyć komfortowe przestrzenie mieszkalne dostosowane do potrzeb
                    współczesnego stylu życia.</p>
            </div>
        </section>
    )
}
export default About
