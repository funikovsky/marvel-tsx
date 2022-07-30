import styled from 'styled-components';

export const StyledCharItem = styled.div`
  transition: all 0.5s;
  cursor: pointer;
  &:hover {
    transform: translateY(-5px) scale(102%);
    filter: drop-shadow(0px 5px 20px #9f0013);
  }
`;
