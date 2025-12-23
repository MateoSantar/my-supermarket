import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { users } from "@/app/lib/data";
async function verifyCredentials(email: string, password: string) {
    const foundUser = users.find(
        (user) => user.email === email && user.password === password
    );

    if (foundUser) {
        return {
            id: foundUser.id.toString(),
            name: foundUser.name,
            email: foundUser.email,
            role: foundUser.role,
        };
    }
    return null;
}

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Email y Contraseña",

            credentials: {
                email: {
                    label: "Email",
                    type: "text",
                    placeholder: "tu@email.com",
                },
                password: { label: "Password", type: "password" },
            },

            async authorize(credentials, req) {
                if (!credentials) return null;

                const user = await verifyCredentials(
                    credentials.email,
                    credentials.password
                );

                if (user) {
                    return user;
                } else {
                    return null;
                }
            },
        }),
    ],

    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.role = user.role;
            }
            return token;
        },
        async session({ session, token }) {
            session.user.id = token.id;
            return session;
        },
    },

    secret: process.env.NEXTAUTH_SECRET,

    session: {
        strategy: "jwt",
    },
});

// Exporta los handlers para Next.js App Router (GET y POST)
export { handler as GET, handler as POST };
