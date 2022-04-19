import React from 'react';
import * as C from './styles';

import { logoSVG } from '../../assets';
import {
  AiOutlineSearch,
  AiOutlineHome,
  AiOutlineApartment,
  AiOutlineSetting,
} from 'react-icons/ai';
import { BsPeople } from 'react-icons/bs';
import { MdOutlineAnalytics, MdLogout } from 'react-icons/md';

export const SideBar = () => {
  const linksAray = [
    {
      label: 'Home',
      icon: <AiOutlineHome />,
      to: '/',
      notification: 0,
    },

    {
      label: 'Statistics',
      icon: <MdOutlineAnalytics />,
      to: '/statistics',
      notification: 0,
    },

    {
      label: 'Customers',
      icon: <BsPeople />,
      to: '/customers',
      notification: 0,
    },

    {
      label: 'Diagrams',
      icon: <AiOutlineApartment />,
      to: '/diagrams',
      notification: 1,
    },
  ];
  const secondaryLinksAray = [
    {
      label: 'Settings',
      icon: <AiOutlineSetting />,
    },
    {
      label: 'Logout',
      icon: <MdLogout />,
    },
  ];
  return (
    <C.Container>
      <C.Logo>
        <img alt='img_log' src={logoSVG} />
      </C.Logo>
      <C.Search>
        <C.SearchIcon>
          <AiOutlineSearch />
        </C.SearchIcon>
        <input />
      </C.Search>
      <C.Divider />
      {linksAray.map(({ icon, link, label, notification }) => (
        <C.LinkContainer key={label}>
          <C.LinkSidebar to={link}>
            <C.LinkIcon>{icon}</C.LinkIcon>
            <C.LinkLabel>{label}</C.LinkLabel>
            {/*Se a variavel notificação for 0 ou Null, não ira aparecer nada para o usuario*/}
            {!!notification && (
              <C.LinkNotification>{notification}</C.LinkNotification>
            )}
          </C.LinkSidebar>
        </C.LinkContainer>
      ))}
      <C.Divider />
      {secondaryLinksAray.map(({ icon, label }) => (
        <C.LinkContainer key={label}>
          <C.LinkSidebar to='/'>
            <C.LinkIcon>{icon}</C.LinkIcon>
            <C.LinkLabel>{label}</C.LinkLabel>
          </C.LinkSidebar>
        </C.LinkContainer>
      ))}
      <C.Divider />
      <C.Theme>
        <C.ThemeLabel>Dark Mode</C.ThemeLabel>
        <C.ThemeToggler>
          <C.ToggleThumb />
        </C.ThemeToggler>
      </C.Theme>
    </C.Container>
  );
};
