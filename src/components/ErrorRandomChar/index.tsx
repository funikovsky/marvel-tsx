import styled from 'styled-components';
import { ErrorIcon } from '../errorIcon/ErrorIcon';

const StyledErrorRandomChar = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 40px;
  div:last-child {
    padding: 35px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const ErrorRandomChar = () => {
  return (
    <StyledErrorRandomChar>
      <ErrorIcon />
      <div>
        <span>ERROR! Try again</span>
      </div>
    </StyledErrorRandomChar>
  );
};
