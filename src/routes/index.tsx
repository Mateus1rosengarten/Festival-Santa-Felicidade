import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import heroPasta from "@/assets/hero-pasta.jpg";
import heroWine from "@/assets/hero-wine.jpg";
import pizza from "@/assets/pizza.jpg";
import heroFood from "@/assets/food.jpg";
import heroDessert from "@/assets/hero-dessert.jpg";
import sectionPeople from "@/assets/section-people.jpg";
import heropic from "@/assets/santafelicidade.jpg";
import logo from "@/assets/logo.png";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";

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

// function Marquee() {
//   const items = [
//     "Sabores",
//     "Encontros",
//     "Vinhos",
//     "Experiências",
//     "Massas",
//     "Pizzas",
//     "Sobremesas",
//     "Brindes",
//   ];
//   const loop = [...items, ...items, ...items];
//   return (
//     <div className="bg-marrom text-creme py-6 sm:py-8 overflow-hidden border-y border-marrom/40">
//       <div className="flex marquee whitespace-nowrap">
//         {loop.map((t, i) => (
//           <span
//             key={i}
//             className="font-display text-3xl sm:text-5xl px-6 sm:px-10 flex items-center gap-6 sm:gap-10"
//           >
//             {t}
//             <span className="text-dourado">✶</span>
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// }

// function FeatureStrip() {
//   const cards = [
//     {
//       icon: "🍝",
//       title: "Gastronomia",
//       desc: "Pratos autorais, receitas tradicionais e criações inéditas assinadas pelos chefs do festival.",
//       bg: "bg-bordo",
//       fg: "text-creme",
//       accent: "bg-dourado text-marrom",
//     },
//     {
//       icon: "🍷",
//       title: "Experiências",
//       desc: "Harmonizações, jantares a quatro mãos, aulas-show e encontros que viram memória.",
//       bg: "bg-dourado",
//       fg: "text-marrom",
//       accent: "bg-bordo text-creme",
//     },
//     {
//       icon: "⭐",
//       title: "Restaurantes",
//       desc: "Os melhores endereços de Santa Felicidade reunidos sob uma única curadoria de sabor.",
//       bg: "bg-azul",
//       fg: "text-marrom",
//       accent: "bg-marrom text-creme",
//     },
//   ];

