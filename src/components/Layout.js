import React from 'react';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import styled from 'styled-components';

const Layout = () => {
  return (
    <MainContainer>
      <Sidebar />
      <Dashboard />
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
`;

export default Layout;
