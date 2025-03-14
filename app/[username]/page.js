import PaymentPage from "@/components/PaymentPage";
import React from "react";
import connectDB from "@/db/connectDB";
import User from "@/models/User";
import { notFound } from "next/navigation";

const Username = async ({ params }) => {
  let user = await User.findOne({ username: params.username });
  if (!user) {
    return notFound();
  } else {
    return (
      <>
        <PaymentPage username={params.username} />
      </>
    );
  }
};

export default Username;
