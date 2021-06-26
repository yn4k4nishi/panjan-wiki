import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import { query } from '@/lib/db'

const options = {
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  callbacks: {
    async signIn(profile){
      const results = await query(
        `
        select mail from member where mail = ?
        `,
        profile.email
      )
      if ( results == '' ){
        return false
      } else {
        return true
      }
    }
  }
}

export default (req, res) => NextAuth(req, res, options)