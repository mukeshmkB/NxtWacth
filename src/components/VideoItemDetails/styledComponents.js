import Styled from 'styled-components'

export const VideoItemDetailsContainer = Styled.div`
   display: flex;
  flex-direction: column;
  background-color: white;
  background-color:${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
`

export const MainContentContainer = Styled.div`
  display: flex;
  flex-direction: row;
 
  
`
export const VideoDetailsContainer = Styled.div`

   display: flex;
  flex-direction: column;
  padding:15px 0px;
  flex: 1;

  @media screen and (min-width:768px){
    padding:25px 20px
  }
 
`
export const VideoContainer = Styled.div`


   width:100%;
   height:200px;
   background-size:cover;
  font-size:10px;
   @media screen and (min-width:768px){
      width:100%;
      height:500px;
       background-size:cover;
   }


`
export const VideoTextContainer = Styled.div`

   dispaly:flex;
   flex-direction:column;
   margin-top:10px;
   padding:10px;

   @media screen and (min-width:768px){
       padding: 0px;
   }


`

export const VideoTitle = Styled.p`

    font-family:"roboto";
    font-size:14px;
    line-height:1.5;
    color: ${props => (props.dark ? '#f4f4f4' : '#475569')};
    font-weight:450;
  

    @media screen and (min-width:768px){
        font-size:16px;
        font-weight:430;
    }
 
 `
export const VideInfoContainer = Styled.div`
   
       display:flex;
       flex-direction:column;
     
     

      @media screen and (min-width:768px){
         flex-direction:row;
          align-items:center;
          justify-content:space-between;
      }

`
export const VideoMetaDataContainer = Styled.div`
      display:flex;
      flex-direction:row;
      align-items:center;
      padding:0px;
`
export const VideoViewsCount = Styled.p`
    font-family:"roboto";
    font-size:11px;
    color: ${props => (props.dark ? '#616e7c' : ' #616e7c')};
    font-weight:450;
  
    @media screen and (min-width:768px){
         font-size:12px;
    }
  `
export const PublishDate = Styled.p`
    font-family:"roboto";
    font-size:11px;
    line-height:1.7;
   color: ${props => (props.dark ? '#616e7c' : '#616e7c')};
   font-weight:450;
   
  
   @media screen and (min-width:768px){
         font-size:12px;
    }
      
`
export const ReactionContainer = Styled.div`
       display:flex;
      flex-direction:row;
      align-items:center;
      
    
`
export const LikeContainer = Styled.div`
     margin:0px;
     padding:0px;
`

export const LikeText = Styled.p`

     color:${props => (props.liked ? '#3b82f6' : '#616e7c')};
     font-family:"roboto";
    font-size:13px;
    line-height:1.7;
    font-weight:450;
     margin-right:8px;
    margin-right:4px;

     @media screen and (min-width:768px){
         font-size:14px;
    }
   
`

export const DisLikeContainer = Styled(LikeContainer)`
    

`

export const DisLikeText = Styled.p`

     color:${props => (props.disLiked ? '#3b82f6' : '#616e7c')};
     font-family:"roboto";
    font-size:13px;
    line-height:1.7;
    font-weight:450;
     margin-right:8px;
    margin-right:4px;
    @media screen and (min-width:768px){
         font-size:14px;
    }
`

export const SavedVideoContainer = Styled(LikeContainer)`


`
export const SaveVideoText = Styled.p`

     color:${props => (props.saved === 'active' ? '#3b82f6' : '#616e7c')};
     font-family:"roboto";
    font-size:13px;
    line-height:1.7;
    font-weight:450;
    margin-right:8px;
 
      @media screen and (min-width:768px){
         font-size:14px;
    }
   
`
export const ReactionButton = Styled.button`
      
      display:flex;
     flex-direction:row;
     align-items:center;
     padding:0px;
     margin-right:10px;
     color:${props => props.color};
      background-color:transparent;
      border:none;
      cursor:pointer;

`
export const LineSeparator = Styled.hr`
  
  width:100%;
  margin-top:25px;
  margin-bottom:25px;
  border: 1.5px solid #616e7c;

`
export const ChannelInfoContainer = Styled.div`

    display:flex;
    flex-direction:column;

    
`

export const ChannelProfileImage = Styled.img`
   width:40px;
   height:40px;
  margin-right:10px;

`
export const ChannelMetaContainer = Styled.div`
      display:flex;
      flex-direction:row;
      align-items:center;
      margin-bottom:10px;
     
`
export const ChannelName = Styled.p`
    font-family:"roboto";
    font-size:11px;
    color:${props => (props.dark ? '#f4f4f4' : '#1e293b')};
    font-weight:550;
    margin:0px;
    margin-bottom:6px;

     @media screen and (min-width:768px){
         font-size:12px;
    }
      
`
export const ChannelSubscribe = Styled.p`
      font-family:"roboto";
    font-size:11px;
    color: #616e7c;
    font-weight:450;
    margin:0px;
  @media screen and (min-width:768px){
         font-size:12px;
    }
`

export const VideoDescription = Styled.p`

    font-family:"roboto";
    font-size:11px;
    font-weight:450;
    color:${props => (props.dark ? '#f4f4f4' : '#616e7c')};
    line-height:1.7;
    @media screen and (min-width:768px){
         font-size:12px;
    }
   
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
export const FailureResultTitle = Styled.h1`
    
    font-family:"roboto";
    font-size:16px;
    font-weight:500;
    color:#1e293b;
    margin-top:10px;

 @media screen and (min-width:768px){
     font-size:20px;
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

export const LoaderContainer = Styled.div`
      display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    min-height:100vh;
`
