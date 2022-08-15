import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { main_color } from '../../common/variables';

export const StyledLink = styled(NavLink)`
  &.active {
    color: ${main_color};
  }
`;
