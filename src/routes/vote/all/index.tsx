import { component$, useVisibleTask$ } from '@qwik.dev/core';
import Loader2 from 'lucide-icons-qwik/icons/Loader2';
import { generateHead } from '~/root';

export const voteLinks = [
  'https://minecraft-server-list.com/server/413910/vote/',
  'https://minecraftservers.org/vote/460247',
  'https://minecraft-mp.com/server/174434/vote/',
  'https://topminecraftservers.org/vote/29272',
];

export default component$(() => {
  // oxlint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    for (const link of voteLinks) {
      window.open(link, '_blank');
    }
  });

  return (
    <section class="mx-auto flex min-h-svh max-w-7xl flex-col items-center justify-center gap-3 px-6 pt-20">
      <h1 class="my-6 text-5xl font-extrabold">AcornMC Vote</h1>
      <p>Opening Links</p>
      <Loader2 class="animate-spin" />
    </section>
  );
});

export const head = generateHead({
  title: 'AcornMC Vote',
  description: 'Vote for AcornMC!',
});
