import { Component, component$ } from '@qwik.dev/core';
import { Hoverable } from '@luminescent/ui-qwik';

import whylist from './whylist';

export type Card = {
  icon: Component<any>;
  title: string;
  description: string;
  buttons?: {
    icon: Component<any>;
    text: string;
    href: string;
  }[];
};

export default component$(() => {
  return (
    <section class="flex w-full flex-col items-center justify-center p-10">
      <h3 class="my-10 text-5xl font-extrabold">
        Why choose{' '}
        <span
          class="text-transparent"
          style={{
            background: 'linear-gradient(135deg, #3b74ff, #7AFFEA)',
            backgroundClip: 'text',
          }}
        >
          Acorn?
        </span>
      </h3>
      <div class="grid max-w-5xl gap-2 lg:grid-cols-3">
        {whylist.map((card, i: number) => (
          <div
            key={i}
            class="lum-card lum-grad-bg-lum-card-bg/50 relative duration-200!"
            onMouseMove$={(e, el) => Hoverable.onMouseMove$(e, el)}
            onMouseLeave$={(e, el) => Hoverable.onMouseLeave$(e, el)}
          >
            <h3 class="mb-2 flex items-center gap-2 text-2xl font-bold">
              <card.icon />
              {card.title}
            </h3>
            <p class="text-lum-text-secondary">{card.description}</p>
            {card.buttons && (
              <div class="mt-auto flex flex-wrap gap-2">
                {card.buttons.map((button: any, j: number) => (
                  <a
                    key={j}
                    href={button.href}
                    class="lum-btn rounded-lum-2 fill-current"
                  >
                    <button.icon size={24} />
                    {button.text}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
});
