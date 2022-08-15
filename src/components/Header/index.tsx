import { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { StyledHeader } from './StyledHeader';
import { StyledLink } from './StyledLink';

export const Header: FC = () => {
  return (
    <StyledHeader>
      <h1>
        <Link to="/">
          <span>Marvel</span> information portal
        </Link>
      </h1>
      <nav>
        <ul>
          <li>
            <StyledLink to="/">Characters</StyledLink>
          </li>
          /
          <li>
            <StyledLink to="/comics">Comics</StyledLink>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  );
};
