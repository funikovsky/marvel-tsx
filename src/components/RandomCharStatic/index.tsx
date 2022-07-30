import { Button } from '../Button';
import { StyledRandomCharStatic } from './StyledRandomCharStatic';

export const RandomCharStatic = () => {
  return (
    <StyledRandomCharStatic>
      <img src="/asset/img/Decoration.png" alt="decor" />
      <div>
        <p>Random character for today! Do you want to get to know him better?</p>
      </div>
      <div>
        <span>Or choose another one</span>
      </div>
      <Button>TRY IT</Button>
    </StyledRandomCharStatic>
  );
};
