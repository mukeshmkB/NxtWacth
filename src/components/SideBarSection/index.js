import ThemeContext from '../../context/ThemeContext'
import {
  SideBarContainer,
  ContactUsContainer,
  ContactTitle,
  SocailMediaIconsContainer,
  IconImage,
  WelcomeText,
} from './styledComponents'

import MenuItemList from '../MenuItemList'

const SideBarSection = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const renderContactUs = () => (
        <ContactUsContainer>
          <ContactTitle dark={isDarkTheme}>CONTACT Us</ContactTitle>
          <SocailMediaIconsContainer>
            <IconImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
              alt="facebook logo"
            />
            <IconImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
              alt="twitter logo"
            />
            <IconImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
              alt="linked in logo"
            />
          </SocailMediaIconsContainer>
          <WelcomeText dark={isDarkTheme}>
            Enjoy! Now to see your channels and recommendations!
          </WelcomeText>
        </ContactUsContainer>
      )
      return (
        <SideBarContainer dark={isDarkTheme}>
          <MenuItemList />
          {renderContactUs()}
        </SideBarContainer>
      )
    }}
  </ThemeContext.Consumer>
)
export default SideBarSection
