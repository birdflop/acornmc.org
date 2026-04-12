import { component$ } from '@qwik.dev/core';
import { Link, useLocation } from '@qwik.dev/router';
import { Nav } from '@luminescent/ui-qwik';

import { Book, Loader2 } from 'lucide-icons-qwik';
import { SiGithub, SiDiscord } from 'simple-icons-qwik';
import { Acorn } from './Acorn';

// Links used in multiple places, defined here to avoid duplication and potential inconsistencies
export const donateLink = 'https://www.paypal.com/US/fundraiser/charity/5036975';
export const discordLink = 'https://discord.gg/nmgtX5z';

export default component$(() => {
  const loc = useLocation();

  return (
    <Nav fixed floating colorClass="lum-grad-bg-nav-bg border-b-lum-border/10 shadow-lg"
      style={{
        '--color-lum-gradient': '#7AFFEA55',
      }}>
      <Link q:slot="start" href="/" class="lum-btn lum-bg-transparent hover:lum-bg-nav-bg p-2">
        <Acorn size={24} />
        <span class="font-semibold -ml-1">Acorn</span>
        <div class={{
          'transition-all': true,
          '-ml-6 opacity-0': !loc.isNavigating,
        }}>
          <Loader2 size={16} class="animate-spin" />
        </div>
      </Link>
      <Link q:slot="end" href="/docs" class="lum-btn lum-bg-transparent hover:lum-bg-nav-bg hidden sm:flex">
        <Book size={20} /> Docs
      </Link>
      <div q:slot="end" class="hidden sm:flex gap-2">
        <SocialButtons />
      </div>

      <Link q:slot="mobile" href="/docs" class="lum-btn lum-bg-transparent hover:lum-bg-nav-bg">
        <Book size={20} /> Docs
      </Link>
      <div q:slot="mobile" class="flex justify-evenly">
        <SocialButtons />
      </div>

    </Nav>
  );
});

export const SocialButtons = component$(() => {
  return <>
    <a href="https://github.com/birdflop/web" title="GitHub" class="lum-btn p-2 lum-bg-transparent hover:lum-bg-nav-bg fill-current">
      <SiGithub size={20} />
    </a>
    <a href={discordLink} title="Discord" class="lum-btn p-2 lum-bg-transparent hover:lum-bg-nav-bg fill-current" data-umami-event="discord-link" data-umami-source="nav">
      <SiDiscord size={20} />
    </a>
  </>;
});