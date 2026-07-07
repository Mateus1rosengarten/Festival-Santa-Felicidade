import portal from "@/assets/portal-sf.png";
import title from "@/assets/logo-hero.png";
import { useParallax } from "@/utils/functions";

export function Hero() {
  const y = useParallax();
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden bg-creme  pt-10 sm:py-28"
    >
      <div
        className="sm:absolute sm:top-1/2 sm:-translate-y-1/2 sm:top-[55%] w-full pointer-events-none select-none inset-x-0"
        aria-hidden="true"
      >
        <img
          src={portal}
          alt="Portal Santa Felicidade"
          className="w-full h-auto object-cover sm:w-[112%] sm:translate-x-[11%] scale-130 sm:scale-100"
        />
      </div>

      <div
        className="hidden sm:block absolute inset-0 bg-gradient-to-b from-creme via-creme/100 to-creme sm:via-transparent sm:from-creme/1"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 hidden sm:block bg-gradient-to-r from-creme from-[5%] via-creme/90 via-[35%] to-transparent to-[50%]"
        aria-hidden="true"
      />

      <div className="relative z-10 2xl:px-20">
        <div className="w-full sm:mx-0 pt-12 sm:pt-4 px-4">
          <img
            src={title}
            alt="Festival Gastronômico Santa Felicidade"
            className="w-[280px] sm:w-[420px] md:w-[620px] mx-auto sm:mx-0 h-auto rise-in"
          />
        </div>

        <div className="mt-16 sm:mt-10 grid grid-cols-1 md:grid-cols-[1fr_auto] items-end gap-4 pb-16 sm:pb-0 px-4 sm:px-12">
          <p className="text-lg sm:text-xl leading-relaxed inline-block bg-bordo text-creme font-normal py-4 px-4 max-w-[600px]">
            <span className="text-dourado font-extrabold">De 04 de julho a 08 de agosto</span>,
            Santa Felicidade reúne seus restaurantes, histórias e experiências para celebrar a
            gastronomia que transformou o bairro em um dos maiores símbolos de Curitiba.
          </p>

          <div className="flex flex-wrap items-center gap-6 sm:gap-4 mt-8 sm:mt-0">
            <a
              href="/revista.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-auto group relative inline-flex items-center gap-3 rounded-full bg-bordo text-creme px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] transition-all hover:bg-marrom hover:-translate-y-0.5 shadow-[0_12px_30px_-8px_rgba(133,67,63,0.6)]"
            >
              Ver restaurantes
              <span className="grid h-7 w-7 place-items-center rounded-full bg-dourado text-marrom transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="/revista.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-auto inline-flex items-center gap-2 rounded-full border-2 border-marrom px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-marrom transition-all hover:bg-marrom hover:text-creme"
            >
              Saiba mais
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
