import { useEffect } from 'react';
import { Container } from '../components/Cantainer';
import { CharList } from '../components/CharList';
import { RandomChar } from '../components/RandomChar';

import { useAppDispatch } from '../hooks/hooks';
import { getChars } from '../redux/slices/asynkThunks/getChars';

export const MainPages = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getChars());
  }, [dispatch]);
  return (
    <>
      <RandomChar />
      <Container>
        <CharList />
      </Container>
    </>
  );
};
