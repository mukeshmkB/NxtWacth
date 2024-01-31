import Styled from 'styled-components'
import {Link} from 'react-router-dom'

export const CustomLink = Styled(Link)`
   color: black;
  text-decoration: none;
  

`
export const MenuListContainer = Styled.ul`
    display:flex;
    flex-direction:column;
    padding:0px;
    list-style-type:none;
    justify-content:center;
   
    
 `
export const MenuLinkItem = Styled.li`

   display:flex;
   align-items:center;
   background-color: ${props => {
     const {dark} = props
     const color = dark ? '#424242' : '#f1f5f9'
     return props.isActive ? color : ''
   }};
  padding-left:15px;

`

export const MenuItemName = Styled.p`
 font-family:"Roboto";
 font-size: ${props => (props.activeRoute ? '14px' : '12px')};
 font-weight: ${props => (props.activeRoute ? 'bold' : '500')};
 color: ${props => (props.dark ? '#ebebeb' : '#1e293b')};
 margin-left:15px;
 `
