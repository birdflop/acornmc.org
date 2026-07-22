import { component$ } from '@qwik.dev/core';
import { useDocumentHead, useLocation } from '@qwik.dev/router';

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
export const RouterHead = component$(() => {
  const head = useDocumentHead();
  const loc = useLocation();

  return (
    <>
      <title>{`${head.title}`}</title>
      <meta content={`${head.title}`} property="og:title" />
      <meta content="#5CBDF4" name="theme-color" />
      <meta content="/favicon.png" property="og:image" />

      <link
        rel="preload"
        as="font"
        href="/fonts/MinecraftRegular.woff"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href="/fonts/MinecraftBold.woff"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href="/fonts/MinecraftItalic.woff"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href="/fonts/MinecraftBoldItalic.woff"
        crossOrigin="anonymous"
      />

      <link rel="canonical" href={loc.url.href} />
      <link rel="icon" type="image/png" href="/favicon.svg" />
      <link rel="apple-touch-icon" href="/favicon.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {head.meta.map((m, i) => (
        <meta {...m} key={i} />
      ))}

      {head.links.map((l, i) => (
        <link {...l} key={i} />
      ))}

      {head.styles.map((s, i) => (
        <style {...s.props} key={i} dangerouslySetInnerHTML={s.style} />
      ))}

      {head.scripts.map((s, i) => (
        <script {...s.props} key={i} dangerouslySetInnerHTML={s.script} />
      ))}
    </>
  );
});
