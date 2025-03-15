# Creating a GET-ME-A-CHAI Project for Supporting Developers Financially 😊

A **modern, elegant, and professional** crowdfunding platform that enables developers and creators to receive financial support from their audience—just like buying them a chai! ☕

---

## 🚀 Table of Contents
- [Introduction](#introduction)
- [Key Features](#key-features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
- [Usage Guide](#usage-guide)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## 🎯 Introduction

**Get-Me-A-Chai** is a **Next.js 15-powered** crowdfunding platform designed to help developers and content creators receive donations from their supporters easily. With **Razorpay payment integration**, **NextAuth authentication**, and a **clean, modern UI**, this project makes financial support seamless and hassle-free.

---

## 🌟 Key Features
✅ **Simple & Secure Payments** – Integrated with **Razorpay** for effortless transactions.  
✅ **User Authentication** – Secure login/signup powered by **NextAuth.js**.  
✅ **Personalized Dashboard** – Manage profile settings, payment details, and more.  
✅ **Supporter Leaderboard** – Displays top supporters to encourage more contributions.  
✅ **Fully Responsive UI** – Clean, mobile-friendly design with **Tailwind CSS 4**.  
✅ **Animated UI Elements** – Powered by **Framer Motion** for smooth animations.  

---

## 🛠 Technologies Used

| Technology       | Version  |
|-----------------|----------|
| **Next.js**     | 15.2.0   |
| **React**       | 19.0.0   |
| **Mongoose**    | 8.12.1   |
| **NextAuth.js** | 4.24.11  |
| **Razorpay**    | 2.9.6    |
| **Tailwind CSS**| 4.0.0    |
| **React Icons** | 5.5.0    |
| **React Toastify** | 11.0.5 |
| **Framer Motion** | 12.5.0 |

---

## 📂 Project Structure

```
.
├── app
│   ├── [username]        # Dynamic route for user-specific payment pages
│   ├── api               # API routes (payments, authentication, etc.)
│   ├── dashboard         # User dashboard with profile settings
│   ├── login             # Login & authentication page
│   ├── layout.js         # Main layout (Next.js 13+ app structure)
│   ├── page.js           # Homepage
│   └── ...
├── components
│   ├── CountUp.js        # Animated number counter
│   ├── Dashboard.jsx     # User dashboard UI
│   ├── Footer.jsx        # Global footer component
│   ├── Navbar.jsx        # Navigation bar
│   ├── PaymentPage.js    # Payment processing page
│   ├── SessionWrapper.js # NextAuth session wrapper
├── db                    # Database connection logic (MongoDB)
├── models                # Mongoose schemas
├── public                # Static assets (images, icons, etc.)
├── .env.local            # Environment variables (Razorpay keys, DB URI, etc.)
├── package.json          # Dependencies & scripts
└── tailwind.config.js    # Tailwind CSS configuration
```

---

## 🛠 Installation & Setup

1️⃣ **Clone the Repository**  
```bash
 git clone https://github.com/Anasmalik57/Get-Me-A-Chai
 cd Get-Me-A-Chai
```

2️⃣ **Install Dependencies**  
```bash
npm install  || npm i
```

3️⃣ **Configure Environment Variables**  
Create a `.env.local` file in the root directory and add:
```env
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/...
NEXTAUTH_SECRET=yourNextAuthSecret
NEXT_PUBLIC_URL=http://localhost:3000
RAZORPAY_KEY_ID=yourRazorpayKeyId
RAZORPAY_KEY_SECRET=yourRazorpayKeySecret
```

4️⃣ **Run the Development Server**  
```bash
npm run dev  # or yarn dev
```
Visit **[http://localhost:3000](http://localhost:3000)** in your browser.

5️⃣ **Build for Production**  
```bash
npm run build
npm start
```

---

## 📖 Usage Guide

- **Sign Up/Login**: Navigate to `/login` to create an account.
- **Dashboard Access**: Visit `/dashboard` to customize your profile and Razorpay details.
- **Receiving Support**: Share your public page URL (`/{username}`) with your audience to accept donations.
- **Checking Leaderboard**: See the top contributors and their messages under the **Supporters** tab.

---

## 🤝 Contributing

We welcome contributions! Follow these steps:

1️⃣ **Fork** this repository.  
2️⃣ Create a **feature branch**:  
   ```bash
   git checkout -b feature/new-feature
   ```
3️⃣ **Commit your changes**:  
   ```bash
   git commit -m "Add new feature"
   ```
4️⃣ **Push to your branch**:  
   ```bash
   git push origin feature/new-feature
   ```
5️⃣ **Open a Pull Request**, and let's build something great together! 🎉

---

## 📜 License

This project is licensed under the **MIT License**. Feel free to modify and use it as needed.

---

## 📬 Contact

For any queries, suggestions, or feedback:
- **Email**: [itsanas474@gmail.com](mailto:itsanas474@gmail.com)
- **GitHub**: [Anasmalik57](https://github.com/Anasmalik57)

❤️ _Thank you for using Get-Me-A-Chai! We hope it helps you earn more chai (and more time to code!)._ ☕🚀

