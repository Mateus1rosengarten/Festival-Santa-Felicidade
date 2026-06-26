import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import heroPasta from "@/assets/hero-pasta.jpg";
import heroWine from "@/assets/hero-wine.jpg";
import heroPizza from "@/assets/hero-pizza.jpg";
import heroDessert from "@/assets/hero-dessert.jpg";
import sectionPeople from "@/assets/section-people.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Festival Gastronômico de Santa Felicidade — 1ª Edição · Julho 2026" },
      {
        name: "description",
        content:
          "Mais de 20 restaurantes reunidos em um único festival. Sabores italianos, vinhos e experiências em Curitiba. Julho 2026.",
      },
      { property: "og:title", content: "Festival Gastronômico de Santa Felicidade" },
      {
        property: "og:description",
        content: "Mais de 20 restaurantes, uma só celebração. Curitiba · Julho 2026.",
      },
    ],
  }),
  component: Index,
});

function useParallax() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const onScroll = () => setY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return y;
}

function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 py-4 sm:py-5">
        <div className="flex items-center justify-between rounded-full bg-marrom/85 backdrop-blur-xl border border-white/10 px-4 sm:px-6 py-3 text-creme shadow-[0_10px_40px_-10px_rgba(68,62,42,0.6)]">
          <a href="#top" className="flex items-center gap-2 font-display text-lg sm:text-xl tracking-tight">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-dourado" />
            <span>Festival<span className="text-dourado">.</span>SF</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-[0.18em]">
            {[
              ["Festival", "#festival"],
              ["Restaurantes", "#restaurantes"],
              ["Experiências", "#experiencias"],
              ["Programação", "#programacao"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="relative py-1 transition-colors hover:text-dourado after:absolute after:left-0 after:bottom-0 after:h-px after:w-0 after:bg-dourado after:transition-all hover:after:w-full"
              >
                {label}
              </a>
            ))}
          </nav>
          <a
            href="#instagram"
            className="group flex items-center gap-2 rounded-full bg-creme text-marrom px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-semibold transition-all hover:bg-dourado"
            aria-label="Instagram"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
            </svg>
            <span className="hidden sm:inline">@festival.sf</span>
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  const y = useParallax();
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden bg-creme pt-28 sm:pt-32">
      {/* Background color blocks */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 top-0 h-[55%] w-[55%] bg-bordo" />
        <div className="absolute right-[8%] top-[6%] h-40 w-40 sm:h-72 sm:w-72 rounded-full bg-dourado" />
        <div className="absolute left-0 bottom-0 h-[40%] w-[42%] bg-oliva" />
        <div className="absolute left-[35%] bottom-[10%] h-32 w-32 sm:h-56 sm:w-56 rounded-full bg-azul" />
        <div
          className="absolute left-[28%] top-[18%] hidden md:block text-azul"
          style={{ transform: `translateY(${y * 0.12}px) rotate(-8deg)` }}
        >
          <svg width="120" height="120" viewBox="0 0 120 120" className="spin-slow">
            <path d="M60 5 L65 55 L115 60 L65 65 L60 115 L55 65 L5 60 L55 55 Z" fill="currentColor" />
          </svg>
        </div>
      </div>

      <div className="mx-auto max-w-[1500px] px-5 sm:px-8">
        {/* Top meta row */}
        <div className="flex flex-wrap items-center justify-between gap-4 text-marrom mb-6 sm:mb-10">
          <div className="flex items-center gap-3 rounded-full bg-creme/80 backdrop-blur border border-marrom/15 px-4 py-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em]">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-bordo animate-pulse" />
            1ª Edição
          </div>
          <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm font-medium">
            <span className="flex items-center gap-1.5"><span aria-hidden>📍</span> Curitiba</span>
            <span className="flex items-center gap-1.5"><span aria-hidden>📅</span> Julho 2026</span>
          </div>
        </div>

        {/* Main hero title + composition */}
        <div className="relative">
          <h1 className="text-mega text-marrom rise-in">
            <span className="block">FESTIVAL</span>
            <span className="block">
              GASTRO<span className="text-bordo">N</span>ÔMICO
            </span>
            <span className="block">
              <span className="font-serif-italic text-bordo pr-4">de</span>
              <span>SANTA</span>
            </span>
            <span className="block text-dourado [text-shadow:_-1px_-1px_0_var(--marrom),_1px_-1px_0_var(--marrom),_-1px_1px_0_var(--marrom),_1px_1px_0_var(--marrom)] sm:[text-shadow:_-2px_-2px_0_var(--marrom),_2px_-2px_0_var(--marrom),_-2px_2px_0_var(--marrom),_2px_2px_0_var(--marrom)]">
              FELICIDADE
            </span>
          </h1>

          {/* Floating image cards */}
          <div
            className="absolute right-[2%] top-[2%] hidden md:block w-[26%] aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl ring-4 ring-creme float-slow"
            style={{ ['--rot' as never]: '6deg', transform: `translateY(${y * -0.08}px) rotate(6deg)` } as React.CSSProperties}
          >
            <img src={heroPasta} alt="Massa italiana" className="h-full w-full object-cover" />
          </div>

          <div
            className="absolute right-[18%] bottom-[-8%] hidden md:block w-[18%] aspect-square rounded-full overflow-hidden shadow-xl ring-4 ring-dourado float-slow"
            style={{ ['--rot' as never]: '0deg', animationDelay: '1.5s' } as React.CSSProperties}
          >
            <img src={heroPizza} alt="Pizza napolitana" className="h-full w-full object-cover" />
          </div>

          <div
            className="absolute left-[58%] top-[40%] hidden lg:block w-[14%] aspect-[3/4] rounded-2xl overflow-hidden shadow-xl ring-4 ring-creme rotate-[-8deg] float-slow"
            style={{ ['--rot' as never]: '-8deg', animationDelay: '0.7s' } as React.CSSProperties}
          >
            <img src={heroWine} alt="Brinde com vinho" className="h-full w-full object-cover" />
          </div>

          {/* Mobile composition: collage row */}
          <div className="mt-8 grid grid-cols-3 gap-3 md:hidden">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden ring-2 ring-creme shadow-xl rotate-[-4deg]">
              <img src={heroPasta} alt="Massa" className="h-full w-full object-cover" />
            </div>
            <div className="aspect-square rounded-full overflow-hidden ring-2 ring-dourado shadow-xl mt-6">
              <img src={heroPizza} alt="Pizza" className="h-full w-full object-cover" />
            </div>
            <div className="aspect-[3/4] rounded-2xl overflow-hidden ring-2 ring-creme shadow-xl rotate-[5deg]">
              <img src={heroWine} alt="Vinho" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>

        {/* CTAs + tagline */}
        <div className="mt-12 sm:mt-20 grid grid-cols-1 md:grid-cols-[1fr_auto] items-end gap-8">
          <p className="max-w-xl text-base sm:text-lg leading-relaxed text-marrom/85">
            Uma celebração inédita do <span className="font-serif-italic text-bordo">sabor</span>, do encontro e da boa mesa.
            Mais de 20 restaurantes em uma única jornada gastronômica pelo coração italiano de Curitiba.
          </p>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href="#restaurantes"
              className="group relative inline-flex items-center gap-3 rounded-full bg-bordo text-creme px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] transition-all hover:bg-marrom hover:-translate-y-0.5 shadow-[0_12px_30px_-8px_rgba(133,67,63,0.6)]"
            >
              Ver restaurantes
              <span className="grid h-7 w-7 place-items-center rounded-full bg-dourado text-marrom transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#festival"
              className="inline-flex items-center gap-2 rounded-full border-2 border-marrom px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-marrom transition-all hover:bg-marrom hover:text-creme"
            >
              Saiba mais
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["Sabores", "Encontros", "Vinhos", "Experiências", "Massas", "Pizzas", "Sobremesas", "Brindes"];
  const loop = [...items, ...items, ...items];
  return (
    <div className="bg-marrom text-creme py-6 sm:py-8 overflow-hidden border-y border-marrom/40">
      <div className="flex marquee whitespace-nowrap">
        {loop.map((t, i) => (
          <span key={i} className="font-display text-3xl sm:text-5xl px-6 sm:px-10 flex items-center gap-6 sm:gap-10">
            {t}
            <span className="text-dourado">✶</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function FeatureStrip() {
  const cards = [
    {
      icon: "🍝",
      title: "Gastronomia",
      desc: "Pratos autorais, receitas tradicionais e criações inéditas assinadas pelos chefs do festival.",
      bg: "bg-bordo",
      fg: "text-creme",
      accent: "bg-dourado text-marrom",
    },
    {
      icon: "🍷",
      title: "Experiências",
      desc: "Harmonizações, jantares a quatro mãos, aulas-show e encontros que viram memória.",
      bg: "bg-dourado",
      fg: "text-marrom",
      accent: "bg-bordo text-creme",
    },
    {
      icon: "⭐",
      title: "Restaurantes",
      desc: "Os melhores endereços de Santa Felicidade reunidos sob uma única curadoria de sabor.",
      bg: "bg-azul",
      fg: "text-marrom",
      accent: "bg-marrom text-creme",
    },
  ];

  return (
    <section id="festival" className="relative bg-creme py-20 sm:py-32">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-end gap-8 mb-12 sm:mb-20">
          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl leading-[0.9] text-marrom max-w-4xl tracking-tight">
            Mais de <span className="text-bordo">20 restaurantes</span> reunidos em{" "}
            <span className="font-serif-italic text-bordo">um único</span> festival
          </h2>
          <p className="text-sm uppercase tracking-[0.25em] text-marrom/60 font-semibold">
            01 — O Festival
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {cards.map((c, i) => (
            <article
              key={c.title}
              className={`${c.bg} ${c.fg} group relative overflow-hidden rounded-3xl p-7 sm:p-9 min-h-[340px] sm:min-h-[420px] flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl cursor-pointer`}
            >
              <div className="flex items-start justify-between">
                <span className="text-5xl sm:text-6xl" aria-hidden>{c.icon}</span>
                <span className={`${c.accent} text-xs font-bold uppercase tracking-[0.18em] px-3 py-1.5 rounded-full`}>
                  0{i + 1}
                </span>
              </div>
              <div>
                <h3 className="font-display text-4xl sm:text-5xl mb-3 tracking-tight">{c.title}</h3>
                <p className="text-sm sm:text-base leading-relaxed opacity-90 max-w-xs">{c.desc}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em]">
                  Descubra
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
              <div className="absolute -right-8 -bottom-8 h-32 w-32 rounded-full bg-current opacity-[0.06] transition-transform duration-700 group-hover:scale-150" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function BigVisual() {
  return (
    <section id="experiencias" className="relative bg-oliva py-20 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
        <div className="lg:col-span-5 order-2 lg:order-1">
          <p className="text-xs uppercase tracking-[0.25em] text-marrom/70 font-bold mb-5">02 — Experiências</p>
          <h2 className="font-display text-5xl sm:text-7xl leading-[0.88] text-marrom mb-6 tracking-tight">
            Uma cidade <span className="font-serif-italic text-bordo">à mesa</span>.
          </h2>
          <p className="text-base sm:text-lg text-marrom/85 leading-relaxed mb-8 max-w-md">
            Pelo bairro mais saboroso de Curitiba, o festival transforma cada esquina em
            celebração. Pratos assinados, vinhos selecionados, encontros entre chefs e noites
            que pedem mais um brinde.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Jantares", "Degustações", "Aulas-show", "Brunchs", "Harmonizações", "Música ao vivo"].map((t) => (
              <span key={t} className="rounded-full border-2 border-marrom/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-marrom hover:bg-marrom hover:text-creme transition-colors">
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="lg:col-span-7 order-1 lg:order-2 relative">
          <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl">
            <img src={sectionPeople} alt="Pessoas brindando em um jantar do festival" className="h-full w-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-tr from-bordo/30 via-transparent to-transparent" />
          </div>
          <div className="absolute -top-6 -left-6 sm:-top-10 sm:-left-10 h-28 w-28 sm:h-44 sm:w-44 rounded-full overflow-hidden ring-4 sm:ring-8 ring-oliva shadow-xl">
            <img src={heroDessert} alt="Sobremesa" className="h-full w-full object-cover" loading="lazy" />
          </div>
          <div className="absolute -bottom-5 right-6 sm:-bottom-8 sm:right-12 bg-bordo text-creme rounded-2xl px-5 py-4 sm:px-7 sm:py-5 shadow-2xl rotate-[-3deg]">
            <div className="font-display text-3xl sm:text-5xl leading-none">+20</div>
            <div className="text-[10px] sm:text-xs uppercase tracking-[0.2em] mt-1 text-dourado font-semibold">Restaurantes</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Numbers() {
  const stats = [
    { n: "20+", l: "Restaurantes" },
    { n: "31", l: "Dias de festa" },
    { n: "100+", l: "Pratos exclusivos" },
    { n: "1ª", l: "Edição histórica" },
  ];
  return (
    <section id="restaurantes" className="bg-marrom text-creme py-20 sm:py-32 relative overflow-hidden">
      <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-bordo/40 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-dourado/20 blur-3xl" />
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 relative">
        <div className="max-w-3xl mb-14 sm:mb-20">
          <p className="text-xs uppercase tracking-[0.25em] text-dourado font-bold mb-5">03 — Por dentro</p>
          <h2 className="font-display text-5xl sm:text-7xl leading-[0.88] tracking-tight">
            O <span className="text-dourado">maior</span> encontro gastronômico do bairro.
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10">
          {stats.map((s) => (
            <div key={s.l} className="border-t-2 border-creme/20 pt-5 sm:pt-7">
              <div className="font-display text-6xl sm:text-8xl text-dourado tracking-tight">{s.n}</div>
              <div className="mt-3 text-xs sm:text-sm uppercase tracking-[0.2em] text-creme/80">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="programacao" className="bg-bordo text-creme">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-12 items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-dourado font-bold mb-4">Garanta sua mesa</p>
            <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl leading-[0.88] tracking-tight">
              Venha <span className="font-serif-italic text-dourado">viver</span> o sabor.
            </h2>
            <p className="mt-6 text-creme/85 max-w-md leading-relaxed text-base sm:text-lg">
              Acompanhe a programação completa, os restaurantes confirmados e as experiências
              exclusivas da 1ª edição.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#restaurantes" className="rounded-full bg-creme text-marrom px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] hover:bg-dourado transition-colors">
                Ver restaurantes
              </a>
              <a id="instagram" href="#" className="rounded-full border-2 border-creme px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] hover:bg-creme hover:text-bordo transition-colors inline-flex items-center gap-2">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                </svg>
                @festival.sf
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 text-sm">
            <div>
              <div className="text-dourado uppercase text-xs tracking-[0.2em] font-bold mb-4">Onde</div>
              <p className="text-creme/90 leading-relaxed">Santa Felicidade<br/>Curitiba — PR</p>
            </div>
            <div>
              <div className="text-dourado uppercase text-xs tracking-[0.2em] font-bold mb-4">Quando</div>
              <p className="text-creme/90 leading-relaxed">Julho de 2026<br/>1ª Edição</p>
            </div>
            <div>
              <div className="text-dourado uppercase text-xs tracking-[0.2em] font-bold mb-4">Festival</div>
              <ul className="space-y-2 text-creme/90">
                <li><a href="#festival" className="hover:text-dourado transition-colors">Sobre</a></li>
                <li><a href="#restaurantes" className="hover:text-dourado transition-colors">Restaurantes</a></li>
                <li><a href="#experiencias" className="hover:text-dourado transition-colors">Experiências</a></li>
              </ul>
            </div>
            <div>
              <div className="text-dourado uppercase text-xs tracking-[0.2em] font-bold mb-4">Contato</div>
              <ul className="space-y-2 text-creme/90">
                <li><a href="mailto:ola@festivalsf.com.br" className="hover:text-dourado transition-colors">ola@festivalsf.com.br</a></li>
                <li><a href="#" className="hover:text-dourado transition-colors">Imprensa</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16 sm:mt-24 pt-6 border-t border-creme/20 flex flex-wrap items-center justify-between gap-4 text-xs text-creme/70 uppercase tracking-[0.2em]">
          <span>© 2026 Festival Gastronômico de Santa Felicidade</span>
          <span>Curitiba · Brasil</span>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-creme text-marrom">
      <Navbar />
      <Hero />
      <Marquee />
      <FeatureStrip />
      <BigVisual />
      <Numbers />
      <Footer />
    </main>
  );
}
