import { StyledHeaderComics } from './StyledHeaderComics';
import { CharIcon } from '../CharItem/CharIcon';
import { HeaderComicsText } from './HeaderComicsText';

export const HeaderComics = () => {
  return (
    <StyledHeaderComics>
      <CharIcon w="152px">
        <img src="/asset/img/Avengers.png" alt="Avengers" />
      </CharIcon>
      <HeaderComicsText>New comics every week! Stay tuned!</HeaderComicsText>
      <CharIcon w="133px">
        <img src="/asset/img/Avengers logo.png" alt="Avengers" />
      </CharIcon>
    </StyledHeaderComics>
  );
};
