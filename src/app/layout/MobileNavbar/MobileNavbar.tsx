"use client";

import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link';
import './mobile-navbar.css'
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const MobileNavbar = () => {
  const menuLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/shop', label: 'Shop' },
    { path: '/stores', label: 'Stores' },
  ];

  const container = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const tl = useRef<gsap.core.Timeline | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useGSAP(() => {
    gsap.set('.menu-link-item-holder', { y: 75 });

    tl.current = gsap.timeline({ paused: true })
      .to(".menu-overlay", {
          duration: 1.25,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "power4.inOut",
      })
      .to(".menu-link-item-holder", {
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power4.inOut",
          delay: -0.75
      });
  }, { scope: container });

  useEffect(() => {
    if (isMenuOpen) {
      tl.current?.play();
    } else {
      tl.current?.reverse();
    }
  })

  return (
    <div className="menu-container" ref={container}>
      <div className="menu-bar">
        <div className="menu-logo">
          <span className="tracking-tight md:tracking-normal font-serif font-bold text-3xl">Simply Chocolate</span>
        </div>

        <div className="menu-open" onClick={toggleMenu}>
          <div>
             <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 9h16.5m-16.5 6.75h16.5"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="menu-overlay text-black">
        <div className="menu-overlay-bar">
          <div className="menu-logo">
            <span className="tracking-tight md:tracking-normal font-serif font-bold text-3xl text-white">Simply Chocolate</span>
          </div>
          <div className="menu-close" onClick={toggleMenu}>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </div>
          </div>
        </div>

        <div className="menu-copy">
          <div className="menu-links">
            {menuLinks.map((link, index) => (
              <div className="menu-link-item" key={index}>
                <div className="menu-link-item-holder" onClick={toggleMenu}>
                  <Link href={link.path} className="menu-link font-accent tracking-tight">
                    { link.label }
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="menu-info pb-20">
            <div className="menu-info-col text-white">
              <a href="">Facebook &#8599;</a>
              <a href="">Instagram &#8599;</a>
              <a href="">X &#8599;</a>
              <a href="">LinkedIn &#8599;</a>
            </div>
          </div>
        </div>

        <div className="menu-preview text-white pb-20">
          <p>View Showreel</p>
        </div>
      </div>
    </div>
  );
}

export default MobileNavbar