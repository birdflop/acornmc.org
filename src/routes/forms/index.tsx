import { component$ } from '@qwik.dev/core';

// @ts-expect-error vite-imagetools
import Background from '~/components/images/forms.png?jsx&format=avif&w=1280;1920;2560;3840';
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
                Forms
              </span>{' '}
            </h1>
          </div>
        </div>
      </section>
      <div class="bg-bg border-lum-border/10 border-t">
        <section class="flex w-full justify-center gap-12 p-10 pt-20">
          <div class="flex max-w-xl flex-col gap-6">
            <h3 class="text-5xl font-extrabold">
              Ban{' '}
              <span
                class="text-transparent"
                style={{
                  background: 'linear-gradient(135deg, #3b74ff, #7AFFEA)',
                  backgroundClip: 'text',
                }}
              >
                Appeals
              </span>
            </h3>
            <p class="text-lum-text-secondary">
              Submit{' '}
              <a
                href="https://goo.gl/forms/bFHaoHEduOCYTTkH3"
                class="text-blue-400 hover:text-blue-300"
              >
                this form
              </a>{' '}
              to appeal your ban. It could take 1-2 days for us to review your
              appeal. While your appeal is being reviewed, do not remind staff
              to check your appeal. To check the status of your ban appeal, or
              to read other players' appeals, view this spreadsheet. If your
              appeal is initially denied, you can re-appeal, but please wait 7
              days before posting a new appeal.{' '}
            </p>
            <h3 class="text-3xl font-extrabold">
              Why do we give appealable bans instead of tempbans?
            </h3>
            <p class="text-lum-text-secondary">
              There are a few reasons to this. First, we want to see that you
              actually are interested in returning. Only people who actually are
              interested in returning will spend the time required to write an
              appeal. Second, we want to make sure that the players who do
              return understand what they did wrong. The questions we ask help
              us assess your understanding of this. Finally, in the case of some
              bans, we need to prepare for you to return.
            </p>
          </div>
          <div class="flex max-w-xl flex-col gap-6">
            <h3 class="text-5xl font-extrabold">
              <span
                class="text-transparent"
                style={{
                  background: 'linear-gradient(135deg, #3b74ff, #7AFFEA)',
                  backgroundClip: 'text',
                }}
              >
                Trainee
              </span>
            </h3>
            <p class="text-lum-text-secondary">
              Submit{' '}
              <a
                href="https://forms.gle/a6p7hoyr2Ndv7Ym2A"
                class="text-blue-400 hover:text-blue-300"
              >
                this form
              </a>{' '}
              to apply for the trainee position. You must be at least Stray rank
              to apply.
            </p>
            <p class="text-lum-text-secondary">
              Do not remind staff to check your application. You will be
              automatically promoted when you log in if your application has
              been accepted. If you want to change your application, resubmit
              the form.
            </p>
            <p class="text-lum-text-secondary">
              We don't reject staff applications, so we cannot notify you of it
              being rejected. Instead, we place all applications into a pool.
              When we need staff, we pick the best candidates in that pool.
              Re-applying every month, even if it's the same application, can
              increase your chances of being selected. It may take up to two
              months for an application to be accepted.
            </p>
          </div>
        </section>
      </div>
    </>
  );
});

export const head = generateHead({});
