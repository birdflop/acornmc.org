import { component$ } from '@qwik.dev/core';

// @ts-ignore
import Background from '~/components/images/forms.png?jsx&format=avif&w=1280;1920;2560;3840';
import { generateHead } from '~/root';

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
              Forms
            </span>{' '}
          </h1>
        </div>
      </div>
    </section>
    <div class="bg-bg border-t border-lum-border/10">
      <section class="flex justify-center gap-12 w-full p-10 pt-20">
        <div class="flex flex-col gap-6 max-w-xl">
          <h3 class="font-extrabold text-5xl">
            Ban <span class="text-transparent"
              style={{
                background: 'linear-gradient(135deg, #3b74ff, #7AFFEA)',
                backgroundClip: 'text',
              }}>
                Appeals
            </span>
          </h3>
          <p class="text-lum-text-secondary">
            When you vote for Acorn, you are helping the community grow by pushing Acorn higher on the top server lists.
            When this happens, more players join Acorn. Some of those players could become a great part of our community.
            Some of those players may even donate to the server, helping pay the costs to run Acorn.
          </p>
          <p class="text-lum-text-secondary">
            As a thank you for voting, we give players a crate key. You can use the crate key at warp crates to get money,
            claim blocks, and even rare items. We also give players a vote point which can be used in the vote shop to buy cool perks.
            Voting is also an important factor in ranking up. Our ranks are based on the number of votes you have.
            More votes leads to a higher rank which has more perks of its own. We also give a bonus crate key for voting 4 times in one day.
            Vote using the buttons at the top of the page.
          </p>
          <h3 class="font-extrabold text-3xl">
            Why do we give appealable bans instead of tempbans?
          </h3>
          <p class="text-lum-text-secondary">
            There are a few reasons to this. First, we want to see that you actually are interested in returning.
            Only people who actually are interested in returning will spend the time required to write an appeal.
            Second, we want to make sure that the players who do return understand what they did wrong.
            The questions we ask help us assess your understanding of this.
            Finally, in the case of some bans, we need to prepare for you to return.
          </p>
        </div>
        <div class="flex flex-col gap-6 max-w-xl">
          <h3 class="font-extrabold text-5xl">
            <span class="text-transparent"
              style={{
                background: 'linear-gradient(135deg, #3b74ff, #7AFFEA)',
                backgroundClip: 'text',
              }}>
                Trainee
            </span>
          </h3>
          <p class="text-lum-text-secondary">
            Submit this form to apply for the trainee position. You must be at least Stray rank to apply.
          </p>
          <p class="text-lum-text-secondary">
            Do not remind staff to check your application.
            You will be automatically promoted when you log in if your application has been accepted.
            If you want to change your application, resubmit the form.
          </p>
          <p class="text-lum-text-secondary">
            We don't reject staff applications, so we cannot notify you of it being rejected.
            Instead, we place all applications into a pool.
            When we need staff, we pick the best candidates in that pool.
            Re-applying every month, even if it's the same application, can increase your chances of being selected.
            It may take up to two months for an application to be accepted.
          </p>
        </div>
      </section>
    </div>
  </>;
});

export const head = generateHead({});
