import {HiFire} from 'react-icons/hi'
import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {
  TrendingContainer,
  MainContentContainer,
  TrendingVideoContainer,
  SavedVideoContent,
  TrendingVideosHeader,
  TrendingVideosListContainer,
  TrendingVideoTitle,
  TrendingVideoLogoContainer,
  FailureContainer,
  FailureImage,
  FailureResultTitle,
  AssitMessage,
  RetryButton,
  LoaderContainer,
} from './styledComponents'

import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'

import SideBarSection from '../SideBarSection'
import SavedVideoCard from '../SavedVideoCard'

const apiStatusConstant = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
  initial: 'INITIAL',
}

class Trending extends Component {
  state = {trendingVideoList: [], apiStatus: apiStatusConstant.initial}

  componentDidMount() {
    this.getTrendingDetails()
  }

  getTrendingDetails = async () => {
    this.setState({apiStatus: apiStatusConstant.inProgress})

    const jwtToken = Cookies.get('jwt_token')

    const url = 'https://apis.ccbp.in/videos/trending'

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(url, options)

    if (response.ok === true) {
      const data = await response.json()

      const updatedData = data.videos.map(eachItem => {
        const {channel} = eachItem
        const updatedChannel = {
          name: channel.name,
          profileImageUrl: channel.profile_image_url,
        }

        return {
          id: eachItem.id,
          channel: updatedChannel,
          publishedAt: eachItem.published_at,
          thumbnailUrl: eachItem.thumbnail_url,
          title: eachItem.title,
          viewCount: eachItem.view_count,
        }
      })

      this.setState({
        apiStatus: apiStatusConstant.success,
        trendingVideoList: updatedData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstant.failure})
    }
  }

  renderSuccesView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const {trendingVideoList} = this.state

        return (
          <>
            <SavedVideoContent>
              <TrendingVideosHeader dark={isDarkTheme}>
                <TrendingVideoLogoContainer dark={isDarkTheme}>
                  <HiFire size="26" color="#ff0000" />
                </TrendingVideoLogoContainer>
                <TrendingVideoTitle dark={isDarkTheme}>
                  Trending
                </TrendingVideoTitle>
              </TrendingVideosHeader>
              <TrendingVideosListContainer>
                {trendingVideoList.map(eachVideo => (
                  <SavedVideoCard eachVideo={eachVideo} key={eachVideo.id} />
                ))}
              </TrendingVideosListContainer>
            </SavedVideoContent>
          </>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderFailureView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <FailureContainer>
            <FailureImage
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
              }
              alt="failure view"
            />
            <FailureResultTitle>Oops! Something Went wrong</FailureResultTitle>
            <AssitMessage>
              We are having some trouble to complete your request.
              <br /> Please try again.
            </AssitMessage>
            <RetryButton type="button" onClick={this.getTrendingDetails}>
              Retry
            </RetryButton>
          </FailureContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderProgressView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </LoaderContainer>
  )

  apiStatusCheck = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstant.success:
        return this.renderSuccesView()
      case apiStatusConstant.failure:
        return this.renderFailureView()
      case apiStatusConstant.inProgress:
        return this.renderProgressView()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <TrendingContainer dark={isDarkTheme}>
              <Header />
              <MainContentContainer>
                <SideBarSection />
                <TrendingVideoContainer>
                  {this.apiStatusCheck()}
                </TrendingVideoContainer>
              </MainContentContainer>
            </TrendingContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Trending
