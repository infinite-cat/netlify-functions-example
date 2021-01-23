import { wrapNetlifyHandler } from '@recap.dev/client'

export const handler = wrapNetlifyHandler(async (event, context) => {
  return {
    statusCode: 200,
    body: "Hello, World"
  };
});
