import {differenceInYears} from 'date-fns'

import {BsDot} from 'react-icons/bs'
import ThemeContext from '../../context/ThemeContext'
import {
  CustomLink,
  VideoItemContainer,
  ThumbnailImage,
  VideoDetailsContainer,
  ProfileImage,
  TitleContainer,
  VideosTitle,
  ChannelInfo,
  ChannelName,
  PublishDateContainer,
  VideoViewsCount,
  PublishDate,
  BsDotCustom,
} from './styledComponents'

const VideoCard = props => {
  const {eachVideo} = props
  const {channel, publishedAt, thumbnailUrl, title, viewCount, id} = eachVideo
  const {name, profileImageUrl} = channel

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme, changeActiveRoute} = value
        return (
          <CustomLink
            to={`/videos/${id}`}
            isDark={isDarkTheme}
            onClick={() => changeActiveRoute('INITIAL')}
          >
            <VideoItemContainer>
              <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
              <VideoDetailsContainer>
                <ProfileImage src={profileImageUrl} alt="channel logo" />
                <TitleContainer>
                  <VideosTitle isDark={isDarkTheme}>{title}</VideosTitle>
                  <ChannelInfo>
                    <ChannelName isDark={isDarkTheme}>{name}</ChannelName>
                    <BsDotCustom color="#616e7c"/>
                    <PublishDateContainer>
                      <VideoViewsCount>{viewCount} views</VideoViewsCount>
                      <BsDot color="#616e7c"/>
                      <PublishDate>
                        {differenceInYears(new Date(), new Date(publishedAt))}{' '}
                        years ago
                      </PublishDate>
                    </PublishDateContainer>
                  </ChannelInfo>
                </TitleContainer>
              </VideoDetailsContainer>
            </VideoItemContainer>
          </CustomLink>
        )
      }}
    </ThemeContext.Consumer>
  )
}
export default VideoCard
