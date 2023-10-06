import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import clientPromise from "../../../util/mongo"

export const authOptions = {
  adapter: MongoDBAdapter(clientPromise),  
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
  pages:{
    signIn:"/auth/login",
  },
}

export default NextAuth(authOptions)