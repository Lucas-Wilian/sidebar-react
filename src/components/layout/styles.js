import styled from 'styled-components';
import { V } from '../../styles/variable';

export const Container = styled.div`
  display: flex;
`;

export const Main = styled.div`
  padding: calc(${V.xxlSpacing} * 2);
  h1 {
    font-size: 14px;
  }
`;
