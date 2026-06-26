import { component$, useStore, useVisibleTask$ } from '@qwik.dev/core';
import { generateHead } from '~/root';

import Loader2 from 'lucide-icons-qwik/icons/Loader2';
import SiDiscord from 'simple-icons-qwik/icons/SiDiscord';
import { Acorn } from '~/components/Acorn';
import { discordLink } from '~/components/Nav';
import Testimonials from '~/components/home/Testimonials';
import Why from '~/components/home/Why';

// @ts-ignore
import Background from '~/components/images/bg.png?jsx&format=avif&w=1280;1920;2560;3840';

export default component$(() => {
  const store = useStore({
    online: null as boolean | null,
    players: 0,
    version: null as string | null,
    discordonline: null as number | null,
  });

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

  return <>
    <Background id="bg" alt="Background" class={{
      'fixed scale-105 bottom-0 brightness-85 saturate-85 sepia-15 dark:opacity-50 blur-none overflow-hidden -z-10 w-lvw h-lvh object-cover': true,
    }}/>
    <section class="min-h-svh flex justify-center relative overflow-hidden"
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
          }} class="lum-btn lum-btn-p-4 backdrop-blur-sm text-lg lum-grad-bg-blue-500/20 hover:lum-bg-blue-300 animate-in fade-in motion-safe:slide-in-from-top-16 motion-safe:duration-800">
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
          <a href={discordLink} target="_blank"
            class="fill-current lum-btn lum-btn-p-4 backdrop-blur-sm text-lg lum-grad-bg-indigo-500/20 hover:lum-bg-indigo-300 animate-in fade-in motion-safe:slide-in-from-top-16 motion-safe:duration-800">
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
    <div class="bg-bg border-t border-lum-border/10">
      <Why />
      <Testimonials />
    </div>
  </>;
});

export const head = generateHead({});
