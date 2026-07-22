import { component$ } from '@qwik.dev/core';
import { Link, useLocation } from '@qwik.dev/router';
import { Nav } from '@luminescent/ui-qwik';

import Book from 'lucide-icons-qwik/icons/Book';
import Crown from 'lucide-icons-qwik/icons/Crown';
import Form from 'lucide-icons-qwik/icons/Form';
import HandCoins from 'lucide-icons-qwik/icons/HandCoins';
import Loader2 from 'lucide-icons-qwik/icons/Loader2';
import Scale from 'lucide-icons-qwik/icons/Scale';
import Vote from 'lucide-icons-qwik/icons/Vote';
import SiDiscord from 'simple-icons-qwik/icons/SiDiscord';
import { Acorn } from './Acorn';

// Links used in multiple places, defined here to avoid duplication and potential inconsistencies
export const discordLink = 'https://discord.gg/CRBQKYA';

export default component$(() => {
  const loc = useLocation();

  return (
    <Nav
      fixed
      colorClass="lum-grad-bg-nav-bg border-b-lum-border/10 shadow-lg nav text-white"
    >
      <Link
        q:slot="start"
        href="/"
        class="lum-btn rounded-lum-2 lum-bg-transparent hover:lum-bg-nav-bg p-2"
      >
        <Acorn size={24} />
        <span class="font-semibold">Acorn</span>
        <div
          class={{
            'transition-all': true,
            '-ml-6 opacity-0': !loc.isNavigating,
          }}
        >
          <Loader2 size={16} class="animate-spin" />
        </div>
      </Link>
      <Link
        q:slot="end"
        href="/vote"
        class="lum-btn rounded-lum-2 lum-bg-transparent hover:lum-bg-nav-bg hidden sm:flex"
      >
        <Vote size={20} /> Vote
      </Link>
      <Link
        q:slot="end"
        href="/ranks"
        class="lum-btn rounded-lum-2 lum-bg-transparent hover:lum-bg-nav-bg hidden sm:flex"
      >
        <Crown size={20} /> Ranks
      </Link>
      <Link
        q:slot="end"
        href="/forms"
        class="lum-btn rounded-lum-2 lum-bg-transparent hover:lum-bg-nav-bg hidden sm:flex"
      >
        <Form size={20} /> Forms
      </Link>
      <a
        q:slot="end"
        href="https://acorn.tebex.io/"
        class="lum-btn rounded-lum-2 lum-bg-transparent hover:lum-bg-nav-bg hidden sm:flex"
      >
        <HandCoins size={20} /> Donate
      </a>
      <Link
        q:slot="end"
        href="/help"
        class="lum-btn rounded-lum-2 lum-bg-transparent hover:lum-bg-nav-bg hidden sm:flex"
      >
        <Book size={20} /> Getting Started
      </Link>
      <Link
        q:slot="end"
        href="/rules"
        class="lum-btn rounded-lum-2 lum-bg-transparent hover:lum-bg-nav-bg hidden sm:flex"
      >
        <Scale size={20} /> Rules
      </Link>
      <div q:slot="end" class="hidden gap-2 sm:flex">
        <SocialButtons />
      </div>

      <Link
        q:slot="mobile"
        href="/vote"
        class="lum-btn lum-bg-transparent hover:lum-bg-nav-bg"
      >
        <Vote size={20} /> Vote
      </Link>
      <Link
        q:slot="mobile"
        href="/ranks"
        class="lum-btn lum-bg-transparent hover:lum-bg-nav-bg"
      >
        <Crown size={20} /> Ranks
      </Link>
      <Link
        q:slot="mobile"
        href="/forms"
        class="lum-btn lum-bg-transparent hover:lum-bg-nav-bg"
      >
        <Form size={20} /> Forms
      </Link>
      <a
        q:slot="mobile"
        href="https://acorn.tebex.io/"
        class="lum-btn lum-bg-transparent hover:lum-bg-nav-bg"
      >
        <HandCoins size={20} /> Donate
      </a>
      <Link
        q:slot="mobile"
        href="/help"
        class="lum-btn lum-bg-transparent hover:lum-bg-nav-bg"
      >
        <Book size={20} /> Getting Started
      </Link>
      <Link
        q:slot="mobile"
        href="/rules"
        class="lum-btn lum-bg-transparent hover:lum-bg-nav-bg"
      >
        <Scale size={20} /> Rules
      </Link>
      <div q:slot="mobile" class="flex justify-evenly">
        <SocialButtons />
      </div>
    </Nav>
  );
});

export const SocialButtons = component$(() => {
  return (
    <>
      <a
        href={discordLink}
        title="Discord"
        class="lum-btn rounded-lum-2 lum-bg-transparent hover:lum-bg-nav-bg fill-current p-2"
        data-umami-event="discord-link"
        data-umami-source="nav"
      >
        <SiDiscord size={20} />
      </a>
    </>
  );
});
