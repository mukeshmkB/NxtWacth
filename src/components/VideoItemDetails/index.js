import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'
import {differenceInYears} from 'date-fns'
import {BsDot} from 'react-icons/bs'
import {AiOutlineDislike, AiOutlineLike} from 'react-icons/ai'
import {RiMenuAddFill} from 'react-icons/ri'

import {
  VideoItemDetailsContainer,
  MainContentContainer,
  VideoDetailsContainer,
  VideoContainer,
  VideoTextContainer,
  VideoTitle,
  VideInfoContainer,
  VideoMetaDataContainer,
  VideoViewsCount,
  PublishDate,
  ReactionContainer,
  LikeText,
  DisLikeText,
  SaveVideoText,
  ReactionButton,
  LineSeparator,
  ChannelInfoContainer,
  ChannelProfileImage,
  ChannelMetaContainer,
  ChannelName,
  ChannelSubscribe,
  VideoDescription,
  FailureContainer,
  FailureImage,
  AssitMessage,
  FailureResultTitle,
  RetryButton,
  LoaderContainer,
} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import SideBarSection from '../SideBarSection'

const apiStatusConstant = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
  initial: 'INITIAL',
}
class VideoItemDetails extends Component {
  state = {
    apiStatus: apiStatusConstant.initial,
    videoItemData: {},
    liked: false,
    disLiked: false,
  }

  componentDidMount() {
    this.getVideoItemDetails()
  }

  getVideoItemDetails = async () => {
    this.setState({apiStatus: apiStatusConstant.inProgress})

    const jwtToken = Cookies.get('jwt_token')

    const {match} = this.props
    const {params} = match
    const {id} = params

    console.log(match)

    const url = `https://apis.ccbp.in/videos/${id}`

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()

      const updatedChannel = {
        name: data.video_details.channel.name,
        profileImageUrl: data.video_details.channel.profile_image_url,
        subscriberCount: data.video_details.channel.subscriber_count,
      }

      const updatedItemData = {
        id: data.video_details.id,
        channel: updatedChannel,
        description: data.video_details.description,
        publishedAt: data.video_details.published_at,
        thumbnailUrl: data.video_details.thumbnail_url,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        viewCount: data.video_details.view_count,
      }

      this.setState({
        apiStatus: apiStatusConstant.success,
        videoItemData: updatedItemData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstant.failure})
    }
  }

  renderSuccesView = value => {
    const {isDarkTheme, updateSavedVideo, savedVideoList} = value

    const {videoItemData} = this.state

    const {id, channel, description, publishedAt, title, videoUrl, viewCount} =
      videoItemData

    console.log(videoUrl)
    const {profileImageUrl, name, subscriberCount} = channel

    const {disLiked, liked} = this.state

    const onClickLikeVideo = () => {
      this.setState(prevState => ({liked: !prevState.liked, disLiked: false}))
    }

    const onClickDisLikeVideo = () => {
      this.setState(prevState => ({
        disLiked: !prevState.disLiked,
        liked: false,
      }))
    }

    const onClickSaveVideo = () => {
      updateSavedVideo({...videoItemData})
    }

    const present = savedVideoList.find(eachItem => eachItem.id === id)

    const savedVideo = present !== undefined ? 'active' : 'noactive'
    const saveText = present !== undefined ? 'Saved' : 'save'

    return (
      <>
        <VideoContainer>
          <ReactPlayer url={videoUrl} width="100%" height="100%" controls />
        </VideoContainer>
        <VideoTextContainer>
          <VideoTitle dark={isDarkTheme}>{title}</VideoTitle>
          <VideInfoContainer>
            <VideoMetaDataContainer>
              <VideoViewsCount>{viewCount} views</VideoViewsCount>
              <BsDot color="#64748b" />
              <PublishDate dark={isDarkTheme}>
                {differenceInYears(new Date(), new Date(publishedAt))} years ago
              </PublishDate>
            </VideoMetaDataContainer>
            <ReactionContainer>
              <ReactionButton
                type="button"
                onClick={onClickLikeVideo}
                color={liked ? '#2563eb' : '#64748b'}
              >
                <AiOutlineLike size="18" />
                <LikeText liked={liked}>Like</LikeText>
              </ReactionButton>
              <ReactionButton
                type="button"
                onClick={onClickDisLikeVideo}
                color={disLiked ? '#2563eb' : '#64748b'}
              >
                <AiOutlineDislike size={18} />
                <DisLikeText disLiked={disLiked}>Dislike</DisLikeText>
              </ReactionButton>
              <ReactionButton
                type="button"
                onClick={onClickSaveVideo}
                color={savedVideo === 'active' ? '#2563eb' : '#64748b'}
              >
                <RiMenuAddFill size={18} />
                <SaveVideoText saved={savedVideo}>{saveText}</SaveVideoText>
              </ReactionButton>
            </ReactionContainer>
          </VideInfoContainer>
          <LineSeparator />
          <ChannelInfoContainer>
            <ChannelMetaContainer>
              <ChannelProfileImage src={profileImageUrl} alt="channel logo" />
              <div>
                <ChannelName dark={isDarkTheme}>{name}</ChannelName>
                <ChannelSubscribe>
                  {subscriberCount} subscribers
                </ChannelSubscribe>
              </div>
            </ChannelMetaContainer>
            <VideoDescription dark={isDarkTheme}>
              {description}
            </VideoDescription>
          </ChannelInfoContainer>
        </VideoTextContainer>
      </>
    )
  }

  retryApiCall = () => {
    this.getVideoItemDetails()
  }

  renderFailureView = value => (
    <FailureContainer>
      <FailureImage
        src={
          value.isDarkTheme
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
      <RetryButton type="button" onClick={this.retryApiCall}>
        Retry1
      </RetryButton>
    </FailureContainer>
  )

  renderProgressView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </LoaderContainer>
  )

  apiStatusCheck = value => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstant.success:
        return this.renderSuccesView(value)
      case apiStatusConstant.failure:
        return this.renderFailureView(value)
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
            <VideoItemDetailsContainer
              data-testid="videoItemDetails"
              isDark={isDarkTheme}
            >
              <Header />
              <MainContentContainer>
                <SideBarSection />
                <VideoDetailsContainer>
                  {this.apiStatusCheck(value)}
                </VideoDetailsContainer>
              </MainContentContainer>
            </VideoItemDetailsContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default VideoItemDetails
