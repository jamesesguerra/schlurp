"use client";
import React, { useEffect } from 'react'
import { flavors } from '../data/flavors';
import FlavorShowcase from '../components/flavors/flavor-showcase';
import Footer from '../components/layout/footer';
import Hero from '../components/layout/hero';

const LandingPage = () => {
  return (
    <>
        <Hero />
        { flavors.map((flavor, index) => {
            return (
              <FlavorShowcase
                flavor={flavor}
                key={index}
                index={index}
              />
            )
          })
        }
        <Footer />
    </>
  );
};

export default LandingPage