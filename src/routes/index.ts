import type { RequestHandler } from "@sveltejs/kit";
let _kittenName = 'unknown kitten';
export const get: RequestHandler = async (event) => {
  console.log('In get handler. The request method is:', event.request.method);
  const kittenName = await getKittenName();
  return {
    status: 200,
    body: {
      kittenName,
      testIfPropOverriddenInGet: 'set in get method',
      method: event.request.method
    }

  }
}

export const post: RequestHandler = async (event) => {
  console.log('In post handler. The request method is:', event.request.method)
  const fd = await event.request.formData();
  const kittenName = await updateKittenName(fd.get('kittenName')?.toString() || 'unknown kitten')
  return {
    status: 200,
    body: {
      kittenName,
      testIfPropOverriddenInGet: 'set in post method',
      method: event.request.method
    }
  }
}
const getKittenName = async (): Promise<string> => {
  console.log('In time consuming getKittenName api call.')
  return _kittenName;
}
const updateKittenName = async (name: string): Promise<string> => {
  console.log('In time consuming updateKittenName api call.')
  _kittenName = name;
  return _kittenName;
}

