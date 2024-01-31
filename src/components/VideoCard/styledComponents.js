import Styled from 'styled-components'
import {Link} from 'react-router-dom'
import {BsDot} from 'react-icons/bs'

export const VideoItemContainer = Styled.li`
   
    width: 100%;
   
    @media screen and (min-width:768px){
      width:330px;
      margin-left:10px;
      margin-right:10px;
      margin-top:40px;
    list-style-type:none;
    
}
   

`
export const ThumbnailImage = Styled.img`
    width:100%;
 
`
export const VideoDetailsContainer = Styled.div`
    display:flex;
    padding:5px;
   
`
export const ProfileImage = Styled.img`
   width:30px;
   height:30px;

`
export const ChannelInfo = Styled.div`
   
    display:flex;
    align-items:center;
    
    
   @media screen and (min-width:768px){
   
      display:flex;
      flex-direction:column;
      align-items:flex-start;

 }

`
export const TitleContainer = Styled.div`
   diplay:flex;
   flex-direction:row;
   margin-left:10px;
 
   @media screen nad (min-width:768px){
      flex-direction:column;
   }

`
export const VideosTitle = Styled.p`
    font-family:"roboto";
    font-size:12px;
    line-height:1.7;
    color: ${props => (props.isDark ? '#f4f4f4' : ' #1e293b')};
    font-weight:450;
    margin-bottom:0px;
    margin-top:0px;
    @media screen and (min-width:768px){
      font-size:14px;
    }
 `
export const ChannelName = Styled.p`
    font-family:"roboto";
    font-size:11px;
    color: #616e7c;
    font-weight:450;
    @media screen and (min-width:768px){
      font-size:12px;
    }
 `
export const PublishDateContainer = Styled.div`
   display:flex;
   align-items: center;

  
`

export const VideoViewsCount = Styled.p`
    font-family:"roboto";
    font-size:11px;
    color:#616e7c;
    font-weight:450;
    @media screen and (min-width:768px){
      font-size:12px;
    }
 `
export const PublishDate = Styled.p`
    font-family:"roboto";
    font-size:11px;
    line-height:1.7;
   color: #616e7c;
   font-weight:450;
   @media screen and (min-width:768px){
      font-size:12px;
    }

`
export const SpanDot = Styled.span`

   font-weight:bold;
   margin-left:6px;
   margin-right:6px;

   
`
export const CustomLink = Styled(Link)`
   
     text-decoration:none;
`
export const BsDotCustom = Styled(BsDot)`

   color:"#616e7c";

   @media screen and (min-width:768px){
      
       display:none;

     
   }


`
