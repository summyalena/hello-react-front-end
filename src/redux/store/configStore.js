import {
  createSlice,
  configureStore,
  createAsyncThunk,
} from '@reduxjs/toolkit';

export const fetchGreetings = createAsyncThunk('fetch/greetings', async () => {
  const response = await fetch('http://localhost:3000/api/v1/greeting/index');
  const data = await response.json();
  console.log(data);
  return data;
});

const greetingSlice = createSlice({
  name: 'greetings',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => builder.addCase(
    fetchGreetings.fulfilled,
    (_state, action) => action.payload,
  ),
});

const store = configureStore({
  reducer: {
    greetings: greetingSlice.reducer,
  },
});

export default store;
