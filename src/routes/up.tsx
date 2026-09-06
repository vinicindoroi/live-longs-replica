import { createFileRoute } from "@tanstack/react-router";
import { Lock } from "lucide-react";
import { useEffect, useState } from "react";
import { RemoteScript, acceptUpsell } from "@/components/remote-script";
import { VturbPlayer } from "@/components/vturb-player";

const OFFER_URL = "https://checkout.kashpay.com.br/u/ae797067b6f05da2";

export const Route = createFileRoute("/up")({
  head: () => ({
    meta: [
      { title: "Pagamento confirmado | Oferta exclusiva" },
      {
        name: "description",
        content:
          "Seu pagamento foi confirmado. Assista ao vídeo e confirme seu e-mail de acesso.",
      },
      { property: "og:title", content: "Pagamento confirmado" },
      {
        property: "og:description",
        content: "Confirme seu e-mail de acesso e libere sua oferta exclusiva.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: UpPage,
});

function UpPage() {
  const [seconds, setSeconds] = useState(30);

  useEffect(() => {
    if (seconds <= 0) return;
    const timer = window.setInterval(
      () => setSeconds((value) => value - 1),
      1000,
    );
    return () => window.clearInterval(timer);
  }, [seconds]);

  return (
    <div className="up-page min-h-screen">
      <RemoteScript
        id="kashpay-upsell-script"
        src="https://checkout.kashpay.com.br/scripts/upsell-processor.js"
      />

      <div className="up-success">SEU PAGAMENTO FOI EFETUADO COM SUCESSO!</div>
      <div className="up-audio">
        🔊 Certifique-se de que o som esteja ligado!
      </div>

      <main className="flex flex-col items-center px-4 pb-16 pt-8">
        <div className="up-alert">
          Você foi sorteado, assista o vídeo abaixo e
          <br />
          não perca essa oportunidade!!
        </div>

        <div className="mt-8 w-full max-w-4xl">
          <VturbPlayer
            playerId="vid-69bfefb8237e0fc6aec0eb27"
            scriptSrc="https://scripts.converteai.net/a30937b9-5a3c-4cd5-bff6-7f6144148fd2/players/69bfefb8237e0fc6aec0eb27/v4/player.js"
          />
        </div>

        <section className="mt-6 w-full max-w-[620px] rounded-2xl border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur-sm md:p-6">
          <div className="mb-3 flex justify-center">
            <Lock className="h-5 w-5 text-slate-400" />
          </div>
          <h2 className="mb-4 text-center text-xl font-bold text-white md:text-2xl">
            Confirme o seu e-mail de acesso
          </h2>
          <input
            type="email"
            aria-label="E-mail principal"
            placeholder="Digite seu e-mail principal"
            className="mb-6 h-12 w-full rounded-lg border-0 bg-white px-3 text-base text-black outline-none focus:ring-2 focus:ring-[#057932]"
          />

          {seconds > 0 ? (
            <div className="space-y-4">
              <p className="animate-pulse text-center text-xs font-medium text-slate-300 md:text-sm">
                Aguarde enquanto preparamos o seu acesso
              </p>
              <div className="text-center text-3xl font-black tabular-nums text-white">
                {seconds}s
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full bg-[#057932] transition-all duration-1000 ease-linear"
                  style={{ width: `${(seconds / 30) * 100}%` }}
                />
              </div>
              <p className="text-center text-[10px] text-slate-400 md:text-xs">
                Confirme se o e-mail acima está correto.
              </p>
              <button
                type="button"
                disabled
                className="flex h-14 w-full cursor-not-allowed items-center justify-center gap-3 rounded-xl border border-white/5 bg-white/5 text-base font-bold uppercase text-slate-500"
              >
                <Lock className="h-4 w-4" /> AGUARDE {seconds} SEGUNDOS
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => acceptUpsell(OFFER_URL)}
              className="w-full rounded-xl bg-[#057932] px-5 py-4 font-[Helvetica] text-lg font-extrabold text-white shadow-[0_8px_20px_rgba(5,121,50,0.4)]"
            >
              CONFIRMAR E ACESSAR!
            </button>
          )}
        </section>
      </main>
    </div>
  );
}
