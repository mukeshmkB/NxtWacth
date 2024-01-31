import {HiFire} from 'react-icons/hi'

import {
  SavedVideoContainer,
  MainContentContainer,
  StoringVideosContainer,
  SavedVideosHeader,
  SavedVideosListContainer,
  SavedVideoTitle,
  SavedVideoLogoContainer,
  NoSavedVideoContainer,
  NoSavedVideoImage,
  NoVideoResultTitle,
  AssitMessage,
} from './styledComponents'

import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import SideBarSection from '../SideBarSection'
import SavedVideoCard from '../SavedVideoCard'

const SavedVideos = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, savedVideoList} = value
      const showvideoContent = savedVideoList.length > 0

      const renderSavedVideos = () => (
        <>
          {showvideoContent ? (
            <>
              <SavedVideosHeader dark={isDarkTheme}>
                <SavedVideoLogoContainer dark={isDarkTheme}>
                  <HiFire size="26" color="#ff0000" />
                </SavedVideoLogoContainer>
                <SavedVideoTitle dark={isDarkTheme}>
                  Saved Videos
                </SavedVideoTitle>
              </SavedVideosHeader>
              <SavedVideosListContainer>
                {savedVideoList.map(eachVideo => (
                  <SavedVideoCard eachVideo={eachVideo} key={eachVideo.id} />
                ))}
              </SavedVideosListContainer>
            </>
          ) : (
            <NoSavedVideoContainer>
              <NoSavedVideoImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                alt="no saved videos"
              />
              <NoVideoResultTitle dark={isDarkTheme}>
                No saved videos found
              </NoVideoResultTitle>
              <AssitMessage dark={isDarkTheme}>
                Save your videos by clicking a button
              </AssitMessage>
            </NoSavedVideoContainer>
          )}
        </>
      )

      return (
        <SavedVideoContainer data-testid="savedVideos" dark={isDarkTheme}>
          <Header />
          <MainContentContainer>
            <SideBarSection />
            <StoringVideosContainer>
              {renderSavedVideos(isDarkTheme)}
            </StoringVideosContainer>
          </MainContentContainer>
        </SavedVideoContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default SavedVideos
