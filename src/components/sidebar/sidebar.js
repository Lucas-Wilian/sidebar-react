import React, { useContext, useRef, useState } from 'react';
import * as C from './styles';

import { logoSVG } from '../../assets';
import {
  AiOutlineSearch,
  AiOutlineHome,
  AiOutlineApartment,
  AiOutlineSetting,
  AiOutlineLeft,
} from 'react-icons/ai';
import { BsPeople } from 'react-icons/bs';
import { MdOutlineAnalytics, MdLogout } from 'react-icons/md';
import { ThemeContext } from '../../App';
import { useLocation } from 'react-router-dom';

export const SideBar = () => {
  const searchRef = useRef(null);
  const { theme, setTheme } = useContext(ThemeContext);
  const [sidebarOpen, setSideBarOpen] = useState(false);
  const { pathname } = useLocation();
  const searchClickHandle = () => {
    if (!sidebarOpen) {
      setSideBarOpen(true);
      searchRef.current.focus();
    } else {
    }
  };

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
    <C.Container isOpen={sidebarOpen}>
      <>
        <C.SideBarButton
          isOpen={sidebarOpen}
          onClick={() => setSideBarOpen((p) => !p)}
        >
          <AiOutlineLeft />
        </C.SideBarButton>
      </>
      <C.Logo>
        <img alt='img_log' src={logoSVG} />
      </C.Logo>
      <C.Search
        onClick={searchClickHandle}
        style={!sidebarOpen ? { width: 'fit-content' } : {}}
      >
        <C.SearchIcon>
          <AiOutlineSearch />
        </C.SearchIcon>
        <input
          ref={searchRef}
          style={!sidebarOpen ? { width: 0, padding: 0 } : {}}
        />
      </C.Search>
      <C.Divider />
      {linksAray.map(({ icon, to, label, notification }) => (
        <C.LinkContainer key={label} isActive={pathname === to}>
          <C.LinkSidebar
            to={to}
            style={!sidebarOpen ? { width: 'fit-content' } : {}}
          >
            <C.LinkIcon>{icon}</C.LinkIcon>
            {sidebarOpen && (
              <>
                <C.LinkLabel>{label}</C.LinkLabel>
                {/*Se a variavel notificação for 0 ou Null, não ira aparecer nada para o usuario*/}
                {!!notification && (
                  <C.LinkNotification>{notification}</C.LinkNotification>
                )}
              </>
            )}
          </C.LinkSidebar>
        </C.LinkContainer>
      ))}
      <C.Divider />
      {secondaryLinksAray.map(({ icon, label }) => (
        <C.LinkContainer key={label}>
          <C.LinkSidebar
            to='/'
            style={!sidebarOpen ? { width: 'fit-content' } : {}}
          >
            <C.LinkIcon>{icon}</C.LinkIcon>
            {sidebarOpen && <C.LinkLabel>{label}</C.LinkLabel>}
          </C.LinkSidebar>
        </C.LinkContainer>
      ))}
      <C.Divider />
      <C.Theme>
        {sidebarOpen && <C.ThemeLabel>Dark Mode</C.ThemeLabel>}
        <C.ThemeToggler
          isActive={theme === 'dark'}
          onClick={() => setTheme((p) => (p === 'light' ? 'dark' : 'light'))}
        >
          <C.ToggleThumb style={theme === 'dark' ? { right: '1px' } : {}} />
        </C.ThemeToggler>
      </C.Theme>
    </C.Container>
  );
};
