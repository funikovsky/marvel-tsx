import { FC } from 'react';
import { ComicItem } from '../ComicItem';
import { GridBlock } from '../GridBlock';
import { Spinner } from '../Spinner';

interface DataComic {
  images: [{ path: string; extension: string }];
  prices: [{ price: number }];
  title: string;
  urls: [{ url: string }];
}

interface DataComicsProps {
  dataComics: Array<DataComic>;
}

export const ComicsList: FC<DataComicsProps> = ({ dataComics }) => {
  if (!dataComics.length) return <Spinner />;

  return (
    <GridBlock
      col="repeat(4, 225px)"
      rows="repeat(2, 415px)"
      auto_rows="415px"
      col_gap="67px"
      row_gap="55px">
      {dataComics.map(({ images, prices, title, urls }, index) => (
        <ComicItem title={title} prices={prices} images={images} key={index} url={urls[0].url} />
      ))}
    </GridBlock>
  );
};
