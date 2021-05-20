import React from 'react';
import styled from 'styled-components';

function Page1(){
  return(
    <div>
      <Logo src={process.env.PUBLIC_URL +"red-bandana@3x.webp"}/>
      <Introduce>뮤지션들을 위한 음향기기 공유 플랫폼</Introduce>
      <Contents>프로가 세미프로에게, 세미프로가 비기너에게, 뮤지션의 선순환을 만들어갑니다.</Contents>
      <BackgroundImage src={process.env.PUBLIC_URL +"group-38.webp"}/>
    </div>
  );
}
export default Page1;

const BackgroundImage = styled.img`
  position: relative;
  width: 100vw;
  height:auto;
  margin-bottom:0px;
  z-index: 1;
`;

const Logo = styled.img`
  position: absolute;
  top: 31%;
  left:9.2vw;
  height: auto;
  width: 33.125vw;
  z-index: 2;
`;

const Introduce = styled.p`
  position: absolute;
  top: 44%;
  left:11.4vw;
  width: 90%;
  margin : 0;
  font-family: NotoSansCJKKR;
  font-size: 38px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
  z-index: 3;
`;

const Contents = styled.p`
  position: absolute;
  top: 50%;
  left:11.4vw;
  width: 90%;
  height: 33px;
  margin: 0;
  font-family: NotoSansCJKKR;
  font-size: 23px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
  z-index: 4;
`;