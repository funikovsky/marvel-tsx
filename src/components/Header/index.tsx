import { FC } from 'react';
import { StyledHeader } from './StyledHeader';

export const Header: FC = () => {
  return (
    <StyledHeader>
      <h1>
        <a href="/">
          <span>Marvel</span> information portal
        </a>
      </h1>
      <nav>
        <ul>
          <li>
            <a href="/">Characters</a>
          </li>
          /
          <li>
            <a href="/">Comics</a>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  );
};
