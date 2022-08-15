import { StyledHeaderComics } from './StyledHeaderComics';
import { CharIcon } from '../CharItem/CharIcon';

export const HeaderComics = () => {
  return (
    <StyledHeaderComics>
      <CharIcon w="152px">
        <img src="/asset/img/Avengers.png" alt="Avengers" />
      </CharIcon>
      <CharIcon w="133px">
        <img src="/asset/img/Avengers logo.png" alt="Avengers" />
      </CharIcon>
    </StyledHeaderComics>
  );
};
