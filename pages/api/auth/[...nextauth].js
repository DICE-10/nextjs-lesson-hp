import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

// NextAuth.js関数に渡すオプション
const options = {
    providers: [
        Providers.GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        Providers.Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        Providers.Twitter({
            clientId: process.env.TWITTER_CLIENT_ID,
            clientSecret: process.env.TWITTER_CLIENT_SECRET
        })
        // ...add more providers here
    ],
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            return true
        },
        async redirect({ url, baseUrl }) {
            return baseUrl
        },
        async session({ session, user, token }) {
            return session
        },
        async jwt({ token, user, account, profile, isNewUser }) {
            return token
        }
    },
    auth: {
        redirect: {
          login: '/signin',
          logout: '/',
          callback: '/signin',
          home: '/'
        },
        token: {
            prefix: '_token.',
            global: true,
          }
      },
}

export default (req, res) => NextAuth(req, res, options)