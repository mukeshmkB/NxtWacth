import {differenceInYears} from 'date-fns'
import {BsDot} from 'react-icons/bs'
import ThemeContext from '../../context/ThemeContext'
import {
  CustomLink,
  SavedVideoItemContainer,
  SavedVideoThumbnail,
  SavedVideoContent,
  SavedVideoTitle,
  ChannelName,
  ChannelDeatils,
  ChannelProfile,
  VideoInfoSm,
  VideoInfoLarge,
  SavedVideoMetaData,
  VideoViewsCount,
  VideoPublishDate,
} from './styledComponent'

const SavedVideoCard = props => {
  const {eachVideo} = props

  const {id, channel, publishedAt, thumbnailUrl, title, viewCount} = eachVideo
  const {name, profileImageUrl} = channel

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme, changeActiveRoute} = value

        return (
          <CustomLink
            to={`/videos/${id}`}
            onClick={() => changeActiveRoute('INITIAL')}
          >
            <SavedVideoItemContainer>
              <SavedVideoThumbnail src={thumbnailUrl} alt="video thumbnail" />
              <ChannelDeatils>
                <ChannelProfile src={profileImageUrl} alt={name} />
                <SavedVideoContent>
                  <SavedVideoTitle isDark={isDarkTheme}>
                    {title}
                  </SavedVideoTitle>
                  <VideoInfoSm>
                    <ChannelName>{name}</ChannelName>
                    <BsDot color="#616e7c" />
                    <SavedVideoMetaData>
                      <VideoViewsCount> {viewCount} views</VideoViewsCount>
                      <BsDot color="#475569" />
                      <VideoPublishDate>
                        {' '}
                        {differenceInYears(
                          new Date(),
                          new Date(publishedAt),
                        )}{' '}
                        years ago{' '}
                      </VideoPublishDate>
                    </SavedVideoMetaData>
                  </VideoInfoSm>
                  <VideoInfoLarge>
                    <ChannelName>{name}</ChannelName>
                    <SavedVideoMetaData>
                      <VideoViewsCount> {viewCount} views</VideoViewsCount>
                      <BsDot color="#475569" />
                      <VideoPublishDate>
                        {' '}
                        {differenceInYears(
                          new Date(),
                          new Date(publishedAt),
                        )}{' '}
                        years ago{' '}
                      </VideoPublishDate>
                    </SavedVideoMetaData>
                  </VideoInfoLarge>
                </SavedVideoContent>
              </ChannelDeatils>
            </SavedVideoItemContainer>
          </CustomLink>
        )
      }}
    </ThemeContext.Consumer>
  )
}
export default SavedVideoCard
