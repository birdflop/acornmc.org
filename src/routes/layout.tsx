import { $, component$, Slot, useOnWindow } from '@qwik.dev/core';

import Footer from '~/components/Footer';
import Nav from '~/components/Nav';

export default component$(() => {
  useOnWindow('scroll', $(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;
    const bg = document.getElementById('bg');
    if (!bg) return;
    bg.style.bottom = `${window.scrollY / 3}px`;
    bg.style.setProperty('--tw-blur', `blur(${window.scrollY / 20}px)`);
    const hero = document.getElementById('hero')!;
    hero.style.transform = `translateY(${window.scrollY / 2}px)`;
  }));

  return <>
    <Nav />

    <Slot />
    <Footer />
  </>;
});