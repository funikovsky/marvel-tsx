import { createAsyncThunk } from '@reduxjs/toolkit';
import { Api } from '../../../api/api';
import { transformChar } from '../../../utils/utils';
import { ICharItem } from '../charSlice';

export const getChar = createAsyncThunk<Array<ICharItem>, number, { rejectValue: string }>(
  'chargetChar',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await Api.getCharItem(id);
      const newRes: Array<ICharItem> = data.results.map(transformChar);

      return newRes;
    } catch (error: any) {
      return rejectWithValue(`Ошибка загрузки данных: ${error?.response?.status || 500}`);
    }
  },
);
