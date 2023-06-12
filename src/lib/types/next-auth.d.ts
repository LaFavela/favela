import NextAuth from "next-auth";

declare module "next-auth" {
   interface Session {
      user: {
         id: number;
         username: string;
         email: string;
         firstName: string;
         lastName: string;
         image: string;
         role: string;
         accessToken: string;
      };
   }
}
