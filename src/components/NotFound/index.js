import {
  NotFoundContainer,
  MainContentContainer,
  NotFoundResultContainer,
  FoundContainer,
  FoundImage,
  FoundResultTitle,
  AssitMessage,
} from './styledComponents'

import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import SideBarSection from '../SideBarSection'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      return (
        <NotFoundContainer dark={isDarkTheme} data-testid="notFound">
          <Header />
          <MainContentContainer>
            <SideBarSection />
            <NotFoundResultContainer>
              <FoundContainer>
                <FoundImage
                  src={
                    isDarkTheme
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                  }
                  alt="not found"
                />
                <FoundResultTitle dark={isDarkTheme}>
                  Page Not Found
                </FoundResultTitle>
                <AssitMessage dark={isDarkTheme}>
                  We are sorry the page your request could not be found.
                </AssitMessage>
              </FoundContainer>
            </NotFoundResultContainer>
          </MainContentContainer>
        </NotFoundContainer>
      )
    }}
  </ThemeContext.Consumer>
)
export default NotFound
