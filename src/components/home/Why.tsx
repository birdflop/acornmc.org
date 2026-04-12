import { component$ } from '@qwik.dev/core';
import { Hoverable } from '@luminescent/ui-qwik';

import whylist from './whylist';

export type Card = {
  icon: any;
  title: string;
  description: string;
}

export default component$(() => {
  return (
    <section class="flex flex-col w-full p-10 items-center justify-center">
      <h3 class="font-extrabold text-5xl my-10">
        Why choose <span class="text-transparent"
          style={{
            background: 'linear-gradient(135deg, #3b74ff, #7AFFEA)',
            backgroundClip: 'text',
          }}>
            Acorn?
        </span>
      </h3>
      <div class="grid lg:grid-cols-3 gap-2 max-w-5xl">
        {whylist.map((card: Card, i: number) => (
          <div key={i} class="lum-card lum-grad-bg-lum-card-bg/50 duration-200! relative"
            onMouseMove$={(e, el) => Hoverable.onMouseMove$(e, el)}
            onMouseLeave$={(e, el) => Hoverable.onMouseLeave$(e, el)}>
            <h3 class="mb-2 flex items-center gap-2 font-bold text-2xl">
              <card.icon />
              {card.title}
            </h3>
            <p class="text-lum-text-secondary">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
});