import styled from 'styled-components';

export const Title = styled.div<{ h?: string; mb?: string; fs?: string; fw?: string; lh?: string }>`
  font-weight: ${(props) => (props.fw ? props.fw : '700')};
  font-size: ${(props) => (props.fs ? props.fs : '22px')};
  line-height: ${(props) => (props.lh ? props.lh : '26px')};
  margin-bottom: ${(props) => (props.mb ? props.mb : '')};
  height: ${(props) => (props.h ? props.h : '')}; ;
`;
