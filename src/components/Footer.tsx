export function Footer() {
  return (
    <footer id="footer" className="bg-bordo text-creme">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-12 items-start">
          {/* Conteúdo principal */}
          <div className="text-center lg:text-left">
            <p className="text-xs uppercase tracking-[0.25em] text-dourado font-bold mb-4">
              Garanta sua presença
            </p>

            <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl leading-[0.88] tracking-tight">
              Sabores que <span className="font-serif-italic text-dourado">contam histórias</span>.
            </h2>

            <p className="mt-6 text-creme/85 max-w-md mx-auto lg:mx-0 leading-relaxed text-base sm:text-lg">
              Acompanhe a programação completa, os restaurantes confirmados e as experiências
              exclusivas da 1ª edição.
            </p>

            <div className="mt-8 flex flex-wrap justify-center lg:justify-start sm:gap-3 gap-6">
              <a
                href="#home"
                className="rounded-full bg-creme text-marrom px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] hover:bg-dourado transition-colors"
              >
                Ver restaurantes
              </a>

              <a
                id="instagram"
                href="https://instagram.com/festivaldesantafelicidade"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border-2 border-creme px-7 py-4 text-xs font-semibold uppercase tracking-normal hover:bg-creme hover:text-bordo transition-colors inline-flex items-center gap-2"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                </svg>
                @festivaldesantafelicidade
              </a>
            </div>
          </div>

          {/* Informações */}
          <div className="grid grid-cols-2 gap-8 text-sm text-center lg:text-left">
            <div className=" p-4">
              <div className="text-dourado uppercase text-xs tracking-[0.2em] font-bold mb-3">
                Onde
              </div>

              <p className="text-creme/90 leading-relaxed">
                Santa Felicidade
                <br />
                Curitiba — PR
              </p>
            </div>

            <div className="p-4">
              <div className="text-dourado uppercase text-xs tracking-[0.2em] font-bold mb-3">
                Quando
              </div>

              <p className="text-creme/90 leading-relaxed">
                Julho de 2026
                <br />
                1ª Edição
              </p>
            </div>

            <div className="p-4">
              <div className="text-dourado uppercase text-xs tracking-[0.2em] font-bold mb-3">
                Festival
              </div>

              <ul className="space-y-2 text-creme/90">
                <li>
                  <a href="#home" className="hover:text-dourado transition-colors">
                    Sobre
                  </a>
                </li>

                <li>
                  <a href="#home" className="hover:text-dourado transition-colors">
                    Restaurantes
                  </a>
                </li>
              </ul>
            </div>

            <div className=" p-4">
              <div className="text-dourado uppercase text-xs tracking-[0.2em] font-bold mb-3">
                Contato
              </div>

              <ul className="space-y-2 text-creme/90">
                <li>
                  <a
                    href="mailto:ola@festivalsf.com.br"
                    className="hover:text-dourado transition-colors break-all"
                  >
                    diretoria@institutocinc.com.br
                  </a>
                </li>

                <li>
                  <a
                    href="https://wa.me/554195507417"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-dourado transition-colors"
                  >
                    Parcerias
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Rodapé inferior */}
        <div className="mt-16 sm:mt-24 pt-6 border-t border-creme/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-creme/70 uppercase tracking-[0.2em] text-center">
          <span className="font-medium">© 2026 Festival Gastronômico de Santa Felicidade</span>
          <span className="font-medium mt-4 sm:mt-0">Curitiba · Brasil</span>
        </div>
      </div>
    </footer>
  );
}
