import { component$ } from '@qwik.dev/core';

// @ts-expect-error vite-imagetools
import Background from '~/components/images/vote.png?jsx&format=avif&w=1280;1920;2560;3840';

import { generateHead } from '~/root';

export default component$(() => {
  return (
    <>
      <Background
        id="bg"
        alt="Background"
        class={{
          'fixed top-0 -z-10 h-[50lvh] w-lvw scale-105 overflow-hidden object-cover blur-none brightness-85 saturate-85 sepia-15 dark:opacity-50': true,
        }}
      />
      <section
        class="relative flex min-h-[50svh] justify-center overflow-hidden"
        style={{
          '--lum-border-radius': '1.5rem',
        }}
      >
        <div
          id="hero"
          class="flex w-full max-w-5xl flex-col items-center justify-center px-20 pt-18 text-gray-100 xl:max-w-6xl 2xl:max-w-7xl"
        >
          <div class="relative flex flex-col gap-4 xl:gap-8">
            <div class="absolute -inset-4 rounded-4xl blur-lg backdrop-blur-md" />
            <h1
              class={{
                'text-center text-6xl font-extrabold drop-shadow-lg xl:text-7xl': true,
                'animate-in fade-in motion-safe:slide-in-from-top-16 motion-safe:duration-600': true,
              }}
            >
              <span
                class="text-transparent"
                style={{
                  background: 'linear-gradient(135deg, #3b74ff, #7AFFEA)',
                  backgroundClip: 'text',
                }}
              >
                World
              </span>{' '}
              Downloads
            </h1>
          </div>
          <div class="mt-12 flex flex-wrap items-center justify-center gap-2">
            <a
              href="https://drive.proton.me/urls/MF2JJVTCD4#ip4Ns2ZtO2C-"
              class="lum-btn xl:lum-btn-p-4 lum-grad-bg-lum-input-bg/20 animate-in fade-in motion-safe:slide-in-from-top-16 text-lg opacity-50 backdrop-blur-sm motion-safe:duration-800"
            >
              1.12
            </a>
            <a
              href="https://drive.proton.me/urls/XJHA3CQQVR#2rI1haoVg55_"
              class="lum-btn xl:lum-btn-p-4 lum-grad-bg-lum-input-bg/20 animate-in fade-in motion-safe:slide-in-from-top-16 text-lg opacity-50 backdrop-blur-sm motion-safe:duration-800"
            >
              1.15
            </a>
            <a
              href="https://cdn.birdflop.com/files/bUmCyAko6uB5tm71/acorn-1-17-world-download.tar.gz"
              target="_blank"
              class="lum-btn xl:lum-btn-p-4 lum-grad-bg-lum-input-bg/20 animate-in fade-in motion-safe:slide-in-from-top-16 text-lg backdrop-blur-sm motion-safe:duration-800"
            >
              1.17
            </a>
            <a
              href="https://cdn.birdflop.com/files/GIo0bc5FrFhJzOfx/acorn-1-18.tar.gz"
              target="_blank"
              class="lum-btn xl:lum-btn-p-4 lum-grad-bg-lum-input-bg/20 animate-in fade-in motion-safe:slide-in-from-top-16 text-lg backdrop-blur-sm motion-safe:duration-800"
            >
              1.18
            </a>
            <a
              href="https://cdn.birdflop.com/files/5SnCu4cMJ8pkp92v/acorn-19.tar.gz"
              target="_blank"
              class="lum-btn xl:lum-btn-p-4 lum-grad-bg-lum-input-bg/20 animate-in fade-in motion-safe:slide-in-from-top-16 text-lg backdrop-blur-sm motion-safe:duration-800"
            >
              1.19
            </a>
            <a
              href="https://mega.nz/file/IpoQUaYa#zM0J4Xc2wBwB8rsShKqbsmoEbjzabGQ2pZadkiCFy8o"
              target="_blank"
              class="lum-btn xl:lum-btn-p-4 lum-grad-bg-lum-input-bg/20 animate-in fade-in motion-safe:slide-in-from-top-16 text-lg backdrop-blur-sm motion-safe:duration-800"
            >
              1.20
            </a>
            <a
              href="https://mega.nz/file/k44HXapB#b4CxMvMs6mxWujdYjkPj6hm-6Q8nOm1_PKWyKQipwVo"
              target="_blank"
              class="lum-btn xl:lum-btn-p-4 lum-grad-bg-lum-input-bg/20 animate-in fade-in motion-safe:slide-in-from-top-16 text-lg backdrop-blur-sm motion-safe:duration-800"
            >
              1.21
            </a>
          </div>
        </div>
      </section>
    </>
  );
});

export const head = generateHead({});
