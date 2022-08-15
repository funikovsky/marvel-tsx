import { useEffect, useRef } from 'react';
import { _defaultNumberChar } from '../common/variables';
import { Container } from '../components/Cantainer';
import { CharList } from '../components/CharList';
import { DescrChar } from '../components/DescrChar';
import { RandomChar } from '../components/RandomChar';

import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { getChars } from '../redux/slices/asynkThunks/getChars';
import { changeOffset } from '../redux/slices/charSlice';

export const MainPages = () => {
  const dispatch = useAppDispatch();
  const dataChars = useAppSelector((state) => state.char.dataChar);

  useEffect(() => {
    if (!dataChars.length) {
      dispatch(getChars());
    }

    dispatch(changeOffset(_defaultNumberChar));
  }, [dispatch]);
  return (
    <>
      <RandomChar />
      <Container>
        <CharList />
        <DescrChar />
      </Container>
    </>
  );
};
