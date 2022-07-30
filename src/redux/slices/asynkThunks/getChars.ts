import axios, { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ICharItem } from '../charSlice';
import { _apiBase, _apiKey } from '../../../common/variables';

export const getChars = createAsyncThunk<Array<ICharItem>, void, { rejectValue: string }>(
  'char/getCahrs',
  async (_, { rejectWithValue }) => {
    const res: Array<any> = await axios
      .get(
        `${_apiBase}characters?limit=9&offset=210&${_apiKey}
          `,
      )
      .then((res) => res.data.data.results)
      .catch((error: AxiosError) =>
        rejectWithValue(`Ошибка загрузки данных: ${error.response?.status}`),
      );

    const newRes: Array<ICharItem> = res.map((obj) => {
      return {
        id: obj.id,
        name: obj.name,
        description: obj.description,
        thumbnail: obj.thumbnail.path + '.' + obj.thumbnail.extension,
        homepage: obj.urls[0].url,
        wiki: obj.urls[1].url,
        comics: obj.comics.items,
      };
    });

    return newRes;
  },
);
