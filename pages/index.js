// pages/dashboard.js

import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (session === null) {
    // User is not authenticated, redirect to the login page
    router.replace("/login");
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1>Welcome, {session.user.email}!</h1>
    </div>
  );
}
