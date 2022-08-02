import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { getChar } from '../../redux/slices/asynkThunks/getChar';
import { generateId } from '../../utils/utils';
import { RandomCharInfo } from '../RandomCharInfo';
import { RandomCharStatic } from '../RandomCharStatic';
import { StyledRandomChar } from './StyledRandomChar';

export const RandomChar = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getChar(generateId()));
  }, []);
  const randomChar = useAppSelector((state) => state.char.dataRandomChar);
  return (
    <StyledRandomChar>
      <RandomCharInfo randomChar={randomChar} />
      <RandomCharStatic />
    </StyledRandomChar>
  );
};
