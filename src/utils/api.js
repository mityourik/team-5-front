export const baseURL = 'http://89.111.174.233/';

export const token = 'Token 9eb4012798c9638ff7c1c75de773ac02e7233734';
export const email = 'backend@crm.ru';
export const password = '364809rdUY';

function checkResponse(res) {
  if (res.status === 204 || res.status === 200) {
    return Promise.resolve({});
  }

  const contentType = res.headers.get('content-type');
  if (contentType && contentType.includes('application/json')) {
    return res.json().then((data) => {
      if (res.ok) {
        console.log('data', data);
        return data;
      }
      return Promise.reject(
        new Error(Object.values(data) || `Ошибка: ${res.status}`),
      );
    });
  }
  return Promise.reject(new Error(`Ошибка: ${res.status}`));
}

export function request(url, options) {
  return fetch(url, options)
    .then(checkResponse)
    .catch((error) => {
      if (error.name === 'TypeError' && error.message === 'Failed to fetch') {
        return Promise.reject(
          new Error('Ошибка сети: Не удалось выполнить запрос'),
        );
      }
      return Promise.reject(new Error(error.message || error.toString()));
    });
}
