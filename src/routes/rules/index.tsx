import { component$ } from '@qwik.dev/core';
import { Link } from '@qwik.dev/router';
import { generateHead } from '~/root';

// GitHub Pages requires a static redirect page rather than a server handler.
export default component$(() => (
  <main class="mx-auto min-h-dvh max-w-4xl px-6 pt-32">
    <p>
      Rules have moved to the documentation.{' '}
      <Link href="/help/rules/" class="underline">
        Read the server rules
      </Link>
      .
    </p>
  </main>
));

export const head = generateHead({
  title: 'Rules | AcornMC',
  head: {
    meta: [
      { httpEquiv: 'refresh', content: '0;url=/help/rules/' },
      { name: 'robots', content: 'noindex' },
    ],
  },
});
