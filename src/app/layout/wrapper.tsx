import { css } from '@/../styled-system/css';
import { FC, ReactNode } from 'react';

interface WrapperProp {
  children: ReactNode
}

export const Container: FC<WrapperProp> = ({ children }: any) => (
  <div
    className={css({
      maxWidth: '1400px',
      mx: 'auto',
    })}
  >
    {children}
  </div>
)