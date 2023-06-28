import axios from 'axios';

const API_URL = '';
const MESSAGE_URL = API_URL.concat('/');

export const getRequest = async (url: string) => {
  try {
    const response = await axios.get(url);
    if (response.status === 404) {
      throw Error('There would be error in requesting.');
    }
    if (response.status === 500) {
      throw Error('Internal Server Error :: 500 .');
    }
    console.log(response.status);
    const result = response.data;
    return result;
  } catch (e) {
    console.error(e);
    // return e;
    return undefined;
  }
};
