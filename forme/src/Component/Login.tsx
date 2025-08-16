import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Login() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (password.trim() === "A") {
      navigate("/surprise");
    } else {
      setError("தவறான சாவி 💔 மீண்டும் முயற்சி செய்");
    }
  };

  return (
    <div className="login-container">
      <div className="quote">
  <span>“இரு இதயங்கள் சேர்ந்து ஒன்றாகும் நொடி, இதய கூடு திறக்கும் ...”</span> 
</div>


      <div className="heart-shell" aria-label="heart lock">
        {/* Heart (SVG) */}
        <svg className="heart" viewBox="0 0 200 180" aria-hidden="true">
          {/* Smooth, symmetric heart path */}
          <path
            d="M100,170
               C 20,110 20,55 60,42
               C 80,36 100,56 100,72
               C 100,56 120,36 140,42
               C 180,55 180,110 100,170 Z"
            fill="#e58c6e"
          />
        </svg>

        {/* Key input */}
        <input
          className="key-input"
          type="password"
          
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button className="btn" onClick={handleLogin}>திறக்க</button>
      {error && <p className="error">{error}</p>}
    </div>
  );
}
