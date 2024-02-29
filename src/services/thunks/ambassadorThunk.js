import { createAsyncThunk } from '@reduxjs/toolkit';
import { baseURL, request } from '../../utils/api';

const token = '5b6c0882e80f5b171c77516e9a5b0702687653ec';

// Получение данных о пользователе
const urlAmbassadorInfo = `${baseURL}users/me/`;

const getAmbassadorInfo = createAsyncThunk('userInfo/get', async () => {
  const data = await request(urlAmbassadorInfo, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
});

export default getAmbassadorInfo;
