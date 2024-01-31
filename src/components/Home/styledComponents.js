import Styled from 'styled-components'

export const HomeContainer = Styled.div`
   display: flex;
  flex-direction: column;
  min-height:100vh;
  background-color: white;
  background-color:${props => (props.dark ? '#181818' : '#f9f9f9')};
  
`

export const MainContentContainer = Styled.div`
  display: flex;
  flex-direction: row;
  

`

export const VideoContainer = Styled.div`


  
  flex:1;
  min-height:100vh;

 @media screen and (min-width:768px){

   min-height:100vh;
   
}

`

export const NoSearchContainer = Styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:25px 0px;

`
export const NoVideoImage = Styled.img`
   width:60%;

 @media screen and (min-width:768px){
   width: 350px;
   height:300px;
 }
   
`
export const NosearchResultTitle = Styled.h1`

    font-family:"roboto";
    font-size:16px;
    font-weight:500;
    color:${props => (props.dark ? '#f1f1f1' : '#1e293b')};
    margin-top:10px;
  @media screen and (min-width:768px){
     font-size:18px;
    font-weight:600;
    }
`
export const AssitMessage = Styled.p`

    font-family:"Roboto";
    font-size:12px;
    font-weight:400px;
    text-align:center;
    font-weight:500;
    color:#475569;
    margin:0px;
    margin-bottom:15px;

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
`

export const FailureImage = Styled.img`
    width:60%;
 @media screen and (min-width:768px){
   width: 350px;
   height:300px;
 }
`

export const FailureResultTitle = Styled(NosearchResultTitle)`
  
 
 `
export const LoaderContainer = Styled.div`
      display:flex;
    flex-direction:column;
    align-items:center;
     justify-content:center;
    min-height:100vh;
`
