"use server";
import Razorpay from "razorpay";
import Payment from "@/models/Payment";
import connectDB from "@/db/connectDB";
import User from "@/models/User";

export const initiate = async (amount, to_username, paymentform) => {
  await connectDB();
  var instance = new Razorpay({
    key_id: process.env.NEXT_PUBLIC_KEY_ID,
    key_secret: process.env.KEY_SECRET,
  });

  let options = {
    amount: Number.parseInt(amount) * 100,
    currency: "INR",
  };

  let x = await instance.orders.create(options);

  // createa payment object which shows a pending payment
  await Payment.create({
    order_id: x.id,
    amount: amount,
    to_user: to_username,
    name: paymentform.name,
    message: paymentform.message,
  });

  return x;
};

export const fetchUser = async (username) => {
  await connectDB();
  console.log(username);

  let u = await User.findOne({ username: username }).lean();
  if (!u) {
    return null;
  }
  u._id = u._id.toString(); // `_id` ko string me convert kar diya
  return u;
};

export const fetchPayments = async (username) => {
  await connectDB();
  // find all payments sorted by decreasing order of amount and flatten object ids
  let p = await Payment.find({ to_user: username }).sort({ amount: -1 }).lean();
  p = p.map((payment) => ({
    ...payment,
    _id: payment._id.toString(), // `_id` ko string me convert kar diya
  }));
  return p;
};
