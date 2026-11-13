import { component$, Slot, useSignal } from '@qwik.dev/core';
import { routeLoader$, useLocation } from '@qwik.dev/router';
import { generateHead } from '~/root';
import { getDocsMetadata } from '~/components/docs/feed';
import { Breadcrumbs } from '~/components/docs/Breadcrumbs';
import { DocsSidebar } from '~/components/docs/SideBar';
import Contributors from '~/components/docs/Contributors';
import { OnThisPage } from '~/components/docs/ThisPage';

export const useMarkdownItems = routeLoader$(() => getDocsMetadata());

export default component$(() => {
  const sideMenuOpen = useSignal(false);
  const markdownItems = useMarkdownItems();
  const { url } = useLocation();
  const currentPath = `${url.pathname.replace(/\/$/, '')}/`;
  const currentItem = Object.entries(markdownItems.value).find(([k]) => {
    return currentPath == k;
  });
  const title = currentItem ? currentItem[1].title : 'Docs';
  return (
    <div class="min-h-dvh pt-20 lg:pl-[calc(100%/6+3rem)] xl:pr-[calc(100%/6+3rem)]">
      <DocsSidebar sideMenuOpen={sideMenuOpen} />
      <Breadcrumbs sideMenuOpen={sideMenuOpen} />
      <main class="markdown mx-auto w-full max-w-4xl min-w-0 px-4 pt-24 pb-24 sm:px-6">
        <article class="docs-content min-w-0 wrap-break-word [&_h2]:scroll-mt-24 [&_h3]:scroll-mt-24 [&_pre]:max-w-full [&_pre]:overflow-x-auto">
          <h1 class="border-b border-gray-700 pb-4 text-center font-bold">
            {title}
          </h1>
          <Slot />
          <Contributors />
        </article>
      </main>
      <OnThisPage />
    </div>
  );
});

export const head = generateHead({});
