export const baseURL = 'http://89.111.174.233/';

export const token = 'Token 9eb4012798c9638ff7c1c75de773ac02e7233734';
export const email = 'backend@crm.ru';
export const password = '364809rdUY';

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(new Error(`Ошибка получения ответа от сервера: ${res.status}`));
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
