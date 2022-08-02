import { CharsResponseItem } from '../api/types';

export const transformChar = (char: CharsResponseItem) => ({
  id: char.id,
  name: char.name,
  description: char.description || '',
  thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
  homepage: char.urls[0].url,
  wiki: char.urls[1].url,
  comics: char.comics.items,
});

export const generateId = () => {
  return Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
};
