import { useEffect, useState, useRef } from "react";
import ClickPrompt from "./ClickPrompt";
import { db, auth } from "../firebase";
import { ref, get, set, update, onValue } from "firebase/database";
import { signOut } from "firebase/auth";
import confetti from "canvas-confetti";
import "../styles.css";


export default function Counter() {
  const [count, setCount] = useState(0);
  const [leaderboard, setLeaderboard] = useState([]);
  const [clicksVisual, setClicksVisual] = useState([]);
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

    const userRef = ref(db, `users/${auth.currentUser.uid}`);
    const userSnap = await get(userRef);
    update(userRef, { clicks: (userSnap.val().clicks ?? 0) + 1 });

    const id = Date.now();
    setClicksVisual((prev) => [...prev, id]);
    setTimeout(() => setClicksVisual((prev) => prev.filter((item) => item !== id)), 800);
  };

  return (
    <div style={{ display: "flex", height: "100vh", position: "relative" }}>
      {/* Achievement notification */}
      {showAchievement && (
        <div style={{
          position: "fixed",
          top: 32,
          left: "50%",
          transform: "translateX(-50%)",
          background: "linear-gradient(90deg, #b6c6e6 0%, #7ba7e0 100%)",
          color: "#213547",
          fontWeight: 700,
          fontSize: "1.25rem",
          padding: "16px 36px",
          borderRadius: 16,
          boxShadow: "0 4px 24px 0 rgba(120,160,200,0.13)",
          zIndex: 9999,
          letterSpacing: 1,
          fontFamily: "'Comic Sans MS', 'Comic Sans', 'Chalkboard SE', 'Comic Neue', cursive, sans-serif",
          border: "2.5px solid #dbeafe",
          animation: "bounceIn 0.7s cubic-bezier(.68,-0.55,.27,1.55)"
        }}>
          {achievementMsg}
        </div>
      )}
      {/* Leaderboard on the right */}
      <div class = "leaderboard">
        <h2>🏆 Top 10</h2>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ padding: "5px" }}>#</th>
              <th style={{ padding: "5px" }}>User</th>
              <th style={{ padding: "5px" }}>Clicks</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map((u, i) => (
              <tr key={i}>
                <td style={{ padding: "5px" }}>{i + 1}</td>
                <td style={{ padding: "5px" }}>{u.username}</td>
                <td style={{ padding: "5px" }}>{u.clicks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Button in the center */}
      <div class = "centreblock">
        <h1>The Global Count</h1>

        <h1 style={{ fontSize: "3rem", marginBottom: "10px" }}>{count}</h1>
        <div style={{ fontSize: "1.1rem", color: "white", marginBottom: "18px" }}>
          {count > 0 && count % 100 !== 0
            ? `${100 - (count % 100)} clicks to next milestone!`
            : `You're at a milestone!`}
        </div>

        <div className="button-container">
          <img
            src="/button2.png"
            alt="Infinity Button"
            className={`infinity-button ${clicked ? "clicked" : ""}`}
            onClick={handleClick}
          />
        </div>

        {/* Floating +1 effect */}
        {clicksVisual.map((id) => (
          <div
            key={id}
            className="plus-one-anim"
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              pointerEvents: "none",
              zIndex: 10
            }}
          >
            +1
          </div>
        ))}

        {/* Logged-in user click count at the bottom */}
        <div style={{
          position: "absolute",
          bottom: "20px",
          textAlign: "center",
          width: "100%",
          fontSize: "1.2rem",
          fontWeight: "bold"
        }}>
          👤 {username}: {userClicks} clicks
        </div>

        <button class = "logout-button" onClick={() => signOut(auth)}>
          Logout
        </button>
      </div>
      <div style={{ position: 'fixed', left: 50, top: '15vh', zIndex: 20, display: 'flex', flexDirection: 'column', gap: '18px' }}>
        <ClickPrompt text={"CLICK!"} fontSize="5rem" />
        <ClickPrompt text={"CLICK!"} fontSize="5rem" />
        <ClickPrompt text={"CLICK!"} fontSize="5rem" />
        <ClickPrompt text={"CLICK!"} fontSize="5rem" />
        <ClickPrompt text={"CLICK!"} fontSize="5rem" />
      </div>
    </div>
  );
}
