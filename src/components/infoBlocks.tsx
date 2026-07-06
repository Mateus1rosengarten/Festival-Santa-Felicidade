type InfoBlockProps = {
  label: string;
  value: string;
  uppercase?: boolean;
};

export function InfoBlock({ label, value, uppercase = true }: InfoBlockProps) {
  return (
    <div className="flex flex-col leading-none">
      <span className="font-aventa uppercase tracking-[0.25em] text-sm font-bold inline-block bg-azul text-marrom px-2 py-1">
        {label}
      </span>

      <span className={`text-sm sm:text-md tracking-wide ${uppercase ? "uppercase" : ""}`}>
        {value}
      </span>
    </div>
  );
}
