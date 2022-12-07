import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
            clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET
        })
    ],
    secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET,
    callbacks: {
        session: async ({ session, token }) => {
            session = {
                ...session,
                user: {
                    ...session.user,
                    id: token?.sub,
                },
            };
            return session;
        },
    }
});