import {Component} from 'react'
import {Route, Redirect, Switch} from 'react-router-dom'
import ThemeContext from './context/ThemeContext'
import ProtectedRoute from './components/ProtectedRoute'
import VideoItemDetails from './components/VideoItemDetails'
import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'
import './App.css'

const activeRouteContants = {
  home: 'HOME',
  trending: 'TRENDING',
  gaming: 'GAMING',
  savedVideos: 'SAVEDVIDEOS',
}

class App extends Component {
  state = {
    isDarkTheme: false,
    activeRoute: activeRouteContants.home,
    savedVideoList: [],
  }

  changeTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  changeActiveRoute = activeRoute => {
    this.setState({activeRoute})
  }

  addVideoInList = videoItemData => {
    this.setState(prevState => ({
      savedVideoList: [...prevState.savedVideoList, videoItemData],
    }))
  }

  deleteVideoFromList = videoDetails => {
    const {savedVideoList} = this.state
    const filteredVideos = savedVideoList.filter(
      eachVideo => eachVideo.id !== videoDetails.id,
    )
    this.setState({savedVideoList: filteredVideos})
  }

  updateSavedVideo = videoItemData => {
    const {savedVideoList} = this.state

    const isPresent = savedVideoList.some(
      eachVideo => eachVideo.id === videoItemData.id,
    )

    if (isPresent) {
      this.deleteVideoFromList(videoItemData)
    } else {
      this.addVideoInList(videoItemData)
    }
  }

  render() {
    const {isDarkTheme, activeRoute, savedVideoList} = this.state

    return (
      <ThemeContext.Provider
        value={{
          isDarkTheme,
          activeRoute,
          savedVideoList,
          changeTheme: this.changeTheme,
          updateSavedVideo: this.updateSavedVideo,
          changeActiveRoute: this.changeActiveRoute,
        }}
      >
        <Switch>
          <ProtectedRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}
export default App
