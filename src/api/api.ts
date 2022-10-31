import { _apiKey, _offSet } from '../common/variables';
import { AxiosResponse } from 'axios';
import { ApiResponse } from './types';
import { apiMain } from './config';

const getCharsList = async (offSet: string = _offSet.toString()) => {
  const res: AxiosResponse<ApiResponse> = await apiMain.get(
    `characters?limit=9&offset=${offSet}&${_apiKey}`,
  );

  return res.data;
};

const getCharItem = async (id: number) => {
  const res: AxiosResponse<ApiResponse> = await apiMain.get(`characters/${id}?${_apiKey}`);

  return res.data;
};

export const Api = {
  getCharsList,
  getCharItem,
};
