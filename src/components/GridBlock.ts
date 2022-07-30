import styled from 'styled-components';

export const GridBlock = styled.div<{
  col?: string;
  rows?: string;
  auto_rows?: string;
  col_gap?: string;
  row_gap?: string;
}>`
  display: grid;
  grid-template-columns: ${(props) => (props.col ? props.col : '')};
  grid-template-rows: ${(props) => (props.rows ? props.rows : '')};
  grid-auto-rows: ${(props) => (props.auto_rows ? props.auto_rows : '')};
  column-gap: ${(props) => (props.col_gap ? props.col_gap : '')};
  row-gap: ${(props) => (props.row_gap ? props.row_gap : '')};
`;
