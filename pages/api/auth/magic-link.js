import { NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";
import { authOptions } from "./[...nextauth]";
import crypto from "crypto";
import "dotenv/config";

export default async (req, res) => {
  console.log("here")
};

function generateMagicLinkToken() {
  return crypto.randomBytes(32).toString("hex");
}
