import Styled from 'styled-components'
import {Link} from 'react-router-dom'

export const GameItemContainer = Styled.li`
   
    display : flex;
    flex-direction:column;
    margin-left:5px;
    margin-right:5px;
    margin-bottom:30px; 
    width:120px;
    

    @media screen and (min-width:768px){
       margin-right:10px;
       margin-bottom:65px; 
      width:180px;
      height:100%;
     
    }
 

`
export const GameThumbnail = Styled.img`
 
   width:100%;
  
  
`
export const GameContent = Styled.div`
   
    diplay:flex;
   flex-direction:column;
   
  
 
 `
export const GameName = Styled.p`
   
    font-family:"roboto";
    font-size:13px;
    line-height:1.7;
    color: ${props => (props.dark ? '#f9f9f9' : '#1e293b')};
    font-weight:560;
    margin-bottom:4px;
 
    @media screen and (min-width:768px){
        font-size:14px;
      }
  
  
  `
export const GameviewsCount = Styled.h1`
   
   font-family:"roboto";
    font-size:12px;
    color: #64748b;
    font-weight:420;
    margin:0px;

   @media screen and (min-width:768px){
       font-weight:450;
    }
 `

export const CustomLink = Styled(Link)`
 
    text-decoration:none; 

`
