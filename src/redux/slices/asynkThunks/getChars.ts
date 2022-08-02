import { createAsyncThunk } from '@reduxjs/toolkit';
import { ICharItem } from '../charSlice';

import { Api } from '../../../api/api';
import { transformChar } from '../../../utils/utils';

interface getCharsArg {
  offSet?: string;
}

export const getChars = createAsyncThunk<
  Array<ICharItem>,
  getCharsArg['offSet'],
  { rejectValue: string }
>('char/getCahrs', async (offSet, { rejectWithValue }) => {
  try {
    const { data } = await Api.getCharsList(offSet);

    const newRes: Array<ICharItem> = data.results.map(transformChar);

    return newRes;
  } catch (error: any) {
    return rejectWithValue(`Ошибка загрузки данных: ${error?.response?.status || 500}`);
  }
});
