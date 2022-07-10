import styled from "styled-components";
export const SelectionContainer=styled.div`
background:#333333;
min-height:692px;
position:fixed;
bottom:0;
left:0;
right:0;
top:0;
z-index:0;
overflow:hidden;
`
export const SelectionData=styled.div`
position:absolute;
top:45px;
left:30px;
background: linear-gradient(180deg,rgba(1,147,86,1)0%,rgb(24, 180, 79)100%);
max-width:1400px;
height:auto;
z-index:1;
margin: auto;
padding:80px 32px;
border-radius:4px;

@media screen and (max-width:400px){
    padding:32px 32px;
`