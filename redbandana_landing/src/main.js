import React from 'react';
import styled from 'styled-components';
import TopBar from './topbar';
import Page1 from './page1';

function Main(){
    return (
    <div>
        <TopBar/>
        <Page1/>
        <BackgroundColor/>
      </div>
    );
}

export default Main;

const BackgroundColor = styled.div`
  background-color: #a12c2c;
  width: 100vw;
  height: 90vh;
  margin-top: -3vh;
`;