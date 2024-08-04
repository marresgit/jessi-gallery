import { NextAuthOptions } from "next-auth";
import { AdapterUser } from "next-auth/adapters";


import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        })
    ],
    callbacks:  {
        async signIn({user }: {user: AdapterUser}) {
            const allowedEmail = process.env.ALLOWED_EMAIL;
            if (user.email === allowedEmail) {
                return true; // Allow sign in
            } else {
                return false; // Do not allow sign in}
            }
        }
    }
}