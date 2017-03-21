/**
 *  Point of contact for api modules
 *
 *  ie: import { getUserData } from 'webApi';
 *
 */
/**/
import 'isomorphic-fetch';

import client from './callApi';

/* api modules */
// const getUserData = (data) => client.post('/getUserData', { data });

// Test
export const testApi = () => fetch('https://bbandydd.github.io/React_Redux_Todolist/initial.json').then(response => response.json());

export const webApi = {
  // getUserData
};
