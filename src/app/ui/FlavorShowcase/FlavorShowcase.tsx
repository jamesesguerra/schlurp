import React, { useRef } from 'react'
import styles from '@/app/ui/FlavorShowcase/flavor-showcase.module.css';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';
import Image from 'next/image';
import clsx from 'clsx';

const FlavorShowcase = ({ isFirst = false }) => {
  const flavorBanner = useRef(null);
  const flavorBannerCopy = useRef(null);
  const detailsContainer = useRef(null);
  const flavorFirstName = useRef(null);
  const flavorSecondName = useRef(null);
  const ingredientsImage = useRef(null);
  const flavorDetails = useRef(null);
  const container = useRef(null);

  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.to(flavorBannerCopy.current, {
        scrollTrigger: {
            trigger: flavorBannerCopy.current,
            start: "top-=19 top",
            pinSpacing: false,
            pin: flavorBannerCopy.current,
            scrub: true,
        },
    });

    gsap.to(detailsContainer.current, {
      scrollTrigger: {
        trigger: detailsContainer.current,
        start: "top 100%",
        scrub: true,
      },
      y: -290
    });

    gsap.to(flavorFirstName.current,
      {
        scrollTrigger: {
          trigger: flavorFirstName.current,
          scrub: true,
          start: "top-=400 80%",
        },
        y: -400,
        duration: 1.1
      });

    gsap.to(flavorSecondName.current,
      {
        scrollTrigger: {
          trigger: flavorSecondName.current,
          scrub: true,
          start: "top-=420 80%",
        },
        y: -550,
        duration: 1.2
      });

    gsap.to(ingredientsImage.current, {
      scrollTrigger: {
        trigger: ingredientsImage.current,
        scrub: true,
        start: "top-=300 80%",
        end: "+=1700px",
      },
      y: -1000,
      duration: 0.1,
    })

    gsap.to(flavorDetails.current,
      {
        scrollTrigger: {
          trigger: flavorDetails.current,
          scrub: true,
          start: "top-=450 80%",
          end: "+=500px",
        },
        y: -350,
        duration: 1.2
      });

    gsap.fromTo(flavorBannerCopy.current, 
      {
        opacity: 0,
        marginTop: "-75px"
      }, 
      {
        opacity: 1,
        marginTop: "0px",
        duration: 0.6,
        scrollTrigger: {
          trigger: flavorBannerCopy.current,
          start: "top-=100 20%",
          end: "+=300px",
        }
      });

}, { scope: container });

  return (
    <div
      className={clsx('relative', { [styles.mt200]: !isFirst })}
      ref={container}
    >
      <section
        className={`${styles.containerSmall} ${styles.blueGradient} py-5 border border-solid relative`}
        ref={flavorBanner}
      >
        <div className="left-20 absolute z-10 opacity-0" ref={flavorBannerCopy}>
          <p className="font-accent text-5xl tracking-wide text-white mb-5">
            DARK CHOCOLATE <br />
            60% WITH SALTED
            <br />
            ALMONDS <br />
          </p>

          <span className="font-accent text-sky-500 text-2xl">2.55 PHP</span>

          <div
            className={`${styles.addBtn} flex justify-center items-center mt-10`}
          >
            <span className="font-accent text-sky-500 text-2xl">
              ADD TO BOX
            </span>
          </div>
        </div>
      </section>

      <div
        className={`bg-white z-40 absolute right-0 left-0 overflow-hidden`}
        ref={detailsContainer}
      >
        <div className="container mx-auto" style={{ marginTop: "400px" }}>
          <div
            className={`${styles.text64xl} font-accent text-blue-700 font-semibold tracking-wide`}
          >
            <h3 ref={flavorFirstName}>SALTY</h3>
            <h3 ref={flavorSecondName} className="-mt-40">
              FRED
            </h3>
          </div>

          <div
            className={`flex ${styles.detailContainer} justify-center mx-auto gap-50`}
            ref={flavorDetails}
          >
            <div className="flex flex-col basis-1/2 gap-20">
              <div>
                <h3 className="font-accent text-4xl font-bold tracking-wide pb-6">
                  SALTY FRED. RAISE THE BAR
                </h3>
                <p className="text-xl/8 font-serif font-semibold">
                  Your taste buds will be thanking you the second the dark
                  chocolate hits your tongue. And when the salted almonds set
                  .in - they will simply never be the same again
                </p>
              </div>

              <div>
                <h3 className="font-accent text-4xl font-bold tracking-wide pb-6">
                  SWEET & SALTY = <br /> YIN AND YANG.
                </h3>
                <p className="text-xl/8 font-serif font-semibold">
                  Dark chocolate 60% with salted almonds, known for their superb
                  quality. The salty hint and the fruity chocolate truly make
                  this the best of both worlds.
                </p>
              </div>
            </div>

            <div className="basis-1/2">
              <h3 className="font-accent text-4xl font-bold tracking-wide pb-8">
                40 G. OF DARK <br /> CHOCOLATE 60% <br /> WITH SALTED ALMONDS
              </h3>

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

        <div className="absolute top-50 z-50" ref={ingredientsImage}>
          <Image width={1920} height={1500} alt="" src="/choco-banner.png" />
        </div>
      </div>
    </div>
  );
}

export default FlavorShowcase;