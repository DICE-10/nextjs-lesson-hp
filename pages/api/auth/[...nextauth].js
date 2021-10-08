import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

// NextAuth.js関数に渡すオプション
const options = {
    providers: [
        Providers.GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        // ...add more providers here
        ],
  // ログインページを指定する。今回はトップページのため'/'を指定。
  /*pages: {
    signIn: '/',
  },*/
}

export default (req, res) => NextAuth(req, res, options)