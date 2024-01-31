import Cookies from 'js-cookie'
import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import ThemeContext from '../../context/ThemeContext'
import {
  HomeContainer,
  MainContentContainer,
  VideoContainer,
  NoSearchContainer,
  NoVideoImage,
  NosearchResultTitle,
  AssitMessage,
  RetryButton,
  FailureContainer,
  FailureImage,
  FailureResultTitle,
  LoaderContainer,
} from './styledComponents'

import VideoHeader from '../VideoHeader'
import SideBarSection from '../SideBarSection'
import Header from '../Header'
import PremiumSection from '../PremiumSection'
import VideoCard from '../VideoCard'
import './index.css'

const apiStatusConstant = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
  initial: 'INITIAL',
}
class Home extends Component {
  state = {
    apiStatus: apiStatusConstant.initial,
    videoList: [],
    searchInputValue: '',
    showPremiumSection: true,
  }

  componentDidMount = () => {
    this.getHomeVideoDetails()
  }

  getHomeVideoDetails = async () => {
    this.setState({apiStatus: apiStatusConstant.inProgress})

    const {searchInputValue} = this.state

    const jwtToken = Cookies.get('jwt_token')

    const url = `https://apis.ccbp.in/videos/all?search=${searchInputValue}`

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
        videoList: updatedData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstant.failure})
    }
  }

  updatedPremiumSection = () => {
    this.setState({showPremiumSection: false})
  }

  userSearchInput = inputValue => {
    this.setState({searchInputValue: inputValue})
  }

  searchUserVideo = () => {
    this.getHomeVideoDetails()
  }

  onClickRetry = () => {
    this.setState({searchInputValue: ''}, this.getHomeVideoDetails)
  }

  renderSuccesView = theme => {
    const {videoList} = this.state
    const {isDarkTheme} = theme
    const videosCount = videoList.length > 0
    return (
      <>
        <VideoHeader
          userSearchInput={this.userSearchInput}
          searchUserVideo={this.searchUserVideo}
        />
        {videosCount ? (
          <ul className='VideoListContainer'>
            {videoList.map(eachVideo => (
              <VideoCard eachVideo={eachVideo} key={eachVideo.id} />
            ))}
          </ul>
        ) : (
          <NoSearchContainer>
            <NoVideoImage
              src='https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png'
              alt='no videos'
            />
            <NosearchResultTitle dark={isDarkTheme}>
              No Search results found
            </NosearchResultTitle>
            <AssitMessage>
              Try different keywords or remove search filter
            </AssitMessage>
            <RetryButton type='button' onClick={this.onClickRetry}>
              Retry
            </RetryButton>
          </NoSearchContainer>
        )}
      </>
    )
  }

  failureRetry = () => {
    this.getHomeVideoDetails()
  }

  renderFailureView = theme => (
    <>
      <VideoHeader userSearchInput={this.userSearchInput} />
      <FailureContainer>
        <FailureImage
          src={
            theme
              ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
              : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
          }
          alt='failure view'
        />
        <FailureResultTitle>Oops! Something Went wrong</FailureResultTitle>
        <AssitMessage>
          We are having some trouble to complete your request. Please try again.
        </AssitMessage>
        <RetryButton onClick={this.failureRetry}>Retry</RetryButton>
      </FailureContainer>
    </>
  )

  renderProgressView = () => (
    <LoaderContainer data-testid='loader'>
      <Loader type='ThreeDots' color='#3b82f6' height='50' width='50' />
    </LoaderContainer>
  )

  renderHomeDeatils = theme => {
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
    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken === undefined) {
      return <Redirect to='/login' />
    }

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const {showPremiumSection} = this.state
          return (
            <>
              <HomeContainer dark={isDarkTheme} data-testid='home'>
                <Header />
                <MainContentContainer>
                  <SideBarSection />
                  <VideoContainer>
                    {showPremiumSection && (
                      <PremiumSection
                        updatedPremiumSection={this.updatedPremiumSection}
                        data-testid='banner'
                      />
                    )}

                    {this.renderHomeDeatils(isDarkTheme)}
                  </VideoContainer>
                </MainContentContainer>
              </HomeContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
