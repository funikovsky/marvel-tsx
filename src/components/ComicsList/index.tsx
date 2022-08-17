import { ComicItem } from '../ComicItem';
import { GridBlock } from '../GridBlock';

export const ComicsList = () => {
  return (
    <GridBlock
      col="repeat(4, 225px)"
      rows="repeat(2, 415px)"
      auto_rows="415px"
      col_gap="67px"
      row_gap="55px">
      <ComicItem />
      <ComicItem />
      <ComicItem />
      <ComicItem />
    </GridBlock>
  );
};
