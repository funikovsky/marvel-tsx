import { FC } from 'react';
import { second_color } from '../../common/variables';
import { useAppSelector } from '../../hooks/hooks';
import { ICharItem } from '../../redux/slices/charSlice';
import { Button } from '../Button';
import { CharIcon } from '../CharItem/CharIcon';

import { ErrorRandomChar } from '../ErrorRandomChar';
import { GridBlock } from '../GridBlock';
import { Spinner } from '../Spinner';
import { StyledRandomCharInfo } from './StyledRandomCharInfo';

interface RandomCharInfoProps {
  randomChar: Array<ICharItem>;
}

export const RandomCharInfo: FC<RandomCharInfoProps> = ({ randomChar }) => {
  const loading = useAppSelector((state) => state.char.randomCharLoading);
  if (loading === 'loading') return <Spinner />;
  if (loading === 'error')
    return (
      <>
        <ErrorRandomChar />
      </>
    );

  const { thumbnail, description, name, homepage, wiki } = randomChar[0];
  const descr = description ? description.slice(0, 200) + '...' : 'No description...';

  return (
    <StyledRandomCharInfo>
      <CharIcon w="180px" h="180px">
        <img src={thumbnail} />
      </CharIcon>
      <GridBlock col="265px" rows="26px 90px 38px" row_gap="13px">
        <h2>{name}</h2>
        <div>
          <p>{descr}</p>
        </div>
        <GridBlock col="repeat(2, 101px)" rows="38px" col_gap="30px">
          <Button href={homepage}>HOMEPAGE</Button>
          <Button href={wiki} bg_color={second_color}>
            WIKI
          </Button>
        </GridBlock>
      </GridBlock>
    </StyledRandomCharInfo>
  );
};
