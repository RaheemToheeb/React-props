import React from "react";
import styled from "styled-components";
import Child from "../ParentComponent/parent";

let Homescreen = () => {
  // let day =date.getDay();
  // let year = date.getFullYear();
  return (
    <Wrap>
      <Child
        
        day={new Date().toLocaleString("en-US",{day:"2-digit"})}
       year={new Date().getFullYear()}
       month={new Date().toLocaleString("en-US",{month: "long"})}
        course="CODELAB React Course"
        price="$50.0"
        but="Enroll Now"
      />

      <Child
       direc="row-reverse"
        day={new Date().toLocaleString("en-US",{day:"2-digit"})}
       year={new Date().getFullYear()}
       month={new Date().toLocaleString("en-US",{month: "long"})}
        course="CODELAB React Course"
        price="$100.0"
        but="Enroll Now"
      />

      <Child
        day={new Date().toLocaleString("en-US",{day:"2-digit"})}
       year={new Date().getFullYear()}
       month={new Date().toLocaleString("en-US",{month: "long"})}
        course="CODELAB Python Course"
        price="$100.0"
        but="Enroll Now"
      />
    </Wrap>
  );
};

export default Homescreen;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* height: 40vh; */
  width: 100%;
  background: white;
  /* margin-top: 10px; */
`;
