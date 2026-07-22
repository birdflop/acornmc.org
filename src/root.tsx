import { component$ } from '@qwik.dev/core';
import {
  DocumentHead,
  DocumentHeadValue,
  QwikRouterProvider,
  RouterOutlet,
} from '@qwik.dev/router';
import { RouterHead } from '~/components/Head';

import './global.css';

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Don't remove the `<head>` and `<body>` elements.
   */

  return (
    <QwikRouterProvider>
      <head>
        <meta charset="utf-8" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <RouterHead />
      </head>
      <body lang="en" class="text-lum-text">
        <RouterOutlet />
      </body>
    </QwikRouterProvider>
  );
});

const defaultDescription =
  'AcornMC is a Minecraft server focused on providing a high-quality, vanilla-like experience with a strong emphasis on community and player choice. Join us for a unique Minecraft adventure!';

export function generateHead({
  title = 'Acorn - Minecraft as it should be.',
  description = defaultDescription,
  image = '/favicon.png',
  head = {},
}: {
  title?: string;
  description?: string;
  image?: string;
  head?: Partial<DocumentHeadValue>;
}): DocumentHead {
  return {
    ...head,
    title,
    meta: [
      {
        name: 'description',
        content: description,
      },
      {
        name: 'og:description',
        content: description,
      },
      {
        name: 'og:image',
        content: image,
      },
      ...(head.meta ?? []),
    ],
    scripts: [...(head.scripts ?? [])],
  };
}
