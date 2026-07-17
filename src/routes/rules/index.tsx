import { component$ } from '@qwik.dev/core';
import { generateHead } from '~/root';

// @ts-expect-error vite-imagetools
import Background from '~/components/images/rules.png?jsx&format=avif&w=1280;1920;2560;3840';
import Rules from '~/components/Rules.mdx';

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
                Rules
              </span>{' '}
            </h1>
          </div>
        </div>
      </section>
      <div class="bg-bg border-lum-border/10 border-t">
        <section class="markdown mx-auto flex max-w-5xl flex-col gap-6 p-10 pt-20">
          <Rules />
        </section>
      </div>
    </>
  );
});

export const head = generateHead({});
