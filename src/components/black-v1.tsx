import { createElement, useEffect, useRef } from "react";

const PLAYER_ID = "vid-6aa026b8d4e4aae90635f4e4";
const PLAYER_SCRIPT =
  "https://scripts.converteai.net/2223d7db-1826-46ab-bf08-708ee5b93e74/players/6aa026b8d4e4aae90635f4e4/v4/player.js";

const PITCH_DELAY_MS = 8 * 60 * 1000;

export function BlackV1({
  pitchVisible,
  onPitchChange,
}: {
  pitchVisible: boolean;
  onPitchChange: (v: boolean) => void;
}) {
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (document.getElementById("vturb-player-script")) return;

    const script = document.createElement("script");
    script.id = "vturb-player-script";
    script.src = PLAYER_SCRIPT;
    script.async = true;
    document.head.appendChild(script);
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => onPitchChange(true), PITCH_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, [onPitchChange]);

  // Revela o botão assim que o VTurb tentar rolar até ele (autoscroll).
  useEffect(() => {
    const el = ctaRef.current;
    if (!el) return;

    const original = el.scrollIntoView.bind(el);
    el.scrollIntoView = ((...args: unknown[]) => {
      onPitchChange(true);
      return (original as (...a: unknown[]) => void)(...args);
    }) as typeof el.scrollIntoView;

    return () => {
      delete (el as unknown as { scrollIntoView?: unknown }).scrollIntoView;
    };
  }, [onPitchChange]);


  return (
    <main className="page-shell">
      <section className="content">
        <h1>
          FAÇA <span>ELA G@Z4R</span> EM MENOS DE 5 MINUTOS
        </h1>

        <p>Assista até o final antes que esse vídeo saia do ar. 🔞</p>

        <div className="player-wrap">
          {createElement(
            "vturb-smartplayer",
            {
              id: PLAYER_ID,
              style: {
                display: "block",
                margin: "0 auto",
                width: "100%",
                maxWidth: "var(--player-vertical-width, 400px)",
                aspectRatio: "9 / 16",
              },
            },
            <div slot="preload" className="player-preload" key="preload">
              <div
                id="loading_6aa026b8d4e4aae90635f4e4"
                className="player-loading"
              >
                <div className="player-spinner" />
                <div className="player-percentage">99%</div>
              </div>
            </div>,
          )}
        </div>

        {pitchVisible && (
          <a
            className="pitch-cta"
            href="https://livelong.vita-protocol.online/acesso"
            target="_blank"
            rel="noopener noreferrer"
          >
            QUERO GARANTIR AGORA
          </a>
        )}
      </section>
    </main>
  );
}
