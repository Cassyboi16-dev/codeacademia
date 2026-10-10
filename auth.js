import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { FirestoreAdapter } from "@auth/firebase-adapter"
import { cert } from "firebase-admin/app"

const getRequiredEnv = (name) => {
  const value = process.env[name]

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`)
  }

  return value
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
        clientId: process.env.AUTH_GOOGLE_ID,
        clientSecret: process.env.AUTH_GOOGLE_SECRET
    })
  ],

  adapter: FirestoreAdapter({
    credential: cert({
      projectId: getRequiredEnv("AUTH_FIREBASE_PROJECT_ID"),
      clientEmail: getRequiredEnv("AUTH_FIREBASE_CLIENT_EMAIL"),
      privateKey: getRequiredEnv("AUTH_FIREBASE_PRIVATE_KEY").replace(/\\n/g, "\n"),
    }),
  }),
})