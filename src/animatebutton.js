import Raect from "react"  ;

import Styled, { keyframes } from "styled-components" ;




  const Box = Styled.div`
  border-radius : 10% ;
  height : 30px ;
  width : 100px ;
  background-color : white ;
  text-align : center ;

font : 1rem #042451 ;
  `

  export default function AnimationButton (){
    return (
        <>
        <div >
          <Box />
        </div>
        </>
    )
    }