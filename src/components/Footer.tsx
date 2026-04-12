import { component$ } from '@qwik.dev/core';
import { SocialButtons } from './Nav';

export default component$(() => {
  return (
    <footer class="relative flex flex-col gap-1 items-center justify-center text-center w-full bg-lum-card-bg border-t border-t-lum-border/10 p-6">
      <div class="flex gap-1 mb-2">
        <SocialButtons />
      </div>
      <span class="text-sm max-w-6xl text-center">
        Copyright © 2025 Acorn. All rights reserved.
      </span>
    </footer>
  );
});