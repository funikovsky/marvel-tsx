import { CharIcon } from '../CharItem/CharIcon';
import { FlexBlock } from '../FlexBlock';
import { Title } from '../Title';

export const ComicItem = () => {
  return (
    <FlexBlock direction="column" rowGap="10px">
      <CharIcon w="225px" h="346px">
        <img src="/asset/img/UW.png" alt="comicImg" />
      </CharIcon>
      <Title fs="14px" fw="700" lh="16px">
        ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB
      </Title>
      <Title fs="14px" fw="700" lh="16px" color="rgba(0, 0, 0, 0.6)">
        9.99$
      </Title>
    </FlexBlock>
  );
};
