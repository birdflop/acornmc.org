import type { RequestHandler } from '@qwik.dev/router';
import { getDocsFeed } from '~/components/docs/feed';

export const onGet: RequestHandler = ({ json }) => {
  json(200, getDocsFeed());
};
