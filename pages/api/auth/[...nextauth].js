import "dotenv/config";
import EmailProvider from "next-auth/providers/email";
import NextAuth from "next-auth";
import sendEmail from "@/utils/mailer";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/lib/prisma";
import crypto from "crypto";

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    EmailProvider({ 
      from: process.env.GMAIL_ADDRESS,
      id: "email",
      server: {
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          type: "OAuth2",
          user: process.env.GMAIL_ADDRESS,
          clientId: process.env.GMAIL_OAUTH_CLIENT_ID,
          clientSecret: process.env.GMAIL_OAUTH_CLIENT_SECRET,
          refreshToken: process.env.GMAIL_OAUTH_REFRESH_TOKEN,
          accessToken: process.env.GMAIL_OAUTH_ACCESS_TOKEN,
          expires: Number.parseInt(process.env.GMAIL_OAUTH_TOKEN_EXPIRE, 10),
        },
      },
      // 
    }),
  ],
};

export default NextAuth(authOptions);
