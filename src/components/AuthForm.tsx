import { useState } from "react";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database";
import buttonImage from "../assets/button3.png";

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
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
    } catch (err: any) {
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-stretch justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Login Form Section */}
      <div className="flex-1 max-w-md lg:max-w-lg xl:max-w-xl mx-auto lg:mx-0 z-10 p-6 lg:p-8">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20">
          <h1 className="text-3xl lg:text-4xl font-bold text-white text-center mb-8">
            {isLogin ? "Login" : "Register"}
          </h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLogin && (
              <input
                className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            )}
            
            <input
              type="email"
              className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            
            <input
              type="password"
              className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            
            <button 
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              {isLogin ? "Login" : "Register"}
            </button>
          </form>
          
          <button 
            onClick={() => setIsLogin(!isLogin)}
            className="w-full mt-4 py-2 text-white/80 hover:text-white font-medium transition-colors duration-200"
          >
            {isLogin ? "Need an account? Register" : "Have an account? Login"}
          </button>
        </div>
      </div>

      {/* Logo Section */}
      <div className="flex-1 flex flex-col w-full items-center justify-center p-6 lg:p-8 text-center">
        <div className="max-w-sm lg:max-w-md xl:max-w-lg">
          <img 
            src={buttonImage}
            alt="Infinity Button Logo" 
            className="w-full h-auto rounded-3xl mb-6 lg:mb-8 transform hover:scale-105 transition-transform duration-300"
          />
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-2 lg:mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
            THE INFINITY BUTTON
          </h1>
          <h2 className="text-lg lg:text-xl xl:text-2xl text-white/80 font-medium">
            A Useless Project Initiative
          </h2>
        </div>
      </div>
    </div>
  );
}