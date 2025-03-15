"use client";
import React, { useEffect, useState } from "react";
import Script from "next/script";
import { fetchPayments, fetchUser, initiate } from "@/actions/useractions";
import { useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import { Zoom } from "react-toastify";
import { useRouter } from "next/navigation";
import CountUp from "./CountUp";

const PaymentPage = ({ username }) => {
  const [paymentform, setPaymentform] = useState({ name: "", message: "", amount: "" });
  const [payments, setPayments] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const searchParams = useSearchParams();
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    getData();
  }, [username]);

  useEffect(() => {
    if (searchParams.get("paymentdone") === "true") {
      toast.success("Thanks for Your Support 😃", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Zoom,
      });
    }
    router.push(`/${username}`);
  }, [searchParams]);

  const handleChange = (e) => {
    setPaymentform({ ...paymentform, [e.target.name]: e.target.value });
  };

  const getData = async () => {
    let u = await fetchUser(username);
    setCurrentUser(u);
    let dbpayments = await fetchPayments(username);
    setPayments(dbpayments);
  };

  // Paying Functionality
  const pay = async (amount) => {
    let a = await initiate(amount, username, paymentform);
    let orderId = a.id;
    var options = {
      key: currentUser.razorpayid,
      amount: amount,
      currency: "INR",
      name: "Get Me A Chai",
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: orderId,
      callback_url: `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
      prefill: {
        name: "Gaurav Kumar",
        email: "gaurav.kumar@example.com",
        contact: "9000090000",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    var rzp1 = new Razorpay(options);
    rzp1.open();
  };

  let totalPayment = payments.reduce((a, b) => parseInt(a) + parseInt(b.amount), 0);

  if (status === "loading") {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="w-16 h-16 border-8 border-slate-300 border-x-purple-500 border-y-slate-100 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Zoom}
      />
      <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

      {/* Cover & Profile Section */}
      <div className="w-full relative">
        <img
          className="w-full object-cover bg-slate-900 min-h-[300px] sm:min-h-[349px] max-h-[350px]"
          src={currentUser?.coverpic}
          alt="Cover-Image"
        />
        <div className="profilePic absolute -bottom-[55px] left-[38%] md:left-[46%]  overflow-hidden rounded-full bg-current p-[3px] sm:-bottom-16 ">
          <img
            width={110}
            height={110}
            className="border-2 border-black rounded-full aspect-square "
            src={currentUser?.profilepic}
            alt="Profilepic"
          />
        </div>
      </div>

      {/* User Info */}
      <div className="info flex flex-col items-center mt-20 pb-4 gap-2 w-full">
        <div className="font-bold tracking-wide lowercase text-base sm:text-lg">
          @{username}
        </div>
        <div className="text-slate-400 text-sm sm:text-base">
          Let's help <span className="font-semibold">{username}</span> get a chai
        </div>
        <div className="text-slate-400 text-sm sm:text-base">
          <span className="font-semibold text-violet-500">
            <CountUp
              from={0}
              to={payments.length}
              separator=","
              direction="up"
              duration={1}
              className="count-up-text"
            />{" "}
            Payments
          </span>
          . Raised{" "}
          <span className="font-semibold text-green-400">
            ₹
            <CountUp
              from={0}
              to={totalPayment}
              separator=","
              direction="up"
              duration={1}
              className="count-up-text"
            />
          </span>
          .
        </div>
      </div>

      {/* Payment Container */}
      <div className="payment container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 p-4 sm:p-6">
        {/* Supporters Leaderboard */}
        <div className="supporters bg-slate-900 rounded-xl p-4 sm:p-6 text-white shadow-lg">
          <h2 className="text-lg sm:text-xl font-semibold py-3 border-b border-gray-700">
            ✨ Top 10 Supporters
          </h2>
          <ul className="mt-4 space-y-3 max-h-72 overflow-y-scroll scroll-smooth">
            {payments.length === 0 && (
              <li className="text-gray-400 w-full h-48 flex justify-center items-center text-2xl font-semibold tracking-wider">
                No Payments Yet
              </li>
            )}
            {payments.map((p, i) => (
              <li
                key={i}
                className="bg-gray-800 px-3 py-2 sm:px-4 sm:py-3 rounded-lg shadow-md flex gap-2 items-center"
              >
                <img src="/avatar.gif" width={30} alt="" className="rounded-full" />
                <span>
                  <span className="font-bold text-indigo-400">{p.name} </span>
                  donated{" "}
                  <span className="font-bold text-green-500">₹{p.amount} </span>
                  with a message "
                  <span className="italic tracking-wide font-semibold border-b border-indigo-400">
                    {p.message}
                  </span>
                  "
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Payment Section */}
        <div className="make-payment bg-slate-900 rounded-xl p-4 sm:p-6 text-white shadow-lg flex flex-col gap-4">
          {/* Header Section */}
          <div className="py-3 border-b border-gray-700 flex flex-col sm:flex-row justify-between items-center">
            <h2 className="text-lg sm:text-xl font-semibold flex items-center">
              <span className="mr-2 text-2xl">💳</span> Make a Payment
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm text-center">
              Support us by making a donation.
            </p>
          </div>

          {/* Input & Pay Button */}
          <div className="flex flex-col gap-3">
            <input
              onChange={handleChange}
              value={paymentform.name || ""}
              type="text"
              name="name"
              placeholder="Enter Name"
              className="w-full p-2 sm:p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-violet-500 focus:outline-none text-xs sm:text-sm"
            />
            <input
              onChange={handleChange}
              value={paymentform.message || ""}
              type="text"
              name="message"
              placeholder="Enter Message"
              className="w-full p-2 sm:p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-violet-500 focus:outline-none text-xs sm:text-sm"
            />
            <input
              onChange={handleChange}
              value={paymentform.amount || ""}
              type="text"
              name="amount"
              placeholder="Enter Amount"
              className="w-full p-2 sm:p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-violet-500 focus:outline-none text-xs sm:text-sm"
            />
            <button
              onClick={() => {
                pay(paymentform.amount);
              }}
              className="cursor-pointer bg-gradient-to-r from-violet-500 to-purple-600 hover:from-purple-500 hover:to-violet-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-200 ease-in shadow-md whitespace-nowrap focus:outline-2 focus:outline-violet-500 focus:outline-offset-2 disabled:cursor-not-allowed text-xs sm:text-sm"
              disabled={
                paymentform.name?.length < 3 ||
                paymentform.message?.length < 3 ||
                paymentform.amount?.length < 1
              }
            >
              Pay Now
            </button>
          </div>

          {/* Quick Pay Options */}
          <div className="flex gap-2 sm:gap-3 justify-center">
            <button
              onClick={() => pay(10)}
              className="cursor-pointer bg-gray-800 hover:bg-gray-700 text-white px-3 sm:px-5 py-2 rounded-lg transition-all duration-200 ease-in outline-none text-xs sm:text-sm"
            >
              Pay ₹10
            </button>
            <button
              onClick={() => pay(20)}
              className="cursor-pointer bg-gray-800 hover:bg-gray-700 text-white px-3 sm:px-5 py-2 rounded-lg transition-all duration-200 ease-in outline-none text-xs sm:text-sm"
            >
              Pay ₹20
            </button>
            <button
              onClick={() => pay(30)}
              className="cursor-pointer bg-gray-800 hover:bg-gray-700 text-white px-3 sm:px-5 py-2 rounded-lg transition-all duration-200 ease-in outline-none text-xs sm:text-sm"
            >
              Pay ₹30
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentPage;
