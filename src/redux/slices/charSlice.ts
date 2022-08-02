import { createSlice, isAnyOf, PayloadAction } from '@reduxjs/toolkit';
import { _offSet } from '../../common/variables';
import { getChar } from './asynkThunks/getChar';

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
type loading = 'loading' | 'error' | 'success';

export interface ICharState {
  dataChar: Array<ICharItem>;
  dataRandomChar: Array<ICharItem>;
  selectedChar: ICharItem | null | undefined;
  charsLoading: loading;
  randomCharLoading: loading;
  offset: number;
}

const initialState: ICharState = {
  dataChar: [],
  dataRandomChar: [],
  selectedChar: null,
  charsLoading: 'loading',
  randomCharLoading: 'loading',
  offset: _offSet,
};

export const CharSlice = createSlice({
  name: 'char',
  initialState,
  reducers: {
    changeOffset: (state) => {
      state.offset = state.offset + 9;
    },
    getSelectedChar: (state, action: PayloadAction<number>) => {
      state.selectedChar = state.dataChar.find((item) => item.id === action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(isAnyOf(getChars.pending), (state, action) => {
        state.charsLoading = 'loading';
        console.log('pending');
      })
      .addMatcher(isAnyOf(getChars.fulfilled), (state, action) => {
        state.charsLoading = 'success';
        console.log('fulfilled');
        state.dataChar = [...state.dataChar, ...action.payload];
      })
      .addMatcher(isAnyOf(getChars.rejected), (state, action) => {
        state.charsLoading = 'error';
        console.log('rejected');
      })
      .addMatcher(isAnyOf(getChar.pending), (state, action) => {
        state.randomCharLoading = 'loading';
        console.log('pending');
      })
      .addMatcher(isAnyOf(getChar.fulfilled), (state, action) => {
        state.randomCharLoading = 'success';
        console.log('fulfilled');
        state.dataRandomChar = action.payload;
      })
      .addMatcher(isAnyOf(getChar.rejected), (state, action) => {
        state.randomCharLoading = 'error';
        console.log('rejected');
      });
  },
});

export const { changeOffset, getSelectedChar } = CharSlice.actions;

export default CharSlice.reducer;
