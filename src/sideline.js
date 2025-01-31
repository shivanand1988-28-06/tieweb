
import React from "react" ;
import styled,{keyframes} from "styled-components"


const lineanim = keyframes`
100%{height : 127px;}`

const Box = styled.div `
width : 5px ;
height :30px ;
background-color : white ;
animation : ${lineanim } 2s linear both;
animation-iteration-count  :  infinite;
`

export default function SideLine (){
return (
    <>
    <div >
      <Box/>
    </div>
    </>
)
}
