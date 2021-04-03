import { BannerProps } from 'components/Banner'
import BannerSlider from 'components/BannerSlider'
import { Container } from 'components/Container'
import Footer from 'components/Footer'
import { GameCardProps } from 'components/GameCard'
import Heading from 'components/Heading'
import Highlight, { HighlightProps } from 'components/Highlight'
import Menu from 'components/Menu'
import GameCardSlider from 'components/GameCardSlider'

import * as S from './styles'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newGames: GameCardProps[]
  mostPopularHighlight: HighlightProps
  mostPopularGames: GameCardProps[]
  upcomingGames: GameCardProps[]
  upcomingHighlight: HighlightProps
  upcomingMoreGames: GameCardProps[]
  freeGames: GameCardProps[]
  freeHighlight: HighlightProps
}

const Home = ({
  banners,
  freeGames,
  upcomingMoreGames,
  upcomingHighlight,
  upcomingGames,
  newGames,
  mostPopularHighlight,
  mostPopularGames,
  freeHighlight
}: HomeTemplateProps) => (
  <section>
    <Container>
      <Menu />
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <Container>
        <Heading lineLeft lineColor="secondary" color="black">
          News
        </Heading>
        <GameCardSlider items={newGames} color="black" />
      </Container>
    </S.SectionNews>

    <Container>
      <S.SectionMostPopular>
        <Heading lineLeft lineColor="secondary">
          Most Popular
        </Heading>
        <Highlight {...mostPopularHighlight} />
        <GameCardSlider items={mostPopularGames} color="white" />
      </S.SectionMostPopular>
    </Container>

    <S.SectionUpcoming>
      <Container>
        <Heading lineLeft lineColor="secondary">
          Upcoming
        </Heading>
        <GameCardSlider items={upcomingGames} color="white" />
        <Highlight {...upcomingHighlight} />
        <GameCardSlider items={upcomingMoreGames} color="white" />
      </Container>
    </S.SectionUpcoming>

    <S.SectionFreeGames>
      <Container>
        <Heading lineLeft lineColor="secondary">
          Free Games
        </Heading>
        <Highlight {...freeHighlight} />
        <GameCardSlider items={freeGames} color="white" />
      </Container>
    </S.SectionFreeGames>

    <S.SectionFooter>
      <Container>
        <Footer />
      </Container>
    </S.SectionFooter>
  </section>
)

export default Home
