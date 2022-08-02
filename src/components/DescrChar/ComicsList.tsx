import { FC } from 'react';
import { CharsComicsItem } from '../../api/types';
import { _apiKey } from '../../common/variables';
import { GridBlock } from '../GridBlock';
import { Title } from '../Title';
import { ComicName } from './ComicName';

interface ComicsListProps {
  comics: CharsComicsItem['items'];
}

export const ComicsList: FC<ComicsListProps> = ({ comics }) => {
  if (comics.length === 0) return <Title h="40px">No comics</Title>;
  return (
    <GridBlock col="375px" rows="repeat(11, minmax(25px, auto))">
      <Title fs="18px" lh="21px">
        Comics:
      </Title>
      {comics.slice(0, 9).map((comic) => (
        <ComicName>{comic.name}</ComicName>
      ))}
    </GridBlock>
  );
};
