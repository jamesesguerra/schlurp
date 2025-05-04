import React, { useRef } from 'react'
import styles from '@/app/ui/FlavorShowcase/flavor-showcase.module.css';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';
import Image from 'next/image';
import clsx from 'clsx';
import { Flavor } from '@/app/types/Flavor';
import { flavorDesktopAnimations, flavorMobileAnimations } from './flavor-showcase-tweens';

type FlavorShowcaseProps = {
  flavor: Flavor;
  isFirst?: boolean;
};

const FlavorShowcase: React.FC<FlavorShowcaseProps> = ({ flavor, isFirst = false }) => {
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
    const mm = gsap.matchMedia();

    mm.add("(max-width: 1023px)", () => {
      flavorMobileAnimations({
        flavorBanner,
        flavorBannerCopy,
        detailsContainer,
        flavorFirstName,
        flavorSecondName,
        ingredientsImage,
        flavorDetails,
      });
    })

    mm.add("(min-width: 1024px)", () => {
      flavorDesktopAnimations({
        flavorBanner,
        flavorBannerCopy,
        detailsContainer,
        flavorFirstName,
        flavorSecondName,
        ingredientsImage,
        flavorDetails,
      });
    });

    return () => mm.revert();
}, { scope: container });

  return (

    <div
      className={clsx('relative', { [styles.mt200]: !isFirst })}
      ref={container}
    >
      <section
        className={`${styles.containerSmall} py-5 relative`}
        ref={flavorBanner}
        style={{ backgroundImage: `linear-gradient(90deg,${flavor.bannerColor} 0%, ${flavor.bannerColorLight ?? flavor.bannerColor} 51%, ${flavor.bannerColor} 100%)` }}
      >

        <div className="lg:absolute lg:inset-0">
          <div className="container mx-auto relative">
            <div className="left-5 lg:left-0 lg:top-5 absolute z-10 opacity-0" ref={flavorBannerCopy}>
              <p className="font-accent text-5xl tracking-tight lg:tracking-wide text-white mb-5">
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
          </div>
        </div>
      </section>

      <section className="relative">
        <div
          className={`bg-white z-40 absolute right-0 left-0 overflow-hidden`}
          ref={detailsContainer}
        >
          <div className="inset-0">
            <div className="container mx-auto relative" style={{ marginTop: "400px" }}>
              <div
                className={`text-[10rem] lg:text-[18rem] font-accent font-semibold tracking-tight lg:tracking-wide lg:left-0 px-5`}
                style={{ color: flavor.titleColor }}
              >
                <h3 ref={flavorFirstName}>{ flavor.name.split(" ")[0] }</h3>
                <h3 ref={flavorSecondName} className="-mt-40">{ flavor.name.split(" ")[1] }</h3>
              </div>

              <div
                className={`flex flex-col lg:flex-row ${styles.detailContainer} justify-center mx-auto lg:left-0 px-5 gap-15 lg:gap-45`}
                ref={flavorDetails}
              >
                <div className="flex flex-col basis-1/2 gap-20">
                  <div>
                    <h3 className="font-accent text-4xl font-bold lg: pb-6">{ flavor?.paragraphOneTitle }</h3>
                    <p className="text-xl/8 font-serif tracking-tighter font-semibold">{ flavor?.paragraphOne }</p>
                  </div>

                  <div>
                    <h3
                      className="font-accent text-4xl font-bold tracking-tight lg:tracking-wide pb-6"
                      dangerouslySetInnerHTML={{ __html: flavor?.paragraphTwoTitle || '' }}
                    />
                    <p className="text-xl/8 font-serif font-semibold">{ flavor?.paragraphTwo }</p>
                  </div>
                </div>

                <div className="basis-1/2">
                  <h3
                    className="font-accent text-4xl font-bold tracking-tight lg:tracking-wide pb-6"
                    dangerouslySetInnerHTML={{ __html: flavor?.paragraphThreeTitle || '' }}
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

          </div>

          <div className="absolute top-50 z-50" ref={ingredientsImage}>
            <Image width={4080} height={3613} alt="" src="/choco-banner.png" className="hidden lg:block" />
            <Image width={2259} height={4080} alt="" src="/choco-banner-mobile.png" className="block lg:hidden" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default FlavorShowcase;