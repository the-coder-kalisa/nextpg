// pages/dashboard.js

import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <div>Loading...</div>;
  }


router.replace("/api/auth/signin");

  
  return null;
}
