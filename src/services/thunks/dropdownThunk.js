import { createAsyncThunk } from '@reduxjs/toolkit';
import { baseURL, request } from '../../utils/api';

const urlGetStudyProgramms = `${baseURL}/study-programs/`;
export const fetchGetStudyProgramms = createAsyncThunk(
  'getStudyProgramms/get',
  async () => {
    const token = '5b6c0882e80f5b171c77516e9a5b0702687653ec';
    const data = await request(urlGetStudyProgramms, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  },
);

export default fetchGetStudyProgramms;
