import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { BlackV1 } from "@/components/black-v1";
import { WhiteTsl } from "@/components/white-tsl";

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

type Version = "black" | "tsl";

function Home() {
  const [urlVersion, setUrlVersion] = useState<Version>("tsl");
  const { override } = useDevVersion();
  const { pitch, setPitch } = useDevPitch();

  useEffect(() => {
    const campaign = (
      new URLSearchParams(window.location.search).get("utm_campaign") ?? ""
    ).toLowerCase();
    setUrlVersion(campaign.includes("sex") ? "black" : "tsl");
  }, []);

  const version = override ?? urlVersion;

  return version === "black" ? (
    <BlackV1 pitchVisible={pitch} onPitchChange={setPitch} />
  ) : (
    <WhiteTsl />
  );
}



