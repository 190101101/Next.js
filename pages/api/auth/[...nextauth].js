import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import clientPromise from "../../../util/mongo"
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/User";
import db from '@/util/dbConnect';
import bcrypt from 'bcryptjs';

await db();

export default NextAuth({
  // adapter: MongoDBAdapter(clientPromise),  
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "username" },
        password: { label: "Password", type: "password", placeholder: 'password'}
      },
      async authorize(credentials, req) {
        const email = credentials.email;
        const password = credentials.password;
        const user = await User.findOne({email: email});

        if (!user) {
          throw new Error("you haven't registered yet!");
        }

        if (user) {
          return signInUser({user, password});
        }
      }
    }),
  ],
  pages:{
    signIn:"/auth/login",
  },
  database:process.env.MONGODB_URI,
  secret:"secret",
})

const signInUser = async({user, password}) => {
  const isMatch = await bcrypt.compare(password, user.password);
  if(!isMatch){
    throw new Error("incorrect password");
  }
  return user;
}
