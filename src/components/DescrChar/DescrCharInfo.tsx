import { useAppSelector } from '../../hooks/hooks';
import { isNoImg } from '../../utils/utils';
import { Button } from '../Button';
import { CharIcon } from '../CharItem/CharIcon';
import { GridBlock } from '../GridBlock';

import { Title } from '../Title';

export const DescrCharInfo = () => {
  const selectedChar = useAppSelector((state) => state.char.selectedChar);
  if (selectedChar) {
    const { homepage, thumbnail, wiki, name } = selectedChar;
    return (
      <GridBlock col="150px minmax(101px, auto)" rows="minmax(150px, auto)" col_gap="25px">
        <CharIcon w="150px" h="150px" noImg={isNoImg(thumbnail)}>
          <img src={thumbnail} alt="char" />
        </CharIcon>
        <div>
          <Title mb="38px">{name}</Title>
          <Button href={homepage} mb="10px">
            HOMEPAGE
          </Button>
          <Button href={wiki}>WIKI</Button>
        </div>
      </GridBlock>
    );
  } else return <>Error</>;
};
