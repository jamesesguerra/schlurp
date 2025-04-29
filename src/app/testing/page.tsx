"use client";

import styles from '@/app/testing/testing.module.css';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';

export default function Home() {

    gsap.registerPlugin(ScrollTrigger);

    const boxRef = useRef(null);
    const aRef = useRef(null);

    useGSAP(() => {
        gsap.to(boxRef.current, {
            scrollTrigger: {
                trigger: boxRef.current,
                start: "top center",
                markers: true,
                toggleActions: "restart pause reverse pause",
                scrub: 2,
                pin: true
            },
            x: 500,
            duration: 3,
            rotate: 360,
        });

        gsap.to(aRef.current, {
            xPercent: -500
        });
    });


    return (
        <div className={styles.box_container}>
            <div className={`${styles.box} ${styles.a}`} ref={aRef}>a</div>
            <div className={`${styles.box} ${styles.b}`}>b</div>
            <div className={`${styles.box} ${styles.c}`} ref={boxRef}>c</div>
        </div>
    );
}
