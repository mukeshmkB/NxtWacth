import {RiCloseFill} from 'react-icons/ri'

import {
  PremiumPlansContainer,
  GetPremiumContainer,
  PremiumImageLogo,
  PremiumDescription,
  PremiumGetButton,
  ClosePremium,
} from './styledComponents'

const PremiumSection = props => {
  const {updatedPremiumSection} = props

  const removePremiumSection = () => {
    updatedPremiumSection()
  }

  return (
    <PremiumPlansContainer data-testid="banner">
      <ClosePremium
        type="button"
        onClick={removePremiumSection}
        data-testid="close"
        aria-label="close"
      >
        <RiCloseFill size="20" />
      </ClosePremium>
      <GetPremiumContainer>
        <PremiumImageLogo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="nxt watch logo"
        />
        <PremiumDescription>
          Buy NXT Watch Premium prepaid plans with UPI
        </PremiumDescription>
        <PremiumGetButton>GET IT NOW</PremiumGetButton>
      </GetPremiumContainer>
    </PremiumPlansContainer>
  )
}

export default PremiumSection
