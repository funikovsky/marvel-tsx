import styled from 'styled-components';

export const StyledDescrChar = styled.div`
  position: sticky;
  top: 0;
  display: grid;
  padding: 25px;
  width: 425px;
  grid-template-columns: 375px;
  grid-template-rows: minmax(150px, auto) minmax(40px, auto) minmax(150px, auto);

  row-gap: 15px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
`;
