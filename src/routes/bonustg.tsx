import { createFileRoute } from "@tanstack/react-router";
import {
  Check,
  ChevronDown,
  CircleCheck,
  Gift,
  Library,
  Play,
} from "lucide-react";
import { useState } from "react";
import { RemoteScript, acceptUpsell } from "@/components/remote-script";

const OFFER_URL = "https://checkout.kashpay.com.br/u/c40dd13e3ec26ead";

const modules = [
  {
    title: "PROTOCOLO REDENÇÃO",
    modules: 4,
    lessons: 22,
    video:
      "https://videos.livelongs.online/tg-academy-v2/protocolo-redencao/modulo-3-limpeza-e-regulacao-do-corpo/aula-3.mp4",
  },
  {
    title: "EFEITO TOURO",
    modules: 5,
    lessons: 24,
    video:
      "https://videos.livelongs.online/tg-academy-v2/efeito-touro/bonus/aula-2.mp4",
  },
  {
    title: "O TRUQUE DO PRAZER",
    modules: 5,
    lessons: 15,
    video:
      "https://videos.livelongs.online/tg-academy-v2/o-toque-do-prazer/modulo-3-abertura-a-sequencia-do-prazer-parte-pratica/aula-pratica-3.mp4",
  },
  {
    title: "PORTA SECRETA",
    modules: 3,
    lessons: 7,
    video:
      "https://videos.livelongs.online/tg-academy-v2/porta-secreta/modulo-2-demonstracao-real-aplicacao/aula-2.mp4",
  },
  {
    title: "POSIÇÕES ORGÁSTICAS",
    modules: 3,
    lessons: 13,
    video:
      "https://videos.livelongs.online/tg-academy-v2/posicoes-orgasticas/modulo-1/aula-10.mp4",
  },
  {
    title: "BOCA MÁGICA",
    modules: 2,
    lessons: 9,
    video:
      "https://videos.livelongs.online/tg-academy-v2/boca-magica/modulo-1/aula-4.mp4",
  },
];

