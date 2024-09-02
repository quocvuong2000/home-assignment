import React, { PropsWithChildren } from 'react';
import { Header } from '../Header';

const PageContainer = ({ children }: PropsWithChildren) => {
  return (
    <React.Fragment>
      <Header />
      <main>{children}</main>
    </React.Fragment>
  );
};

export default PageContainer;
