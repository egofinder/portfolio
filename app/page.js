'use client';

import { useEffect } from 'react';
import Hero from './components/hero';
import AboutMe from './components/about_me';
import WhatIDo from './components/what_i_do';

export default function Home() {
  useEffect(() => {
    (async () => {
      const Lenis = (await import('@studio-freight/lenis')).default;
      const lenis = new Lenis();

      lenis.on('scroll', (e) => {
        // console.log(e);
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
    })();
  });

  return (
    <main>
      <Hero />
      <AboutMe />
      <WhatIDo />
    </main>
  );
}
