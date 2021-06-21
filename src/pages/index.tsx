import { gql } from '@apollo/client'
import Home, { HomeTemplateProps } from 'templates/Home'
import bannersMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import hightlightMock from 'components/Highlight/mock'
import { initializeApollo } from 'utils/apollo'

const GET_GAMES = gql`
  query getGames {
    games {
      name
    }
  }
`

export default function Index(props: HomeTemplateProps) {
  if (props.data) return <p>{JSON.stringify(props.data, null, 2)}</p>

  return <Home {...props} />
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query({ query: GET_GAMES })

  return {
    props: {
      data: data,
      initialApolloState: apolloClient.cache.extract(),
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
