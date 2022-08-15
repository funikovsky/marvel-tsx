import { FC } from 'react';
import { useAppDispatch } from '../../hooks/hooks';
import { getChar } from '../../redux/slices/asynkThunks/getChar';
import { generateId } from '../../utils/utils';

import { Button } from '../Button';
import { StyledRandomCharStatic } from './StyledRandomCharStatic';

export const RandomCharStatic: FC = () => {
  const dispatch = useAppDispatch();

  return (
    <StyledRandomCharStatic>
      <img src="/asset/img/Decoration.png" alt="decor" />
      <div>
        <p>Random character for today! Do you want to get to know him better?</p>
      </div>
      <div>
        <span>Or choose another one</span>
      </div>
      <Button onClick={() => dispatch(getChar(generateId()))}>TRY IT</Button>
    </StyledRandomCharStatic>
  );
};
