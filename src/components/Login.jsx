import { useState } from "react";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database";
import buttonImage from '../assets/button3.png';
import { motion } from "framer-motion";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        const userCred = await createUserWithEmailAndPassword(auth, email, password);
        await set(ref(db, "users/" + userCred.user.uid), {
          username,
          clicks: 0
        });
      }
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-around max-w-screen min-h-screen lg:gap-10 px-4">
      <motion.div className="flex-1 max-w-lg mt-30 mb-50 lg:mt-0 lg:mb-0 p-6 border border-white bg-gradient-to-br from-white to-gray-300 rounded-3xl shadow-2xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}>
        <h1 className="text-2xl text-black font-bold text-center mb-6">{isLogin ? "Login" : "Register"}</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <input
              className="w-full bg-white px-4 py-2 border rounded-lg shadow-2xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          )}
          <input
            type="email"
            className="w-full bg-white px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="w-full bg-white px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
            {isLogin ? "Login" : "Register"}
          </button>
        </form>
        <button
          onClick={() => setIsLogin(!isLogin)}
          className="mt-4 w-full text-lg text-blue-900 hover:underline"
        >
          {isLogin ? "Need an account? Register" : "Have an account? Login"}
        </button>
      </motion.div>

      <div className="flex flex-col items-center text-center w-1/2 mb-80 lg:mb-0">
        <motion.img
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          src={buttonImage}
          alt="Infinity Button Logo"
          className="w-4/5 max-w-xs rounded-2xl"
        />
        <motion.h1 className="text-5xl font-bold mt-4"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}>THE INFINITY BUTTON</motion.h1>
        <motion.h2 className="text-2xl text-gray-600"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}>A Useless Project Initiative</motion.h2>
      </div>
    </div>
  );
}
