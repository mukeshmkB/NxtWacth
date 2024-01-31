import Styled from 'styled-components'

export const SavedVideoContent = Styled.div`


`
export const TrendingContainer = Styled.div`

   display: flex;
  flex-direction: column;
  background-color: white;
  min-height: 100vh;
  background-color: ${props => (props.dark ? '#0f0f0f' : '#f9f9f9')}; 

 
`

export const MainContentContainer = Styled.div`

  display: flex;
  flex-direction: row;
 
  


`

export const TrendingVideoContainer = Styled.div`

   display: flex;
  flex-direction: column;
  flex: 1;

`

export const TrendingVideosHeader = Styled.div`
    display:flex;
    align-items:center;
    background-color: ${props => (props.dark ? '#181818' : '#f4f4f4')};
    padding:15px;
    
   
   
   @media screen and (min-width:768px){
          padding-left:50px;
   }

 `
export const TrendingVideoLogoContainer = Styled.div`
   display:flex;
    justify-content:center;
    align-items:center;
    width:50px;
    height:50px;
    border-radius:100%;
     margin-right:10px;
    background-color:${props => (props.dark ? '#000000' : '#e2e8f0')};
   
  
  @media screen and (min-width:768px){
     width:80px;
     height:80px;
     border-radius:100%;
     margin-right:10px;
  }

`
export const TrendingVideoTitle = Styled.h1`
     
     font-family:"roboto";
     font-size:18px;
     font-weight:550;
   color: ${props => (props.dark ? '#f9f9f9' : '#1e293b')};

     @media screen and (min-width:768px){

      font-size:28px;
     font-weight:550;
   }

`
export const TrendingVideosListContainer = Styled.ul`
  
     display:flex;
     flex-direction:column;
     padding:0px;
     list-style-type:none;
     height:100vh;
     overflow-y:auto;
     @media screen and (min-idth:768px){
        padding-left:50px;
     }
  
  `

export const FailureResultTitle = Styled.h1`

    font-family:"roboto";
    font-size:18px;
    font-weight:400;
    color:#1e293b;
    margin-top:10px;
    text-align:center;

    @media screen and (min-width:768px{
       font-size:18px;
       font-weight:600;
    }
`
export const AssitMessage = Styled.p`

    font-family:"Roboto"
    font-size:12px;
    font-weight:500;
    color:#475569;
    margin:0px;
    margin-bottom:15px;
   text-align:center;

   @media screen and (min-width:768px){
      font-size:14px;
      font-weight:400px;
   }
`

export const RetryButton = Styled.button`
     width:70px;
     height:34px;
     background-color:#4f46e5;
     border:none;
     border-radius:4px;
     color:#ffffff;
     font-family:"roboto";
     font-size:12px;
     font-weight:450px; 
`

export const FailureContainer = Styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    min-height:100vh;
`

export const FailureImage = Styled.img`

    width:60%;
@media screen and (min-width:768px){
    width: 350px;
   height:300px;
}
  
`
export const LoaderContainer = Styled.div`
      display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    min-height:100vh;
`
