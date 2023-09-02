const Products = () => {
  return (
      <section id="products" className="flex">
          <div className="circle m-3 p-5 bg-gradient-to-b from-primary to-transparent">
              <div className="h-[100%] flex flex-col justify-evenly items-center">
                  <h2 className="text-2xl text-green p-3 mb-4 font-bold font-bricolage tracking-wider"> Nasze Produkty</h2>
                  <div className="shadow p-5 circle text-text text-center bg-primary">
                      <h3 className="p-2 font-bold">
                          Oferujemy szeroką gamę domków mobilnych i modułowych, które dostosowują się do
                          różnorodnych potrzeb klientów</h3>
                      <ul>
                          <li>
                              <h4 className="font-bold p-4"> Domki Mobilne:</h4>
                              <div className="flex flex-col ss:flex-row justify-evenly items-center">
                                  <p className="w-full ss:w-1/2 m-3">
                                      Nasze klasyczne domki mobilne łączą w sobie minimalistyczny design
                                      z
                                      funkcjonalnością. Są one idealnym rozwiązaniem dla osób, które pragną
                                      podróżować,
                                      jednocześnie
                                      nie rezygnując z komfortu własnego mieszkania. Nasze klasyczne domki mobilne
                                      łączą w sobie minimalistyczny design
                                      z
                                      funkcjonalnością. Są one idealnym rozwiązaniem dla osób, które pragną
                                      podróżować,
                                      jednocześnie
                                      nie rezygnując z komfortu własnego mieszkania.
                                  </p>
                                  <img alt="house image" src="/assets/images/houses.jpg" className="w-[300px] rounded-[30px] p-2"/>
                              </div>
                          </li>
                          <li>
                              <h4 className="font-bold p-4"> Domki modułowe:</h4>
                              <div className="flex flex-col ss:flex-row justify-around items-center">
                                  <img alt="house image" src="/assets/images/home-module.jpg" className="w-[300px] rounded-[30px] p-2"/>
                                  <p className="w-full ss:w-1/2 m-3">
                                      Specjalnie zaprojektowane domki modułowe oferują
                                      przestronne wnętrza, idealne dla rodzin. Wyposażone w różnego rodzaju
                                      udogodnienia,
                                      zapewniają
                                      przytulne miejsce do spędzania czasu razem. Specjalnie zaprojektowane domki
                                      modułowe oferują
                                      przestronne wnętrza, idealne dla rodzin. Wyposażone w różnego rodzaju
                                      udogodnienia,
                                      zapewniają
                                      przytulne miejsce do spędzania czasu razem.
                                  </p>
                              </div>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </section>
  )
}
export default Products
