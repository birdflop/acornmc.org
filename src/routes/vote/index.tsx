import { component$ } from '@qwik.dev/core';

// @ts-expect-error vite-imagetools
import Background from '~/components/images/vote.png?jsx&format=avif&w=1280;1920;2560;3840';

import MCSL from '~/components/images/vote/mcsl.png?jsx';
import MCSO from '~/components/images/vote/mcso.png?jsx';
import MCMP from '~/components/images/vote/mcmp.png?jsx';
import TMCS from '~/components/images/vote/tmcs.png?jsx';
import Gauge from 'lucide-icons-qwik/icons/Gauge';
import Road from 'lucide-icons-qwik/icons/Road';
import { voteLinks } from './all';
import { generateHead } from '~/root';

export default component$(() => {
  return (
    <>
      <Background
        id="bg"
        alt="Background"
        class={{
          'fixed top-0 -z-10 h-[50lvh] w-lvw scale-105 overflow-hidden object-cover blur-none brightness-85 saturate-85 sepia-15 dark:opacity-50': true,
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
                Vote
              </span>{' '}
              for Acorn!
            </h1>
          </div>
          <div class="mt-12 flex flex-wrap items-center justify-center gap-2">
            <a
              href="https://minecraft-server-list.com/server/413910/vote/"
              target="_blank"
              class="lum-btn xl:lum-btn-p-4 lum-grad-bg-lum-input-bg/20 animate-in fade-in motion-safe:slide-in-from-top-16 text-lg backdrop-blur-sm motion-safe:duration-800"
            >
              <MCSL height={24} width={24} class="h-6 w-auto" />
              MCSL
            </a>
            <a
              href="https://minecraftservers.org/vote/460247"
              target="_blank"
              class="lum-btn xl:lum-btn-p-4 lum-grad-bg-lum-input-bg/20 animate-in fade-in motion-safe:slide-in-from-top-16 text-lg backdrop-blur-sm motion-safe:duration-800"
            >
              <MCSO height={24} width={24} class="h-6 w-auto" />
              MCSO
            </a>
            <a
              href="https://minecraft-mp.com/server/174434/vote/"
              target="_blank"
              class="lum-btn xl:lum-btn-p-4 lum-grad-bg-lum-input-bg/20 animate-in fade-in motion-safe:slide-in-from-top-16 text-lg backdrop-blur-sm motion-safe:duration-800"
            >
              <MCMP height={24} width={24} class="h-6 w-auto" />
              MCMP
            </a>
            <a
              href="https://topminecraftservers.org/vote/29272"
              target="_blank"
              class="lum-btn xl:lum-btn-p-4 lum-grad-bg-lum-input-bg/20 animate-in fade-in motion-safe:slide-in-from-top-16 text-lg backdrop-blur-sm motion-safe:duration-800"
            >
              <TMCS height={24} width={24} class="h-6 w-auto" />
              TMCS
            </a>
          </div>
          <h1 class="mt-20 mb-2 flex items-center gap-2 text-2xl font-extrabold">
            <Gauge size={32} />
            Fast-vote
          </h1>
          <p class="text-lum-text-secondary">
            Fast-vote will let you open all the vote sites at once in separate
            tabs.
            <br />
            <span class="text-red-500">
              You must allow pop-ups in your browser for it to function
              properly.
            </span>
          </p>

          <div class="mt-6 flex flex-wrap gap-2">
            <button
              onClick$={() => {
                for (const link of voteLinks) {
                  window.open(link, '_blank');
                }
              }}
              class="lum-btn xl:lum-btn-p-4 lum-grad-bg-lum-input-bg/20 animate-in fade-in motion-safe:slide-in-from-top-16 text-lg backdrop-blur-sm motion-safe:duration-800"
            >
              <Road size={32} />
              Open vote sites
            </button>
          </div>
        </div>
      </section>
      <div class="bg-bg border-lum-border/10 border-t">
        <section class="flex w-full justify-center gap-12 p-10 pt-20">
          <div class="flex max-w-xl flex-col gap-6">
            <h3 class="text-5xl font-extrabold">
              Why{' '}
              <span
                class="text-transparent"
                style={{
                  background: 'linear-gradient(135deg, #3b74ff, #7AFFEA)',
                  backgroundClip: 'text',
                }}
              >
                vote?
              </span>
            </h3>
            <p class="text-lum-text-secondary">
              When you vote for Acorn, you are helping the community grow by
              pushing Acorn higher on the top server lists. When this happens,
              more players join Acorn. Some of those players could become a
              great part of our community. Some of those players may even donate
              to the server, helping pay the costs to run Acorn.
            </p>
            <p class="text-lum-text-secondary">
              As a thank you for voting, we give players a crate key. You can
              use the crate key at warp crates to get money, claim blocks, and
              even rare items. We also give players a vote point which can be
              used in the vote shop to buy cool perks. Voting is also an
              important factor in ranking up. Our ranks are based on the number
              of votes you have. More votes leads to a higher rank which has
              more perks of its own. We also give a bonus crate key for voting 4
              times in one day. Vote using the buttons at the top of the page.
            </p>
          </div>
          <div class="flex max-w-xl flex-col gap-6">
            <h3 class="text-5xl font-extrabold">Voting problems?</h3>
            <p class="text-lum-text-secondary">
              Sometimes voting sites may tell you that you have already voted
              today. This could be caused by either of the following:
            </p>
            <ul class="text-lum-text-secondary ml-4 list-disc">
              <li>
                Someone has voted on that voting site today using your IP. This
                often happens when siblings who share the same wifi vote at the
                same time. Voting sites only allow for 1 vote per day from each
                IP address. If this is the case, you may want to consider voting
                with your mobile data rather than with wifi.
              </li>
              <li>
                You voted for another server on the voting site today. Voting
                sites only allow for 1 vote per day from each player. If this is
                the case, you may need to consider which server you want to use
                your vote on. Note that this problem only seems to occur on
                MCSO.
              </li>
            </ul>
            <p class="text-lum-text-secondary">
              Sometimes voting sites may tell you that the vote was registered,
              but the vote was never counted on Acorn. If this seems to be the
              case, take the following actions:
            </p>
            <ul class="text-lum-text-secondary ml-4 list-disc">
              <li>
                Check to make sure that the vote didn't reach Acorn. /votelast
                will tell you how long ago your last vote was. If you believe
                it's not representing your most recent vote, continue to the
                next bullet point
              </li>
              <li>
                Check to make sure that you didn't vote when the server was
                down. Acorn cannot register votes while the server is offline or
                restarting. You can check how long the server has been online in
                the channel description of the #global channel in the Discord.
              </li>
              <li>
                Check to make sure that we have not posted any announcements
                about this recently. If voting is going to be offline for a
                certain period of time, we will post an announcement about it.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
});

export const head = generateHead({});
