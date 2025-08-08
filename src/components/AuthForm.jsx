import { useState } from "react";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database";
import buttonImage from '../assets/button3.png';

export default function AuthForm() {
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
    <div style={{ display: 'flex', alignItems: 'stretch', justifyContent: 'center', minHeight: '100vh', background: 'none' }}>
      <div className="loginform" style={{ flex: '1 1 380px', maxWidth: 420, zIndex: 2 }}>
        <h1>{isLogin ? "Login" : "Register"}</h1>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <input
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          )}
          <br />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />
          <button type="submit">{isLogin ? "Login" : "Register"}</button>
        </form>
        <button onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Need an account? Register" : "Have an account? Login"}
        </button>
      </div>
      <div class = "logoblock">
        <img 
          src={buttonImage}
          alt="Infinity Button Logo" 
          style={{ maxWidth: 320, width: '80%', height: 'auto', borderRadius: 24, boxShadow: '0 4px 24px 0 rgba(80,120,180,0.10)' }}
        />
        <h1>THE INFINITY BUTTON</h1>
        <h2>A Useless Project Initiative</h2>
      </div>
    </div>
  );
}
