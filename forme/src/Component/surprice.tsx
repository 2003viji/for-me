import React, { useState } from "react";
import HTMLFlipBook from "react-pageflip";

const gifts = [
  "",
  "🎁 Gift 1: Free Coupon",
  "",
  "🎉 Gift 2: Surprise Party",
  "",
  "💎 Gift 3: Jewelry",
  "",
  "🍫 Gift 4: Chocolate Box",
  "",
  "✈️ Gift 5: Holiday Trip"
];

export function Surprise() {
  const [ribbonRemoved, setRibbonRemoved] = useState(false);

  return (
    <div className="book-wrapper">
      <div className="svg-container" style={{ position: "relative", display: "inline-block" }}>
        <svg
       
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#eac1b3"
          width={500}
          height={500} // adjust size as needed
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M18.5 9.88501C18.5 9.88501 19 11.6111 19 14.5C19 17.3889 18.6111 19.9167 18.2222 20.2778C17.8333 20.6389 15.1111 21 12 21C8.88889 21 6.16667 20.6389 5.77778 20.2778C5.38889 19.9167 5 17.3889 5 14.5C5 11.6111 5.5 9.88501 5.5 9.88501M18.5 9.88501C18.8074 9.8683 19.0179 9.85081 19.1111 9.83333C19.5556 9.75 20 9.16667 20 8.5C20 7.83333 19.5556 7.25 19.1111 7.16667C18.6667 7.08333 15.5556 7 12 7C8.44444 7 5.33333 7.08333 4.88889 7.16667C4.44444 7.25 4 7.83333 4 8.5C4 9.16667 4.44444 9.75 4.88889 9.83333C4.98211 9.85081 5.19265 9.8683 5.5 9.88501M18.5 9.88501C17.342 9.94797 14.8098 10 12 10C9.19021 10 6.65798 9.94797 5.5 9.88501M11.8659 6.84997C12.415 4.80106 15.562 1.25185 17.0621 3.84997C18.5622 6.44821 13.915 7.39914 11.8659 6.84997ZM12.0623 6.84997C11.5132 4.80106 8.36619 1.25185 6.86617 3.84997C5.36607 6.44821 10.0132 7.39914 12.0623 6.84997Z"
              stroke="#eac1b3"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </g>
        </svg>

        {!ribbonRemoved && (
          <div
             className="ribbon"
            onClick={() => setRibbonRemoved(true)}
            style={{
              position: "absolute",
              top: "60%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "#dc8b70",
              fontSize: "1rem",
              textAlign: "center",
              cursor: "pointer",
              fontWeight: "bold",
              lineHeight: "1.4rem",
            }}
          >
            🧡 “என்னை தாண்டி<br /> என் இதயதிர்க்குள் பார்<br /> உனக்கான இவளின் பரிசை…” 🧡
          </div>
        )}
      </div>


      {ribbonRemoved && (
        <div className="book-frame">
          {/* Decorative SVG book background */}
          <svg className="book-svg" viewBox="0 0 600 450" preserveAspectRatio="none">
            <rect x="5" y="5" width="290" height="440" rx="15" ry="15" fill="#800080" stroke="#4a2e1a" strokeWidth="5" />
            <rect x="305" y="5" width="290" height="440" rx="15" ry="15" fill="#800080" stroke="#4a2e1a" strokeWidth="5" />
            <rect x="295" y="5" width="10" height="440" fill="#5a3a23" />
          </svg>

          <HTMLFlipBook
            width={300}
            height={400}
            size="stretch"
            style={{}}
            minWidth={200}
            maxWidth={400}
            minHeight={300}
            maxHeight={500}
            maxShadowOpacity={0.5}
            showCover={true}
            mobileScrollSupport={true}
            className="book"
            startPage={0}
            drawShadow={true}
            flippingTime={800}
            usePortrait={true}
            startZIndex={1}
            autoSize={true}
            clickEventForward={true}
            useMouseEvents={true}
            swipeDistance={30}
            showPageCorners={true}
            disableFlipByClick={false}
          >
            <div className="page cover">
              <h2>💖 My Surprise Book 💖</h2>
              <p>Flip the pages to see your surprises!</p>
            </div>

            {gifts.map((gift, i) => (
              <div key={i} className="page inner">
                {i % 2 == 0 ? <img src="" alt="gift" /> :
                  <h3>{gift}</h3>}
              </div>
            ))}

            <div className="page end">
              <h2>🎊 The End 🎊</h2>
              <p>Hope you enjoyed the surprises!</p>
            </div>
          </HTMLFlipBook>
        </div>
      )}
    </div>
  );
}
