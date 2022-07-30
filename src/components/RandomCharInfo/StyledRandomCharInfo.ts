import styled from 'styled-components';

export const StyledRandomCharInfo = styled.div`
  display: grid;
  grid-template-columns: 180px 265px;
  grid-template-rows: 180px;
  grid-auto-rows: 180px;
  column-gap: 30px;
  padding: 35px 35px;
  background: #ffffff;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.25);
  div img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  h2 {
    font-size: 22px;
    font-weight: 700;
    line-height: 26px;
  }
`;
