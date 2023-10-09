import styled from '@emotion/styled'
import img from '../../image/phone-book-and-telephone-arrangement.jpg';


export const Container = styled.div`
   max-width: 420px;
   min-height: 100vh;
   margin: 0 auto;
   background-image: url(${img});
   background-size: cover;
   background-position: center;
   background-repeat: no-repeat;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    max-width: 100%;
    }
 `

 export const Title = styled.h1`
    padding-top: 30px;
    padding-left:90px;
    font-size: 34px;
    font-family:Croissant One;
    color: red;

    @media screen and (min-width: 768px) {
    padding-top:150px;
    padding-left:50px;
    }
   `

 export const Text = styled.p`
    padding-top:10px;
    padding-left:80px;
    font-size: 18px;
    font-family:Croissant One;
    color: red;
 `  