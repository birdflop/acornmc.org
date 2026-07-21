import { component$ } from '@qwik.dev/core';
import { SocialButtons } from './Nav';

export default component$(() => {
  return (
    <footer class="bg-lum-card-bg border-t-lum-border/10 relative flex w-full flex-col items-center justify-center gap-1 border-t p-6 text-center">
      <div class="mb-2 flex gap-1">
        <SocialButtons />
      </div>
      <span class="max-w-6xl text-center text-sm">
        Copyright © {new Date().getFullYear()} Acorn. All rights reserved.
      </span>
    </footer>
  );
});
