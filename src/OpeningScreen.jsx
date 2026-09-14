import { useEffect, useState } from "react";

export default function OpeningScreen({
  groom = "Pankaj Sharma",
  bride = "Mamta Sharma",
  date = "10 • 12 • 2026",
  location = "Noida, Delhi NCR",
  onOpen,
}) {
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    // Hide browser scrollbar while the cover is open.
    const html = document.documentElement;
    const body = document.body;

    const oldHtmlOverflow = html.style.overflow;
    const oldBodyOverflow = body.style.overflow;

    html.style.overflow = "hidden";
    body.style.overflow = "hidden";

    return () => {
      html.style.overflow = oldHtmlOverflow;
      body.style.overflow = oldBodyOverflow;
    };
  }, []);

  const openInvitation = () => {
    if (closing) return;

    setClosing(true);

    // The cover animation is 720ms.
    window.setTimeout(() => {
      onOpen?.();
    }, 720);
  };

  return (
    <>
      <style>{`
        .wedding-opening {
          --maroon: #4A0E17;
          --crimson: #6B111D;
          --crimson-dark: #32070D;
          --gold: #D4AF37;
          --gold-light: #F3E5AB;

          position: fixed;
          inset: 0;
          width: 100%;
          height: 100vh;
          height: 100dvh;
          z-index: 999999;

          display: flex;
          align-items: center;
          justify-content: center;

          overflow: hidden;
          isolation: isolate;

          background:
            radial-gradient(
              circle at 50% 42%,
              rgba(126, 35, 57, 0.58) 0%,
              rgba(107, 17, 29, 0.46) 30%,
              rgba(50, 7, 13, 0.97) 100%
            ),
            linear-gradient(
              135deg,
              var(--crimson-dark),
              var(--maroon)
            );

          color: #FFFDF9;
          text-align: center;

          /*
            The whole cover moves upward.
            This is deliberately NOT an opacity-only transition.
          */
          transform: translate3d(0, 0, 0);
          transition:
            transform 720ms cubic-bezier(0.76, 0, 0.24, 1),
            opacity 120ms ease 620ms;

          will-change: transform;
        }

        .wedding-opening.is-closing {
          transform: translate3d(0, -105%, 0);
          opacity: 0;
          pointer-events: none;
        }

        /* Fine royal texture */
        .wedding-opening::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: -2;
          pointer-events: none;

          opacity: 0.14;

          background-image:
            radial-gradient(
              rgba(212, 175, 55, 0.8) 0.55px,
              transparent 0.55px
            );

          background-size: 25px 25px;
        }

        /* Inner gold frame */
        .wedding-opening::after {
          content: "";
          position: absolute;
          inset: 2.5%;
          z-index: -1;
          pointer-events: none;

          border: 1px solid rgba(212, 175, 55, 0.28);
        }

        .opening-glow {
          position: absolute;
          width: min(75vw, 720px);
          height: min(75vw, 720px);
          border-radius: 50%;

          background:
            radial-gradient(
              circle,
              rgba(212, 175, 55, 0.09) 0%,
              rgba(212, 175, 55, 0.025) 40%,
              transparent 70%
            );

          pointer-events: none;
        }

        /* Decorative corner lines */
        .opening-corner {
          position: absolute;
          width: 115px;
          height: 115px;

          border-color: rgba(212, 175, 55, 0.38);
          border-style: solid;
          pointer-events: none;
        }

        .opening-corner--tl {
          top: 28px;
          left: 28px;
          border-width: 1px 0 0 1px;
        }

        .opening-corner--tr {
          top: 28px;
          right: 28px;
          border-width: 1px 1px 0 0;
        }

        .opening-corner--bl {
          bottom: 28px;
          left: 28px;
          border-width: 0 0 1px 1px;
        }

        .opening-corner--br {
          right: 28px;
          bottom: 28px;
          border-width: 0 1px 1px 0;
        }

        .opening-content {
          position: relative;
          z-index: 2;

          width: min(92%, 680px);

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          padding: 35px 20px 75px;
        }

        /*
          IMPORTANT:
          The SVG has ONLY the rotation animation.
          Its opacity/scale entrance is handled by its parent shell,
          so both animations never fight over transform.
        */
        .opening-mandala-shell {
          width: clamp(105px, 18vw, 145px);
          height: clamp(105px, 18vw, 145px);

          margin-bottom: clamp(26px, 5vh, 48px);

          opacity: 0;
          transform: scale(0.72);

          animation:
            openingMandalaAppear 900ms ease 50ms forwards;
        }

        .opening-mandala {
          display: block;
          width: 100%;
          height: 100%;

          transform-origin: 50% 50%;

          animation:
            openingMandalaSpin 24s linear infinite;

          filter:
            drop-shadow(0 0 10px rgba(212, 175, 55, 0.13));

          will-change: transform;
        }

        @keyframes openingMandalaSpin {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        @keyframes openingMandalaAppear {
          from {
            opacity: 0;
            transform: scale(0.72);
          }

          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .opening-kicker,
        .opening-greeting,
        .opening-names,
        .opening-divider,
        .opening-date,
        .opening-location,
        .opening-button,
        .opening-footer {
          animation-name: openingTextUp;
          animation-duration: 900ms;
          animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
          animation-fill-mode: both;
        }

        .opening-kicker {
          margin: 0 0 12px;

          color: rgba(243, 229, 171, 0.72);

          font-family: "Montserrat", sans-serif;
          font-size: clamp(0.62rem, 1.5vw, 0.78rem);
          font-weight: 500;

          letter-spacing: 0.34em;
          line-height: 1.5;

          text-transform: uppercase;

          animation-delay: 180ms;
        }

        .opening-greeting {
          margin: 0 0 clamp(24px, 4vh, 40px);

          color: var(--gold);

          font-family: "Cormorant Garamond", serif;
          font-size: clamp(1.15rem, 3vw, 1.55rem);
          font-weight: 500;

          letter-spacing: 0.08em;

          animation-delay: 300ms;
        }

        .opening-names {
          margin: 0;

          display: flex;
          flex-direction: column;
          align-items: center;

          color: var(--gold);

          font-family: "Cormorant Garamond", serif;
          font-size: clamp(3.2rem, 9vw, 5.1rem);
          font-weight: 500;

          letter-spacing: 0.025em;
          line-height: 0.88;

          text-shadow:
            0 4px 22px rgba(0, 0, 0, 0.18);

          animation-delay: 420ms;
        }

        .opening-ampersand {
          margin: clamp(13px, 2.2vh, 22px) 0;

          color: var(--gold-light);

          font-family: "Cormorant Garamond", serif;
          font-size: clamp(2.25rem, 6vw, 3.4rem);
          font-style: italic;
          line-height: 0.8;
        }

        .opening-divider {
          display: flex;
          align-items: center;

          width: min(90%, 330px);

          margin: clamp(24px, 4vh, 38px) 0 18px;

          animation-delay: 560ms;
        }

        .opening-divider::before,
        .opening-divider::after {
          content: "";

          flex: 1;
          height: 1px;

          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(212, 175, 55, 0.58)
            );
        }

        .opening-divider::after {
          background:
            linear-gradient(
              90deg,
              rgba(212, 175, 55, 0.58),
              transparent
            );
        }

        .opening-divider-dot {
          width: 6px;
          height: 6px;

          margin: 0 12px;

          border: 1px solid var(--gold);

          background: var(--crimson);

          transform: rotate(45deg);
        }

        .opening-date {
          margin: 0;

          color: var(--gold-light);

          font-family: "Cormorant Garamond", serif;
          font-size: clamp(1rem, 2.8vw, 1.3rem);

          letter-spacing: 0.24em;

          animation-delay: 620ms;
        }

        .opening-location {
          margin: 8px 0 0;

          color: rgba(255, 253, 249, 0.68);

          font-family: "Montserrat", sans-serif;
          font-size: clamp(0.58rem, 1.5vw, 0.72rem);

          letter-spacing: 0.25em;
          text-transform: uppercase;

          animation-delay: 680ms;
        }

        .opening-button {
          appearance: none;

          margin-top: clamp(28px, 5vh, 48px);

          min-width: 230px;

          padding: 15px 28px;

          border: 1px solid rgba(212, 175, 55, 0.88);

          outline: none;

          background:
            linear-gradient(
              135deg,
              rgba(74, 14, 23, 0.72),
              rgba(107, 17, 29, 0.68)
            );

          color: var(--gold-light);

          font-family: "Montserrat", sans-serif;
          font-size: clamp(0.68rem, 1.8vw, 0.78rem);
          font-weight: 600;

          letter-spacing: 0.24em;
          text-transform: uppercase;

          cursor: pointer;

          box-shadow:
            0 12px 30px rgba(0, 0, 0, 0.18),
            inset 0 0 0 1px rgba(243, 229, 171, 0.06);

          transition:
            background 300ms ease,
            color 300ms ease,
            transform 300ms ease,
            box-shadow 300ms ease;

          animation-delay: 760ms;
        }

        .opening-button:hover {
          color: #ffffff;

          background:
            rgba(212, 175, 55, 0.12);

          transform: translateY(-3px);

          box-shadow:
            0 16px 35px rgba(0, 0, 0, 0.25),
            0 0 25px rgba(212, 175, 55, 0.1);
        }

        .opening-button:active {
          transform: translateY(0);
        }

        .opening-button:focus-visible {
          box-shadow:
            0 0 0 3px rgba(243, 229, 171, 0.22),
            0 0 0 5px rgba(212, 175, 55, 0.6);
        }

        .opening-button:disabled {
          cursor: default;
        }

        .opening-footer {
          position: absolute;
          left: 50%;
          bottom: clamp(18px, 3vh, 30px);

          width: 100%;

          padding: 0 24px;

          transform: translateX(-50%);

          color: rgba(243, 229, 171, 0.46);

          font-family: "Cormorant Garamond", serif;
          font-size: 0.82rem;

          letter-spacing: 0.14em;

          animation-delay: 900ms;
        }

        @keyframes openingTextUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .opening-corner {
            width: 75px;
            height: 75px;
          }

          .opening-corner--tl,
          .opening-corner--tr {
            top: 18px;
          }

          .opening-corner--bl,
          .opening-corner--br {
            bottom: 18px;
          }

          .opening-corner--tl,
          .opening-corner--bl {
            left: 18px;
          }

          .opening-corner--tr,
          .opening-corner--br {
            right: 18px;
          }

          .opening-content {
            width: 94%;
            padding-bottom: 70px;
          }
        }

        @media (max-width: 480px) {
          .wedding-opening::after {
            inset: 14px;
          }

          .opening-mandala-shell {
            margin-bottom: 24px;
          }

          .opening-kicker {
            letter-spacing: 0.25em;
          }

          .opening-greeting {
            margin-bottom: 28px;
          }

          .opening-names {
            font-size: clamp(3rem, 16vw, 4.2rem);
          }

          .opening-button {
            min-width: 205px;
            padding: 14px 22px;
          }

          .opening-footer {
            font-size: 0.7rem;
            letter-spacing: 0.1em;
          }
        }

        @media (max-height: 700px) {
          .opening-mandala-shell {
            width: 92px;
            height: 92px;
            margin-bottom: 18px;
          }

          .opening-greeting {
            margin-bottom: 20px;
          }

          .opening-names {
            font-size: clamp(2.8rem, 8vh, 4.2rem);
          }

          .opening-ampersand {
            margin: 10px 0;
          }

          .opening-divider {
            margin-top: 20px;
          }

          .opening-button {
            margin-top: 24px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .opening-mandala {
            animation: none;
          }

          .opening-mandala-shell {
            animation: none;
            opacity: 1;
            transform: scale(1);
          }

          .opening-kicker,
          .opening-greeting,
          .opening-names,
          .opening-divider,
          .opening-date,
          .opening-location,
          .opening-button,
          .opening-footer {
            animation: none;
            opacity: 1;
            transform: none;
          }

          .wedding-opening {
            transition: transform 300ms ease, opacity 100ms ease;
          }
        }
      `}</style>

      <div className={`wedding-opening ${closing ? "is-closing" : ""}`}>
        <div className="opening-glow" aria-hidden="true" />

        <div className="opening-corner opening-corner--tl" aria-hidden="true" />
        <div className="opening-corner opening-corner--tr" aria-hidden="true" />
        <div className="opening-corner opening-corner--bl" aria-hidden="true" />
        <div className="opening-corner opening-corner--br" aria-hidden="true" />

        <main className="opening-content">
          {/* The supplied mandala SVG, with continuous rotation */}
          <div className="opening-mandala-shell">
            <svg
              className="opening-mandala"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <g opacity="0.8">
                <circle
                  cx="100"
                  cy="100"
                  r="95"
                  stroke="#D4A853"
                  strokeWidth="0.5"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="88"
                  stroke="#D4A853"
                  strokeWidth="0.3"
                />

                <g stroke="#C5975B" strokeWidth="0.6" fill="none">
                  {Array.from({ length: 12 }, (_, i) => (
                    <ellipse
                      key={`outer-petal-${i}`}
                      cx="100"
                      cy="40"
                      rx="12"
                      ry="30"
                      transform={`rotate(${i * 30} 100 100)`}
                    />
                  ))}
                </g>

                <g stroke="#E8D5B0" strokeWidth="0.5" fill="none">
                  {Array.from({ length: 12 }, (_, i) => (
                    <ellipse
                      key={`inner-petal-${i}`}
                      cx="100"
                      cy="58"
                      rx="8"
                      ry="20"
                      transform={`rotate(${15 + i * 30} 100 100)`}
                    />
                  ))}
                </g>

                <circle
                  cx="100"
                  cy="100"
                  r="15"
                  stroke="#D4A853"
                  strokeWidth="0.8"
                  fill="none"
                />

                <circle
                  cx="100"
                  cy="100"
                  r="6"
                  fill="#C5975B"
                  opacity="0.4"
                />

                <g fill="#D4A853">
                  {Array.from({ length: 12 }, (_, i) => (
                    <circle
                      key={`outer-dot-${i}`}
                      cx="100"
                      cy="5"
                      r="2"
                      transform={`rotate(${i * 30} 100 100)`}
                    />
                  ))}
                </g>
              </g>
            </svg>
          </div>

          <p className="opening-kicker">
            YOU ARE CORDIALLY INVITED
          </p>

          <p className="opening-greeting">
            Dear Esteemed Guest,
          </p>

          <h1 className="opening-names">
            <span>{groom}</span>

            <span className="opening-ampersand">
              &amp;
            </span>

            <span>{bride}</span>
          </h1>

          <div className="opening-divider" aria-hidden="true">
            <span className="opening-divider-dot" />
          </div>

          <p className="opening-date">
            {date}
          </p>

          <p className="opening-location">
            {location}
          </p>

          <button
            type="button"
            className="opening-button"
            onClick={openInvitation}
            disabled={closing}
          >
            OPEN INVITATION
          </button>
        </main>

        <div className="opening-footer">
          A SACRED UNION OF TWO SOULS
        </div>
      </div>
    </>
  );
}
