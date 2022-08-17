import styled from 'styled-components';

export const FlexBlock = styled.div<{ direction?: string; mt?: string; rowGap?: string }>`
  display: flex;
  flex-direction: ${(props) => (props.direction ? props.direction : '')};
  margin-top: ${(props) => (props.mt ? props.mt : '')};
  row-gap: ${(props) => (props.rowGap ? props.rowGap : '')};
`;
