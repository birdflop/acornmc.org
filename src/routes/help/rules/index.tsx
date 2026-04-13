import { RequestHandler } from '@qwik.dev/router';

export const onGet: RequestHandler = ({ redirect }) => {
  redirect(301, '/rules');
};