import React from 'react'

const ThemeContext = React.createContext({
  isDarkTheme: '',
  activeRoute: '',
  savedVideoList: [],
  updateSavedVideo: () => {},
  changeTheme: () => {},
  changeActiveRoute: () => {},
})
export default ThemeContext
