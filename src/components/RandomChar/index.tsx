import { RandomCharInfo } from '../RandomCharInfo';
import { RandomCharStatic } from '../RandomCharStatic';
import { StyledRandomChar } from './StyledRandomChar';

export const RandomChar = () => {
  const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
  return (
    <StyledRandomChar>
      <RandomCharInfo />
      <RandomCharStatic />
    </StyledRandomChar>
  );
};
