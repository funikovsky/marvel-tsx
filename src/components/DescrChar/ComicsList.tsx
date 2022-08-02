import { FC } from 'react';
import { GridBlock } from '../GridBlock';
import { Title } from '../Title';
import { ComicName } from './ComicName';

interface ComicsListProps {
  comics: Array<{
    resourceURI: string;
    name: string;
  }>;
}

export const ComicsList: FC<ComicsListProps> = ({ comics }) => {
  if (comics.length === 0) return <Title h="40px">No comics</Title>;
  return (
    <>
      <GridBlock col="375px" rows="repeat(11, minmax(25px, auto))">
        <Title fs="18px" lh="21px">
          Comics:
        </Title>
        {comics.slice(0, 9).map((comic) => (
          <ComicName>{comic.name}</ComicName>
        ))}
      </GridBlock>
    </>
  );
};
