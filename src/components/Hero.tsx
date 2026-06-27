import { useEffect, useState } from "react";
import pizza from "@/assets/pizza.jpg";
import heropic from "@/assets/santafelicidade.jpg";
import estrela from "@/assets/star.png";

export function Hero() {
  function useParallax() {
    const [y, setY] = useState(0);
    useEffect(() => {
      const onScroll = () => setY(window.scrollY);
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }, []);
    return y;
  }
  const y = useParallax();
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden bg-creme pt-12 sm:pt-22 sm:pb-32"
    >
      {/* Background color blocks */}
      {/* <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 top-0 h-[55%] w-[55%] bg-bordo" />
        <div className="absolute right-[8%] top-[6%] h-40 w-40 sm:h-72 sm:w-72 rounded-full bg-dourado" />
        <div className="absolute left-0 bottom-0 h-[40%] w-[42%] bg-oliva" />
        <div className="absolute left-[35%] bottom-[10%] h-32 w-32 sm:h-56 sm:w-56 rounded-full bg-azul" />
        <div
          className="absolute left-[28%] top-[18%] hidden md:block text-azul"
          style={{ transform: `translateY(${y * 0.12}px) rotate(-8deg)` }}
        >
          <svg width="120" height="120" viewBox="0 0 120 120" className="spin-slow">
            <path
              d="M60 5 L65 55 L115 60 L65 65 L60 115 L55 65 L5 60 L55 55 Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div> */}

      <div className="mx-auto max-w-[1500px] px-5 sm:px-8">
        {/* Top meta row */}
        <div className="hidden sm:block flex flex-wrap items-center justify-between gap-4 text-marrom mb-6 sm:mb-10">
          <div className="flex items-center gap-6 text-xs sm:text-sm">
            {/* LOCATION */}
            <div className="flex flex-col leading-none">
              <span className="font-aventa uppercase tracking-[0.25em] text-sm text-black font-bold inline-block bg-azul text-marrom px-2 py-1">
                Onde
              </span>
              <span className="text-sm sm:text-md tracking-wide uppercase pl-0">
                Curitiba - Santa Felicidade
              </span>
            </div>

            {/* DIVIDER */}
            <span className="h-6 w-px bg-marrom/20" />

            {/* DATE */}
            <div className="flex flex-col leading-none">
              <span className="font-aventa uppercase tracking-[0.25em] text-sm text-black font-bold inline-block bg-azul text-marrom px-2 py-1">
                Quando
              </span>
              <span className="text-sm sm:text-md tracking-wide">04 JUL — 08 AGO 2026</span>
            </div>
          </div>
        </div>

        {/* Main hero title + composition */}
        <div className="relative">
          <h1 className="text-mega text-marrom rise-in leading-[1.1] sm:leading-[0.91]">
            <span className="block font-aventa">FESTIVAL</span>
            <span className="block">
              GASTRO<span className="text-bordo">NÔ</span>MICO
            </span>
            <span className="block">
              <span className="font-serif text-oliva sm:pr-4">de </span>
              <span className="font-aventa ml-2">Santa</span>
            </span>
            <span className="inline-block bg-bordo text-dourado px-2 py-1">Felicidade</span>
          </h1>

          {/* Floating image cards */}
          <div
            className="absolute right-[-2%] top-[2%] hidden md:block w-[26%] aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl ring-4 ring-creme float-slow"
            style={
              {
                ["--rot" as never]: "6deg",
                transform: `translateY(${y * -0.08}px) rotate(6deg)`,
              } as React.CSSProperties
            }
          >
            <img src={pizza} alt="Massa italiana" className="h-full w-full object-cover" />
          </div>

          <div
            className="absolute right-[0%] sm:right-[18%] bottom-[-50%] sm:bottom-[-30%] w-[40%]  sm:w-[28%] aspect-square rounded-full overflow-hidden shadow-xl ring-4 ring-dourado float-slow"
            style={{ ["--rot" as never]: "0deg", animationDelay: "1.5s" } as React.CSSProperties}
          >
            <img
              src={heropic}
              alt="Pizza napolitana"
              className="h-full w-full object-cover object-top"
            />
          </div>
        </div>

        {/* CTAs + tagline */}
        <div className="mt-32 sm:mt-36 grid grid-cols-1 md:grid-cols-[1fr_auto] items-end gap-8 pb-16 sm:pb-0">
          <p className="max-w-xl text-base sm:text-lg leading-relaxed text-marrom/85">
            <div className="sm:hidden flex flex-wrap items-center justify-between gap-4 text-marrom">
              <div className="sm:hidden text-marrom mx-auto">
                <div className="grid grid-cols-2 gap-6">
                  {/* ONDE */}
                  <div>
                    <span className="block w-full text-center font-aventa uppercase tracking-[0.1em] text-sm font-bold bg-azul text-marrom px-1 py-1">
                      Onde
                    </span>

                    <span className="block text-center text-xs tracking-wide font-medium mt-2">
                      Curitiba - Santa Felicidade
                    </span>
                  </div>

                  {/* QUANDO */}
                  <div>
                    <span className="block w-full text-center font-aventa uppercase tracking-[0.1em] text-sm font-bold bg-azul text-marrom px-2 py-1">
                      Quando
                    </span>

                    <span className="block text-center text-xs font-medium  tracking-wide mt-2">
                      04 JUL — 08 AGO 2026
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden sm:flex">
              <span className="text-marrom text-2xl sm:text-6xl mx-1 font-semibold">Tradição</span>{" "}
              <img src={estrela} alt="Estrela" className="w-20 h-15" />
              <span className=" text-marrom text-2xl sm:text-6xl mx-1 font-semibold">
                Cultura
              </span>{" "}
              <img src={estrela} alt="Estrela" className="mx-1 w-20 h-15" />
              <span className="text-marrom text-2xl sm:text-6xl font-semibold">Sabor</span>
            </div>
            <br />
            <br />
            <p className="text-lg sm:text-xl leading-relaxed pl-4 inline-block bg-dourado sm:bg-bordo sm:text-creme font-extrabold px-6 py-4 ">
              Durante mais de um mês, Santa Felicidade reúne seus restaurantes, histórias e
              experiências para celebrar a gastronomia que transformou o bairro em um dos maiores
              símbolos de Curitiba.
            </p>
          </p>
          <div className="flex flex-wrap items-center gap-6 sm:gap-4 mt-8 sm:mt-0">
            <a
              href="#home"
              className="mx-auto group relative inline-flex items-center gap-3 rounded-full bg-bordo text-creme px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] transition-all hover:bg-marrom hover:-translate-y-0.5 shadow-[0_12px_30px_-8px_rgba(133,67,63,0.6)]"
            >
              Ver restaurantes
              <span className="grid h-7 w-7 place-items-center rounded-full bg-dourado text-marrom transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="#home"
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
