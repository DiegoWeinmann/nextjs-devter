import React, { FC } from 'react';
import styles, { globalStyles } from './styles';

export interface AppLayoutProps {}

const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  return (
    <>
      <div>
        <main>{children}</main>
      </div>
      <style jsx>{styles}</style>
      <style jsx global>
        {globalStyles}
      </style>
    </>
  );
};

export default AppLayout;
