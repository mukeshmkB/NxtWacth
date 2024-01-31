import {RiCloseFill} from 'react-icons/ri'
import {BsFillBrightnessHighFill} from 'react-icons/bs'
import {IoMdMenu} from 'react-icons/io'
import {FaMoon} from 'react-icons/fa'
import {FiLogOut} from 'react-icons/fi'

import Cookies from 'js-cookie'

import {withRouter} from 'react-router-dom'

import Popup from 'reactjs-popup'

import {
  NavbarHeaderComponent,
  NavbarContentContainer,
  WebsiteIcon,
  ProfileImage,
  NavMobileIcons,
  NavLargeItems,
  ThemeButton,
  IconButton,
  LogoutButton,
  LogoutAlertMessage,
  Alertbuttons,
  CancelButtton,
  ConfirmButton,
  LogoutPopUp,
  MenuPopUp,
  MenuListContainer,
  CloseButton,
  CustomLink,
} from './styledComponent'
import MenuItemList from '../MenuItemList'
import ThemeContext from '../../context/ThemeContext'

import 'reactjs-popup/dist/index.css'

const activeRouteContants = {
  home: 'HOME',
  trending: 'TRENDING',
  gaming: 'GAMING',
  savedVideos: 'SAVEDVIDEOS',
}

const Header = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, changeTheme, changeActiveRoute} = value

      const onClickTheme = () => {
        changeTheme()
      }

      const onClickLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      const websiteLogo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

      return (
        <NavbarHeaderComponent dark={isDarkTheme}>
          <NavbarContentContainer>
            <CustomLink to="/">
              <WebsiteIcon
                src={websiteLogo}
                alt="website logo"
                onClick={() => changeActiveRoute(activeRouteContants.home)}
              />
            </CustomLink>
            <NavMobileIcons>
              <ThemeButton
                type="button"
                onClick={onClickTheme}
                data-testid="theme"
                aria-label="themebutton"
              >
                {isDarkTheme ? (
                  <BsFillBrightnessHighFill color="#f1f1f1" size="20" />
                ) : (
                  <FaMoon size="20" />
                )}
              </ThemeButton>

              <Popup
                modal
                className="popup-content"
                trigger={
                  <IconButton type="button" aria-label="menu">
                    <IoMdMenu
                      size="24"
                      color={`${isDarkTheme ? '#f1f1f1' : ''}`}
                    />
                  </IconButton>
                }
              >
                {close => (
                  <MenuPopUp dark={isDarkTheme}>
                    <CloseButton
                      type="button"
                      onClick={() => close()}
                      aria-label="menuClose"
                    >
                      {' '}
                      <RiCloseFill
                        size="22"
                        color={isDarkTheme ? '#f1f1f1' : ''}
                      />
                    </CloseButton>
                    <MenuListContainer dark={isDarkTheme}>
                      <MenuItemList />
                    </MenuListContainer>
                  </MenuPopUp>
                )}
              </Popup>
              <Popup
                modal
                trigger={
                  <IconButton>
                    <FiLogOut
                      size="24"
                      color={`${isDarkTheme ? '#f1f1f1' : ''}`}
                    />
                  </IconButton>
                }
                className="popup-content"
              >
                {close => (
                  <LogoutPopUp dark={isDarkTheme}>
                    <LogoutAlertMessage dark={isDarkTheme}>
                      Are you sure want to logout?
                    </LogoutAlertMessage>
                    <Alertbuttons>
                      <CancelButtton
                        dark={isDarkTheme}
                        type="button"
                        bgColor="#ffffff"
                        onClick={() => close()}
                      >
                        Cancel
                      </CancelButtton>
                      <ConfirmButton
                        type="button"
                        bgColor="#3b82f6"
                        outLine="#ffffff"
                        onClick={onClickLogout}
                      >
                        Confirm
                      </ConfirmButton>
                    </Alertbuttons>
                  </LogoutPopUp>
                )}
              </Popup>
            </NavMobileIcons>

            <NavLargeItems>
              <ThemeButton
                type="button"
                onClick={onClickTheme}
                data-testid="theme"
                aria-label="themebutton"
              >
                {isDarkTheme ? (
                  <BsFillBrightnessHighFill color="#f1f1f1" size="20" />
                ) : (
                  <FaMoon size="20" />
                )}
              </ThemeButton>
              <ProfileImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
              <Popup
                modal
                className="popup-content"
                trigger={
                  <LogoutButton as="button" dark={isDarkTheme}>
                    Logout
                  </LogoutButton>
                }
              >
                {close => (
                  <LogoutPopUp dark={isDarkTheme}>
                    <LogoutAlertMessage dark={isDarkTheme}>
                      Are you sure want to logout?
                    </LogoutAlertMessage>
                    <Alertbuttons>
                      <CancelButtton
                        type="button"
                        bgColor="#ffffff"
                        outLine="#3b82f6"
                        dark={isDarkTheme}
                        aria-label="cancel"
                        onClick={() => close()}
                      >
                        Cancel
                      </CancelButtton>
                      <ConfirmButton
                        type="button"
                        bgColor="#3b82f6"
                        outLine="#ffffff"
                        aria-label="confirm"
                        onClick={onClickLogout}
                      >
                        Confirm
                      </ConfirmButton>
                    </Alertbuttons>
                  </LogoutPopUp>
                )}
              </Popup>
            </NavLargeItems>
          </NavbarContentContainer>
        </NavbarHeaderComponent>
      )
    }}
  </ThemeContext.Consumer>
)
export default withRouter(Header)
