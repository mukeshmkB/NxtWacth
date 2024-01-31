import Styled from 'styled-components'

import {Link} from 'react-router-dom'

export const NavbarHeaderComponent = Styled.div`
      display:flex;
     background-color: ${props => (props.dark ? '#212121' : '#ffffff')};
    
`
export const NavbarContentContainer = Styled.div`

     display:flex;
     width:90%;
     max-width:1110px;
     margin:auto;
     align-items :center;
    
   @media screen and (min-width:768px){
       padding-top: 20px;
       padding-bottom:20px;
     }
`
export const WebsiteIcon = Styled.img`

       width:110px;
       height:25px;
       @media screen and (min-width:768px){
          width:130px;
          height:28px;
       }
`

export const NavbarTopItems = Styled.div`

   display : flex;
   flex-direction:row;
   align-items:center;
   flex:1;
   justify-content:flex-end;
    @media screen and (max-width:768px){
       display:none;
    }
  
`
export const NavMobileIcons = Styled.ul`

    display : flex;
   flex-direction:row;
   align-items:center;
   flex:1;
   justify-content:flex-end;
   list-style-type:none;
    padding:0px;
    @media screen and (min-width:768px){
       display:none;
    }

 `
export const NavLargeItems = Styled.div`
 

   display:none;
  @media screen and (min-width:768px){
   display : flex;
   flex-direction:row;
   align-items:center;
   justify-content:flex-end;
   flex:1;
  }
 
 `
export const ProfileImage = Styled.img`
     width:30px;
     height:30px;
     margin-right:10px;
     margin-left:15px;

`
export const LogoutButton = Styled.button`

  background-color:transparent;
  color: ${props => (props.dark ? '#f9f9f9' : '#3b82f6')};
  border:1px solid  ${props => (props.dark ? '#f9f9f9' : '#3b82f6')};

  height:26px;
  margin-left:12px;
  margin-right:12px;
  outline:none;
 cursor:pointer;
`

export const CustomLink = Styled(Link)`
    list-style-type:none;
    text-decoration:none; 
`
export const ThemeButton = Styled.button`
   background-color:transparent;
   border:none;
  outline:none;
  cursor:pointer;

`

export const IconButton = Styled.button`

   background-color:transparent;
  border:none;
 outline:none;
 cursor:pointer;

`
export const LogoutPopUp = Styled.div`

    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    background-color:white;
    padding:20px;
    border-radius:6px;
      background-color: ${props => (props.dark ? '#212121' : '#ffffff')};

   @media screen and (min-width:768px){
       width:350px;
       height:180px;
   }
  `

export const LogoutAlertMessage = Styled.p`
     
      font-family : "roboto";
     font-size: 14px;
     font-weight:400;
    color: ${props => (props.dark ? 'white' : '#00306e')};
     
 `
export const Alertbuttons = Styled.div`

     margin-top:20px;
    
 `
export const CancelButtton = Styled.button`
    
    width: 70px;
    height:30px;
    font-family:"roboto";
    font-size:14px;
    border-radius:2px;
    background-color:transparent;
    color:${props => (props.dark ? '#94a3b8' : '#3b82f6')};   
    border: 1px solid ${props => {
      console.log(props.dark)
      return props.dark ? '#94a3b8' : '#3b82f6'
    }};
  outline:none;
cursor:pointer;
     
   
    margin-left:10px;
    margin-right:10px;

 `
export const ConfirmButton = Styled(CancelButtton)`
   

    color:${props => props.outLine};
    border: 1px solid ${props => props.bgColor};
    background-color:${props => props.bgColor};
    outline:none;
   cursor:pointer;
 
 `
export const MenuPopUp = Styled.div`
  
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content: flex-start;
    width:100%;
    height:100vh;
    padding-top:20px;
    padding-bottom:20px;
    margin:0px;
   background-color: ${props => (props.dark ? '#212121' : '#ffffff')};


`
export const MenuListContainer = Styled.ul`
    display:flex;
    flex-direction:column;
     padding:0px;
    list-style-type:none;
    width:100%;
    justify-content:center;
    flex:1;
 `

export const MenuItemName = Styled.p`
 font-family:"Roboto";
 font-size: ${props => (props.activeRoute ? '14px' : '12px')};
 font-weight: ${props => (props.activeRoute ? 'bold' : '500')};
 color: ${props => (props.dark ? '#ebebeb' : '#1e293b')};
 margin-left:15px;

 `
export const CloseButton = Styled.button`

  background-color:transparent;
  border:none;
  outline:none;
  cursor:pointer;
  align-self:flex-end;
  margin-right:30px;
`
