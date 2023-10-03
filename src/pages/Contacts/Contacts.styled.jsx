import styled from '@emotion/styled';
import img from '../../image/Mano.jpg';

export const MainDiv = styled.div`
min-height: 89vh;
padding:10px 30px;
display: flex;
justify-content: flex-start;
font-size: 40;
border-width: medium;
color: #010101;
background-image: url(${img});
    background-repeat: no-repeat;
  background-size: 30%;
  background-position: right;

  @media (max-width: 768px) {
  flex-direction:column;
  align-items: center;
  background-size: 30%;
  background-position:right ;

  }
`
export const Container = styled.div`
    margin-left: 150px;
    margin-top: 60px;
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