import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchRadioValue } from '../API/API';
import { fetchStatus } from '../API/API'

const initialState = {
  radioStatus: false,
  loopStatus: false,
  song: {
    duration: 0,
    position: 0
  },
  now: {
    artist_name: "",
    artist_url: "",
    artwork_url: "",
    playbacks: 0,
    service: "",
    thumbnail_url: "",
    title: "",
    url: ""
  },
  status: 'idle',
};

export const syncroniseStatus = createAsyncThunk(
  'sync/fetchStatus',
  async () => {
    const response = await fetchStatus();
    console.log(response);
    return response;
  }
)

export const toggleRadio = createAsyncThunk(
  'toggler/radioToggle',
  async () => {
    const response = await fetchRadioValue();
    return response;
  }
);

export const counterSlice = createSlice({
  name: 'toggler',
  initialState,
  reducers: {
    toggleSync: (state) => {
      console.log(state.value);
      state.value = !state.value;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(toggleRadio.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(toggleRadio.fulfilled, (state, action) => {
        state.status = 'idle';
        console.log(action.payload);
        state.value = action.payload;
      })
      .addCase(syncroniseStatus.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(syncroniseStatus.fulfilled, (state, action) => {
        state.status = 'idle';
        console.log(action.payload);
        state.value = action.payload;
      })
  },
});

export const selectRadio = (state) => state.counter.value;

export const { toggleSync } = counterSlice.actions;

export default counterSlice.reducer;
