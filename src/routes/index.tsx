import { createFileRoute } from "@tanstack/react-router";
import { createElement, useEffect, useState } from "react";

const PLAYER_ID = "vid-6aa026b8d4e4aae90635f4e4";
const PLAYER_SCRIPT =
  "https://scripts.converteai.net/2223d7db-1826-46ab-bf08-708ee5b93e74/players/6aa026b8d4e4aae90635f4e4/v4/player.js";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VendaExpress | Apresentação" },
      { name: "description", content: "Confira nossa apresentação exclusiva." },
      { property: "og:title", content: "VendaExpress | Apresentação" },
      {
        property: "og:description",
        content: "Confira nossa apresentação exclusiva.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap",
      },
      {
        rel: "preload",
        href: "https://scripts.converteai.net/2223d7db-1826-46ab-bf08-708ee5b93e74/players/6aa026b8d4e4aae90635f4e4/v4/player.js",
        as: "script",
      },
      {
        rel: "preload",
        href: "https://scripts.converteai.net/lib/js/smartplayer-wc/v4/smartplayer.js",
        as: "script",
      },
      {
        rel: "preload",
        href: "https://cdn.converteai.net/2223d7db-1826-46ab-bf08-708ee5b93e74/6aa026ac8143aac58dda2289/main.m3u8",
        as: "fetch",
      },
      { rel: "dns-prefetch", href: "https://cdn.converteai.net" },
      { rel: "dns-prefetch", href: "https://scripts.converteai.net" },
      { rel: "dns-prefetch", href: "https://images.converteai.net" },
      { rel: "dns-prefetch", href: "https://license.vturb.com" },
    ],
    scripts: [
      {
        type: "text/javascript",
        children:
          '!function(i,n){i._plt=i._plt||(n&&n.timeOrigin?n.timeOrigin+n.now():Date.now())}(window,performance);',
      },
    ],
  }),
  component: Home,
});

const PITCH_DELAY_MS = 8 * 60 * 1000;

function Home() {
  const [pitchVisible, setPitchVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isDev = import.meta.env.DEV;

  useEffect(() => {
    if (document.getElementById("vturb-player-script")) return;

    const script = document.createElement("script");
    script.id = "vturb-player-script";
    script.src = PLAYER_SCRIPT;
    script.async = true;
    document.head.appendChild(script);
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => setPitchVisible(true), PITCH_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <main className="page-shell">
      {isDev && (
        <div className="dev-menu">
          <button
            type="button"
            className="dev-menu-toggle"
            aria-label="Menu de desenvolvimento"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>

          {menuOpen && (
            <div className="dev-menu-panel">
              <span className="dev-menu-title">Modo desenvolvimento</span>
              <label className="dev-menu-row">
                <input
                  type="checkbox"
                  checked={pitchVisible}
                  onChange={(e) => setPitchVisible(e.target.checked)}
                />
                Ativar pitch (botão da VSL)
              </label>
            </div>
          )}
        </div>
      )}

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

