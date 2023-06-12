import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/lib/prisma";


const handler = NextAuth({
   secret: process.env.NEXTAUTH_SECRET,
   providers: [
      CredentialsProvider({
         // The name to display on the sign in form (e.g. "Sign in with...")
         id: "username-login",
         name: "credentials",
         // `credentials` is used to generate a form on the sign in page.
         // You can specify which fields should be submitted, by adding keys to the `credentials` object.
         // e.g. domain, username, password, 2FA token, etc.
         // You can pass any HTML attribute to the <input> tag through the object.
         credentials: {
            username: {
               label: "Username",
               type: "text",
               placeholder: "jsmith",
            },
            password: { label: "Password", type: "password" },
            rememberMe: { label: "Remember Me", type: "checkbox" },
         },
         async authorize(credentials, req) {
            // Add logic here to look up the user from the credentials supplied
            const { username, password, rememberMe } = credentials as any;
            const res = await fetch("http://localhost:3000/api/login", {
               method: "POST",
               headers: {
                  "Content-Type": "application/json",
               },
               body: JSON.stringify({
                  username: username,
                  password: password,
                  rememberMe: rememberMe,
               }),
            });

            const user = await res.json();


            if (res.ok && user) {
               return user;
            } else return null;
         },
      }),
   ],
   callbacks: {
      async jwt({ token, user }) {
         return { ...token, ...user};
      },
      async session({ session, token, user }) {
         // Send properties to the client, like an access_token from a provider.
         session.user = token as any;
         return session;
      },
      async redirect({ url, baseUrl }) {
         return url.startsWith(baseUrl) ? url : baseUrl;
      },
   },
});

export { handler as GET, handler as POST };