export const Route = createFileRoute("/bonustg")({
  head: () => ({
    meta: [
      { title: "Seu bônus TG Academy liberado" },
      {
        name: "description",
        content:
          "Pagamento confirmado. Confirme que deseja receber seu bônus de acesso à TG Academy.",
      },
      { property: "og:title", content: "Seu bônus TG Academy liberado" },
      {
        property: "og:description",
        content:
          "Confirme que deseja receber o bônus complementar de acesso à TG Academy.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BonusTgPage,
});

function BonusTgPage() {
  const [confirmed, setConfirmed] = useState(false);

  return (
    <div className="bonus-page min-h-screen overflow-x-hidden bg-[#080808] font-sans text-white selection:bg-amber-500/30">
      <RemoteScript
        id="kashpay-upsell-script"
        src="https://checkout.kashpay.com.br/scripts/upsell-processor.js"
      />

      <header className="border-b border-white/5 bg-gradient-to-b from-[#0f0f0f] to-[#080808] px-6 pb-4 pt-2">
        <div className="mx-auto max-w-4xl space-y-2 text-center">
          <h1 className="text-2xl font-black uppercase leading-tight tracking-tighter md:text-5xl lg:text-6xl">
            PARABÉNS! SEU ACESSO JÁ ESTÁ SENDO PREPARADO.
          </h1>
          <div className="mx-auto max-w-2xl pt-0.5">
            <div className="flex flex-row items-center justify-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-2.5 shadow-2xl backdrop-blur-sm sm:gap-8 sm:p-3">
              <div className="flex items-center gap-2 text-emerald-500">
                <CircleCheck className="h-3.5 w-3.5 shrink-0" />
                <span className="text-[9px] font-bold uppercase tracking-tight sm:text-xs">
                  Pagamento confirmado
                </span>
              </div>
              <div className="h-3 w-px bg-white/10" />
              <div className="flex items-center gap-2 text-amber-500">
                <div className="h-3.5 w-3.5 shrink-0 animate-spin rounded-full border-2 border-amber-500/30 border-t-amber-500" />
                <span className="text-[9px] font-bold uppercase tracking-tight sm:text-xs">
                  Preparando seus acessos...
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden px-6 py-4">
        <div className="pointer-events-none absolute left-1/2 top-0 h-full w-full -translate-x-1/2 rounded-full bg-amber-500/5 blur-[120px]" />
        <div className="relative z-10 mx-auto max-w-4xl space-y-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-black shadow-[0_0_20px_rgba(245,158,11,0.3)]">
            <Gift className="h-3.5 w-3.5" /> Antes de continuar...
          </div>
          <div className="space-y-1">
            <p className="text-sm font-bold uppercase tracking-widest text-amber-500">
              Você ganhou um bônus exclusivo
            </p>
            <h2 className="text-5xl font-black tracking-tighter text-white drop-shadow-2xl md:text-8xl">
              TG ACADEMY
            </h2>
          </div>
          <button
            type="button"
            onClick={() =>
              document
                .getElementById("bonus-preview")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="group relative inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-black uppercase tracking-widest text-black shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all hover:scale-105 active:scale-95"
          >
            Descobrir o que eu ganhei
            <ChevronDown className="h-5 w-5 transition-transform group-hover:translate-y-1" />
          </button>
        </div>
      </section>

      <section id="bonus-preview" className="relative bg-black px-6 py-4">
        <div className="mx-auto max-w-7xl space-y-6">
          <h2 className="text-center text-2xl font-black uppercase tracking-tight md:text-4xl">
            VEJA UMA PRÉVIA DO QUE ESTÁ ESPERANDO POR VOCÊ
          </h2>
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#0f1113] shadow-2xl">
            <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:gap-6 md:p-8 lg:grid-cols-3">
              {modules.map((item) => (
                <article
                  key={item.title}
                  className="group relative aspect-video cursor-default overflow-hidden rounded-2xl border border-white/5 bg-slate-900 transition-all hover:border-amber-500/30"
                >
                  <video
                    src={item.video}
                    muted
                    playsInline
                    autoPlay
                    preload="metadata"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-black/10" />
                  <div className="absolute inset-0 flex flex-col justify-between p-4">
                    <div className="flex justify-start">
                      <div className="rounded-full border border-amber-500/30 bg-amber-500/20 p-1.5 text-amber-500 backdrop-blur-sm">
                        <Play className="h-3 w-3 fill-current" />
                      </div>
                    </div>
                    <div className="space-y-1 text-left">
                      <h3 className="text-base font-black uppercase leading-tight tracking-tight drop-shadow-md transition-colors group-hover:text-amber-500">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest text-slate-300 drop-shadow-md">
                        <span>{item.modules} Módulos</span>
                        <span className="h-1 w-1 rounded-full bg-slate-500" />
                        <span>{item.lessons} Aulas</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div className="border-t border-white/5 bg-white/[0.01] p-4 text-center">
              <div className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
                <Library className="h-4 w-4" /> Acesso completo liberado como
                bônus
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="confirmation"
        className="relative bg-gradient-to-b from-black to-[#0c0c0c] px-6 py-4"
      >
        <div className="mx-auto max-w-3xl space-y-6">
          <div className="space-y-2 text-center">
            <h2 className="text-2xl font-black uppercase tracking-tight md:text-4xl">
              SEU BÔNUS ESTÁ PRONTO.
            </h2>
            <p className="text-sm text-slate-400 md:text-base">
              Queremos apenas que você confirme abaixo que deseja receber também
              esse bônus complementar.
            </p>
          </div>
          <div className="relative overflow-hidden rounded-[2rem] border-2 border-amber-500/30 bg-[#121212] p-6 shadow-2xl md:p-10">
            <div className="relative z-10 space-y-6">
              <div className="flex flex-col items-center space-y-3 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-500">
                  <Gift className="h-7 w-7" />
                </div>
                <div className="space-y-1">
                  <span className="text-[9px] font-black uppercase tracking-[0.3em] text-amber-500">
                    🎁 Bônus Exclusivo
                  </span>
                  <h3 className="text-xl font-black uppercase tracking-tight md:text-2xl">
                    Confirme que você quer receber seu acesso à TG Academy
                  </h3>
                  <p className="text-xs text-slate-400 md:text-sm">
                    Marque a opção abaixo para confirmar que deseja incluir este
                    bônus complementar nos seus acessos.
                  </p>
                </div>
              </div>

              <div className="mt-4 flex flex-col gap-8">
                <button
                  type="button"
                  role="checkbox"
                  aria-checked={confirmed}
                  onClick={() => setConfirmed((value) => !value)}
                  className={`group flex items-center gap-4 rounded-2xl border p-5 text-left transition-all ${
                    confirmed
                      ? "border-amber-500 bg-amber-500/5 text-white"
                      : "border-white/10 bg-black/40 text-slate-500 hover:border-white/20"
                  }`}
                >
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border-2 transition-all ${
                      confirmed
                        ? "border-amber-500 bg-amber-500 text-black"
                        : "border-white/20 bg-white/5 group-hover:border-white/30"
                    }`}
                  >
                    {confirmed && <Check className="h-4 w-4" />}
                  </span>
                  <span className="select-none text-xs font-bold uppercase tracking-tight md:text-sm">
                    Sim, quero receber meu bônus e acessar a TG Academy
                  </span>
                </button>
                <button
                  type="button"
                  disabled={!confirmed}
                  onClick={() => acceptUpsell(OFFER_URL)}
                  className="mx-auto block w-full rounded-[10px] px-[7%] py-[13px] font-[Helvetica] text-[19px] font-semibold text-white transition-all disabled:cursor-not-allowed disabled:bg-slate-800 disabled:opacity-50 enabled:bg-[#057932]"
                >
                  SIM, RECEBER MEU BÔNUS
                </button>
              </div>

              <div className="grid grid-cols-3 gap-2 border-t border-white/5 pt-6">
                {[
                  "Bônus incluído",
                  "Conteúdo online",
                  "Confirmação simples",
                ].map((text) => (
                  <div
                    key={text}
                    className="flex items-center justify-center gap-1.5"
                  >
                    <CircleCheck className="h-3.5 w-3.5 shrink-0 text-amber-500" />
                    <span className="whitespace-nowrap text-[8px] font-bold uppercase tracking-widest text-slate-400">
                      {text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5 bg-black px-6 py-4 text-center">
        <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-600">
          © 2026 Todos os direitos reservados
        </p>
      </footer>
    </div>
  );
}
