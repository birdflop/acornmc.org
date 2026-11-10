import { component$ } from '@qwik.dev/core';
import { Link } from '@qwik.dev/router';
import { SocialButtons } from './Nav';
import { Acorn } from './Acorn';

export default component$(() => {
  return (
    <footer class="text-lum-text-secondary lum-grad-bg-gray-950 z-10 border-t border-white/10 px-6 py-16 backdrop-blur-md md:px-12 md:py-24">
      <div class="mx-auto max-w-7xl">
        <div class="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.8fr_1fr_1.1fr_1.1fr]">
          {/* Brand column */}
          <div class="flex flex-col items-start sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              class="lum-btn lum-btn-p-1 lum-bg-transparent hover:lum-bg-lum-card-bg rounded-lum-1 -ml-3 flex items-center gap-2.5 text-white!"
            >
              <Acorn size={48} />
              <p class="space-x-1 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Acorn
              </p>
            </Link>
            <p class="mt-4 max-w-md text-base leading-relaxed text-gray-300 md:text-lg">
              Minecraft as it should be. A friendly, community-driven server
              with a focus on fun and creativity.
            </p>
            <div class="mt-6 -ml-2 flex items-center gap-2">
              <SocialButtons />
            </div>
            <div class="mt-6 max-w-md text-sm leading-relaxed text-gray-400 md:text-base">
              <p>play.acornmc.org</p>
            </div>
          </div>

          {/* Help column */}
          <div>
            <h4 class="mb-5 text-base font-bold text-white md:text-lg">Help</h4>
            <div class="-ml-3 flex flex-col items-start gap-1">
              {[
                { href: '/help', label: 'Getting Started' },
                { href: '/rules', label: 'Server Rules' },
                { href: '/help/faq', label: 'Frequently Asked Questions' },
                { href: '/help/support', label: 'Get Support' },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  class="lum-btn lum-bg-transparent hover:lum-bg-lum-card-bg rounded-lum-1"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Forms column */}
          <div>
            <h4 class="mb-5 text-base font-bold text-white md:text-lg">
              Forms
            </h4>
            <div class="-ml-3 flex flex-col items-start gap-1">
              <a
                href="https://goo.gl/forms/bFHaoHEduOCYTTkH3"
                class="lum-btn lum-bg-transparent hover:lum-bg-lum-card-bg rounded-lum-1"
              >
                Ban Appeal
              </a>
              <a
                href="https://forms.gle/a6p7hoyr2Ndv7Ym2A"
                class="lum-btn lum-bg-transparent hover:lum-bg-lum-card-bg rounded-lum-1"
              >
                Trainee Application
              </a>
              <Link
                href="/forms"
                class="lum-btn lum-bg-transparent hover:lum-bg-lum-card-bg rounded-lum-1"
              >
                Application Guidelines
              </Link>
            </div>
          </div>

          {/* Downloads column */}
          <div>
            <h4 class="mb-5 text-base font-bold text-white md:text-lg">
              Downloads
            </h4>
            <div class="-ml-3 flex flex-col items-start gap-1">
              <a
                href="https://modrinth.com/plugin/plasmo-voice"
                class="lum-btn lum-bg-transparent hover:lum-bg-lum-card-bg rounded-lum-1"
              >
                Plasmo Voice Mod
              </a>
              <Link
                href="/help/proximity_chat"
                class="lum-btn lum-bg-transparent hover:lum-bg-lum-card-bg rounded-lum-1"
              >
                Voice Chat Setup
              </Link>
              <a
                href="https://github.com/pemigrade/acorn"
                class="lum-btn lum-bg-transparent hover:lum-bg-lum-card-bg rounded-lum-1"
              >
                Server Files
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div class="mt-20 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-base text-gray-400 sm:flex-row">
          <span>© {new Date().getFullYear()} Acorn. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
});
