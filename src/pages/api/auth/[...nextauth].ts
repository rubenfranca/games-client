import { NextApiRequest, NextApiResponse } from 'next'
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const options = {
  pages: {
    signIn: '/sign-in'
  },
  providers: [
    Providers.Credentials({
      name: 'Sign-in',
      credentials: {},
      async authorize({
        email,
        password
      }: {
        email: string
        password: string
      }) {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/local`,
          {
            method: 'POST',
            body: new URLSearchParams({ identifier: email, password })
          }
        )

        const data = await response.json()

        if (data.user) {
          return { ...data.user, jwt: data.jwt }
        } else {
          return null
        }
      }
    })
  ],
  callbacks: {
    session: async (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      session: { [key: string]: any },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      user: { [key: string]: any }
    ) => {
      session.jwt = user.jwt
      session.id = user.id

      return Promise.resolve(session)
    },
    jwt: async (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      token: { [key: string]: any },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      user: { [key: string]: any }
    ) => {
      if (user) {
        token.id = user.id
        token.email = user.email
        token.name = user.username
        token.jwt = user.jwt
      }

      return Promise.resolve(token)
    }
  }
}

const Auth = (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, options)

export default Auth
