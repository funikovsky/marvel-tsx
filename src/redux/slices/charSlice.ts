import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { getChars } from './asynkThunks/getChars';

export interface IComicsItem {
  resourceURI: string;
  name: string;
}

export interface ICharItem {
  id: number;
  name: string;
  description?: string;
  thumbnail: string;
  homepage: string;
  wiki: string;
  comics: Array<IComicsItem>;
}

export interface ICharState {
  dataChar: Array<ICharItem>;
  loading: string;
}

const initialState: ICharState = {
  dataChar: [],
  loading: 'loading',
};

export const CharSlice = createSlice({
  name: 'char',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(isAnyOf(getChars.pending), (state, action) => {
        state.loading = 'loading';
        console.log('pending');
      })
      .addMatcher(isAnyOf(getChars.fulfilled), (state, action) => {
        state.loading = 'success';
        console.log('fulfilled');
        state.dataChar = action.payload;
      })
      .addMatcher(isAnyOf(getChars.rejected), (state, action) => {
        state.loading = 'error';
        console.log('rejected');
      });
  },
});

export default CharSlice.reducer;
