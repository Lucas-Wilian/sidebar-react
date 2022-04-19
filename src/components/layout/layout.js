import React from 'react';
import * as C from './styles';
import { SideBar } from '../sidebar/sidebar';

export const Layout = ({ children }) => {
  return (
    <C.Container>
      <SideBar />
      <C.Main>{children}</C.Main>
    </C.Container>
  );
};
