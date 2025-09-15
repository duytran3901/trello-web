let apiRoot = ''
if (process.env.BUILD_MODE === 'dev') {
  apiRoot = 'http://localhost:8017'
} else {
  apiRoot = 'https://trello-api-cbfy.onrender.com'
}
export const API_ROOT = apiRoot