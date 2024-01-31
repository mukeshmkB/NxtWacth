import {MdSearch} from 'react-icons/md'
import {SearchContainer, SearchInput, Searchbutton} from './styledComponents'

const VideoHeader = props => {
  const {userSearchInput, searchUserVideo} = props

  const changeSearchInput = event => {
    userSearchInput(event.target.value)
  }
  const searchVideo = () => {
    searchUserVideo()
  }
  return (
    <SearchContainer>
      <SearchInput
        type='search'
        placeholder='Search'
        onChange={changeSearchInput}
      />
      <Searchbutton
        type='button'
        data-testid='searchButton'
        onClick={searchVideo}
        aria-label='Search'
      >
        <MdSearch size='18' color='#313131' />
      </Searchbutton>
    </SearchContainer>
  )
}

export default VideoHeader
