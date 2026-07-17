import { component$ } from '@qwik.dev/core';
import { generateHead } from '~/root';

// @ts-expect-error vite-imagetools
import Background from '~/components/images/ranks.png?jsx&format=avif&w=1280;1920;2560;3840';

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
                Ranks
              </span>
            </h1>
          </div>
        </div>
      </section>
      <div class="bg-bg border-lum-border/10 border-t">
        <section class="mx-auto flex min-h-screen max-w-6xl flex-col justify-center pt-20">
          <div class="mb-5 grid gap-2">
            <div
              class="lum-card lum-grad-bg-lum-card-bg/20 relative overflow-clip border-none duration-200!"
              style={{
                '--color-lum-gradient': '#00A800AA',
              }}
            >
              <div class="flex items-center gap-4">
                <div>
                  <h3 class="flex items-center gap-2 text-2xl font-bold">
                    Zombie
                  </h3>
                  <p class="text-lum-text-secondary">Starter Rank</p>
                  <ul class="text-lum-text-secondary mt-2 list-inside list-disc">
                    <li>
                      Use /warps to see a list of server warps. Use /warp [warp
                      name] to teleport to them
                    </li>
                    <li>
                      Use /tpa to teleport to other players and /tpahere to
                      teleport other players to you
                    </li>
                    <li>
                      Create your own warp with /iwarp create [warp name]
                      [number of days]. Each day costs $50
                    </li>
                    <li>Earn $2 per chat message</li>
                    <li>
                      Create your own chest shops. Click{' '}
                      <a href="/shops" class="text-blue-500 underline">
                        here
                      </a>{' '}
                      for a tutorial
                    </li>
                    <li>
                      Open common and rare crates. Earn crate keys with /vote
                    </li>
                    <li>1 home. Set your home with /sethome</li>
                    <li>
                      Set claimflags with /setclaimflag and remove them with
                      /unclaimflag
                    </li>
                    <li>
                      Prevent non-claim members from starting raids in a claim
                      with /setclaimflag raidmemberonly
                    </li>
                    <li>1 auction house slot</li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              class="lum-card lum-grad-bg-lum-card-bg/20 relative overflow-clip border-none duration-200!"
              style={{
                '--color-lum-gradient': '#FCFC54AA',
              }}
            >
              <div class="flex items-center gap-4">
                <div>
                  <h3 class="flex items-center gap-2 text-2xl font-bold">
                    Husk
                  </h3>
                  <p class="text-lum-text-secondary">10 votes</p>
                  <ul class="text-lum-text-secondary mt-2 list-inside list-disc">
                    <li>Set 2 homes with /sethome [name]</li>
                    <li>
                      Block specific players from entering your claim with
                      /setclaimflag noenterplayer [name]
                    </li>
                    <li>
                      Stop players from being able to drop items in your claim
                      with /setclaimflag noitemdrop
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              class="lum-card lum-grad-bg-lum-card-bg/20 relative overflow-clip border-none duration-200!"
              style={{
                '--color-lum-gradient': '#00A8A8AA',
              }}
            >
              <div class="flex items-center gap-4">
                <div>
                  <h3 class="flex items-center gap-2 text-2xl font-bold">
                    Drowned
                  </h3>
                  <p class="text-lum-text-secondary">25 votes</p>
                  <ul class="text-lum-text-secondary mt-2 list-inside list-disc">
                    <li>3 homes</li>
                    <li>
                      Prevent blocks with gravity (e.g. sand, gravel) from
                      falling with /setclaimflag noblockgravity
                    </li>
                    <li>
                      Prevent named mobs from being killed with /setclaimflag
                      protectnamedmobs
                    </li>
                    <li>2 auction house slots</li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              class="lum-card lum-grad-bg-lum-card-bg/20 relative overflow-clip border-none duration-200!"
              style={{
                '--color-lum-gradient': '#A8A8A8AA',
              }}
            >
              <div class="flex items-center gap-4">
                <div>
                  <h3 class="flex items-center gap-2 text-2xl font-bold">
                    Skeleton
                  </h3>
                  <p class="text-lum-text-secondary">50 votes</p>
                  <ul class="text-lum-text-secondary mt-2 list-inside list-disc">
                    <li>4 homes</li>
                    <li>
                      Prevent chorus fruit from being eaten in your claim with
                      /setclaimflag nochorusfruit
                    </li>
                    <li>
                      Prevent ender pearls from being used in your claim with
                      /setclaimflag noenderpearl
                    </li>
                    <li>
                      Stop plants from growing and blocks from spreading with
                      /setclaimflag nogrowth
                    </li>
                    <li>
                      Prevent leaves from decaying with /setclaimflag
                      noleafdecay
                    </li>
                    <li>
                      Stop vines from growing with /setclaimflag novinegrowth
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              class="lum-card lum-grad-bg-lum-card-bg/20 relative overflow-clip border-none duration-200!"
              style={{
                '--color-lum-gradient': '#54FCFCAA',
              }}
            >
              <div class="flex items-center gap-4">
                <div>
                  <h3 class="flex items-center gap-2 text-2xl font-bold">
                    Stray
                  </h3>
                  <p class="text-lum-text-secondary">100 votes</p>
                  <ul class="text-lum-text-secondary mt-2 list-inside list-disc">
                    <li>5 homes</li>
                    <li>
                      Set an entrance message that people will receive upon
                      entering your claim with /setclaimflag entermessage{' '}
                      {'<message>'}
                    </li>
                    <li>
                      Set an exit message that people will receive upon entering
                      your claim with /setclaimflag exitmessage {'<message>'}
                    </li>
                    <li>
                      Prevent ice formation in your claim with /setclaimflag
                      noiceform
                    </li>
                    <li>
                      Set a specific location for people who die in your claim
                      to respawn with /setclaimflag respawnlocation
                    </li>
                    <li>3 auction house slots</li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              class="lum-card lum-grad-bg-lum-card-bg/20 relative overflow-clip border-none duration-200!"
              style={{
                '--color-lum-gradient': '#A80000AA',
              }}
            >
              <div class="flex items-center gap-4">
                <div>
                  <h3 class="flex items-center gap-2 text-2xl font-bold">
                    Spider
                  </h3>
                  <p class="text-lum-text-secondary">250 votes</p>
                  <ul class="text-lum-text-secondary mt-2 list-inside list-disc">
                    <li>6 homes</li>
                    <li>Create warp signs</li>
                    <li>
                      Prevent people from using /fly in your claim with
                      /setclaimflag noflight
                    </li>
                    <li>
                      Prevent snow formation with /setclaimflag nosnowform
                    </li>
                    <li>
                      Prevent vehicle placement in your claim with /setclaimflag
                      novehicle
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              class="lum-card lum-grad-bg-lum-card-bg/20 relative overflow-clip border-none duration-200!"
              style={{
                '--color-lum-gradient': '#54FC54AA',
              }}
            >
              <div class="flex items-center gap-4">
                <div>
                  <h3 class="flex items-center gap-2 text-2xl font-bold">
                    Creeper
                  </h3>
                  <p class="text-lum-text-secondary">500 votes</p>
                  <ul class="text-lum-text-secondary mt-2 list-inside list-disc">
                    <li>7 homes</li>
                    <li>
                      Prevent XP loss on death with /setclaimflag keeplevel
                    </li>
                    <li>
                      Stop your hunger level from decreasing with /setclaimflag
                      nohunger
                    </li>
                    <li>4 auction house slots</li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              class="lum-card lum-grad-bg-lum-card-bg/20 relative overflow-clip border-none duration-200!"
              style={{
                '--color-lum-gradient': '#5454FCAA',
              }}
            >
              <div class="flex items-center gap-4">
                <div>
                  <h3 class="flex items-center gap-2 text-2xl font-bold">
                    Phantom
                  </h3>
                  <p class="text-lum-text-secondary">1000 votes</p>
                  <ul class="text-lum-text-secondary mt-2 list-inside list-disc">
                    <li>8 homes</li>
                    <li>
                      Regenerate health in your claim with /setclaimflag
                      healthregen
                    </li>
                    <li>
                      Make explosions harmless in your claim with /setclaimflag
                      noexplosiondamage
                    </li>
                    <li>
                      Prevent fluids from flowing in your claim with
                      /setclaimflag nofluidflow
                    </li>
                    <li>
                      Set a specific time in your claims with /setclaimflag
                      playertime
                    </li>
                    <li>
                      Set specific weather conditions in your claim with
                      /setclaimflag playerweather
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              class="lum-card lum-grad-bg-lum-card-bg/20 relative overflow-clip border-none duration-200!"
              style={{
                '--color-lum-gradient': '#545454AA',
              }}
            >
              <div class="flex items-center gap-4">
                <div>
                  <h3 class="flex items-center gap-2 text-2xl font-bold">
                    Wither
                  </h3>
                  <p class="text-lum-text-secondary">2000 votes</p>
                  <ul class="text-lum-text-secondary mt-2 list-inside list-disc">
                    <li>9 homes</li>
                    <li>
                      Grant infinite arrows in your claim with /setclaimflag
                      infinitearrows
                    </li>
                    <li>
                      Grant keepinventory to all players in your claim with
                      /setclaimflag keepinventory
                    </li>
                    <li>
                      Prevent any player who doesn't have /accesstrust or higher
                      permission from entering the claim with /setclaimflag
                      noenter
                    </li>
                    <li>
                      Prevent fall damage in your claim with /setclaimflag
                      nofalldamage
                    </li>
                    <li>
                      Prevent fire damage in your claim with /setclaimflag
                      nofiredamage
                    </li>
                    <li>
                      Prevent mob damage in your claim with /setclaimflag
                      nomobdamage
                    </li>
                    <li>
                      Prevent hostile mobs spawns with /setclaimflag nomobspawns
                    </li>
                    <li>5 auction house slots</li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              class="lum-card lum-grad-bg-lum-card-bg/20 relative overflow-clip border-none duration-200!"
              style={{
                '--color-lum-gradient': '#025767AA',
              }}
            >
              <div class="flex items-center gap-4">
                <div>
                  <h3 class="flex items-center gap-2 text-2xl font-bold">
                    Warden
                  </h3>
                  <p class="text-lum-text-secondary">4000 votes</p>
                  <ul class="text-lum-text-secondary mt-2 list-inside list-disc">
                    <li>
                      Give yourself the /fly permission within your claim with
                      /setclaimflag ownerfly
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
});

export const head = generateHead({});
