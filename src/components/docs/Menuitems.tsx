import { component$, $ } from '@qwik.dev/core';
import { ContentMenu, Link } from '@qwik.dev/router';
import { MarkdownItems } from '~/routes/help/layout';

const DAYS = 24 * 60 * 60 * 1000;

const renderUpdated = (itemHref: string, markdownItems: MarkdownItems) => {
  const updatedAt = markdownItems[itemHref]?.updated_at;

  if (updatedAt) {
    const updateDate = new Date(updatedAt);
    const isUpdated = updateDate.getTime() + 14 * DAYS > new Date().getTime();

    if (isUpdated) {
      const formattedDate = updateDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      });

      return (
        <div
          class="absolute -left-2.5 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-blue-500 group"
          title={`Updated on ${formattedDate}`}
        >
          <span class="absolute left-4 top-0 hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap z-50">
            Updated on {formattedDate}
          </span>
        </div>
      );
    }
  }

  return null;
};

export const MenuItems = component$(
  (props: {
    items?: ContentMenu[];
    pathname: string;
    markdownItems: MarkdownItems;
    level?: number;
  }) => {
    const { items, pathname, markdownItems } = props;
    const level = props.level || 0;

    const isActiveOrParent = (item: ContentMenu): boolean => {
      if (item.href === pathname) return true;
      if (item.items) return item.items.some(subItem => isActiveOrParent(subItem));
      return false;
    };

    return (
      <div class={{
        'pl-0': level === 0,
        'pl-3 ml-1 border-l border-gray-200/20': level > 0,
      }}>
        {items && items.length > 0 ? (
          items.map((item, i) => (
            <div key={i} class="mb-2">
              {item.items ?
                <div class="mb-1">
                  {item.href ? (
                    <Link
                      href={item.href}
                      class={{
                        'lum-btn w-full block lum-bg-transparent': true,
                        'text-sm lum-btn-p-1! rounded-lum-1': level > 0,
                        'text-indigo-500': isActiveOrParent(item),
                      }}
                      onMouseOver$={$((evt, target: HTMLAnchorElement & { __prefetchLink: number }) => {
                        const canHover = window.matchMedia('(hover: hover)').matches;
                        if (!canHover) return;

                        if (!target?.href) return;

                        const fiveMinutesInMs = 5 * 60 * 1000;
                        const now = Date.now();
                        const timeGap = now - (target.__prefetchLink || 0);
                        if (timeGap < fiveMinutesInMs) return;

                        const prefetchLink = document.createElement('link');
                        prefetchLink.href = target.href;
                        prefetchLink.rel = 'prefetch';
                        document.head.appendChild(prefetchLink);

                        target.__prefetchLink = now;
                      })}
                    >
                      {renderUpdated(item.href, markdownItems)}
                      <span class="flex-1 text-left">{item.text}</span>
                      {item.href === pathname && (
                        <span class="w-2 h-2 m-1 rounded-full bg-indigo-600" />
                      )}
                    </Link>
                  ) : (
                    <p
                      class={{
                        'w-full lum-bg-transparent': true,
                        'text-sm lum-btn-p-1! rounded-lum-1': level > 0,
                        'text-indigo-500': isActiveOrParent(item),
                      }}
                    >
                      {item.text}
                    </p>
                  )}
                  <div class={{
                    'pl-1': level > 0,
                  }}>
                    {item.items && item.items.length > 0 && (
                      <MenuItems
                        items={item.items}
                        pathname={pathname}
                        markdownItems={markdownItems}
                        level={level + 1}
                      />
                    )}
                  </div>
                </div>
                :
                <Link
                  href={item.href}
                  class={{
                    'lum-btn lum-bg-transparent': true,
                    'text-sm lum-btn-p-1 rounded-lum-1': level > 0,
                    'text-indigo-500!': item.href === pathname,
                  }}
                  onMouseOver$={$((evt, target: HTMLAnchorElement & { __prefetchLink: number }) => {
                    const canHover = window.matchMedia('(hover: hover)').matches;
                    if (!canHover) return;

                    if (!target?.href) return;

                    const fiveMinutesInMs = 5 * 60 * 1000;
                    const now = Date.now();
                    const timeGap = now - (target.__prefetchLink || 0);
                    if (timeGap < fiveMinutesInMs) return;

                    const prefetchLink = document.createElement('link');
                    prefetchLink.href = target.href;
                    prefetchLink.rel = 'prefetch';
                    document.head.appendChild(prefetchLink);

                    target.__prefetchLink = now;
                  })}
                >
                  {item.href && renderUpdated(item.href, markdownItems)}
                  <span class="flex-1">{item.text}</span>
                  {item.href === pathname && (
                    <span class="w-2 h-2 m-1 rounded-full bg-indigo-600" />
                  )}
                </Link>
              }
            </div>
          ))
        ) : (
          <div class="text-gray-500 py-2 px-3 text-sm">No items available</div>
        )}
      </div>
    );
  },
);