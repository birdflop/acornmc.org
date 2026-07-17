import { component$, useStore, useVisibleTask$ } from '@qwik.dev/core';
import { generateHead } from '~/root';

import Loader2 from 'lucide-icons-qwik/icons/Loader2';
import SiDiscord from 'simple-icons-qwik/icons/SiDiscord';
import { Acorn } from '~/components/Acorn';
import { discordLink } from '~/components/Nav';
import Testimonials from '~/components/home/Testimonials';
import Why from '~/components/home/Why';

// @ts-expect-error vite-imagetools
import Background from '~/components/images/bg.png?jsx&format=avif&w=1280;1920;2560;3840';

export default component$(() => {
  const store = useStore({
    online: null as boolean | null,
    players: 0,
    version: null as string | null,
    discordonline: null as number | null,
  });

  // oxlint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(async () => {
    const srvjson = await fetch('https://api.mcsrvstat.us/2/play.acornmc.org');
    const srvdata = await srvjson.json();
    if (!srvdata.online || srvdata.protocol == 1) {
      store.online = false;
    } else {
      store.online = true;
      store.players = srvdata.players.online;
      store.version = srvdata.protocol_name;
    }
    const discordjson = await fetch(
      'https://discord.com/api/guilds/354802944354418688/widget.json'
    );
    const discorddata = await discordjson.json();
    store.discordonline = discorddata.presence_count;
  });

  return (
    <>
      <Background
        id="bg"
        alt="Background"
        class={{
          'fixed bottom-0 -z-10 h-lvh w-lvw scale-105 overflow-hidden object-cover blur-none brightness-85 saturate-85 sepia-15 dark:opacity-50': true,
        }}
      />
      <section
        class="relative flex min-h-svh justify-center overflow-hidden"
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
                Minecraft
              </span>{' '}
              as it should be.
            </h1>
          </div>
          <div class="mt-12 flex flex-wrap items-center justify-center gap-2">
            <button
              onClick$={() => {
                navigator.clipboard.writeText('play.acornmc.org').catch(() => {
                  const response = document.getElementById(
                    'response-desktop'
                  ) as HTMLParagraphElement;
                  response.textContent = 'FAILED TO COPY, CHECK CONSOLE';
                  setTimeout(
                    () => (response.textContent = 'COPIED SUCCESSFULLY'),
                    3000
                  );
                });
              }}
              class="lum-btn lum-btn-p-4 lum-grad-bg-blue-500/20 hover:lum-bg-blue-300 animate-in fade-in motion-safe:slide-in-from-top-16 text-lg backdrop-blur-sm motion-safe:duration-800"
            >
              <Acorn size={36} />
              <span class="flex flex-col gap-1 text-left">
                <span class="flex items-center gap-2 font-bold">
                  play.acornmc.org
                </span>
                <span class="flex items-center gap-1 text-sm">
                  {store.online === null && (
                    <Loader2 size={16} class="animate-spin" />
                  )}
                  {store.online === null && 'Click to copy ip'}
                  {store.online && `${store.players} online - ${store.version}`}
                  {store.online === false && 'Server offline'}
                </span>
              </span>
            </button>
            <a
              href={discordLink}
              target="_blank"
              class="lum-btn lum-btn-p-4 lum-grad-bg-indigo-500/20 hover:lum-bg-indigo-300 animate-in fade-in motion-safe:slide-in-from-top-16 fill-current text-lg backdrop-blur-sm motion-safe:duration-800"
            >
              <SiDiscord size={36} />
              <span class="flex flex-col gap-1 text-left">
                <span class="flex items-center gap-2 font-bold">Discord</span>
                <span class="flex items-center gap-1 text-sm">
                  {store.discordonline === null && (
                    <Loader2 size={16} class="animate-spin" />
                  )}
                  {store.discordonline} users online
                </span>
              </span>
            </a>
          </div>
        </div>
      </section>
      <div class="bg-bg border-lum-border/10 border-t">
        <Why />
        <Testimonials />
      </div>
    </>
  );
});

export const head = generateHead({});
