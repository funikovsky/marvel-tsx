import { Container } from '../components/Cantainer';
import { ComicsList } from '../components/ComicsList';
import { FlexBlock } from '../components/FlexBlock';
import { HeaderComics } from '../components/HeaderComics/index';

export const ComicsPages = () => {
  return (
    <FlexBlock direction="column" mt="50px" rowGap="45px">
      <HeaderComics />
      <ComicsList />
    </FlexBlock>
  );
};
