import styled from "styled-components"

export const HeroBg=styled.div`
position:absolute;
top:0;
right:0;
bottom:0;
left:0;
width:100%;
height:100%;
overflow:hidden;
`
export const VideoBg=styled.video`
width:100%;
height:100%;
-o-object-fit:cover;
object-fit:cover;
background:#232a34;`

export const HeroBtnWrapper=styled.div`
margin-top:32px;
display:flex;
flex-direction:column;
align-items:center;`

export const Herocontainer=styled.div`
background:#0c0c0c;
display:flex;
justify-content:center;
align-items:center;
padding: 0 30px;
height:800px;
position:relative;
z-index:1;

:before{
    content: ' ';
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index:2;
}`
