import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import styled from 'styled-components';

const Layout = () => {
  return (
    <MainContainer>
      <Sidebar />
      <ContentContainer>
        <Outlet />
      </ContentContainer>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
`;

const ContentContainer = styled.div`
  flex: 1;
  padding: 20px;
`;

export default Layout;
