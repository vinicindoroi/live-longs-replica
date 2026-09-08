import { useEffect, useRef } from "react";

declare global {
  interface Window {
    trkFunnel?: { step: (name: string) => void };
  }
}

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

  // Dispara a etapa da VSL quando o usuário entra na página.
  useEffect(() => {
    window.trkFunnel?.step("etapa_vsl");
  }, []);

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


  // Revela o botão quando o VTurb dispara o autoscroll (várias formas possíveis).
  useEffect(() => {
    let done = false;
    const reveal = () => {
      if (done) return;
      done = true;
      onPitchChange(true);
    };

    const target = () =>
      document.querySelector<HTMLElement>(".smartplayer-scroll-event");

    const originalSIV = HTMLElement.prototype.scrollIntoView;
    HTMLElement.prototype.scrollIntoView = function (...args) {
      const el = target();
      if (
        this.classList.contains("smartplayer-scroll-event") ||
        (el && (this === el || this.contains(el) || el.contains(this)))
      ) {
        reveal();
      }
      return originalSIV.apply(this, args);
    };

    const originalTo = window.scrollTo;
    const originalBy = window.scrollBy;
    window.scrollTo = function (...args: unknown[]) {
      if (target()) reveal();
      return (originalTo as (...a: unknown[]) => void).apply(window, args);
    } as typeof window.scrollTo;
    window.scrollBy = function (...args: unknown[]) {
      if (target()) reveal();
      return (originalBy as (...a: unknown[]) => void).apply(window, args);
    } as typeof window.scrollBy;

    const onPlayerEvent = (e: Event) => {
      if (/scroll|pitch|cta/i.test(e.type)) reveal();
    };
    const player = document.getElementById(PLAYER_ID);
    const events = [
      "smartplayer:scroll",
      "scrollEvent",
      "scroll-event",
      "pitch",
      "showCta",
    ];
    events.forEach((t) => player?.addEventListener(t, onPlayerEvent));

    return () => {
      HTMLElement.prototype.scrollIntoView = originalSIV;
      window.scrollTo = originalTo;
      window.scrollBy = originalBy;
      events.forEach((t) => player?.removeEventListener(t, onPlayerEvent));
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
            onClick={() => window.trkFunnel?.step("sexcheckout")}
          >
            QUERO GARANTIR AGORA
          </a>
        </div>

      </section>
    </main>
  );
}
