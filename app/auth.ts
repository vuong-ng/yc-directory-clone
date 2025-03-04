import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub({
    authorization: {
      params:{redirect_uri: "http://localhost:3000/api/auth/callback/github"}
    }
  })],
})