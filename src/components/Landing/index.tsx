import Logo from 'components/Logo'
import SocialMedia from 'components/SocialMedia'
import mock from 'components/SocialMedia/mock'
import * as S from './styles'

const Landing = () => (
  <S.Wrapper>
    <Logo size="large" />
    <SocialMedia medias={mock} />
  </S.Wrapper>
)

export default Landing
