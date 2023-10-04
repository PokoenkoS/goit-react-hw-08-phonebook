import styled from '@emotion/styled'
import img from '../../image/phone-book-and-telephone-arrangement.jpg';


export const Container = styled.div`
   width: 420px;
   margin: 0 auto;
   background-image: url(${img});
   background-size: 100%;
   min-height: 100%;
   background-repeat: no-repeat;
  @media (max-width: 1200px) {
    width: 1440px;
    height: 1460px;
    /* max-width: 1200px; */
    /* background-size: cover; */
   background-position: center;
   /* min-height: 100vh; */
  }
 `

 export const Title = styled.h1`
 
    padding-top:150px;
    padding-left:50px;
    font-size: 34px;
    font-family:Croissant One;
    color: red;
   `

 export const Text = styled.p`
      padding-top:10px;
    padding-left:50px;
    font-size: 18px;
    font-family:Croissant One;
    color: red;
 `  