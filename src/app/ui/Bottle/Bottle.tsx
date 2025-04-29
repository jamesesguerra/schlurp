"use client";

import React, { useRef } from 'react'
import Image from 'next/image'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';

const Bottle = () => {
    gsap.registerPlugin(ScrollTrigger);

    const bottleContainerRef = useRef(null);
    const containerRef = useRef(null);

    useGSAP(() => {
        gsap.to(bottleContainerRef.current, {
            scrollTrigger: {
            trigger: bottleContainerRef.current,
            scrub: true,
            start: "top+=50 top",
            end: "+=500"
            },
            y: -75
        });
    }, { scope: containerRef });
    

    return (
        <div ref={containerRef}>
            <div className="fixed top-50 left-117 z-90" ref={bottleContainerRef}>
                <Image src="/bottle.png" width={500} height={1000} alt="" />
            </div>
        </div>
    );
}

export default Bottle;