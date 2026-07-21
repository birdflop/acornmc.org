import { Sidebar } from '@luminescent/ui-qwik';
import { component$, Slot } from '@qwik.dev/core';
import { useLocation } from '@qwik.dev/router';
import { generateHead } from '~/root';
import Book from 'lucide-icons-qwik/icons/Book';

// @ts-expect-error vite-imagetools
import Background from '~/components/images/docs.png?jsx&format=avif&w=1280;1920;2560;3840';
import { MenuItems } from '~/components/docs/Menuitems';
import { buildMenu } from '~/components/docs/buildMenu';
import { helpManifest } from './manifest';

export default component$(() => {
  const { url } = useLocation();
  const currentPath = url.pathname.endsWith('/')
    ? url.pathname
    : `${url.pathname}/`;
  const currentItem = Object.entries(helpManifest).find(([k]) => {
    return currentPath === k;
  });
  const title = currentItem ? currentItem[1].title : 'Docs';

  const menuItems = buildMenu(helpManifest);

  return (
    <div class="flex min-h-dvh items-stretch lg:pl-0 xl:pr-0">
      <Sidebar>
        <h3 q:slot="title" class="flex items-center gap-2 text-lg font-bold">
          <Book />
          Documentation
        </h3>
        {menuItems.length > 0 ? (
          <MenuItems
            items={menuItems}
            pathname={url.pathname}
            markdownItems={helpManifest}
          />
        ) : (
          <div class="py-4 text-center">
            <p>No documentation found</p>
            <p class="mt-2 text-sm">
              Add markdown files to your help directory
            </p>
          </div>
        )}
      </Sidebar>
      <div class="relative flex-1">
        <Background
          id="bg"
          alt="Background"
          class={{
            'absolute top-0 -z-10 h-[50lvh] w-lvw scale-105 overflow-hidden object-cover blur-none brightness-85 saturate-85 sepia-15 dark:opacity-50': true,
          }}
        />
        <section
          class="relative flex min-h-[50svh] justify-center overflow-hidden"
          style={{
            '--lum-border-radius': '1.5rem',
          }}
        >
          <div
            id="hero"
            class="flex w-full max-w-5xl flex-col items-center justify-center px-20 pt-18 text-gray-100 xl:max-w-6xl 2xl:max-w-7xl"
          >
            <div class="relative flex flex-col gap-4 xl:gap-8">
              <div class="absolute -inset-4 rounded-4xl blur-lg backdrop-blur-md" />
              <h1
                class={{
                  'text-center text-6xl font-extrabold drop-shadow-lg xl:text-7xl': true,
                  'animate-in fade-in motion-safe:slide-in-from-top-16 motion-safe:duration-600': true,
                }}
              >
                <span
                  class="text-transparent"
                  style={{
                    background: 'linear-gradient(135deg, #3b74ff, #7AFFEA)',
                    backgroundClip: 'text',
                  }}
                >
                  {title}
                </span>{' '}
              </h1>
            </div>
          </div>
        </section>
        <div class="bg-bg border-lum-border/10 border-t">
          <section class="markdown mx-auto flex max-w-5xl flex-col gap-6 p-10 pt-20">
            <Slot />
          </section>
        </div>
      </div>
    </div>
  );
});

export const head = generateHead({});
