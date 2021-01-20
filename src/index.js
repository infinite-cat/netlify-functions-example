import fetch from 'node-fetch'

console.log(typeof fetch)

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: 'Hello, World',
  }
}


// import { wrapLambdaHandler } from '@recap.dev/client'
//
// export const handler = wrapLambdaHandler(async (event, context) => {
//   return {
//     statusCode: 200,
//     body: "Hello, World"
//   };
// });
