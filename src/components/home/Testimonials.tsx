import { component$ } from '@qwik.dev/core';
import { Hoverable } from '@luminescent/ui-qwik';

import testimonialslist from './testimonialslist';

export type Card = {
  icon: any;
  title: string;
  description: string;
};

export default component$(() => {
  return (
    <section class="flex w-full flex-col items-center justify-center p-10">
      <h3 class="my-10 text-5xl font-extrabold">
        What do{' '}
        <span
          class="text-transparent"
          style={{
            background: 'linear-gradient(135deg, #3b74ff, #7AFFEA)',
            backgroundClip: 'text',
          }}
        >
          our players say?
        </span>
      </h3>
      <div class="grid max-w-5xl gap-2 lg:grid-cols-3">
        {testimonialslist.map((card: Card, i: number) => (
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
          </div>
        ))}
      </div>
    </section>
  );
});
