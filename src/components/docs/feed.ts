import { parse } from 'yaml';
import { buildMenu } from './index';
import {
  docsVisibleTo,
  filterDocsAudience,
  type DocsAudience,
} from './docs-audience';
import type { GuideMetadata, MarkdownItems } from './types';

/** Shared by the static API routes; Markdown remains the only content source. */
export function parseDocsSources(
  sources: Record<string, string>,
  audience: DocsAudience
) {
  const metadata: MarkdownItems = {};
  const markdown: Record<string, string> = {};
  for (const [file, source] of Object.entries(sources).sort(([a], [b]) =>
    a.localeCompare(b)
  )) {
    const path = file.replace('/src/routes', '').replace(/index\.mdx?$/, '');
    if (path.includes('extras')) continue;
    const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
    if (!match) continue;
    const entry = parse(match[1]) as GuideMetadata;
    if (!entry || typeof entry.title !== 'string' || !entry.title.trim())
      throw new Error(`Missing documentation title: ${file}`);
    if (!docsVisibleTo(entry.audience, audience)) continue;
    metadata[path] = entry;
    markdown[path] = filterDocsAudience(
      source.slice(match[0].length),
      audience
    );
  }
  return { metadata, markdown };
}

export function buildDocsFeed(sources: Record<string, string>) {
  const { metadata, markdown } = parseDocsSources(sources, 'minecraft');
  const pages = Object.entries(metadata).map(([path, entry]) => ({
    ...entry,
    path,
    date_created: entry.date_created || entry.created_at,
    last_updated: entry.last_updated || entry.updated_at,
    extra_buttons: entry.extra_buttons?.filter(
      (button) => metadata[button.href]
    ),
    markdown: markdown[path],
  }));
  return {
    version: 1,
    root: 'https://acornmc.org/help/',
    menu: buildMenu(metadata),
    pages,
  };
}

const getDocsSources = () =>
  import.meta.glob<string>('/src/routes/help/**/index.{md,mdx}', {
    query: '?raw',
    import: 'default',
    eager: true,
  });

export const getDocsMetadata = () =>
  parseDocsSources(getDocsSources(), 'website').metadata;

export const getDocsFeed = () => buildDocsFeed(getDocsSources());
