import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  greeting: [],
};

const api = 'http://localhost:3000/api/v1/greeting/index';

export const fetchData = createAsyncThunk('fetch/greeting', async () => {
  const response = axios.get(api);
  const data = response.json();
  return data;
});

const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => action.payload);
  },
});

export const { action } = greetingSlice;
export default greetingSlice.reducer;
