import { useEffect, useState } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import AuthForm from "./components/AuthForm";
import Login from "./components/Login";
import Counter from "./components/Counter";
import Button from "./components/Button";

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, setUser);
  }, []);

  return <div>{user ? <Counter /> : <AuthForm />}</div>;
}
