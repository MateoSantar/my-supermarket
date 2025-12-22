
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

async function verifyCredentials(email:string, password:string) {

    if (email === "test@dominio.com" && password === "miclave") {
        return { 
            id: "101",
            name: "Usuario Demo", 
            email: "test@dominio.com",
            role:"user"
        };
    } else if (email ==="admin@admin.com" && password === "adminpass") {
        return {
            id:"1",
            name:"admin",
            email:email,
            role:"admin"
        }
    }
    
    return null; 
}


const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Email y Contraseña', 
            
            credentials: {
                email: { label: "Email", type: "text", placeholder: "tu@email.com" },
                password: { label: "Password", type: "password" }
            },
            
            async authorize(credentials, req) {
                if (!credentials) return null;
                
                const user = await verifyCredentials(credentials.email, credentials.password);

                if (user) {
                    return user; 
                } else {
                    return null;
                }
            }
        })
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
        }
    },
    
    
    secret: process.env.NEXTAUTH_SECRET,
    
    session: {
        strategy: "jwt",
    },
    
});

// Exporta los handlers para Next.js App Router (GET y POST)
export { handler as GET, handler as POST };