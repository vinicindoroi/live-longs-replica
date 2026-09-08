import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export type Version = "black" | "tsl";

const VERSION_KEY = "dev:version";
const EVENT = "dev-settings-change";
const PITCH_EVENT = "dev-pitch-change";

function read(key: string) {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function write(key: string, value: string) {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    /* ignore */
  }
  window.dispatchEvent(new Event(EVENT));
}

function useDevSetting(key: string, fallback: string) {
  const [value, setValue] = useState(fallback);

  useEffect(() => {
    const sync = () => setValue(read(key) ?? fallback);
    sync();
    window.addEventListener(EVENT, sync);
    return () => window.removeEventListener(EVENT, sync);
  }, [key, fallback]);

  return [value, (v: string) => write(key, v)] as const;
}

/** Versão ativa da home, controlada pelo menu de desenvolvimento. */
export function useDevVersion() {
  const [value, set] = useDevSetting(VERSION_KEY, "");
  return {
    override: value === "black" || value === "tsl" ? (value as Version) : null,
    setVersion: (v: Version) => set(v),
  };
}

export function useDevPitch() {
  const [pitch, setPitchState] = useState(false);

  useEffect(() => {
    const sync = (event: Event) => {
      if (event instanceof CustomEvent && typeof event.detail === "boolean") {
        setPitchState(event.detail);
      }
    };
    window.addEventListener(PITCH_EVENT, sync);
    return () => window.removeEventListener(PITCH_EVENT, sync);
  }, []);

  const setPitch = (value: boolean) => {
    setPitchState(value);
    window.dispatchEvent(new CustomEvent(PITCH_EVENT, { detail: value }));
  };

  return {
    pitch,
    setPitch,
  };
}

const PAGES = [
  { to: "/", label: "Home" },
  { to: "/up", label: "Up" },
  { to: "/upsell", label: "Upsell" },
  { to: "/bonustg", label: "Bônus TG" },
] as const;

export function DevMenu() {
  const [open, setOpen] = useState(false);
  const { override, setVersion } = useDevVersion();
  const { pitch, setPitch } = useDevPitch();

  if (!import.meta.env.DEV) return null;

  return (
    <div className="dev-menu">
      <button
        type="button"
        className="dev-menu-toggle"
        aria-label="Menu de desenvolvimento"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>

      {open && (
        <div className="dev-menu-panel">
          <span className="dev-menu-title">Versão da home</span>
          <label className="dev-menu-row">
            <input
              type="radio"
              name="dev-version"
              checked={override === "black"}
              onChange={() => setVersion("black")}
            />
            Black v1 (VSL)
          </label>
          <label className="dev-menu-row">
            <input
              type="radio"
              name="dev-version"
              checked={override === "tsl"}
              onChange={() => setVersion("tsl")}
            />
            White (TSL)
          </label>

          <span className="dev-menu-title" style={{ marginTop: 12 }}>
            Pitch
          </span>
          <label className="dev-menu-row">
            <input
              type="checkbox"
              checked={pitch}
              onChange={(e) => setPitch(e.target.checked)}
            />
            Ativar pitch (botão da VSL)
          </label>

          <span className="dev-menu-title" style={{ marginTop: 12 }}>
            Etapas
          </span>
          <div className="dev-menu-links">
            {PAGES.map((p) => (
              <Link key={p.to} to={p.to} className="dev-menu-link">
                {p.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
