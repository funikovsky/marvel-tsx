import { FC } from 'react';
import { CharIcon } from '../CharItem/CharIcon';
import { FlexBlock } from '../FlexBlock';
import { Title } from '../Title';

interface ComicItemProps {
  images: [{ path: string; extension: string }];
  prices: [{ price: number }];
  title: string;
  url: string;
}

export const ComicItem: FC<ComicItemProps> = ({ title, prices, images, url }) => {
  return (
    <FlexBlock direction="column" rowGap="10px">
      <CharIcon w="225px" h="346px">
        <a href={url}>
          <img
            src={images.length ? `${images[0].path}.${images[0].extension}` : 'asset/img/UW.png'}
            alt="comicImg"
          />
        </a>
      </CharIcon>
      <Title fs="14px" fw="700" lh="16px">
        {title}
      </Title>
      <Title fs="14px" fw="700" lh="16px" color="rgba(0, 0, 0, 0.6)">
        {prices[0].price}$
      </Title>
    </FlexBlock>
  );
};
