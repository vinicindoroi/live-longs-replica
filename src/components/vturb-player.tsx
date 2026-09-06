import { createElement } from "react";
import { RemoteScript } from "./remote-script";

export function VturbPlayer({
  playerId,
  scriptSrc,
}: {
  playerId: string;
  scriptSrc: string;
}) {
  return (
    <>
      {createElement(
        "vturb-smartplayer",
        {
          id: playerId,
          style: {
            display: "block",
            margin: "0 auto",
            width: "100%",
            maxWidth: "400px",
            aspectRatio: "9 / 16",
          },
        },
        <div slot="preload" className="player-preload" key="preload">
          <div
            id={`loading_${playerId.replace("vid-", "")}`}
            className="player-loading"
          >
            <div className="player-spinner" />
            <div className="player-percentage">99%</div>
          </div>
        </div>,
      )}
      <RemoteScript id={`vturb-${playerId}`} src={scriptSrc} />
    </>
  );
}
