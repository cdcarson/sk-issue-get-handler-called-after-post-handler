import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({event, resolve}) => {
  console.log();
  console.log('--- Start of request --');
  const response = await resolve(event)
  console.log('--- End of request --');
  return response;
}