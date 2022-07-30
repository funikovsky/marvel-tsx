import { FC, ReactNode } from 'react';
import { StyledButton } from './StyledButton';

export const Button: FC<{ children: ReactNode; bg_color?: string }> = ({ children, bg_color }) => {
  return (
    <StyledButton bg_color={bg_color} href="/">
      <div> {children}</div>
    </StyledButton>
  );
};
