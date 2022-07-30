import styled from 'styled-components';

export const StyledRandomCharStatic = styled.div`
  padding: 35px 40px;
  position: relative;
  display: grid;
  grid-template-columns: 373px;
  grid-template-rows: 80px 28px 17px;
  row-gap: 17px;

  background-color: #000;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.73);
  overflow: hidden;
  img {
    position: absolute;
    left: 81%;
    bottom: 21px;
  }
  p,
  span {
    color: #fff;
    font-size: 24px;
  }
  div {
    &:after,
    :before {
      border-color: #000 transparent;
    }
  }
`;
