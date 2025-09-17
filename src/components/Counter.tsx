import { useEffect, useState, useRef } from "react";
import ClickPrompt from "./ClickPrompt";
import { db, auth } from "../firebase";
import { ref, get, set, update, onValue } from "firebase/database";
import { signOut } from "firebase/auth";
import confetti from "canvas-confetti";
import buttonImage from "../assets/button2.png";

interface User {
  username: string;
  clicks: number;
}

export default function Counter() {
  const [count, setCount] = useState(0);
  const [leaderboard, setLeaderboard] = useState<User[]>([]);
  const [clicksVisual, setClicksVisual] = useState<number[]>([]);
  const [clicked, setClicked] = useState(false);
  const [userClicks, setUserClicks] = useState(0);
  const [username, setUsername] = useState("");
  const [showAchievement, setShowAchievement] = useState(false);
  const [achievementMsg, setAchievementMsg] = useState("");

  // Track last milestone to avoid duplicate/confetti skips
  const lastMilestoneRef = useRef(0);
  // Track last user milestone for achievement notification
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
      const sorted = Object.values(data) as User[];
      const sortedData = sorted
        .sort((a, b) => b.clicks - a.clicks)
        .slice(0, 10);
      setLeaderboard(sortedData);
    });

    const userRef = ref(db, `users/${auth.currentUser?.uid}`);
    onValue(userRef, (snap) => {
      if (snap.exists()) {
        const data = snap.val();
        const clicks = data.clicks || 0;
        setUserClicks(clicks);
        setUsername(data.username || "");
        // Achievement notification for user
        if (clicks > 0) {
          const userMilestone = Math.floor(clicks / 100);
          if (userMilestone > 0 && userMilestone !== lastUserMilestoneRef.current) {
            setAchievementMsg(`Yayyy!! You have wasted ${userMilestone} minute${userMilestone > 1 ? 's' : ''} here!!!!`);
            setShowAchievement(true);
            lastUserMilestoneRef.current = userMilestone;
            setTimeout(() => setShowAchievement(false), 3500);
          }
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

    const userRef = ref(db, `users/${auth.currentUser?.uid}`);
    const userSnap = await get(userRef);
    update(userRef, { clicks: (userSnap.val().clicks ?? 0) + 1 });

    const id = Date.now();
    setClicksVisual((prev) => [...prev, id]);
    setTimeout(() => setClicksVisual((prev) => prev.filter((item) => item !== id)), 800);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex flex-col lg:flex-row relative overflow-hidden">
      {/* Achievement notification */}
      {showAchievement && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-200 to-blue-300 text-slate-800 font-bold text-base md:text-lg px-6 md:px-9 py-3 md:py-4 rounded-2xl shadow-2xl z-50 border-2 border-blue-100 animate-bounce">
          {achievementMsg}
        </div>
      )}

      {/* Side Click Prompts - Hidden on mobile */}
      <div className="hidden xl:flex fixed left-6 top-1/4 z-20 flex-col gap-4 text-7xl text-white">
        <ClickPrompt text="CLICK!" fontSize="text-6xl" />
        <ClickPrompt text="CLICK!" fontSize="text-6xl" />
        <ClickPrompt text="CLICK!" fontSize="text-6xl" />
        <ClickPrompt text="CLICK!" fontSize="text-6xl" />
        <ClickPrompt text="CLICK!" fontSize="text-6xl" />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col items-center justify-center relative px-4 py-8 lg:py-0">
        {/* Mobile Click Prompts */}
        <div className="xl:hidden mb-6">
          <ClickPrompt text="CLICK!" fontSize="text-3xl md:text-4xl" />
        </div>

        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 text-center">
          The Global Count
        </h1>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-2 md:mb-4 text-center">
          {count}
        </h1>
        
        <div className="text-sm md:text-base lg:text-lg text-white/90 mb-6 md:mb-8 text-center px-4">
          {count > 0 && count % 100 !== 0
            ? `${100 - (count % 100)} clicks to next milestone!`
            : `You're at a milestone!`}
        </div>

        {/* Button Container */}
        <div className="relative mb-8 lg:mb-0">
          <img
            src={buttonImage}
            alt="Infinity Button"
            className={`w-32 h-auto md:w-40 lg:w-48 xl:w-56 cursor-pointer hover:scale-105 transition-all duration-150 rounded-full shadow-2xl ${
              clicked ? "scale-95 shadow-lg" : ""
            }`}
            onClick={handleClick}
          />

          {/* Floating +1 effects */}
          {clicksVisual.map((id) => (
            <div
              key={id}
              className="absolute left-1/2 transform -translate-x-1/2 pointer-events-none z-10 text-2xl font-bold text-yellow-300 animate-ping"
              style={{
                animation: "float-up 0.8s ease-out forwards"
              }}
            >
              +1
            </div>
          ))}
        </div>

        {/* User Stats - Fixed at bottom on large screens */}
        <div className="lg:absolute lg:bottom-6 lg:left-1/2 lg:transform lg:-translate-x-1/2 text-center">
          <div className="text-lg md:text-xl font-bold text-white bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
            👤 {username}: {userClicks} clicks
          </div>
        </div>

        {/* Logout Button */}
        <button 
          className="lg:absolute lg:top-6 lg:right-6 mt-6 lg:mt-0 px-4 py-2 bg-red-500/80 hover:bg-red-600/80 text-white font-semibold rounded-lg backdrop-blur-sm border border-red-400/30 hover:border-red-300/50 transition-all duration-200"
          onClick={() => signOut(auth)}
        >
          Logout
        </button>
      </div>

      {/* Leaderboard */}
      <div className="w-full lg:w-80 xl:w-96 bg-white/10 backdrop-blur-lg border-t lg:border-t-0 lg:border-l border-white/20 p-4 lg:p-6">
        <h2 className="text-xl md:text-2xl font-bold text-white mb-4 text-center lg:text-left">
          🏆 Top 10
        </h2>
        
        <div className="bg-white/5 rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-white/10">
              <tr>
                <th className="px-3 py-2 text-left text-white/80 font-semibold text-sm">#</th>
                <th className="px-3 py-2 text-left text-white/80 font-semibold text-sm">User</th>
                <th className="px-3 py-2 text-left text-white/80 font-semibold text-sm">Clicks</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.map((user, index) => (
                <tr key={index} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                  <td className="px-3 py-2 text-white/90 text-sm font-medium">
                    {index + 1}
                  </td>
                  <td className="px-3 py-2 text-white/90 text-sm font-medium truncate max-w-24">
                    {user.username}
                  </td>
                  <td className="px-3 py-2 text-white/90 text-sm font-bold">
                    {user.clicks}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-up {
          0% {
            transform: translateY(0) translateX(-50%);
            opacity: 1;
          }
          100% {
            transform: translateY(-60px) translateX(-50%);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}