//   return (
//     <section id="festival" className="relative bg-creme py-20 sm:py-32">
//       <div className="mx-auto max-w-[1500px] px-5 sm:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-end gap-8 mb-12 sm:mb-20">
//           <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl leading-[0.9] text-marrom max-w-4xl tracking-tight">
//             Mais de <span className="text-bordo">20 restaurantes</span> reunidos em{" "}
//             <span className="font-serif-italic text-bordo">um único</span> festival
//           </h2>
//           <p className="text-sm uppercase tracking-[0.25em] text-marrom/60 font-semibold">
//             01 — O Festival
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
//           {cards.map((c, i) => (
//             <article
//               key={c.title}
//               className={`${c.bg} ${c.fg} group relative overflow-hidden rounded-3xl p-7 sm:p-9 min-h-[340px] sm:min-h-[420px] flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl cursor-pointer`}
//             >
//               <div className="flex items-start justify-between">
//                 <span className="text-5xl sm:text-6xl" aria-hidden>
//                   {c.icon}
//                 </span>
//                 <span
//                   className={`${c.accent} text-xs font-bold uppercase tracking-[0.18em] px-3 py-1.5 rounded-full`}
//                 >
//                   0{i + 1}
//                 </span>
//               </div>
//               <div>
//                 <h3 className="font-display text-4xl sm:text-5xl mb-3 tracking-tight">{c.title}</h3>
//                 <p className="text-sm sm:text-base leading-relaxed opacity-90 max-w-xs">{c.desc}</p>
//                 <div className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em]">
//                   Descubra
//                   <span className="transition-transform group-hover:translate-x-1">→</span>
//                 </div>
//               </div>
//               <div className="absolute -right-8 -bottom-8 h-32 w-32 rounded-full bg-current opacity-[0.06] transition-transform duration-700 group-hover:scale-150" />
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function BigVisual() {
//   return (
//     <section id="experiencias" className="relative bg-oliva py-20 sm:py-32 overflow-hidden">
//       <div className="mx-auto max-w-[1500px] px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
//         <div className="lg:col-span-5 order-2 lg:order-1">
//           <p className="text-xs uppercase tracking-[0.25em] text-marrom/70 font-bold mb-5">
//             02 — Experiências
//           </p>
//           <h2 className="font-display text-5xl sm:text-7xl leading-[0.88] text-marrom mb-6 tracking-tight">
//             Uma cidade <span className="font-serif-italic text-bordo">à mesa</span>.
//           </h2>
//           <p className="text-base sm:text-lg text-marrom/85 leading-relaxed mb-8 max-w-md">
//             Pelo bairro mais saboroso de Curitiba, o festival transforma cada esquina em celebração.
//             Pratos assinados, vinhos selecionados, encontros entre chefs e noites que pedem mais um
//             brinde.
//           </p>
//           <div className="flex flex-wrap gap-2">
//             {[
//               "Jantares",
//               "Degustações",
//               "Aulas-show",
//               "Brunchs",
//               "Harmonizações",
//               "Música ao vivo",
//             ].map((t) => (
//               <span
//                 key={t}
//                 className="rounded-full border-2 border-marrom/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-marrom hover:bg-marrom hover:text-creme transition-colors"
//               >
//                 {t}
//               </span>
//             ))}
//           </div>
//         </div>
//         <div className="lg:col-span-7 order-1 lg:order-2 relative">
//           <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl">
//             <img
//               src={sectionPeople}
//               alt="Pessoas brindando em um jantar do festival"
//               className="h-full w-full object-cover"
//               loading="lazy"
//             />
//             <div className="absolute inset-0 bg-gradient-to-tr from-bordo/30 via-transparent to-transparent" />
//           </div>
//           <div className="absolute -top-6 -left-6 sm:-top-10 sm:-left-10 h-28 w-28 sm:h-44 sm:w-44 rounded-full overflow-hidden ring-4 sm:ring-8 ring-oliva shadow-xl">
//             <img
//               src={heroDessert}
//               alt="Sobremesa"
//               className="h-full w-full object-cover"
//               loading="lazy"
//             />
//           </div>
//           <div className="absolute -bottom-5 right-6 sm:-bottom-8 sm:right-12 bg-bordo text-creme rounded-2xl px-5 py-4 sm:px-7 sm:py-5 shadow-2xl rotate-[-3deg]">
//             <div className="font-display text-3xl sm:text-5xl leading-none">+20</div>
//             <div className="text-[10px] sm:text-xs uppercase tracking-[0.2em] mt-1 text-dourado font-semibold">
//               Restaurantes
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function Numbers() {
//   const stats = [
//     { n: "20+", l: "Restaurantes" },
//     { n: "31", l: "Dias de festa" },
//     { n: "100+", l: "Pratos exclusivos" },
//     { n: "1ª", l: "Edição histórica" },
//   ];
//   return (
//     <section
//       id="restaurantes"
//       className="bg-marrom text-creme py-20 sm:py-32 relative overflow-hidden"
//     >
//       <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-bordo/40 blur-3xl" />
//       <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-dourado/20 blur-3xl" />
//       <div className="mx-auto max-w-[1500px] px-5 sm:px-8 relative">
//         <div className="max-w-3xl mb-14 sm:mb-20">
//           <p className="text-xs uppercase tracking-[0.25em] text-dourado font-bold mb-5">
//             03 — Por dentro
//           </p>
//           <h2 className="font-display text-5xl sm:text-7xl leading-[0.88] tracking-tight">
//             O <span className="text-dourado">maior</span> encontro gastronômico do bairro.
//           </h2>
//         </div>
//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10">
//           {stats.map((s) => (
//             <div key={s.l} className="border-t-2 border-creme/20 pt-5 sm:pt-7">
//               <div className="font-display text-6xl sm:text-8xl text-dourado tracking-tight">
//                 {s.n}
//               </div>
//               <div className="mt-3 text-xs sm:text-sm uppercase tracking-[0.2em] text-creme/80">
//                 {s.l}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

function Index() {
  return (
    <main className="min-h-screen bg-creme text-marrom">
      <Navbar />
      <Hero />
      {/* <Marquee /> */}
      {/* <FeatureStrip /> */}
      {/* <BigVisual /> */}
      {/* <Numbers /> */}
      <Footer />
    </main>
  );
}
