import styled from 'styled-components';
import { main_color } from '../../common/variables';

export const StyledHeader = styled.div`
  padding-top: 55px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 700;
  font-size: 28px;
  line-height: 33px;
  h1 span {
    color: ${main_color};
  }
  ul {
    width: 201px;
    justify-content: space-between;
    display: flex;
    font-size: 24px;
    line-height: 28px;
  }
`;
