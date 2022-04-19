import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { btnReset, V } from '../../styles/variable';

export const Container = styled.div`
  width: ${V.sidebarWidth};
  background: ${({ theme }) => theme.bg};
  height: 100vh;
  padding: ${V.lgSpacing};

  position: relative;
`;

export const Logo = styled.div`
  width: 52px;
  img {
    max-width: 100%;
    height: auto;
    cursor: pointer;
  }
  margin-bottom: ${V.lgSpacing};
`;

export const Search = styled.div`
  background: ${({ theme }) => theme.bgAlpha};
  border: 1px solid ${({ theme }) => theme.bg3};
  border-radius: ${V.borderRadius};
  input {
    padding: 0 ${V.smSpacing};
    font-family: inherit;
    letter-spacing: inherit;
    font-size: 16px;
    width: 100%;
    outline: none;
    border: none;
    color: inherit;
    background: transparent;
  }
  display: flex;
`;

export const SearchIcon = styled.button`
  ${btnReset}
  padding: calc(${V.mdSpacing} - 2px) ${V.mdSpacing};
  display: flex;
  cursor: pointer;
  svg {
    font-size: 20px;
  }
`;

export const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: ${({ theme }) => theme.bg3};
  margin: ${V.lgSpacing} 0;
`;

export const LinkContainer = styled.div`
  background: transparent;
  border-radius: ${V.borderRadius};
  margin: 8px 0;
  :hover {
    box-shadow: inset 0 0 0 1px ${({ theme }) => theme.bg3};
  }
`;

export const LinkSidebar = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  font-size: 16px;
  padding: calc(${V.smSpacing});
`;

export const LinkIcon = styled.div`
  padding: ${V.smSpacing} ${V.mdSpacing};
  display: flex;
  svg {
    font-size: 20px;
  }
`;

export const LinkLabel = styled.span`
  display: block;
  flex: 1;
  margin-left: ${V.smSpacing};
`;

export const LinkNotification = styled.div`
  font-size: 14px;
  padding: calc(${V.smSpacing} / 2) ${V.smSpacing};
  border-radius: calc(${V.borderRadius} / 2);
  background: ${({ theme }) => theme.primary};
  color: white;
  margin-right: ${V.smSpacing};
`;

export const Theme = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
`;

export const ThemeLabel = styled.span`
  display: block;
  flex: 1;
`;

export const ThemeToggler = styled.button`
  ${btnReset}
  margin: 0 auto;
  cursor: pointer;
  width: 36px;
  height: 20px;
  border-radius: 10px;
  background: ${({ theme }) => theme.bg3};
  position: relative;
`;

export const ToggleThumb = styled.div`
  height: 18px;
  width: 18px;
  position: absolute;
  top: 1px;
  bottom: 1px;
  transition: 0.2s ease right;
  right: calc(100% - 18px - 1px);
  border-radius: 50%;
  background: ${({ theme }) => theme.bg};
`;
