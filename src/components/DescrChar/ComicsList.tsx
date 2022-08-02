import { GridBlock } from '../GridBlock';
import { Title } from '../Title';
import { ComicName } from './ComicName';

export const ComicsList = () => {
  return (
    <>
      <GridBlock col="375px" rows="repeat(11, minmax(25px, auto))">
        <Title fs="18px" lh="21px">
          Comics:
        </Title>
        <ComicName>asgsadrghsdrfh</ComicName>
      </GridBlock>
    </>
  );
};
