import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import mongoose from "mongoose";
import User from "@/models/User";
import Payment from "@/models/Payment";
import connectDB from "@/db/connectDB";

const authoptions = NextAuth({
  providers: [
    // OAuth authentication providers...
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account.provider === "github") {
        // if (mongoose.connection.readyState === 0) {
          await connectDB();
        // }
        // check if the use is already exists in the database
        const currentUser = await User.findOne({ email: user.email });
        console.log(currentUser);
        // if user not already exists then create it
        if (!currentUser) {
          const newUser = new User({
            email: user.email,
            username: user.email.split("@")[0],
          });
          await newUser.save();
          console.log(newUser);
        } 
        return true;
      }
    },
    // For the session callback, we will fetch the user from the database and update the session object with the user's name.
    async session({ session, user, token }) {
      // if (mongoose.connection.readyState === 0) {
        await connectDB();
      // }
      const dbUSer = await User.findOne({ email: session.user.email });
      if (dbUSer) {
        session.user.name = dbUSer.username;
      }
      console.log(dbUSer);
      
      return session;
    },
  },
});

export { authoptions as GET, authoptions as POST };
