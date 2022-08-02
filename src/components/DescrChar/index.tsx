import { FC } from 'react';
import { useAppSelector } from '../../hooks/hooks';
import { SceletonCharDescr } from '../sceletons/SceletonCharDescr';
import { TextBlock } from '../TextBlock';
import { ComicsList } from './ComicsList';
import { DescrCharInfo } from './DescrCharInfo';
import { StyledDescrChar } from './StyledDescrChar';

export const DescrChar: FC = () => {
  const selectedChar = useAppSelector((state) => state.char.selectedChar);
  if (selectedChar === undefined) return <SceletonCharDescr />;
  if (selectedChar === null) return <SceletonCharDescr />;

  const { comics } = selectedChar;

  return (
    <StyledDescrChar>
      <DescrCharInfo />
      <TextBlock>
        <p>
          {selectedChar!.description?.length === 0 ? 'No description' : selectedChar!.description}
        </p>
      </TextBlock>
      <ComicsList comics={comics} />
    </StyledDescrChar>
  );
};
