import type { RequestHandler } from '@qwik.dev/router';
import { getDocsFeed } from '~/components/docs/feed';

export const onGet: RequestHandler = ({ headers, send }) => {
  // SSG writes HTML responses to index.html, allowing /api/docs/ on GitHub Pages.
  // The body is JSON; clients requiring application/json use index.json instead.
  headers.set('Content-Type', 'text/html; charset=utf-8');
  send(200, JSON.stringify(getDocsFeed()));
};
