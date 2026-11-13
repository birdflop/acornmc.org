import { describe, expect, it } from 'vite-plus/test';
import {
  getDocsFeed,
  getDocsMetadata,
  parseDocsSources,
  buildDocsFeed,
} from './feed';
import { buildMenu, searchGuides } from './index';
import { filterDocsAudience } from './docs-audience';

describe('static handbook compatibility', () => {
  it('builds the versioned feed directly from the Markdown guides', () => {
    const feed = getDocsFeed();
    const metadata = getDocsMetadata();
    expect(feed.version).toBe(1);
    expect(feed.pages.map((page) => page.path).sort()).toEqual(
      Object.keys(metadata).sort()
    );
    expect(feed.menu).toEqual(buildMenu(metadata));
    for (const page of feed.pages) {
      expect(page.title).toBe(metadata[page.path].title);
      expect(page.markdown.trim().length).toBeGreaterThan(0);
      expect(page.markdown).not.toMatch(/^---\r?\n/);
    }
  });

  it('derives audience-specific metadata without including Markdown in UI data', () => {
    const sources = {
      '/src/routes/help/shared/index.md':
        '---\ntitle: Shared\n---\nShared content',
      '/src/routes/help/game/index.md':
        '---\ntitle: In game\naudience: minecraft\n---\nGame content',
    };
    expect(parseDocsSources(sources, 'website').metadata).toEqual({
      '/help/shared/': { title: 'Shared' },
    });
    expect(buildDocsFeed(sources).pages).toHaveLength(2);
  });

  it('uses metadata titles for nested guides and searches all query terms', () => {
    const metadata = {
      '/help/': { title: 'Getting Started' },
      '/help/claims/locking/': {
        title: 'Lock containers',
        description: 'Protect your chests',
      },
    };
    expect(
      buildMenu(metadata).find((item) => item.href === '/help/claims/')
        ?.items?.[0].text
    ).toBe('Lock containers');
    expect(
      searchGuides(metadata, ' CHESTS lock ').map(([href]) => href)
    ).toEqual(['/help/claims/locking/']);
    expect(searchGuides(metadata, 'missing')).toEqual([]);
  });

  it('filters website sections while preserving fenced marker examples', () => {
    const source =
      'Shared\n{/* audience:website */}\nWebsite\n{/* /audience */}\n{/* audience:minecraft */}\nMinecraft\n{/* /audience */}\n```md\n{/* audience:website */}\n```\n';
    expect(filterDocsAudience(source, 'minecraft')).toBe(
      'Shared\nMinecraft\n```md\n{/* audience:website */}\n```\n'
    );
    expect(() =>
      filterDocsAudience('{/* /audience */}', 'minecraft')
    ).toThrow();
  });
});
