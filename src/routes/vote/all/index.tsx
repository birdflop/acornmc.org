import { component$, useVisibleTask$ } from '@qwik.dev/core';
import { Loader2 } from 'lucide-icons-qwik';
import { generateHead } from '~/root';

export const voteLinks = [
  'https://minecraft-server-list.com/server/413910/vote/',
  'https://minecraftservers.org/vote/460247',
  'https://minecraft-mp.com/server/174434/vote/',
  'https://topminecraftservers.org/vote/29272',
];

export default component$(() => {
  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    for (const link of voteLinks) {
      window.open(link, '_blank');
    }
  });

  return (
    <section class="flex flex-col gap-3 mx-auto max-w-7xl px-6 items-center justify-center min-h-svh pt-20">
      <h1  class="font-extrabold text-5xl my-6">
        AcornMC Vote
      </h1>
      <p>
        Opening Links
      </p>
      <Loader2 class="animate-spin" />
    </section>
  );
});

export const head = generateHead({
  title: 'AcornMC Vote',
  description: 'Vote for AcornMC!',
});