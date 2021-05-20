import styled from 'styled-components';
import React from 'react';

const Container = styled.div`
  height: 8.9814814815vh;
  flex-grow: 0;
  background-color: rgba(44, 44, 44, 0.2);
  position: fixed;
  top:0;
  left:0;
  right:0;
  z-index: 98;
`;

const Logo = styled.img`
  margin: 1vh 0px 1vh 10.417vw;
  height: 80%;
  z-index: 99;
  /*width: 19.7395834%;*/
`


function TopBar(){
    return(
        <Container>
            <Logo src={process.env.PUBLIC_URL +"red-bandana@3x.webp"}/>
        </Container>
    );
};

export default TopBar;