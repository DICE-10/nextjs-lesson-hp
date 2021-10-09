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
        Providers.TwitterProvider({
            clientId: process.env.TWITTER_CLIENT_ID,
            clientSecret: process.env.TWITTER_CLIENT_SECRET
        })
        // ...add more providers here
    ],
  // ログインページを指定する。今回はトップページのため'/'を指定。
 /* pages: {
    signIn: '/signin',
  },*/
}

export default (req, res) => NextAuth(req, res, options)