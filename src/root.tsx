import { component$ } from '@qwik.dev/core';
import {
  DocumentHead,
  DocumentHeadTags,
  DocumentHeadValue,
  RouterOutlet,
  useLocation,
  useQwikRouter,
} from '@qwik.dev/router';

import './global.css';

export default component$(() => {
  useQwikRouter();
  const { url } = useLocation();

  /**
   * This is the root of a QwikRouter site. It contains the document's `<head>` and `<body>`. You can adjust them as you see fit.
   */

  return (
    <>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta content="#5CBDF4" name="theme-color" />

        <link rel="icon" type="image/png" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/favicon.png" />

        <DocumentHeadTags />

        <link rel="canonical" href={url.href} />
      </head>
      <body lang="en" class="text-lum-text">
        <RouterOutlet />
      </body>
    </>
  );
});

const defaultDescription = 'AcornMC is a Minecraft server focused on providing a high-quality, vanilla-like experience with a strong emphasis on community and player choice. Join us for a unique Minecraft adventure!';

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
    scripts: [
      ...(head.scripts ?? []),
    ],
  };
}