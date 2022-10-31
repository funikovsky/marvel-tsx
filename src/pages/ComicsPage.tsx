import axios from 'axios';
import { useEffect, useState } from 'react';

import { ComicsList } from '../components/ComicsList';
import { FlexBlock } from '../components/FlexBlock';
import { HeaderComics } from '../components/HeaderComics/index';

export const ComicsPages = () => {
  const [dataComics, setdataComics] = useState([]);

  const getComics = async () => {
    try {
      const randomComicsList = Math.floor(Math.random() * (53360 - 11254) + 11254);
      const { data } = await axios(
        `https://gateway.marvel.com:443/v1/public/comics?limit=8&offset=${randomComicsList}&apikey=7471f93f8701e29eb1489467be69530e`,
      );
      const dataFetch = await data;
      setdataComics(dataFetch.data.results);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getComics();
  }, []);

  return (
    <FlexBlock direction="column" mt="50px" rowGap="45px">
      <HeaderComics />
      <ComicsList dataComics={dataComics} />
    </FlexBlock>
  );
};
