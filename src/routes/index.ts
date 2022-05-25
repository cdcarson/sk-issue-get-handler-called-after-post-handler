import type { RequestHandler } from "@sveltejs/kit";

export const get: RequestHandler = (event) => {
  console.log('get handler')
  return {
    status: 200,
    body: {
      message: 'Hello your name is '
    }
  }
}

export const post: RequestHandler = async (event) => {
  console.log('post handler')
  const fd = await event.request.formData();
  return {
    status: 200,
    body: {
      message: 'You say your name is ',
      name: fd.has('name') ? fd.get('name')?.toString() : undefined
    }
  }
}