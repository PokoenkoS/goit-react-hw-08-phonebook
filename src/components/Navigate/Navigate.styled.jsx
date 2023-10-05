import styled from '@emotion/styled';

export const MainDiv = styled.div`
/* width:1200px; */
width: 420px;
margin-right: auto;
margin-left: auto;
display: flex;
color: #010101;
@media screen and (min-width: 768px) {
width: 768px;
/* height: 80px; */

  }
`

export const Item = styled.li`
list-style:none;
/* font-size: 1px; */
/* font-weight: small; */
`

export const List = styled.ul`
margin: 0;
padding:10px 0;
    display: flex;
    width: 100%;
    justify-content: space-between;

    @media screen and (min-width: 768px) {
    /* width: 768px; */
    /* justify-content: space-between; */
/* height: 100px; */
  }
`

export const Container = styled.div`
    display:flex;
    padding-right:20px;
`