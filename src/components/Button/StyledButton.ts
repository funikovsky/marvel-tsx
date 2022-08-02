import styled from 'styled-components';
import { main_color } from '../../common/variables';

export const StyledButton = styled.a<{ bg_color?: string; mb?: string }>`
  width: 101px;
  height: 38px;
  margin-bottom: ${(props) => (props.mb ? props.mb : '')};

  div {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    background-color: ${(props) => (props.bg_color ? props.bg_color : main_color)};
    border: transparent;

    color: #fff;
    width: 100%;
    height: 100%;

    :active {
      transform: scale(90%);
    }
    &:before {
      content: '';
      position: absolute;
      border-color: #ffffff transparent;
      border-style: solid;
      border-width: 0 0 10px 10px;
      content: '';
      display: block;
      right: 0;
      bottom: 0;
      transition: none;
    }
    &:after {
      content: '';
      position: absolute;
      border-color: #ffffff transparent;
      border-style: solid;
      border-width: 0 0 10px 10px;
      content: '';
      display: block;
      left: 0;
      top: 0;
      transition: none;
      transform: rotate(180deg);
    }
  }
`;
