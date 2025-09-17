import { useEffect, useState, useRef } from "react";
import ClickPrompt from "./ClickPrompt";
import { db, auth } from "../firebase";
import { ref, get, set, update, onValue } from "firebase/database";
import { signOut } from "firebase/auth";
import confetti from "canvas-confetti";
import buttonImage from '../assets/button2.png';

export default function Button() {
  const [count, setCount] = useState(0);
  const [leaderboard, setLeaderboard] = useState([]);
  const [clicksVisual, setClicksVisual] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [userClicks, setUserClicks] = useState(0);
  const [username, setUsername] = useState("");
  const [showAchievement, setShowAchievement] = useState(false);
  const [achievementMsg, setAchievementMsg] = useState("");
  const lastMilestoneRef = useRef(0);
  const lastUserMilestoneRef = useRef(0);

  useEffect(() => {
    const counterRef = ref(db, "counter");
    onValue(counterRef, (snap) => {
      const newCount = snap.val() ?? 0;
      setCount(newCount);
      if (newCount > 0) {
        const milestone = Math.floor(newCount / 100);
        if (milestone > 0 && milestone !== lastMilestoneRef.current) {
          triggerConfetti();
          lastMilestoneRef.current = milestone;
        }
      }
    });

    const usersRef = ref(db, "users");
    onValue(usersRef, (snap) => {
      const data = snap.val() || {};
      const sorted = Object.values(data)
        .sort((a, b) => b.clicks - a.clicks)
        .slice(0, 10);
      setLeaderboard(sorted);
    });

    const userRef = ref(db, `users/${auth.currentUser.uid}`);
    onValue(userRef, (snap) => {
      if (snap.exists()) {
        const data = snap.val();
        const clicks = data.clicks || 0;
        setUserClicks(clicks);
        setUsername(data.username || "");
        const userMilestone = Math.floor(clicks / 100);
        if (userMilestone > 0 && userMilestone !== lastUserMilestoneRef.current) {
          setAchievementMsg(`Yayyy!! You have wasted ${userMilestone} minute${userMilestone > 1 ? 's' : ''} here!!!!`);
          setShowAchievement(true);
          lastUserMilestoneRef.current = userMilestone;
          setTimeout(() => setShowAchievement(false), 3500);
        }
      }
    });
  }, []);

  const triggerConfetti = () => {
    confetti({ particleCount: 200, spread: 70, origin: { y: 0.6 } });
    setTimeout(() => {
      confetti({ particleCount: 100, spread: 50, origin: { x: 0 } });
      confetti({ particleCount: 100, spread: 50, origin: { x: 1 } });
    }, 500);
  };

  const handleClick = async () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 150);

    const counterRef = ref(db, "counter");
    const counterSnap = await get(counterRef);
    set(counterRef, (counterSnap.val() ?? 0) + 1);

    const userRef = ref(db, `users/${auth.currentUser.uid}`);
    const userSnap = await get(userRef);
    update(userRef, { clicks: (userSnap.val().clicks ?? 0) + 1 });

    const id = Date.now();
    setClicksVisual((prev) => [...prev, id]);
    setTimeout(() => setClicksVisual((prev) => prev.filter((item) => item !== id)), 800);
  };

  return (
    <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-3 md:grid-rows-1 h-screen relative">
        {/* Achievement notification */}
      {showAchievement && (
        <div className="fixed top-8 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-200 to-blue-400 text-slate-800 font-bold text-lg px-6 py-3 rounded-xl shadow-lg border-2 border-blue-100 animate-bounce z-50">
          {achievementMsg}
        </div>
      )}
      <div></div>

      {/* Main button section */}
      <div className="flex-1 flex flex-col items-center justify-around relative">
        <h1 className="text-5xl font-bold">The Global Count</h1>
        <div className="flex flex-col items-center mb-50">
            <h1 className="text-5xl font-extrabold my-2">{count}</h1>
            <div className="text-white mb-4">
            {count > 0 && count % 100 !== 0
                ? `${100 - (count % 100)} clicks to next milestone!`
                : `You're at a milestone!`}
            </div>

            <div className="relative">
            <img
                src={buttonImage}
                alt="Infinity Button"
                className={`w-40 md:w-60 lg:w-80 h-auto cursor-pointer transition-transform ${clicked ? "scale-90" : "scale-100"}`}
                onClick={handleClick}
            />
            </div>

            {clicksVisual.map((id) => (
            <div key={id} className="absolute text-xl font-bold text-blue-500 animate-bounce">
                +1
            </div>
            ))}`
        </div>

        <div className="absolute bottom-6 text-center w-full text-lg font-semibold">
          👤 {username}: {userClicks} clicks
        </div>
      </div>
      {/* Leaderboard */}
      <div className="w-full h-auto p-4 md:p-6 flex flex-col justify-center items-center">
        <div className="bg-white w-100 flex flex-col justify-center items-center rounded-3xl shadow-2xl">
        <h2 className="text-2xl font-bold mb-6 mt-4">🏆 Top 10</h2>
            <table className="w-90 text-sm lg:text-2xl items-center mb-5">
            <thead>
                <tr className="border-b">
                <th className="py-1">#</th>
                <th className="py-1">User</th>
                <th className="py-1">Clicks</th>
                </tr>
            </thead>
            <tbody>
                {leaderboard.map((u, i) => (
                <tr key={i} className="border-b last:border-0">
                    <td className="text-center py-1">{i + 1}</td>
                    <td className="text-center py-1">{u.username}</td>
                    <td className="text-center py-1">{u.clicks}</td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
        <button
          className="absolute top-4 right-4 px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600"
          onClick={() => signOut(auth)}
        >
          Logout
        </button>
      </div>

      {/* ClickPrompt spam on the left */}
      <div className="hidden md:flex flex-col gap-4 absolute top-[15vh] text-7xl ml-10">
        <ClickPrompt text={"CLICK!"} fontSize="text-5xl" />
        <ClickPrompt text={"CLICK!"} fontSize="text-5xl" />
        <ClickPrompt text={"CLICK!"} fontSize="text-5xl" />
        <ClickPrompt text={"CLICK!"} fontSize="text-5xl" />
        <ClickPrompt text={"CLICK!"} fontSize="text-5xl" />
      </div>
    </div>
  );
}
