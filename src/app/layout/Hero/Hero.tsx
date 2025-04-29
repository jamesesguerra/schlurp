"use client";

import React, { useRef } from 'react'
import styles from '@/app/layout/Hero/hero.module.css';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';
import Image from 'next/image';

const Hero = () => {
  const container = useRef(null);
  const blueRef = useRef(null);
  const whiteRef = useRef(null);
  const blueTextRef = useRef(null);
  const bottleContainerRef = useRef(null);
  const saltyRef = useRef(null);
  const friedRef = useRef(null);
  const bannerRef = useRef(null);
  const detailRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.to(blueTextRef.current, {
        scrollTrigger: {
            trigger: blueTextRef.current,
            start: "top-=19 top",
            pinSpacing: false,
            pin: blueTextRef.current,
            scrub: true,
        },
    });

    gsap.to(whiteRef.current, {
      scrollTrigger: {
        trigger: whiteRef.current,
        start: "top 100%",
        scrub: true,
      },
      y: -290
    });

    gsap.to(bottleContainerRef.current, {
      scrollTrigger: {
        trigger: bottleContainerRef.current,
        scrub: true,
        start: "top+=50 top",
        end: "+=500"
      },
      y: -75
    });

    gsap.to(saltyRef.current,
      {
        scrollTrigger: {
          trigger: saltyRef.current,
          scrub: true,
          start: "top-=400 80%",
        },
        y: -400,
        duration: 1.1
      });

    gsap.to(friedRef.current,
      {
        scrollTrigger: {
          trigger: friedRef.current,
          scrub: true,
          start: "top-=420 80%",
        },
        y: -580,
        duration: 1.2
      });

    gsap.to(bannerRef.current, {
      scrollTrigger: {
        trigger: bannerRef.current,
        scrub: true,
        start: "top-=300 80%",
        end: "+=1700px",
      },
      y: -1000,
      duration: 0.1,
    })

    gsap.to(detailRef.current,
      {
        scrollTrigger: {
          trigger: detailRef.current,
          scrub: true,
          start: "top-=420 80%",
        },
        y: -900,
        duration: 1.2
      });

    gsap.fromTo(blueTextRef.current, 
      {
        opacity: 0,
        marginTop: "-75px"
      }, 
      {
        opacity: 1,
        marginTop: "0px",
        duration: 0.6,
        scrollTrigger: {
          trigger: blueTextRef.current,
          start: "top-=100 20%",
          end: "+=300px",
        }
      });

}, { scope: container });

  return (
    <section className={`${styles.hero_container}`} ref={container}>
        <div className="container mx-auto pt-4 pb-10 relative z-100 bg-white">
            <h3 className="font-bold text-9xl tracking-wide font-accent pb-5">
                WE MAKE <br />
                ALL NATURAL <br />
                CHOCOLATE <br />
                BARS. <br />
            </h3>

            <a href="" className="font-accent underline decoration-solid text-xl">READ ABOUT COPENHAGEN CHOCOLATE FACTORY</a>
        </div>

        <div className="fixed top-50 left-117 z-90" ref={bottleContainerRef}>
          <Image src="/bottle.png" width={500} height={1000} alt="" />
        </div>

      <div className="relative">
        <section className={`${styles.containerSmall} ${styles.blueGradient} py-5 border border-solid relative`} ref={blueRef}>
          <div className="left-20 absolute z-10 opacity-0" ref={blueTextRef}>
            <p className="font-accent text-5xl tracking-wide text-white mb-5">
              DARK CHOCOLATE <br />
              60% WITH SALTED<br />
              ALMONDS <br />
            </p>

            <span className="font-accent text-sky-500 text-2xl">2.55 PHP</span>

            <div className={`${styles.addBtn} flex justify-center items-center mt-10`}>
              <span className="font-accent text-sky-500 text-2xl">ADD TO BOX</span>
            </div>
          </div>
          
        </section>
            
        <div className={`${styles.containerBig} ${styles.orange} z-40 absolute right-0 left-0 overflow-hidden`} ref={whiteRef}>
          <div className="container mx-auto" style={{ marginTop: "400px" }}>
            <div className={`${styles.text64xl} font-accent text-blue-700 font-semibold tracking-wide`}>
              <h3 ref={saltyRef}>SALTY</h3>
              <h3 ref={friedRef} className="-mt-40">FRED</h3>
            </div>

            <div className={`flex ${styles.detailContainer} justify-center mx-auto gap-50`} ref={detailRef}>
              <div className="flex flex-col basis-1/2 gap-20">
                <div>
                  <h3 className="font-accent text-4xl font-bold tracking-wide pb-6">SALTY FRED. RAISE THE BAR</h3>
                  <p className="text-xl/8 font-serif font-semibold">Your taste buds will be thanking you the second the dark chocolate hits your tongue. And when the salted almonds set .in - they will simply never be the same again</p>
                </div>

                <div>
                  <h3 className="font-accent text-4xl font-bold tracking-wide pb-6">SWEET & SALTY = <br /> YIN AND YANG.</h3>
                  <p className="text-xl/8 font-serif font-semibold">Dark chocolate 60% with salted almonds, known for their superb quality. The salty hint and the fruity chocolate truly make this the best of both worlds.</p>
                </div>
              </div>

              <div className="basis-1/2">
                <h3 className="font-accent text-4xl font-bold tracking-wide pb-8">40 G. OF DARK <br /> CHOCOLATE 60% <br /> WITH SALTED ALMONDS</h3>

                <div className="flex flex-col gap-4">
                  <div className="flex">
                    <div className="basis-3/4">
                      <span className="font-serif font-semibold">Energy</span>
                      <p className="font-accent font-bold text-xl">2330 KJ / 567 KCAL</p>
                    </div>

                    <div className="basis-1/4">
                      <span className="font-serif font-semibold">Fibre</span>
                      <p className="font-accent font-bold text-xl">9.2 G</p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="basis-3/4">
                      <span className="font-serif font-semibold">Saturated fat</span>
                      <p className="font-accent font-bold text-xl">40 G / 22 G</p>
                    </div>

                    <div className="basis-1/4">
                      <span className="font-serif font-semibold">Protein</span>
                      <p className="font-accent font-bold text-xl">7.2 G</p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="basis-3/4">
                      <span className="font-serif font-semibold">Carbohydrates / of which sugar</span>
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

          <div className="absolute top-50 z-50" ref={bannerRef}>
            <Image width={1920} height={1500} alt="" src="/choco-banner.png" />
          </div>

        </div>


      </div>
    </section>
  )
}

export default Hero