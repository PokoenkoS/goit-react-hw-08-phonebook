import styled from '@emotion/styled';
import img from '../../image/Mano.jpg';

export const MainDiv = styled.div`
min-height: 89vh;
padding:10px 50px;
display: flex;
flex-direction:column;
font-size: 40;
color: #010101;
background-image: url(${img});
background-repeat: no-repeat;
background-size: 100%;
background-position: center;

  @media (min-width: 768px) {
  flex-direction:column;
  background-size: 50%;
  background-position:right ;
  padding:10px 30px;
  }
`
export const Container = styled.div`
    margin-left: 150px;
    margin-top: 60px;
    @media (max-width: 768px) {
        margin-left: 30px;
  
  }
  @media (max-width: 1440px) {
        margin-left: 20px;
  
  }
`

export const Title = styled.h1`
    font-family:Croissant One;
    padding-left: 40px;
    color: red;
    
`
export const Text = styled.h2`
    font-family:Croissant One;
    margin-left: 15px;
`