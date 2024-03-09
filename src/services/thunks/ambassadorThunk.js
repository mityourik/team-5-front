import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  baseURL, request, token,
} from '../../utils/api';

// Получение списка всех амбассадоров
const urlGetAllAmbassadors = `${baseURL}api/ambassadors/`;
export const fetchGetAllAmbassadors = createAsyncThunk('getAllAmbassadors/get', async () => {
  const data = await request(urlGetAllAmbassadors, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
  });
  // console.log(`fetchGetAllAmbassadors, ${JSON.stringify(data)}`);
  return data;
});

// Редактирование данных амбассадора
export const fetchEditAmbassador = createAsyncThunk('editAmbassador/get', async (ambassadorId) => {
  const data = await request(`${baseURL}api/ambassadors/${ambassadorId}/`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
    body: JSON.stringify({ ambassadorId }),
  });
  return data;
});

// Получение данных об амбассадоре
export const fetchAmbassadorInfo = createAsyncThunk('userInfo/get', async (ambassadorId) => {
  console.log('ambassadorId', ambassadorId);
  const data = await request(`${baseURL}api/ambassadors/${ambassadorId}/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: token,
    },
  });
  return data; // {} cо всеми свойствами
});

// Получение контента
const urlGetContent = `${baseURL}/api/content/`;
export const fetchContent = createAsyncThunk('content/get', async () => {
  const data = await request(urlGetContent, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
  });
  return data;
});
