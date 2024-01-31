import Styled from 'styled-components'

export const SideBarContainer = Styled.div`
      display : flex;
      flex-direction:column;
     background-color:${props => (props.dark ? '#212121' : '#ffffff')};
     max-width: 260px;
     width: 25%;
     flex-shrink:0;
     display:none;

    @media screen and (min-width:768px){
        display:flex;
        flex-direction:column;
        justify-content:space-between;
       
    }

  `

export const ContactUsContainer = Styled.div`
   display : flex;
   flex-direction:column;
   align-items:flex-start;
   margin-left:15px;
   margin-left:15px;
`
export const ContactTitle = Styled.p`
      font-family:"Roboto";
     font-size:16px;
     font-weight:550;
     color:${props => (props.dark ? ' #f4f4f4' : '#1e293b')};
 `
export const SocailMediaIconsContainer = Styled.div`

   display : flex;
   align-items:center;
   
 `
export const IconImage = Styled.img`
   width:26px;
   height:26px;
   margin-right:10px;
 `
export const WelcomeText = Styled.p`
    font-family:"Roboto";
     font-size:14px;
     font-weight:450;
     line-height:1.5;
      color:${props => (props.dark ? ' #f4f4f4' : '#1e293b')};
     text-align:left;

`
