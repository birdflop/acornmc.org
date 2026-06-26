import { Sidebar } from '@luminescent/ui-qwik';
import { component$, Slot } from '@qwik.dev/core';
import { routeLoader$, useLocation } from '@qwik.dev/router';
import { generateHead } from '~/root';
import Book from 'lucide-icons-qwik/icons/Book';

// @ts-ignore
import Background from '~/components/images/docs.png?jsx&format=avif&w=1280;1920;2560;3840';
import { MenuItems } from '~/components/docs/Menuitems';
import { buildMenu } from '~/components/docs/buildMenu';

type MDX = {
  title: string;
  contributors?: string[];
  created_at?: string;
  updated_at?: string;
};

export type MarkdownItems = Record<string, MDX>;

export const getMarkdownItems = async () => {
  const rawData = await Promise.all(
    Object.entries(import.meta.glob<{ frontmatter?: MDX }>('/src/routes/help/**/*.{md,mdx}')).map(
      async ([k, v]) => {
        return [
          k
            .replace('/src/routes', '')
            .replace('index.mdx', '')
            .replace('index.md', ''),
          await v(),
        ] as const;
      },
    ),
  );

  const markdownItems: MarkdownItems = {};
  rawData.forEach(([k, v]) => {
    // skip marksdown cheatsheet and extras
    if (k.includes('extras')) return;
    if (v.frontmatter) {
      markdownItems[k] = {
        title: v.frontmatter.title,
        contributors: v.frontmatter.contributors,
        created_at: v.frontmatter.created_at,
        updated_at: v.frontmatter.updated_at,
      };
    }
  });
  return markdownItems;
};

export const useMarkdownItems = routeLoader$(() => getMarkdownItems());

export default component$(() => {
  const markdownItems = useMarkdownItems();
  const { url } = useLocation();
  const currentPath = url.pathname;
  const currentItem = Object.entries(markdownItems.value).find(([k]) => {
    return currentPath == k;
  });
  const title = currentItem ? currentItem[1].title : 'Docs';

  const menuItems = buildMenu(markdownItems.value);

  return <div class="flex items-stretch lg:pl-0 xl:pr-0 min-h-dvh">
    <Sidebar>
      <h3 q:slot="title" class="flex items-center gap-2 text-lg font-bold">
        <Book />
        Documentation
      </h3>
      {menuItems.length > 0 ? (
        <MenuItems
          items={menuItems}
          pathname={url.pathname}
          markdownItems={markdownItems.value}
        />
      ) : (
        <div class="py-4 text-center">
          <p>No documentation found</p>
          <p class="mt-2 text-sm">Add markdown files to your help directory</p>
        </div>
      )}
    </Sidebar>
    <div class="relative flex-1">
      <Background id="bg" alt="Background" class={{
        'absolute scale-105 top-0 brightness-85 saturate-85 sepia-15 dark:opacity-50 blur-none overflow-hidden -z-10 w-lvw h-[50lvh] object-cover': true,
      }}/>
      <section class="min-h-[50svh] flex justify-center relative overflow-hidden"
        style={{
          '--lum-border-radius': '1.5rem',
        }}>
        <div id="hero" class="flex flex-col text-gray-100 px-20 items-center justify-center pt-18 max-w-5xl xl:max-w-6xl 2xl:max-w-7xl w-full">
          <div class="relative flex flex-col gap-4 xl:gap-8">
            <div class="absolute -inset-4 blur-lg backdrop-blur-md rounded-4xl" />
            <h1 class={{
              'text-6xl xl:text-7xl font-extrabold drop-shadow-lg text-center': true,
              'animate-in fade-in motion-safe:slide-in-from-top-16 motion-safe:duration-600': true,
            }}>
              <span class="text-transparent"
                style={{
                  background: 'linear-gradient(135deg, #3b74ff, #7AFFEA)',
                  backgroundClip: 'text',
                }}>
                {title}
              </span>{' '}
            </h1>
          </div>
        </div>
      </section>
      <div class="bg-bg border-t border-lum-border/10">
        <section class="flex flex-col gap-6 max-w-5xl mx-auto p-10 pt-20 markdown">
          <Slot />
        </section>
      </div>
    </div>
  </div>;
});

export const head = generateHead({});
