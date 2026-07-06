import { useEffect, useState } from "react";
import portal from "@/assets/portal-sf.png";
import logo from "@/assets/logo-hero.png";
import { useParallax } from "@/utils/functions";
import { InfoBlock } from "./infoBlocks";

export function Hero() {
  const y = useParallax();
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden bg-creme mx-auto max-w-[1500px] pt-10 sm:pt-22 sm:pb-32"
    >
      <div
        className="
          sm:absolute inset-x-0
          sm:top-1/2 sm:-translate-y-1/2
          sm:top-[55%]
          w-full
          pointer-events-none
          select-none
        "
        aria-hidden="true"
      >
        <img
          src={portal}
          alt="Portal Santa Felicidade"
          className="w-full h-auto object-cover sm:opacity-100"
        />
      </div>

      <div
        className="hidden sm:block absolute inset-0 bg-gradient-to-b from-creme via-creme/40 to-creme sm:via-transparent sm:from-creme/1"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 hidden sm:block bg-gradient-to-r from-creme from-[15%] via-creme/70 via-[45%] to-transparent to-[50%]"
        aria-hidden="true"
      />

      <div className="relative z-10">
        <div className="px-5 sm:px-16 hidden sm:block flex flex-wrap flex items-center gap-6 px-2 text-xs sm:text-sm items-center justify-between gap-4 text-marrom mb-6">
          <div className="flex items-center gap-6 px-2 text-xs sm:text-sm px-5 sm:px-0">
            <InfoBlock label="Onde" value="Curitiba - Santa Felicidade" />

            <span className="h-6 w-px bg-marrom/20" />

            <InfoBlock label="Quando" value="04 JULHO — 08 AGOSTO 2026" uppercase={false} />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row">
          <div className="flex justify-center mx-auto sm:mx-0 pt-12 sm:pt-0 px-12">
            <img
              src={logo}
              alt="Festival Gastronômico Santa Felicidade"
              className="w-[280px] sm:w-[420px] md:w-[620px] h-auto rise-in drop-shadow-lg"
            />
          </div>
        </div>

        <div className="mt-16 sm:mt-8 grid grid-cols-1 md:grid-cols-[1fr_auto] items-end gap-4 pb-16 sm:pb-0 px-4 sm:px-12">
          <p className="text-lg sm:text-xl leading-relaxed pl-4 inline-block bg-bordo text-creme font-extrabold py-4 max-w-[600px]">
            Durante mais de um mês, Santa Felicidade reúne seus restaurantes, histórias e
            experiências para celebrar a gastronomia que transformou o bairro em um dos maiores
            símbolos de Curitiba.
          </p>
          <div className="sm:hidden flex flex-wrap items-center justify-between gap-4 text-marrom">
            <div className="sm:hidden text-marrom mx-auto">
              <div className="flex flex-row gap-6">
                <InfoBlock label="Onde" value="CTBA - Santa Felicidade" />

                <span className="h-6 w-px bg-marrom/20" />

                <InfoBlock label="Quando" value="04 JUL — 08 AGO 2026" uppercase={false} />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 sm:gap-4 mt-8 sm:mt-0">
            <a
              href="/revista.pdf"
              className="mx-auto group relative inline-flex items-center gap-3 rounded-full bg-bordo text-creme px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] transition-all hover:bg-marrom hover:-translate-y-0.5 shadow-[0_12px_30px_-8px_rgba(133,67,63,0.6)]"
            >
              Ver restaurantes
              <span className="grid h-7 w-7 place-items-center rounded-full bg-dourado text-marrom transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="/revista.pdf"
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
