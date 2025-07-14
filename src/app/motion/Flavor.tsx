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
        <div className="container mx-auto">
            <div
            className={`text-[10rem] lg:text-[18rem] font-accent font-semibold tracking-tight lg:tracking-wide lg:left-0 px-5`}
            style={{ color: "#1348e5" }}
            >
            <h3>SALTY</h3>
            <h3 className="-mt-20">
                FRED
            </h3>
            </div>
        </div>


      </section>
    </div>
  );
};

export default Flavor;
