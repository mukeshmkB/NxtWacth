import ThemeContext from '../../context/ThemeContext'
import {
  CustomLink,
  GameItemContainer,
  GameThumbnail,
  GameContent,
  GameName,
  GameviewsCount,
} from './styledComponents'

const GamingCard = props => {
  const {eachVideo} = props
  console.log(eachVideo)
  const {id, thumbnailUrl, title, viewCount} = eachVideo

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <CustomLink to={`/videos/${id}`}>
            <GameItemContainer>
              <GameThumbnail src={thumbnailUrl} alt="video thumbnail" />
              <GameContent>
                <GameName dark={isDarkTheme}>{title}</GameName>
                <GameviewsCount>{viewCount} Watching Worldwide</GameviewsCount>
              </GameContent>
            </GameItemContainer>
          </CustomLink>
        )
      }}
    </ThemeContext.Consumer>
  )
}
export default GamingCard
