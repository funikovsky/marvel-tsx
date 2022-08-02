import { FC, MouseEventHandler, ReactNode } from 'react';
import { StyledButton } from './StyledButton';

export const Button: FC<{
  children: ReactNode;
  bg_color?: string;
  href?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  mb?: string;
}> = ({ children, bg_color, href, onClick, mb }) => {
  return (
    <StyledButton bg_color={bg_color} href={href} onClick={onClick} mb={mb}>
      <div> {children}</div>
    </StyledButton>
  );
};
