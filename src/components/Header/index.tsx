import { FC } from 'react';
import { Link } from 'react-router-dom';
import { StyledHeader } from './StyledHeader';
import { StyledLink } from './StyledLink';

export const Header: FC = () => {
  return (
    <StyledHeader>
      <h1>
        <Link to="/marvel-tsx">
          <span>Marvel</span> information portal
        </Link>
      </h1>
      <nav>
        <ul>
          <li>
            <StyledLink to="/marvel-tsx">Characters</StyledLink>
          </li>
          /
          <li>
            <StyledLink to="/marvel-tsx/comics">Comics</StyledLink>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  );
};
