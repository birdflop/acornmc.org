import { component$ } from '@qwik.dev/core';
import { generateHead } from '~/root';

// @ts-ignore
import Background from '~/components/images/shops.png?jsx&format=avif&w=1280;1920;2560;3840';

import Bulk from '~/components/images/shops/bulk.png?jsx';
import Combined from '~/components/images/shops/combined.png?jsx';
import Example from '~/components/images/shops/example.png?jsx';
import Free from '~/components/images/shops/free.png?jsx';
import Locations from '~/components/images/shops/locations.png?jsx';
import Sign from '~/components/images/shops/sign.png?jsx';

export default component$(() => {
  return <>
    <Background id="bg" alt="Background" class={{
      'fixed scale-105 top-0 brightness-85 saturate-85 sepia-15 dark:opacity-50 blur-none overflow-hidden -z-10 w-lvw h-[50lvh] object-cover': true,
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
              Shops
            </span>
          </h1>
        </div>
      </div>
    </section>
    <div class="bg-bg border-t border-lum-border/10">
      <section class="grid grid-cols-3 justify-center gap-12 p-10 pt-20 max-w-7xl mx-auto">
        <div class="flex flex-col gap-6 col-span-2">
          <h3 class="font-extrabold text-5xl">
            How to create a <span class="text-transparent"
              style={{
                background: 'linear-gradient(135deg, #3b74ff, #7AFFEA)',
                backgroundClip: 'text',
              }}>
              ChestShop
            </span>
          </h3>
          <ul class="list-decimal text-lum-text-secondary ml-4">
            <li>
              Go to the location you would like to build the chestshop. This can be in any survival world.
            </li>
            <li>
              Fill an empty chest with the item you want to sell.
            </li>
            <li>
              Shift and right-click to place a sign on the chest, or place the sign above the chest.
            </li>
            <li>
              Write the quantity on the second line.
            </li>
            <li>
              On the third line, type a B if you'd like people to buy items from you or an S if you want people to sell items to you. Include the price without a currency sign after typing the B/S.
            </li>
            <li>
              Write ? on the fourth line, it will automatically be updated with the name of the item when you're done.
            </li>
            <li>
              Close the sign gui and you are done! The first line will autofill with your name if the shop was created successfully.
            </li>
            <li>
              (Optional) Setting a warp to your shop will help players find your shop and buy from it. To create a warp, type /iwarp create [warp name] [days]. You will be charged $100 per day for warp maintenance. For more information on warps, please click here.
            </li>
          </ul>
        </div>
        <div class="flex flex-col gap-6">
          <Sign class="w-full rounded-lum" />
          <Example class="w-full rounded-lum" />
        </div>
        <div class="col-span-3">
          <h3 class="font-extrabold text-5xl mb-6">
            Advanced Chestshops
          </h3>
          <div class="flex gap-3" style={{
            '--lum-border-radius': '1.5rem',
          }}>
            <div class="lum-card lum-grad-bg-lum-card-bg/50 p-4">
              <Locations class="w-full rounded-lum-4" />
              <p class="font-bold text-lg mt-2">
                Sign Locations
              </p>
              <p class="text-lum-text-secondary">
                You can place shop signs anywhere around the sign. The above example shows just one of the many locations you can place them.
              </p>
            </div>
            <div class="lum-card lum-grad-bg-lum-card-bg/50 p-4">
              <Free class="w-full rounded-lum-4" />
              <p class="font-bold text-lg mt-2">
                Free Shops
              </p>
              <p class="text-lum-text-secondary">
                You can make a shop that gives items for free by typing B FREE on the third line.
                You can also make a donation shop where players can donate you items by typing S FREE on the third line.
              </p>
            </div>
            <div class="lum-card lum-grad-bg-lum-card-bg/50 p-4">
              <Bulk class="w-full rounded-lum-4" />
              <p class="font-bold text-lg mt-2">
                Bulk Sales
              </p>
              <p class="text-lum-text-secondary">
                You can put any integer number on the quantity line. You can use this to sell multiple stacks at a time.
              </p>
            </div>
            <div class="lum-card lum-grad-bg-lum-card-bg/50 p-4">
              <Combined class="w-full rounded-lum-4" />
              <p class="font-bold text-lg mt-2">
                Combined Shops
              </p>
              <p class="text-lum-text-secondary">
                You can make a buy and sell shop using just one sign. On the third line type B, then input the price that people can buy items from you for.
                Add a colon to separate this buy price from a sell price. Add a sell price, then add an S to signify that players can sell items to you for that amount.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </>;
});

export const head = generateHead({});
