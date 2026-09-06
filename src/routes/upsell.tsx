import { createFileRoute } from "@tanstack/react-router";
import { RemoteScript, acceptUpsell } from "@/components/remote-script";

const OFFER_URL = "https://checkout.kashpay.com.br/u/7684c5858328786d";

export const Route = createFileRoute("/upsell")({
  head: () => ({
    meta: [
      { title: "Faça ela pensar em você o dia todo" },
      {
        name: "description",
        content:
          "As mensagens certas que despertam curiosidade, criam tensão e envolvem ela antes do encontro.",
      },
      {
        property: "og:title",
        content: "Faça ela pensar em você o dia todo",
      },
      {
        property: "og:description",
        content:
          "As mensagens certas que despertam curiosidade e criam tensão antes do encontro.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: UpsellPage,
});

function UpsellPage() {
  return (
    <div className="upsell-page flex min-h-screen flex-col text-white">
      <RemoteScript
        id="kashpay-upsell-script"
        src="https://checkout.kashpay.com.br/scripts/upsell-processor.js"
      />
      <main className="flex-grow">
        <header className="py-16 md:py-20">
          <div className="mx-auto max-w-[1536px] px-4 text-center md:px-6">
            <div className="mx-auto max-w-4xl">
              <h1 className="text-4xl font-bold text-white md:text-5xl">
                FAÇA ELA PENSAR EM VOCÊ O DIA TODO ANTES MESMO DE VOCÊ ENCOSTAR
                NELA
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-lg text-white/80 md:text-xl">
                Descubra as mensagens certas que despertam curiosidade, criam
                tensão e fazem ela chegar no encontro já envolvida com você.
              </p>
              <div className="mt-12 flex justify-center">
                <img
                  src="/upsell/product-mockup.jpg"
                  alt="Mockup do produto"
                  width={800}
                  height={450}
                  className="rounded-lg shadow-2xl"
                />
              </div>
              <p className="mt-12 text-2xl font-bold text-red-600 md:text-3xl">
                A diferença entre um encontro comum e um encontro que evolui
                começa no WhatsApp.
              </p>
              <div className="mt-12">
                <button
                  type="button"
                  onClick={() => acceptUpsell(OFFER_URL)}
                  className="mx-auto block rounded-[10px] bg-[#057932] px-[7%] py-[13px] font-[Helvetica] text-lg font-semibold text-white"
                >
                  SIM! ATIVAR ESSE MÉTODO
                </button>
              </div>
              <div className="mb-5 mt-10 flex flex-col flex-wrap items-center gap-[30px] md:flex-row md:justify-center">
                <div className="h-auto w-[92%] overflow-hidden rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.4)] md:h-[640px] md:w-[420px]">
                  <img
                    src="/upsell/testimonial-1.jpg"
                    alt="Depoimento Cliente 1"
                    width={420}
                    height={640}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="h-auto w-[92%] overflow-hidden rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.4)] md:h-[640px] md:w-[420px]">
                  <img
                    src="/upsell/testimonial-2.jpg"
                    alt="Depoimento Cliente 2"
                    width={420}
                    height={640}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </header>
      </main>
      <footer className="px-4 py-8" />
    </div>
  );
}
