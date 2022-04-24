import styled from "styled-components";

export const Container = styled.header`
*{
  margin:0; 
  padding:0;
  
}
  
  header{
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  width:1440px;
  height: 368px;
  background-color: #121214;
  align-items: flex-end;
  border-radius: 5px;

  }

  h1{
    font-size: 36px;
    line-height:42px;
  }
  p{
    font-size: 16px;
    line-height: 26px;
  }

  section{
    width: 319px;
    height:162px;
    display:flex;
    flex-direction: column-reverse;
    flex-wrap: wrap;
    padding:83px 182px 123px;
    
  }
`

