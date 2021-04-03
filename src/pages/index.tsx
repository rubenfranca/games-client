import Home, { HomeTemplateProps } from 'templates/Home'
import bannersMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import hightlightMock from 'components/Highlight/mock'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export function getStaticProps() {
  return {
    props: {
      banners: bannersMock,
      freeGames: gamesMock,
      upcomingMoreGames: gamesMock,
      upcomingHighlight: hightlightMock,
      upcomingGames: gamesMock,
      newGames: gamesMock,
      mostPopularHighlight: hightlightMock,
      mostPopularGames: gamesMock,
      freeHighlight: hightlightMock
    }
  }
}
