import { useAppSelector } from '../../hooks/hooks';
import { Button } from '../Button';
import { ButtonBlock } from '../ButtonBlock';
import { CharItem } from '../CharItem';
import { GridBlock } from '../GridBlock';

export const CharList = () => {
  const dataChars = useAppSelector((state) => state.char.dataChar);
  return (
    <div>
      <GridBlock
        col="repeat(3, 200px)"
        rows="repeat(3, 318px)"
        col_gap="25px"
        row_gap="30px"
        auto_rows="repeat(3, 318px)">
        {dataChars.map(({ id, name, thumbnail }) => (
          <CharItem key={id} name={name} thumbnail={thumbnail} />
        ))}
      </GridBlock>
      <ButtonBlock>
        <Button>LOAD MORE</Button>
      </ButtonBlock>
    </div>
  );
};
