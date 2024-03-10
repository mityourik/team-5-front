export const baseURL = 'http://89.111.174.233/';

// export const token = 'Token 53437c067baedca038b398014255e885db1ac481';
export const email = 'backend@crm.ru';
export const password = '364809rdUY';

export const token = 'Token 947bd430be1c882135f4b2f887f672e9eb54be69';

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
