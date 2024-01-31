import {AiFillHome} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {IoFlame} from 'react-icons/io5'
import {RiMenuAddFill} from 'react-icons/ri'

import {
  CustomLink,
  MenuListContainer,
  MenuLinkItem,
  MenuItemName,
} from './styledComponent'

import ThemeContext from '../../context/ThemeContext'

const activeRouteContants = {
  home: 'HOME',
  trending: 'TRENDING',
  gaming: 'GAMING',
  savedVideos: 'SAVEDVIDEOS',
}

const MenuItemList = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, activeRoute, changeActiveRoute} = value

      return (
        <MenuListContainer>
          <CustomLink to="/">
            <MenuLinkItem
              isActive={activeRoute === activeRouteContants.home}
              dark={isDarkTheme}
              onClick={() => changeActiveRoute(activeRouteContants.home)}
            >
              <AiFillHome
                color={
                  activeRoute === activeRouteContants.home
                    ? '#ff0b37'
                    : ' #606060'
                }
              />
              <MenuItemName dark={isDarkTheme}>Home</MenuItemName>
            </MenuLinkItem>
          </CustomLink>
          <CustomLink to="/trending">
            <MenuLinkItem
              isActive={activeRoute === activeRouteContants.trending}
              dark={isDarkTheme}
              onClick={() => changeActiveRoute(activeRouteContants.trending)}
            >
              <IoFlame
                size="18"
                color={
                  activeRoute === activeRouteContants.trending
                    ? '#ff0b37'
                    : ' #606060'
                }
              />
              <MenuItemName dark={isDarkTheme}>Trending</MenuItemName>
            </MenuLinkItem>
          </CustomLink>
          <CustomLink to="/gaming">
            <MenuLinkItem
              isActive={activeRoute === activeRouteContants.gaming}
              dark={isDarkTheme}
              onClick={() => changeActiveRoute(activeRouteContants.gaming)}
            >
              <SiYoutubegaming
                size="18"
                color={
                  activeRoute === activeRouteContants.gaming
                    ? '#ff0b37'
                    : ' #606060'
                }
              />
              <MenuItemName dark={isDarkTheme}>Gaming</MenuItemName>
            </MenuLinkItem>
          </CustomLink>
          <CustomLink to="/saved-videos">
            <MenuLinkItem
              isActive={activeRoute === activeRouteContants.savedVideos}
              dark={isDarkTheme}
              onClick={() => changeActiveRoute(activeRouteContants.savedVideos)}
            >
              <RiMenuAddFill
                size="18"
                color={
                  activeRoute === activeRouteContants.savedVideos
                    ? '#ff0b37'
                    : ' #606060'
                }
              />
              <MenuItemName dark={isDarkTheme}>Saved videos</MenuItemName>
            </MenuLinkItem>
          </CustomLink>
        </MenuListContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default MenuItemList
