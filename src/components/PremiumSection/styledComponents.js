import Styled from 'styled-components'

export const PremiumPlansContainer = Styled.div`
  
  
  display: flex;
  flex-direction: column;
  align-items:flex-start;
  padding: 10px 15px 10px 15px;
  margin-bottom:15px;
  background-color:white;
  width:100%;
  @media screen and (min-width:768px){
     
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items:flex-start;
  padding: 20px 25px 20px 25px;
  margin-bottom:15px;
  background-position:230px 0px;

  }
`
export const GetPremiumContainer = Styled.div`
     display :flex;
     flex-direction:column;
      width:50%;
      max-width:450px;
     

     @media screen and (min-width:768px){
      display :flex;
     flex-direction:column;
     align-items:flex-start;
     }
`
export const PremiumImageLogo = Styled.img`

   width:120px;
   height:26px;

`
export const PremiumDescription = Styled.p`

     color: #1e293b;
     font-family:"roboto";
     font-weight:450;
     font-size:14px;
     line-height:1.5;
      margin-top:15px;
     margin-bottom:38px;
    

`
export const PremiumGetButton = Styled.button`

     color: #1e293b;
     border:1px solid  #1e293b;
     font-family:"roboto";
     font-size:14px;
     font-weight:500;
     width:100px;
     height:34px;
     background-color:transparent;
     outline:none;
     cursor:pointer;
     margin-bottom:0px;
     
`

export const ClosePremium = Styled.button`

     background-color:transparent;
     border:none;
     outline:none;
    align-self:flex-end;
`
