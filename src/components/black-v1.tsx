import { useEffect, useRef } from "react";

const PLAYER_ID = "vid-6aa026b8d4e4aae90635f4e4";
const PLAYER_SCRIPT =
  "https://scripts.converteai.net/2223d7db-1826-46ab-bf08-708ee5b93e74/players/6aa026b8d4e4aae90635f4e4/v4/player.js";

export function BlackV1({
  pitchVisible,
  onPitchChange,
}: {
  pitchVisible: boolean;
  onPitchChange: (v: boolean) => void;
}) {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host || host.childElementCount > 0) return;

    host.innerHTML = `<vturb-smartplayer id="${PLAYER_ID}" style="display: block; margin: 0 auto; width: 100%; max-width: 400px;"><div class="vturb-player-placeholder" style="position: relative; width: 100%; padding: 178.21782178217822% 0 0; z-index: 0; background-color: black;"></div></vturb-smartplayer>`;

    const old = document.getElementById("vturb-player-script");
    if (old) old.remove();

    const script = document.createElement("script");
    script.id = "vturb-player-script";
    script.src = PLAYER_SCRIPT;
    script.async = true;
    document.head.appendChild(script);
  }, []);


  // Revela o botão somente quando o VTurb tentar rolar até o alvo.
  useEffect(() => {
    const original = HTMLElement.prototype.scrollIntoView;
    HTMLElement.prototype.scrollIntoView = function (...args) {
      if (this.classList.contains("smartplayer-scroll-event")) {
        onPitchChange(true);
      }
      return original.apply(this, args);
    };

    return () => {
      HTMLElement.prototype.scrollIntoView = original;
    };
  }, [onPitchChange]);


  return (
    <main className="page-shell">
      <section className="content">
        <h1>
          FAÇA <span>ELA G@Z4R</span> EM MENOS DE 5 MINUTOS
        </h1>

        <p>Assista até o final antes que esse vídeo saia do ar. 🔞</p>

        <div className="player-wrap" ref={hostRef} />



        <div className={`pitch-cta-guard${pitchVisible ? " pitch-cta-visible" : ""}`}>
          <a
            className="pitch-cta smartplayer-scroll-event"
            href="https://livelong.vita-protocol.online/acesso"
            target="_blank"
            rel="noopener noreferrer"
            aria-hidden={!pitchVisible}
            tabIndex={pitchVisible ? 0 : -1}
          >
            QUERO GARANTIR AGORA
          </a>
        </div>

      </section>
    </main>
  );
}
