import { second_color } from '../../common/variables';
import { Button } from '../Button';
import { CharIcon } from '../CharItem/CharIcon';
import { GridBlock } from '../GridBlock';
import { StyledRandomCharInfo } from './StyledRandomCharInfo';

export const RandomCharInfo = () => {
  return (
    <StyledRandomCharInfo>
      <CharIcon w="180px" h="180px">
        <img src="/asset/img/Thumbnail.png" alt="char" />
      </CharIcon>
      <GridBlock col="265px" rows="26px 90px 38px" row_gap="13px">
        <h2>THOR</h2>
        <div>
          <p>
            As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever
            made, the enchanted hammer Mjolnir. While others have described Thor as an over-muscled,
            oafish imbecile, he's quite smart and compassionate...
          </p>
        </div>
        <GridBlock col="repeat(2, 101px)" rows="38px" col_gap="30px">
          <Button>HOMEPAGE</Button>
          <Button bg_color={second_color}>WIKI</Button>
        </GridBlock>
      </GridBlock>
    </StyledRandomCharInfo>
  );
};
