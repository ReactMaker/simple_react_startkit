import 'isomorphic-fetch';
import { normalize } from 'normalizr';
import mapUrl from '../utils/url';

// deal with params, because not all property named 'data'...
async function getPostJsonData(params) {
  const itemType = await ['data', 'stages'].find((item) => {
    if (params[item]) {
      return item;
    }

    return null;
  });

  if (!itemType) return null;
  if (itemType === 'stages') {
    return JSON.stringify({stages: params.stages});
  }
  return JSON.stringify(params[itemType]);
}

async function callApi(endpoint, params = {}, method) {
  const fullUrl = mapUrl(endpoint);
  const postJson = await getPostJsonData(params);

  return fetch(fullUrl, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      // 'X-Access-Token': accessToken
    },
    body: postJson,
    method
  })
    .then(response => response.json().then(json => ({json, response})))
    .then(({json, response}) => {
      if (!response.ok) {
        return Promise.reject(json);
      }

      return Object.assign({}, params.schema
        ? normalize(json.data, params.schema)
        : json);
    })
    .then(response => ({response}), error => ({
      error: error.message || 'Something bad happened.'
    }));
}

export default {
  get: (endpoint, params) => callApi(endpoint, params, 'GET'),
  post: (endpoint, params) => callApi(endpoint, params, 'POST'),
  put: (endpoint, params) => callApi(endpoint, params, 'PUT'),
  patch: (endpoint, params) => callApi(endpoint, params, 'PATCH'),
  delete: (endpoint, params) => callApi(endpoint, params, 'DELETE')
};
