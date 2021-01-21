import { wrapLambdaHandler } from '@recap.dev/client'

export const handler = async (event, context) => {
  console.log(Object.keys(context))
  console.log(context.clientContext)
  return {
    statusCode: 200,
    body: "Hello, World"
  };
};
