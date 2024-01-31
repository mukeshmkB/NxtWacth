import Styled from 'styled-components'

export const SavedVideoContainer = Styled.div`
   display: flex;
  flex-direction: column;
  background-color: white;
  min-height:100vh;
  background-color:${props => (props.dark ? '#0f0f0f' : '#f9f9f9')};
`

export const MainContentContainer = Styled.div`
  display: flex;
  flex-direction: row;
 
  


`

export const StoringVideosContainer = Styled.div`

  display: flex;
  flex-direction: column;
  
  flex: 1;

`

export const SavedVideosHeader = Styled.div`

    display:flex;
    align-items:center;
    background-color: ${props => (props.dark ? '#181818' : '#f4f4f4')}; 
    padding:15px;
    
     @media screen and (min-idth:768px){
        padding-left:50px;
     }
   
 `
export const SavedVideoLogoContainer = Styled.div`
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
export const SavedVideoTitle = Styled.h1`
     
     font-family:"roboto";
     font-size:18px;
     font-weight:550;
     color: ${props => (props.dark ? '#f9f9f9' : '#1e293b')};

     @media screen and (min-width:768px){
       font-size:28px;
       font-weight:550;
     }

`
export const SavedVideosListContainer = Styled.ul`
  
     display:flex;
     flex-direction:column;
      padding-left:0px;
     list-style-type:none;
      height:100vh;
     @media screen and (min-width:768px){
        padding-left:50px;
     }
  
  `
export const NoSavedVideoContainer = Styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    height:90vh;
   

`
export const NoSavedVideoImage = Styled.img`

 width:90%;

@media screen and (min-width:768px){
   width: 500px;
   height:400px;

  }

`
export const NoVideoResultTitle = Styled.h1`
    font-family:"roboto";
    font-size:16px;
    font-weight:550;
    color:${props => (props.dark ? '#ffffff' : '#1e293b')};
    margin-top:45px;

    @media screen and (min-width:768px){
      font-size:22px;
      font-weight:550;
    }
`
export const AssitMessage = Styled.p`

    font-family:"Roboto";
    font-size:12px;
    font-weight:500;
    color:${props => (props.dark ? '#f1f1f1' : '#616e7c')};
    margin:0px;
    margin-bottom:15px;
    
    @media screen and (min-width:768px){
      font-size:13px;
    }
`
