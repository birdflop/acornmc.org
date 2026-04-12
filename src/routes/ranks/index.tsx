import { component$ } from '@qwik.dev/core';
import { DocumentHead } from '@qwik.dev/router';

// @ts-ignore
import Background from '~/components/images/ranks.png?jsx&format=avif&w=1280;1920;2560;3840';
import * as Ranks from '~/components/ranks';

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
            'animate-in fade-in motion-safe:slide-in-from-top-16 motion-safe:anim-duration-600': true,
          }}>
            <span class="text-transparent"
              style={{
                background: 'linear-gradient(135deg, #3b74ff, #7AFFEA)',
                backgroundClip: 'text',
              }}>
              Ranks
            </span>
          </h1>
        </div>
      </div>
    </section>
    <div class="bg-bg border-t border-lum-border/10">
      <section class="flex flex-col min-h-screen justify-center pt-20 max-w-6xl mx-auto">
        <div class="grid gap-2 sm:grid-cols-2 lg:grid-cols-4 mb-5">
          <div class="lum-card lum-grad-bg-lum-card-bg/20 duration-200! relative overflow-clip">
            <Ranks.zombie width={720} height={720} class="absolute w-full h-full inset-0 object-cover -z-1 blur-xl scale-150 saturate-200 opacity-20" />
            <div class="flex items-center gap-4">
              <Ranks.zombie class="w-12 h-auto" />
              <div>
                <h3 class="flex items-center gap-2 font-bold text-2xl">
                  Zombie
                </h3>
                <p class="text-lum-text-secondary">
                  Starter Rank
                </p>
              </div>
            </div>
            <h4>Perks</h4>
            <p class="text-lum-text-secondary">3 Homes</p>
            <p class="text-lum-text-secondary">1 Creative Plot</p>
            <p class="text-lum-text-secondary">1 Auction House Slot</p>
            <h4>Claim Flags</h4>
            <p class="text-lum-text-secondary">noenter</p>
            <p class="text-lum-text-secondary">noenterplayer</p>
          </div>
          <div class="lum-card lum-grad-bg-lum-card-bg/20 duration-200! relative overflow-clip">
            <Ranks.husk width={720} height={720} class="absolute w-full h-full inset-0 object-cover -z-1 blur-xl scale-150 saturate-200 opacity-20" />
            <div class="flex items-center gap-4">
              <Ranks.husk class="w-12 h-auto" />
              <div>
                <h3 class="flex items-center gap-2 font-bold text-2xl">
                  Husk
                </h3>
                <p class="text-lum-text-secondary">
                  10 votes
                </p>
              </div>
            </div>
            <h4>Perks</h4>
            <p class="text-lum-text-secondary">6 Homes</p>
            <p class="text-lum-text-secondary">2 Creative Plots</p>
            <p class="text-lum-text-secondary">/suicide</p>
            <h4>Claim Flags</h4>
            <p class="text-lum-text-secondary">trappeddestination</p>
          </div>
          <div class="lum-card lum-grad-bg-lum-card-bg/20 duration-200! relative overflow-clip">
            <Ranks.drowned width={720} height={720} class="absolute w-full h-full inset-0 object-cover -z-1 blur-xl scale-150 saturate-200 opacity-20" />
            <div class="flex items-center gap-4">
              <Ranks.drowned class="w-12 h-auto" />
              <div>
                <h3 class="flex items-center gap-2 font-bold text-2xl">
                  Drowned
                </h3>
                <p class="text-lum-text-secondary">
                  25 votes
                </p>
              </div>
            </div>
            <h4>Perks</h4>
            <p class="text-lum-text-secondary">9 Homes</p>
            <p class="text-lum-text-secondary">3 Creative Plots</p>
            <h4>Claim Flags</h4>
            <p class="text-lum-text-secondary">nofluidflow</p>
          </div>
          <div class="lum-card lum-grad-bg-lum-card-bg/20 duration-200! relative overflow-clip">
            <Ranks.skeleton width={720} height={720} class="absolute w-full h-full inset-0 object-cover -z-1 blur-xl scale-150 saturate-200 opacity-20" />
            <div class="flex items-center gap-4">
              <Ranks.skeleton class="w-12 h-auto" />
              <div>
                <h3 class="flex items-center gap-2 font-bold text-2xl">
                  Skeleton
                </h3>
                <p class="text-lum-text-secondary">
                  50 votes
                </p>
              </div>
            </div>
            <h4>Perks</h4>
            <p class="text-lum-text-secondary">12 Homes</p>
            <p class="text-lum-text-secondary">4 Creative Plots</p>
            <p class="text-lum-text-secondary">/nick</p>
            <p class="text-lum-text-secondary">/hat</p>
          </div>
          <div class="lum-card lum-grad-bg-lum-card-bg/20 duration-200! relative overflow-clip">
            <Ranks.stray width={720} height={720} class="absolute w-full h-full inset-0 object-cover -z-1 blur-xl scale-150 saturate-200 opacity-20" />
            <div class="flex items-center gap-4">
              <Ranks.stray class="w-12 h-auto" />
              <div>
                <h3 class="flex items-center gap-2 font-bold text-2xl">
                  Stray
                </h3>
                <p class="text-lum-text-secondary">
                  100 votes
                </p>
              </div>
            </div>
            <h4>Perks</h4>
            <p class="text-lum-text-secondary">15 Homes</p>
            <p class="text-lum-text-secondary">5 Creative Plots</p>
            <p class="text-lum-text-secondary">/craft</p>
            <h4>Claim Flags</h4>
            <p class="text-lum-text-secondary">noitemdrop</p>
            <p class="text-lum-text-secondary">nomobspawntype PHANTOM</p>
          </div>
          <div class="lum-card lum-grad-bg-lum-card-bg/20 duration-200! relative overflow-clip">
            <Ranks.spider width={720} height={720} class="absolute w-full h-full inset-0 object-cover -z-1 blur-xl scale-150 saturate-200 opacity-20" />
            <div class="flex items-center gap-4">
              <Ranks.spider class="w-12 h-auto" />
              <div>
                <h3 class="flex items-center gap-2 font-bold text-2xl">
                  Spider
                </h3>
                <p class="text-lum-text-secondary">
                  250 votes
                </p>
              </div>
            </div>
            <h4>Perks</h4>
            <p class="text-lum-text-secondary">18 Homes</p>
            <p class="text-lum-text-secondary">6 Creative Plots</p>
            <h4>Claim Flags</h4>
            <p class="text-lum-text-secondary">exitmessage</p>
            <p class="text-lum-text-secondary">entermessage</p>
            <p class="text-lum-text-secondary">noelytra</p>
          </div>
          <div class="lum-card lum-grad-bg-lum-card-bg/20 duration-200! relative overflow-clip">
            <Ranks.creeper width={720} height={720} class="absolute w-full h-full inset-0 object-cover -z-1 blur-xl scale-150 saturate-200 opacity-20" />
            <div class="flex items-center gap-4">
              <Ranks.creeper class="w-12 h-auto" />
              <div>
                <h3 class="flex items-center gap-2 font-bold text-2xl">
                  Creeper
                </h3>
                <p class="text-lum-text-secondary">
                  500 votes
                </p>
              </div>
            </div>
            <h4>Perks</h4>
            <p class="text-lum-text-secondary">21 Homes</p>
            <p class="text-lum-text-secondary">7 Creative Plots</p>
            <p class="text-lum-text-secondary">/ptime</p>
            <p class="text-lum-text-secondary">/pweather</p>
            <h4>Claim Flags</h4>
            <p class="text-lum-text-secondary">novehicle</p>
            <p class="text-lum-text-secondary">playertime</p>
            <p class="text-lum-text-secondary">playerweather</p>
          </div>
          <div class="lum-card lum-grad-bg-lum-card-bg/20 duration-200! relative overflow-clip">
            <Ranks.phantom width={720} height={720} class="absolute w-full h-full inset-0 object-cover -z-1 blur-xl scale-150 saturate-200 opacity-20" />
            <div class="flex items-center gap-4">
              <Ranks.phantom class="w-12 h-auto" />
              <div>
                <h3 class="flex items-center gap-2 font-bold text-2xl">
                  Phantom
                </h3>
                <p class="text-lum-text-secondary">
                  1000 votes
                </p>
              </div>
            </div>
            <h4>Perks</h4>
            <p class="text-lum-text-secondary">24 Homes</p>
            <p class="text-lum-text-secondary">8 Creative Plots</p>
            <p class="text-lum-text-secondary">/rest</p>
            <h4>Claim Flags</h4>
            <p class="text-lum-text-secondary">keepinventory</p>
            <p class="text-lum-text-secondary">keeplevel</p>
            <p class="text-lum-text-secondary">nohunger</p>
          </div>
          <div class="lum-card lum-grad-bg-lum-card-bg/20 duration-200! relative overflow-clip">
            <Ranks.wither width={720} height={720} class="absolute w-full h-full inset-0 object-cover -z-1 blur-xl scale-150 saturate-200 opacity-20" />
            <div class="flex items-center gap-4">
              <Ranks.wither class="w-12 h-auto" />
              <div>
                <h3 class="flex items-center gap-2 font-bold text-2xl">
                  Wither
                </h3>
                <p class="text-lum-text-secondary">
                  2000 votes
                </p>
              </div>
            </div>
            <h4>Perks</h4>
            <p class="text-lum-text-secondary">27 Homes</p>
            <p class="text-lum-text-secondary">9 Creative Plots</p>
            <h4>Claim Flags</h4>
            <p class="text-lum-text-secondary">changebiome</p>
            <p class="text-lum-text-secondary">noenderpearl</p>
            <p class="text-lum-text-secondary">noflight</p>
            <p class="text-lum-text-secondary">ownerfly</p>
            <p class="text-lum-text-secondary">ownermemberfly (/fly in claims)</p>
          </div>
          <div class="lum-card lum-grad-bg-lum-card-bg/20 duration-200! relative overflow-clip">
            <Ranks.warden width={720} height={720} class="absolute w-full h-full inset-0 object-cover blur-xl scale-150 saturate-200 opacity-20" />
            <div class="flex items-center gap-4">
              <Ranks.warden class="w-12 h-auto" />
              <div>
                <h3 class="flex items-center gap-2 font-bold text-2xl">
                  Warden
                </h3>
                <p class="text-lum-text-secondary">
                  4000 votes
                </p>
              </div>
            </div>
            <h4>Perks</h4>
            <p class="text-lum-text-secondary">30 Homes</p>
            <p class="text-lum-text-secondary">10 Creative Plots</p>
            <p class="text-lum-text-secondary">/nick formatting</p>
            <p class="text-lum-text-secondary">/enderchest</p>
            <p class="text-lum-text-secondary">/condense</p>
          </div>
        </div>
      </section>
    </div>
  </>;
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
