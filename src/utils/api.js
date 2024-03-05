export const baseURL = 'http://89.111.174.233';

function checkResponse(res) {
  if (res.status === 204 || res.status === 200) {
    return Promise.resolve({});
  }

  const contentType = res.headers.get('content-type');
  if (contentType && contentType.includes('application/json')) {
    return res.json().then((data) => {
      if (res.ok) {
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
