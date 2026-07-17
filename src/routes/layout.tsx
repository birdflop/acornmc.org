import { $, component$, Slot, useOnWindow, useSignal } from '@qwik.dev/core';

import Footer from '~/components/Footer';
import Nav from '~/components/Nav';

export default component$(() => {
  const ticking = useSignal(false);
  useOnWindow(
    'scroll',
    $(() => {
      if (ticking.value) return;

      ticking.value = true;
      requestAnimationFrame(() => {
        const mediaQuery = window.matchMedia(
          '(prefers-reduced-motion: reduce)'
        );
        if (mediaQuery.matches) return;

        const scrollY = window.scrollY;

        const bg = document.getElementById('bg');
        if (bg) {
          bg.style.transform = `translateY(-${scrollY / 3}px)`;
          bg.style.setProperty('--tw-blur', `blur(${scrollY / 20}px)`);
        }

        const hero = document.getElementById('hero');
        if (hero) {
          hero.style.transform = `translateY(${scrollY / 2}px)`;
        }

        ticking.value = false;
      });
    })
  );

  return (
    <>
      <Nav />

      <Slot />
      <Footer />
    </>
  );
});
