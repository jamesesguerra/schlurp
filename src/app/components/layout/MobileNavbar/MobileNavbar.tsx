"use client";

import React, { useState } from 'react'
import Link from 'next/link';
import './mobile-navbar.css'
import { motion, AnimatePresence } from 'framer-motion';

const MobileNavbar = () => {
  const menuLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/shop', label: 'Shop' },
    { path: '/stores', label: 'Stores' },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const overlayVariants = {
    closed: {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      transition: {
        duration: 1.25,
        ease: [0.76, 0, 0.24, 1] as const // power4.inOut equivalent
      }
    },
    open: {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      transition: {
        duration: 1.25,
        ease: [0.76, 0, 0.24, 1] as const // power4.inOut equivalent
      }
    }
  };

  const linkVariants = {
    closed: {
      y: 75,
      transition: {
        duration: 1,
        ease: [0.76, 0, 0.24, 1] as const // power4.inOut equivalent
      }
    },
    open: {
      y: 0,
      transition: {
        duration: 1,
        ease: [0.76, 0, 0.24, 1] as const // power4.inOut equivalent
      }
    }
  };

  const containerVariants = {
    closed: {
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1 as const
      }
    },
    open: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.5
      }
    }
  };

  return (
    <div className="menu-container navbar-container">
      <div className="menu-bar">
        <div className="menu-logo">
          <span className="tracking-tight md:tracking-normal font-semibold text-3xl text-gray-800">schlurp</span>
        </div>

        <div className="menu-open text-gray-800" onClick={toggleMenu}>
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

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="menu-overlay text-black"
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="menu-overlay-bar">
              <div className="menu-logo">
                <span className="tracking-tight md:tracking-normal font-semibold text-3xl text-white">schlurp</span>
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
              <motion.div 
                className="menu-links"
                initial="closed"
                animate="open"
                exit="closed"
              >
                {menuLinks.map((link, index) => (
                  <div className="menu-link-item" key={index}>
                    <motion.div 
                      className="menu-link-item-holder" 
                      onClick={toggleMenu}
                    >
                      <Link href={link.path} className="menu-link font-accent tracking-tight">
                        { link.label }
                      </Link>
                    </motion.div>
                  </div>
                ))}
              </motion.div>

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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default MobileNavbar