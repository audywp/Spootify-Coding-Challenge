import axios from 'axios';
import config from '../config';
import cogoToast from 'cogo-toast';
import qs from 'qs';

const authToken = new Buffer(config.api.clientId + ':' + config.api.clientSecret).toString('base64');

const getAuth = async () => {
  try {
    const auth = await axios(`${config.api.authUrl}`, {
      method: 'POST',
      data: qs.stringify({ grant_type: 'client_credentials' }),
      headers: { Authorization: `Basic ${authToken}`, 'Content-Type': 'application/x-www-form-urlencoded' },
      validateStatus: function (status) {
        return status < 500;
      },
    });
    return new Promise((resolve, reject) => {
      resolve({ ...auth });
    });
  } catch (error) {
    console.log(error);
  }
};

export const request = async (endpoint, method, body, options) => {
  try {
    const requestToken = await getAuth();

    const res = await axios({
      method,
      url: `${config.api.baseUrl}${endpoint}`,
      headers: { Authorization: `Bearer ${requestToken.data.access_token}` },
      validateStatus: (status) => status < 500,
    });
    return new Promise((resolve, reject) => {
      if (res.status === 200) {
        resolve({ status: res.status, data: res.data });
      }

      if (res.status === 401) {
        cogoToast.warn(res.data.error.message);
        resolve({ status: res.status, data: res });
      }

      if (res.status === 400) {
        cogoToast.error(res.data.error.message);
        resolve({ status: res.status, data: res.data });
      }
    });
  } catch (error) {
    console.log(error);
  }
};
