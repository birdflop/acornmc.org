import { component$, useOnWindow, $, useStore, useVisibleTask$ } from '@qwik.dev/core';
import { DocumentHead } from '@qwik.dev/router';

import { Loader2 } from 'lucide-icons-qwik';
import { SiDiscord } from 'simple-icons-qwik';
import { Acorn } from '~/components/Acorn';
import Testimonials from '~/components/sections/Testimonials';
import Why from '~/components/sections/Why';

export default component$(() => {
  const store = useStore({
    online: null as boolean | null,
    players: 0,
    version: null as string | null,
    discordonline: null as number | null,
  });

  useOnWindow('scroll', $(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;
    const hero = document.getElementById('hero')!;
    hero.style.transform = `translateY(${window.scrollY / 2}px)`;
  }));

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(async () => {
    const srvjson = await fetch('https://api.mcsrvstat.us/2/play.acornmc.org');
    const srvdata = await srvjson.json() as any;
    if (!srvdata.online || srvdata.protocol == 1) {
      store.online = false;
    }
    else {
      store.online = true;
      store.players = srvdata.players.online;
      store.version = srvdata.protocol_name;
    }
    const discordjson = await fetch('https://discord.com/api/guilds/354802944354418688/widget.json');
    const discorddata = await discordjson.json() as any;
    store.discordonline = discorddata.presence_count;
  });

  useOnWindow('scroll', $(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;
    const bg = document.getElementById('bg')!;
    bg.style.bottom = `${window.scrollY / 3}px`;
    bg.style.setProperty('--tw-blur', `blur(${window.scrollY / 20}px)`);
    const hero = document.getElementById('hero')!;
    hero.style.transform = `translateY(${window.scrollY / 2}px)`;
  }));

  return <>
    <section class="min-h-svh flex justify-center relative overflow-hidden"
      style={{
        '--lum-border-radius': '1.5rem',
      }}>
      <div id="hero" class="flex flex-col text-gray-100 px-20 items-center justify-center pt-18 max-w-5xl xl:max-w-6xl 2xl:max-w-7xl w-full">
        <div class="relative flex flex-col gap-4 xl:gap-8">
          <div class="absolute -inset-4 blur-lg backdrop-blur-md rounded-4xl" />
          <h1 class={{
            'text-6xl xl:text-7xl font-extrabold drop-shadow-lg text-center': true,
            'animate-in fade-in motion-safe:slide-in-from-top-16 motion-safe:anim-duration-600': true,
          }}>
            <span class="text-transparent"
              style={{
                background: 'linear-gradient(135deg, #3b74ff, #7AFFEA)',
                backgroundClip: 'text',
              }}>
                Minecraft
            </span>{' '}
              as it should be.
          </h1>
        </div>
        <div class="flex flex-wrap items-center justify-center gap-2 mt-12">
          <button onClick$={() => {
            navigator.clipboard.writeText('play.acornmc.org').catch(() => {
              const response = document.getElementById('response-desktop') as HTMLParagraphElement;
              response.textContent = 'FAILED TO COPY, CHECK CONSOLE';
              setTimeout(() => response.textContent = 'COPIED SUCCESSFULLY', 3000);
            });
          }} class="lum-btn lum-btn-p-4 backdrop-blur-sm text-lg lum-grad-bg-blue-500/20 hover:lum-bg-blue-300 animate-in fade-in motion-safe:slide-in-from-top-16 motion-safe:anim-duration-800">
            <Acorn size={36} />
            <span class="flex flex-col gap-1 text-left">
              <span class="font-bold flex items-center gap-2">
                play.acornmc.org
              </span>
              <span class="text-sm flex items-center gap-1">
                {store.online === null && <Loader2 size={16} class="animate-spin" />}
                {store.online === null && 'Click to copy ip'}
                {store.online && `${store.players} online - ${store.version}`}
                {store.online === false && 'Server offline'}
              </span>
            </span>
          </button>
          <a href="https://discord.gg/CRBQKYA" target="_blank"
            class="fill-current lum-btn lum-btn-p-4 backdrop-blur-sm text-lg lum-grad-bg-indigo-500/20 hover:lum-bg-indigo-300 animate-in fade-in motion-safe:slide-in-from-top-16 motion-safe:anim-duration-800">
            <SiDiscord size={36} />
            <span class="flex flex-col gap-1 text-left">
              <span class="font-bold flex items-center gap-2">
                Discord
              </span>
              <span class="text-sm flex items-center gap-1">
                {store.discordonline === null && <Loader2 size={16} class="animate-spin" />}
                {store.discordonline} users online
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
    <div class="bg-gray-900 mask-[linear-gradient(to_bottom,transparent_0px,black_8rem,black_100%)] pt-32">
      <Why />
      <Testimonials />
    </div>
  </>;
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
