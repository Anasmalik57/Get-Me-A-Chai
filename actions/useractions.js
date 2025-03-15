"use server";
import Razorpay from "razorpay";
import Payment from "@/models/Payment";
import connectDB from "@/db/connectDB";
import User from "@/models/User";

export const initiate = async (amount, to_username, paymentform) => {
  await connectDB();
  // fetch the secret of the user who is getting the payment
  let user = await User.findOne({ username: to_username });
  const secret = user.razorpaysecret;
  // ///////////////////////// //
  var instance = new Razorpay({
    key_id: user.razorpayid,
    key_secret: secret,
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
// for fetching user data
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
// for fetching user details
export const fetchPayments = async (username) => {
  await connectDB();
  // find all payments sorted by decreasing order of amount and flatten object ids
  let p = await Payment.find({ to_user: username, done: true })
    .sort({ amount: -1 })
    .limit(10)
    .lean();
  p = p.map((payment) => ({
    ...payment,
    _id: payment._id.toString(), // `_id` ko string me convert kar diya
  }));
  return p;
};

export const updateProfile = async (data, old_username) => {
  await connectDB();
  let ndata = Object.fromEntries(data);
  // If the username is being updated , check if the username is available or not
  if (old_username !== ndata.username) {
    let u = await User.findOne({ username: ndata.username });
    if (u) {
      return { error: "Username already exists" };
    }
    await User.updateOne({ email: ndata.email }, ndata);
    // Now update all the usernames in the Payments Table
    await Payment.updateMany(
      { to_user: old_username },
      { to_user: ndata.username }
    );
  }
  // else update one
  else {
    await User.updateOne({ email: ndata.email }, ndata);
  }
  // ye tab chalani jab saare user update karne ho payment model ke chahe wo apne ho ya dusre ke
  // await Payment.updateMany(
  //   {},
  //   { to_user: ndata.username }
  // );
};
