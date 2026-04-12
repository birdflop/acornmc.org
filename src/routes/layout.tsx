import { component$, Slot } from '@qwik.dev/core';
import { useLocation } from '@qwik.dev/router';

import Footer from '~/components/Footer';
import Nav from '~/components/Nav';

// @ts-ignore
import Background from '~/components/images/bg.png?jsx&format=avif&w=1280;1920;2560;3840';

export default component$(() => {
  const loc = useLocation();

  return <>
    <Nav />
    <Background id="bg" alt="Background" class={{
      'fixed scale-105 bottom-0 opacity-50 blur-none overflow-hidden -z-10 w-lvw h-lvh object-cover': true,
      'transition-all duration-1000': loc.isNavigating,
      'blur-xl! bottom-0! opacity-5 scale-150': loc.url.pathname != '/',
    }}/>

    <Slot />
    <Footer />
  </>;
});