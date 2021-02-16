import * as S from './styles'

const Main = ({
  title = 'My boilerplate',
  description = 'Typescript, ReactJS, NextJS and styledComponents'
}) => (
  <S.Wrapper>
    <S.Logo src="/img/logo.svg" alt="Atom image and React Advanced written" />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="A developper in front of code"
    />
  </S.Wrapper>
)

export default Main
