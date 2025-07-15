"use client";
import "./flavor.css";
import { motion } from "motion/react";
import { Flavor } from "../types/Flavor";
import Image from "next/image";

const FlavorShowcase = ({
  flavor,
  index,
}: {
  flavor: Flavor;
  index: number;
}) => {
  return (
    <div className="relative" id={`flavor-${index}`}>
      <section
        className="bg-blue-800 flavor-container sticky top-0"
        style={{
          backgroundImage: `linear-gradient(90deg,${flavor.bannerColor} 0%, ${
            flavor.bannerColorLight ?? flavor.bannerColor
          } 51%, ${flavor.bannerColor} 100%)`,
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: "all", once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="container mx-auto px-5 lg:px-0"
        >
          <p
            className="font-accent pt-6 text-5xl tracking-tight lg:tracking-wide text-white mb-5"
            dangerouslySetInnerHTML={{
              __html: flavor?.flavorDescription || "",
            }}
          />

          <span
            className="font-accent text-2xl"
            style={{ color: flavor.bannerAccentColor }}
          >
            2.55 PHP
          </span>
          <div
            className="flex justify-center items-center mt-10 w-[200px] h-[70px]"
            style={{ border: `2px solid ${flavor.bannerAccentColor}` }}
          >
            <span
              className="font-accent text-2xl"
              style={{ color: flavor.bannerAccentColor }}
            >
              ADD TO BOX
            </span>
          </div>
        </motion.div>
      </section>

      <section className="snap-start scroll-snap-stop bg-white relative">
        <div className="container mx-auto px-5 lg:px-0 pb-20 lg:pb-0">
          <div
            className={`text-[8rem] lg:text-[18rem] font-accent font-semibold tracking-tight lg:tracking-wide lg:left-0`}
            style={{ color: flavor.titleColor }}
          >
            <h3>{flavor.name.split(" ")[0]}</h3>
            <h3 className="-mt-20 lg:-mt-40">{flavor.name.split(" ")[1]}</h3>
          </div>

          <div className="pt-10 lg:pt-0 flex flex-col lg:flex-row  mx-auto lg:left-0 gap-15 lg:gap-45 details-container lg:h-[100svh] lg:items-center lg:justify-center">
            <div className="flex flex-col basis-1/2 gap-10 lg:gap-20">
              <div>
                <h3 className="font-accent text-3xl lg:text-4xl font-bold pb-2 lg:pb-6">
                  SALTY FRED. RAISE THE BAR
                </h3>
                <p className="text-xl/8 font-serif tracking-tighter font-semibold">
                  Your taste buds will be thanking you the second the dark
                  chocolate hits your tongue. And when the salted almonds set in
                  - they will simply never be the same again
                </p>
              </div>

              <div>
                <h3
                  className="font-accent text-3xl lg:text-4xl font-bold tracking-tight lg:tracking-wide pb-2 lg:pb-6"
                  dangerouslySetInnerHTML={{
                    __html: "SWEET & SALTY = <br /> YIN AND YANG",
                  }}
                />
                <p className="text-xl/8 font-serif font-semibold">
                  Dark chocolate 60% with salted almonds, known for their superb
                  quality. The salty hint and the fruity chocolate truly make
                  this the best of both worlds.
                </p>
              </div>
            </div>

            <div className="basis-1/2">
              <h3
                className="font-accent text-3xl lg:text-4xl font-bold tracking-tight lg:tracking-wide pb-2 lg:pb-6"
                dangerouslySetInnerHTML={{
                  __html:
                    "40 G. OF DARK <br /> AND WHITE CHOCOLATE",
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

        {/* <div className="absolute top-0">
          <Image
            width={4080}
            height={3613}
            alt=""
            src="/choco-banner.png"
            className="hidden lg:block"
          />
          <Image
            width={2259}
            height={4080}
            alt=""
            src="/choco-banner-mobile.png"
            className="block lg:hidden"
          />
        </div> */}
      </section>
    </div>
  );
};

export default FlavorShowcase;
