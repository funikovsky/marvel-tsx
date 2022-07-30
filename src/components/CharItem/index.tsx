import { FC } from 'react';
import { CharIcon } from './CharIcon';
import { CharName } from './CharName';
import { StyledCharItem } from './StyledCharItem';

interface CharItemProps {
  name: string;
  thumbnail: string;
}

export const CharItem: FC<CharItemProps> = ({ name, thumbnail }) => {
  return (
    <StyledCharItem>
      <CharIcon w="200px" h="200px">
        <img src={thumbnail} alt={name} />
      </CharIcon>
      <CharName>
        <span>{name}</span>
      </CharName>
    </StyledCharItem>
  );
};
