import Styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SavedVideoItemContainer = Styled.li`
   
    display : flex;
    flex-direction:column;
     margin-bottom:25px; 
  
    @media screen and (min-width:768px){
        flex-direction:row;
         margin-bottom:50px; 
         margin-left:40px;
         
      }

`
export const SavedVideoThumbnail = Styled.img`

      width:100%;
      height:180px;
    

   
   @media screen and (min-width:768px){
      
      max-width:310px;
      height:180px;

   }
`
export const SavedVideoContent = Styled.div`
  
    display:flex;
   flex-direction:column;
   margin-top:10px;
   margin-left:10px;
   @media screen and (min-width:768px){
      margin-left:12px;
   }
 
 
 `
export const ChannelDeatils = Styled.div`
 
 
    display:flex;
    flex-diretion:row;
    align-items:center;
    margin-left:10px;
    


    @media screen and (min-width:768px){
       flex-direction:column;
       margin:0px;
    }
 
 
 `
export const ChannelProfile = Styled.img`
   
    width:30px;
    height:30px;

    @media screen and (min-width:768px){
       display:none;
    }
 
 `
export const SavedVideoTitle = Styled.p`
   
    font-family:"roboto";
    font-size:12px;
    color: ${props => (props.isDark ? '#f9f9f9' : '#1e293b')};
    font-weight:500;
    margin-bottom:0px;
    margin-top:0px;
  
  @media screen and (min-width:768px){
     font-size:16px;
      font-weight:550;
       line-height:1.7;
  }
  
  `
export const ChannelName = Styled.p`
   
   font-family:"roboto";
    font-size:11px;
    color: #64748b;
    font-weight:400;

 @media screen and (min-width:768px){
   
    font-size:13px;
    font-weight:400;
}
 
 `
export const SavedVideoMetaData = Styled.div`

     display:flex;
     align-items: center;
    

`
export const VideoViewsCount = Styled.p`
  
    font-family:"roboto";   
    font-size:11px;
    color: #64748b;
    font-weight:400;
   

   @media screen and (min-width:768px){
     font-size:14x;
     font-weight:420;
   }

`
export const VideoPublishDate = Styled.p`

     font-family:"roboto";   
    font-size:11px;
    color: #64748b;
    font-weight:400;
   

   @media screen and (min-width:768px){
     font-size:14x;
     font-weight:420;
   }

`

export const CustomLink = Styled(Link)`
 
    text-decoration:none; 

`
export const VideoInfoSm = Styled.div`
   
     display:flex;
     align-items:center;
   
    @media screen and (min-width:768px){
       display:none;
     
   }

`

export const VideoInfoLarge = Styled.div`
 
   display:none;
   @media screen and (min-width:768px){
      display:flex;
      flex-direction:column;
    
   }
 
 
 `
