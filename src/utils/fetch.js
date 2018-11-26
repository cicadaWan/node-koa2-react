import fetch from 'isomorphic-fetch';

const defaultOpts = {
  credentials: 'include',
  headers: {
    'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
    Accept: 'application/json, text/javascript, */*; q=0.01',
    'X-Requested-With': 'XMLHttpRequest',
  },
  method: 'POST',
};

export default (url, options = {}) => {
  if (!url || typeof url !== 'string') {
    throw new Error('URL is not effective!');
  }
  const headers = Object.assign({}, defaultOpts.headers, (options.headers || {}));
  options.headers && delete options.headers;
  if (options.body && Object.prototype.toString.call(options.body) === '[object Object]') {
    let bodyStr = Object.keys(options.body).map((key) => {
      return (`${key}=${options.body[key]}`);
    });
    bodyStr = bodyStr.join('&');
    bodyStr && (options.body = bodyStr);
  }
  return fetch(url, Object.assign({}, defaultOpts, options, {
    headers,
  })).then(response => {
    return response.json();
  }).catch(err => {
    throw new Error(err);
  });
};
