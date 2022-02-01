import styled, {keyframes} from 'styled-components';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




export const Page = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: #F8E5E5;
  padding: ${props => props.pad};
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: ${props => props.fw};
  flex-direction: ${props => props.fd};
  background-color: ${props => props.bg};
  justify-content: ${props => props.jc};
  align-items: ${props => props.ai};
  padding: ${props => props.pad};
  margin: ${props => props.mar};
  width: 100%;
  height: 100%;
  background-size: cover;
`;

export const Grid = styled.div`
  display:grid;
  grid-template-columns: ${props => props.gtc};
  background-color: ${props => props.bgc};
  background-size:auto;
  grid-gap: ${props => props.gap};
  background-image: ${props => props.bgi};
  height: 100%;
  width: 100%;
  @media screen and (max-width: 600px){
    grid-template-columns: 100%;
  }
`;
export const Gallery = styled.div`
  display:grid;
  flex-direction: column-reverse;
  grid-template-columns: ${props => props.gtc};
  grid-gap: ${props => props.gap};
  background-color: ${props => props.bg};
  justify-items: center;
  height: 100%;
  width: 100%;
  @media screen and (max-width: 830px){
    grid-template-columns: 50% 50%;
  }
`;

export const BoxOuter = styled.div`
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bg};
  height:650px;
  width:650px;
  
  border-bottom:5px solid black;
  border-left:10px solid black;
   @media screen and (max-width: 600px){
    height:600px;
    width:100%;
    border:none;
   }
`;
export const BoxInner = styled.div`
  display: grid;
  grid-template-colums:100%;
  background-color: white;
  height:600px;
  width:600px;
  @media screen and (max-width: 600px){
    height:550px;
    width:450px;
   }
`;


export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: ${props => props.pad };
  background-color: ${props => props.bg};
  width:100%;
  position:sticky;
  border-bottom: 2px solid black;
`;

export const MobileNav =  styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: right;
  padding: ${props => props.pad };
  background-color: ${props => props.bg};
  border-bottom: 2px solid black;
  width:100%;
  position:sticky;
`;

export const NavItem = styled(Link)`
  padding: 10px 200px;
  font-size: 25px;
  text-decoration: none;
  color:black;
  align-self: center;
  font-family: 'Mochiy Pop P One', sans-serif;
  &:hover{
      color:#C39EA0;
  }
  @media screen and (max-width: 1220px){
    padding: 10px 150px;
  }
  @media screen and (max-width: 1030px){
    padding: 10px 100px;
  }
  @media screen and (max-width: 830x){
    padding: 10px 50px;
  }
  @media screen and (max-width: 650px){
    padding: 10px 20px;
  }
  @media screen and (max-width: 650px){
    padding: 10px 20px;
  }
`;


export const Icon = styled(FontAwesomeIcon)`
  font-size: 40px;
`;

export const NavToggle = styled.button`
  justify-self: flex-end;
  align-self: flex-end;
  display:none;
  background:none;
  border:none;
  @media screen and (max-width: 500px){
    display:initial;
  }

`;

export const ImgLrg = styled.img`
  height:500px;
  width:500px;
  @media screen and (max-width: 1000px){
    height:400px;
    width:400px;
  }
  @media screen and (max-width: 800px){
    height:300px;
    width:300px;
  }
  @media screen and (max-width: 600px){
    height:400px;
    width:400px;
  }
`;

export const Img = styled.img`  
  background-image: ${props => props.bgi}
  height:300px;
  width:300px;
  @media screen and (max-width: 1220px){
    height:250px;
    width:250px;
  }
  @media screen and (max-width: 1030px){
    height:200px;
    width:200px;
  }
  @media screen and (max-width: 830px){
    height:150px;
    width:150px;
  }
`;

export const TextTitle = styled.p`
  color: ${props => props.color };
  font-size: 35px;
  font-weight: 500;
  padding: ${props => props.pad};
  text-align: ${props => props.ta };
  font-family: 'Mochiy Pop P One', sans-serif;
  @media screen and (max-width: 600px){
    text-align: center;
  }
`;
export const TextSubTitle = styled.p`
  color: ${props => props.color };
  font-size: 25px;
  font-weight: 200;
  text-align: ${props => props.ta };
  font-family: 'Mochiy Pop P One', sans-serif;
  @media screen and (max-width: 600px){
    text-align: center;
  }
`;
export const TextSmall = styled.p`
  color: ${props => props.color };
  font-size: 20px;
  font-weight: 200;
  text-align: ${props => props.ta };
  font-family: 'Mochiy Pop P One', sans-serif;
  @media screen and (max-width: 600px){
    text-align: center;
  }
`;

const buttonAmination = keyframes`
     from {background-color: blue;}
     to {background-color: red;
`;
export const Button = styled.button`
  height: 50px;
  width: 200px;
  font-weight: 500;
  font-size: 17px;
  font-family: 'Mochiy Pop P One', sans-serif;
  background-color:${props => props.bg };
  box-shadow: 10px 10px black;
  &: hover{
    background-color:black;
    color: white;
    box-shadow: 0px 0px;
  }
`;

