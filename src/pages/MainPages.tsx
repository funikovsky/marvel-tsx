import { useEffect } from 'react';
import { Container } from '../components/Cantainer';
import { CharList } from '../components/CharList';
import { DescrChar } from '../components/DescrChar';
import { RandomChar } from '../components/RandomChar';

import { useAppDispatch } from '../hooks/hooks';
import { getChars } from '../redux/slices/asynkThunks/getChars';
import { changeOffset } from '../redux/slices/charSlice';

export const MainPages = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getChars());
    dispatch(changeOffset());
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
