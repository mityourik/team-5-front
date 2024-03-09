import { createAsyncThunk } from '@reduxjs/toolkit';
import { baseURL, request, token } from '../../utils/api';

const urlGetStudyProgramms = `${baseURL}api/study_programms/`;
// export const fetchGetStudyProgramms = createAsyncThunk(
//   'getStudyProgramms/get',
//   async () => {
//     const data = await request(urlGetStudyProgramms, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         Accept: 'application/json',
//         Authorization: token,
//       },
//     });
//     console.log(`studyProgramms Thunks, ${JSON.stringify(data.results)}`);
//     return data.results;
//   },
// );

export const fetchGetStudyProgramms = createAsyncThunk(
  'getStudyProgramms/get',
  async () => {
    try {
      const response = await request(urlGetStudyProgramms, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: token,
        },
      });
      const data = JSON.parse(response);
      console.log('studyProgramms Thunks:', data.results);
      return data.results;
      // return data.results;
    } catch (error) {
      console.error('Error fetching study programs:', error);
      throw error;
    }
  },
);

export default fetchGetStudyProgramms;
