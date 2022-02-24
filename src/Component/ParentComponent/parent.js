import React from "react";
import styled from "styled-components";
const Parent = (props) => {
  return (
    <Container >
        <Wrap1>
        <Wrap direc={props.direc}>
      <Date>
        <p>{props.day}</p>
        <p>{props.month}</p>
        <p>{props.year}</p>
      </Date>
      <Course>{props.course}</Course>
      <Price>{props.price}</Price>
      </Wrap>
      <Button>{props.but}</Button>
      </Wrap1>
    </Container>
  );
};

export default Parent;

const Wrap=styled.div`
display: flex;
flex-direction: ${({direc}) => direc};
justify-content: space-around;
width:100%;
`
const Wrap1=styled.div`
display: flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
width:100%;
/* background:red; */
`

const Button =styled.button`
display:flex;
justify-content: center;
align-items: center;
background:purple;
border:none;
border-radius:20px;
width:100px;
height: 40px;
margin-top:10px;
color:white;
font-weight:bold;
margin-left:10px;
`

const Date = styled.div`
  /* height: 100px; */
  display:flex;
  flex-direction:column;
  width: 120px;
  height:100px;
  color :white;
  background:#943F98;
  justify-content : center;
  line-height:0.5;
  align-items : center;
  
`;

const Course = styled.div`
  width: 30%;
  /* height: 40px; */
  color:purple;
`;
const Price = styled.div`
  width: 50px;
  /* height: 40px; */
  /* background:purple; */
  border-radius:50px;
  color:purple;
  font-weight:bold;
`;

const Container = styled.div`
  display: flex;
  
  align-items: center;
  justify-content: space-around;
  width: 50%;
  border: solid 10px purple;
  margin: 20px;
  height: 25vh;
`;
