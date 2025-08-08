import { useEffect, useState } from "react";
import "../styles.css";

export default function ClickPrompt({ text = "Click the button to start counting!", fontSize = "1.3rem" }) {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let typingTimeout;
    if (index < text.length) {
      typingTimeout = setTimeout(() => {
        setDisplayed(text.slice(0, index + 1));
        setIndex(index + 1);
      }, 45);
    } else {
      // Pause, then restart
      typingTimeout = setTimeout(() => {
        setDisplayed("");
        setIndex(0);
      }, 1200);
    }
    return () => clearTimeout(typingTimeout);
  }, [index, text]);

  return (
    <div className="clickprompt" style={{ fontSize, minHeight: fontSize, lineHeight: 1.1 }}>
      {displayed}
      <span style={{
        display: 'inline-block',
        width: '1ch',
        animation: 'blink-caret 1.5s step-end infinite',
        height: '1em',
        verticalAlign: 'bottom'
      }}></span>
    </div>
  );
}
