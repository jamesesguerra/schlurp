"use client";

import styles from '@/app/pin/pin.module.css';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';

export default function Home() {

    gsap.registerPlugin(ScrollTrigger);

    const redRef = useRef(null);
    const blueRef = useRef(null);
    const blueTextRef = useRef(null);
    const orangeRef = useRef(null);
    const container = useRef(null);

    useGSAP(() => {

        gsap.to(blueTextRef.current, {
            scrollTrigger: {
                trigger: blueTextRef.current,
                start: "top top",
                pinSpacing: false,
                end: "+=326px",
                pin: blueTextRef.current,
                scrub: true,
                markers: true
            },
        });

        // gsap.to(blueRef.current, {
        //     scrollTrigger: {
        //         trigger: blueRef.current,
        //         scrub: true,
        //         start: "top center",
        //         end: "+=50px"
        //     },
        //     scaleY: 1.3
        // })

        // gsap.to(blueRef.current, {
        //     scrollTrigger: {
        //         trigger: blueRef.current,
        //         start: "top center",
        //         markers: true,
        //         scrub: true
        //     },
        //     scaleY: 1.2,
        //     duration: 2
        // });

        

        // ScrollTrigger.create({
        //     trigger: blueRef.current,
        //     start: "top top",
        //     pinSpacing: false,
        //     end: "+=326px",
        //     pin: blueTextRef.current,
        //     markers: true
        // });
    }, { scope: container });


    return (
        <div className={styles.box_container} ref={container}>
            <div className={`${styles.container} ${styles.red}`} ref={redRef}>
                <p>hello world</p>
            </div>
            <div className={`${styles.containerSmall} ${styles.blue}`} ref={blueRef}>
                <p ref={blueTextRef} className="border border-solid">hello world</p>
                <p>lorem ips</p>
            </div>
            <div className={`${styles.containerBig} ${styles.orange}`} ref={orangeRef}></div>
        </div>
    );
}
