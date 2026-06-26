import { component$ } from '@qwik.dev/core';
import { generateHead } from '~/root';

// @ts-ignore
import Background from '~/components/images/rules.png?jsx&format=avif&w=1280;1920;2560;3840';
import Rules from '~/components/Rules.mdx';

export default component$(() => {
  return <>
    <Background id="bg" alt="Background" class={{
      'fixed scale-105 top-0 brightness-85 saturate-85 sepia-15 dark:opacity-50 blur-none overflow-hidden -z-10 w-lvw h-[50lvh] object-cover': true,
    }}/>
    <section class="min-h-[50svh] flex justify-center relative overflow-hidden"
      style={{
        '--lum-border-radius': '1.5rem',
      }}>
      <div id="hero" class="flex flex-col text-gray-100 px-20 items-center justify-center pt-18 max-w-5xl xl:max-w-6xl 2xl:max-w-7xl w-full">
        <div class="relative flex flex-col gap-4 xl:gap-8">
          <div class="absolute -inset-4 blur-lg backdrop-blur-md rounded-4xl" />
          <h1 class={{
            'text-6xl xl:text-7xl font-extrabold drop-shadow-lg text-center': true,
            'animate-in fade-in motion-safe:slide-in-from-top-16 motion-safe:duration-600': true,
          }}>
            <span class="text-transparent"
              style={{
                background: 'linear-gradient(135deg, #3b74ff, #7AFFEA)',
                backgroundClip: 'text',
              }}>
              Rules
            </span>{' '}
          </h1>
        </div>
      </div>
    </section>
    <div class="bg-bg border-t border-lum-border/10">
      <section class="flex flex-col gap-6 max-w-5xl mx-auto p-10 pt-20 markdown">
        <Rules />
      </section>
    </div>
  </>;
});

export const head = generateHead({});
