import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const api = 'http://localhost:3000/api/v1/greeting/index';

export const fetchData = createAsyncThunk('fetch/greeting', async () => {
  const response = await axios.get(api);
  console.log(response);
  const data = await response.json();
  console.log(data);
  return data;
});

const greetingSlice = createSlice({
  name: 'greeting',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => builder.addCase(fetchData.fulfilled,
    (_state, action) => action.payload),
});

export const greetings = greetingSlice.reducer;
