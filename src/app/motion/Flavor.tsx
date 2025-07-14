import "./flavor.css";

const Flavor = () => {
  return (
    <div className="relative">
      <section className="bg-blue-800 flavor-container sticky top-0">
        <div className="container mx-auto px-5 lg:px-0">
          <p
            className="font-accent pt-6 text-5xl tracking-tight lg:tracking-wide text-white mb-5"
            dangerouslySetInnerHTML={{
              __html:
                "DARK CHOCOLATE <br /> 60% WITH SALTED <br /> ALMONDS <br />",
            }}
          />

          <span className="font-accent text-2xl" style={{ color: "#00a6f4" }}>
            2.55 PHP
          </span>
        </div>
      </section>

      <section className="sticky top-0 snap-start scroll-snap-stop h-[200vh] bg-white">
        <div className="container mx-auto px-5 lg:px-0">
          <div
            className={`text-[10rem] lg:text-[18rem] font-accent font-semibold tracking-tight lg:tracking-wide lg:left-0`}
            style={{ color: "#1348e5" }}
          >
            <h3>SALTY</h3>
            <h3 className="-mt-20">FRED</h3>
          </div>

          <div
            className="flex flex-col lg:flex-row justify-center mx-auto lg:left-0 gap-15 lg:gap-45 details-container pt-10"
          >
            <div className="flex flex-col basis-1/2 gap-20">
              <div>
                <h3 className="font-accent text-4xl font-bold pb-6">
                  SALTY FRED. RAISE THE BAR
                </h3>
                <p className="text-xl/8 font-serif tracking-tighter font-semibold">
                  Your taste buds will be thanking you the second the dark chocolate hits your tongue. And when the salted almonds set in - they will simply never be the same again
                </p>
              </div>

              <div>
                <h3
                  className="font-accent text-4xl font-bold tracking-tight lg:tracking-wide pb-6"
                  dangerouslySetInnerHTML={{
                    __html: "SWEET & SALTY = <br /> YIN AND YANG",
                  }}
                />
                <p className="text-xl/8 font-serif font-semibold">
                  Dark chocolate 60% with salted almonds, known for their superb quality. The salty hint and the fruity chocolate truly make this the best of both worlds.
                </p>
              </div>
            </div>

            <div className="basis-1/2">
              <h3
                className="font-accent text-4xl font-bold tracking-tight lg:tracking-wide pb-6"
                dangerouslySetInnerHTML={{
                  __html: "40 G. OF DARK <br /> CHOCOLATE 60% <br /> WITH SALTED ALMONDS",
                }}
              />
              <div className="flex flex-col gap-4">
                <div className="flex">
                  <div className="basis-3/4">
                    <span className="font-serif font-semibold">Energy</span>
                    <p className="font-accent font-bold text-xl">
                      2330 KJ / 567 KCAL
                    </p>
                  </div>

                  <div className="basis-1/4">
                    <span className="font-serif font-semibold">Fibre</span>
                    <p className="font-accent font-bold text-xl">9.2 G</p>
                  </div>
                </div>

                <div className="flex">
                  <div className="basis-3/4">
                    <span className="font-serif font-semibold">
                      Saturated fat
                    </span>
                    <p className="font-accent font-bold text-xl">40 G / 22 G</p>
                  </div>

                  <div className="basis-1/4">
                    <span className="font-serif font-semibold">Protein</span>
                    <p className="font-accent font-bold text-xl">7.2 G</p>
                  </div>
                </div>

                <div className="flex">
                  <div className="basis-3/4">
                    <span className="font-serif font-semibold">
                      Carbohydrates / of which sugar
                    </span>
                    <p className="font-accent font-bold text-xl">39 G / 34 G</p>
                  </div>

                  <div className="basis-1/4">
                    <span className="font-serif font-semibold">Salt</span>
                    <p className="font-accent font-bold text-xl">0.24 G</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Flavor;
