export default function Section({ id, title, children, className = "" }) {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="mx-auto max-w-6xl px-6">
        {title && (
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-100">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
}
