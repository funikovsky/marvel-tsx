import { _defaultNumberChar } from '../../common/variables';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { getChars } from '../../redux/slices/asynkThunks/getChars';
import { changeOffset } from '../../redux/slices/charSlice';
import { Button } from '../Button';
import { ButtonBlock } from '../ButtonBlock';
import { CharItem } from '../CharItem';
import { GridBlock } from '../GridBlock';

export const CharList = () => {
  const { dataChar, offset } = useAppSelector((state) => state.char);
  const dispatch = useAppDispatch();

  const handleClick = (offSet: number) => {
    dispatch(changeOffset(_defaultNumberChar));
    const offSetStr = offSet.toString();
    dispatch(getChars(offSetStr));
  };
  return (
    <div>
      <GridBlock
        col="repeat(3, 200px)"
        rows="repeat(3, 318px)"
        col_gap="25px"
        row_gap="30px"
        auto_rows="repeat(3, 318px)">
        {dataChar.map(({ id, name, thumbnail }) => (
          <CharItem key={id} name={name} thumbnail={thumbnail} id={id} />
        ))}
      </GridBlock>
      <ButtonBlock>
        <Button onClick={() => handleClick(offset)}>LOAD MORE</Button>
      </ButtonBlock>
    </div>
  );
};
