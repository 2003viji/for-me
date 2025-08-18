import React, { useState } from "react";
import HTMLFlipBook from "react-pageflip";

const gifts = [
  "/images/bady2.jpg",
  "https://youtube.com/shorts/l4PdDtbV7hM?si=8JuOK5UfJX8cc6d3",
  "/images/bday-4.jpg",
  "/videos/Azhagai-Pookuthe.mp3",
  "/images/bday.jpg",
  "/images/my-gift.jpg",
  "/images/bday3.jfif",
  "/videos/ai.mp4",
  "/images/bday5.jpg",
  "Love you so much my love"
];

export function Surprise() {
  const [ribbonRemoved, setRibbonRemoved] = useState(false);

  return (
    <div className="book-wrapper">
      {!ribbonRemoved && (<div className="svg-container" style={{ position: "relative", display: "inline-block" }}>
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


        <div

          onClick={() => setRibbonRemoved(true)}
          style={{
            position: "absolute",
            top: "60%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "#982904",
            fontSize: "1rem",
            textAlign: "center",
            cursor: "pointer",
            fontWeight: "bold",
            lineHeight: "1.4rem",
          }}
        >
          🧡 “என்னை தாண்டி<br /> என் இதயதிர்க்குள் பார்<br /> உனக்கான இவளின் பரிசை…” 🧡
        </div>

      </div>)}


      {ribbonRemoved && (
        <div className="book-frame">
          {/* Decorative SVG book background */}
          <svg className="book-svg" viewBox="0 0 600 450" preserveAspectRatio="none">
            <rect x="5" y="5" width="290" height="440" rx="15" ry="15" fill="#dc8b70" stroke="#dc8b70" strokeWidth="5" />
            <rect x="305" y="5" width="290" height="440" rx="15" ry="15" fill="#dc8b70" stroke="#dc8b70" strokeWidth="5" />
            <rect x="295" y="5" width="10" height="440" fill="#dc8b70" />
          </svg>

          <HTMLFlipBook
            width={290}
            height={400}
            size="stretch"
            style={{}}
            minWidth={0}
            maxWidth={0}
            minHeight={0}
            maxHeight={0}
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
              <p>உயிர் பெற்ற நாளில்<br /> உன் உயிரில் கலந்தவளின்<br /> பரிசு...</p>
            </div>

            {gifts.map((gift, i) => (
              <div key={i} className="page inner">
                {(() => {
                  switch (i) {
                    case 0:
                    case 2:
                    case 4:
                    case 6:
                    case 8:
                      // Images as background
                      return (
                        <div
                          style={{
                            width: "100%",
                            height: "100%",
                            backgroundImage: `url(${gift})`,
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            borderRadius: "8px",
                          }}
                        ></div>
                      );

                    case 1:
                      // Video
                      return (
                        <iframe
                          width="100%"
                          height="100%"
                          src="https://www.youtube.com/embed/l4PdDtbV7hM"
                          title="YouTube Shorts"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                          style={{ borderRadius: "8px" }}
                        ></iframe>

                      );

                    case 3:
                      // Audio
                      return (
                        <div className="we-cover" style={{ height: "100%" }}>
                          <audio
                            src={gift}
                            controls
                            style={{ width: "80%", marginTop: "50%" }}
                          />
                        </div>

                      );

                    case 5:
                      return (
                        <div
                          style={{
                            width: "100%",
                            height: "100%",
                            backgroundImage: `url(${gift})`,
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            borderRadius: "8px",
                          }}
                        ></div>
                      );
                    case 7:
                      // Text
                      return  <iframe
                          width="100%"
                          height="100%"
                          src={gift}
                          title="YouTube Shorts"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                          style={{ borderRadius: "8px" }}
                        ></iframe>
                    case 9:
                      return <div className="page final-cover" style={{ height: "100%" }}>
                        <p>என் காதலின் காதலுக்கு, <br />காற்றாகிய காதலின் <br />பிறந்தநாள் வாழ்த்துக்கள்...</p>
                      </div>

                    default:
                      return null;
                  }
                })()}
              </div>
            ))}



            <div className="page end">
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundImage: `url("/images/bday-6.jpg")`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "8px",
                }}
              ></div>
            </div>
          </HTMLFlipBook>
        </div>
      )}
    </div>
  );
}
