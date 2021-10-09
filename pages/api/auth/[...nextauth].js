import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
// NextAuth.js関数に渡すオプション
const options = {
    providers: [
        Providers.GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
            scope: "user:email read:user"
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
            return account
        },
        async redirect({ url, baseUrl }) {
            console.log(baseUrl);
            return baseUrl
        },
        async session({ session, user, token }) {
            session.accessToken = token.accessToken;
            return session
        },
        async jwt({ token, user, account, profile, isNewUser }) {
            if (account?.accessToken) {
                token.accessToken = account.accessToken;
            }
            return token
        },
    },
    pages: {
        signIn: '/signin',
        signOut: '/signin',
        error: '/signin', // Error code passed in query string as ?error=
        verifyRequest: '/signin', // (used for check email message)
        newUser: '/signin' // New users will be directed here on first sign in (leave the property out if not of interest)
    }
}

export default (req, res) => NextAuth(req, res, options)