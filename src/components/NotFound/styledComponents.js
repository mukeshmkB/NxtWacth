import Styled from 'styled-components'

export const NotFoundContainer = Styled.div`

   display: flex;
  flex-direction: column;
  background-color: white;
  min-height: 100vh;
  border: 5px solid olivedrab;
  background-color:${props => (props.dark ? '#181818' : '#f9f9f9')};
`

export const MainContentContainer = Styled.div`
  display: flex;
  flex-direction: row;
  border: 3px solid orangered;
  


`

export const NotFoundResultContainer = Styled.div`

   display: flex;
  flex-direction: column;
  border: 2px solid navy;
  min-height:130vh;
  flex: 1;
 

`

export const FoundResultTitle = Styled.h1`
    font-family:"roboto";
    font-size:20px;
    font-weight:600;
    color: ${props => (props.dark ? '#f9f9f9' : '#1e293b')};
    margin-top:25px;
    text-align:center;
    @media screen and (min-width:768px){
      font-size:36px;
    }
`
export const AssitMessage = Styled.p`
    font-family:"Roboto";
    font-size:12px;
    font-weight:400;
    color:${props => (props.dark ? '#f1f1f1' : '#475569')};
    margin:0px;
    margin-bottom:15px;
   text-align:center;
   @media screen and (min-width:768px){
      font-size:14px;
   }
`

export const FoundContainer = Styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    min-height:100vh;
`

export const FoundImage = Styled.img`
 width:60%;
@media screen andd (min-width:768px){
   width: 500px;
   height:400px;

  }
`
