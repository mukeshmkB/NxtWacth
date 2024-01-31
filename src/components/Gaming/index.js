import {HiFire} from 'react-icons/hi'
import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {
  GamingContainer,
  MainContentContainer,
  GamingVideoContainer,
  GamingVideosHeader,
  GamingVideosListContainer,
  GamingVideoTitle,
  GamingVideoLogoContainer,
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
import GamingCard from '../GamingCard'

const apiStatusConstant = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
  initial: 'INITIAL',
}

class Gaming extends Component {
  state = {gamingVideoList: [], apiStatus: apiStatusConstant.initial}

  componentDidMount() {
    this.getGamingDetails()
  }

  getGamingDetails = async () => {
    this.setState({apiStatus: apiStatusConstant.inProgress})

    const jwtToken = Cookies.get('jwt_token')

    const url = 'https://apis.ccbp.in/videos/gaming'

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(url, options)

    if (response.ok === true) {
      const data = await response.json()

      const updatedData = data.videos.map(eachItem => ({
        id: eachItem.id,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
      }))

      this.setState({
        apiStatus: apiStatusConstant.success,
        gamingVideoList: updatedData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstant.failure})
    }
  }

  renderSuccesView = theme => {
    const {gamingVideoList} = this.state

    return (
      <>
        <GamingVideosHeader dark={theme}>
          <GamingVideoLogoContainer dark={theme}>
            <HiFire size="26" color="#ff0000" />
          </GamingVideoLogoContainer>
          <GamingVideoTitle dark={theme}>Gaming</GamingVideoTitle>
        </GamingVideosHeader>

        <GamingVideosListContainer>
          {gamingVideoList.map(eachVideo => (
            <GamingCard eachVideo={eachVideo} key={eachVideo.id} />
          ))}
        </GamingVideosListContainer>
      </>
    )
  }

  renderFailureView = theme => (
    <>
      <FailureContainer>
        <FailureImage
          src={
            theme
              ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
              : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
          }
        />
        <FailureResultTitle>Oops! Something Went wrong</FailureResultTitle>
        <AssitMessage>
          We are having some trouble to complete your request.
          <br /> Please try again.
        </AssitMessage>
        <RetryButton type="button" onClick={this.getGamingDetails}>
          Retry
        </RetryButton>
      </FailureContainer>
    </>
  )

  renderProgressView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </LoaderContainer>
  )

  apiStatusCheck = theme => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstant.success:
        return this.renderSuccesView(theme)
      case apiStatusConstant.failure:
        return this.renderFailureView(theme)
      case apiStatusConstant.inProgress:
        return this.renderProgressView(theme)
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
            <GamingContainer data-testid="gaming" dark={isDarkTheme}>
              <Header />
              <MainContentContainer>
                <SideBarSection />
                <GamingVideoContainer>
                  {this.apiStatusCheck(isDarkTheme)}
                </GamingVideoContainer>
              </MainContentContainer>
            </GamingContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Gaming
