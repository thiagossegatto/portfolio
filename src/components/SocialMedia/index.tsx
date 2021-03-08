import * as S from './styles'
import { Linkedin, Instagram, Github } from '@styled-icons/fa-brands'

const icons: { [key: string]: React.ReactNode } = {
  Linkedin: <Linkedin />,
  Instagram: <Instagram />,
  Github: <Github />
}

type MediaProps = {
  name: string
  url: string
}

export type SocialMediaProps = {
  medias: MediaProps[]
}

const SocialMedia = ({ medias }: SocialMediaProps) => {
  return (
    <S.Wrapper>
      {medias.map((item: MediaProps) => (
        <S.Link
          href={item.url}
          target="_blank"
          key={item.name}
          aria-label={item.name}
        >
          {icons[item.name]}
        </S.Link>
      ))}
    </S.Wrapper>
  )
}

export default SocialMedia
