import { FC } from 'react';
import { useAppDispatch } from '../../hooks/hooks';
import { getSelectedChar } from '../../redux/slices/charSlice';
import { isNoImg } from '../../utils/utils';
import { CharIcon } from './CharIcon';
import { CharName } from './CharName';
import { StyledCharItem } from './StyledCharItem';

interface CharItemProps {
  id: number;
  name: string;
  thumbnail: string;
}

export const CharItem: FC<CharItemProps> = ({ name, thumbnail, id }) => {
  const dispatch = useAppDispatch();

  return (
    <StyledCharItem onClick={() => dispatch(getSelectedChar(id))}>
      <CharIcon noImg={isNoImg(thumbnail)} w="200px" h="200px">
        <img src={thumbnail} alt={name} />
      </CharIcon>
      <CharName>
        <span>{name}</span>
      </CharName>
    </StyledCharItem>
  );
};
