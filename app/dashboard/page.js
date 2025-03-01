"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useSession, signIn, signOut } from "next-auth/react";

const Dashboard = () => {
  const { data: session } = useSession();
  if (!session) {
    const router = useRouter();
    router.push("/");
  }
  return <div>Dashboard</div>;
};

export default Dashboard;
// 1:20:00