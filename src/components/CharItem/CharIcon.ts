import styled from 'styled-components';

export const CharIcon = styled.div<{ w?: string; h?: string }>`
  width: ${(props) => (props.w ? props.w : '')};
  height: ${(props) => (props.h ? props.h : '')};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
