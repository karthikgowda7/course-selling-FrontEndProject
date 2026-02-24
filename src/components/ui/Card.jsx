export default function Card({ headline, sub, badge, imageSrc, imageAlt,link, children,className = "" }) {
  return (
    <div className={`group relative rounded-xl border border-stone-200 bg-white p-6 shadow-sm transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 hover:shadow-2xl hover:border-transparent hover:ring-2 hover:ring-amber-500/70 hover:ring-offset-2 hover:ring-offset-white hover:rotate-[0.3deg] ${className}`}>
   
      {imageSrc && (
        <div className="mb-4 overflow-hidden rounded-lg">
          <img
            src={imageSrc}
            alt={imageAlt || headline}
            className="w-full h-64 object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>
      )}
      {badge && (
        <div className="mb-4 inline-block rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-800">
          {badge}
        </div>
      )}
      <h3 className="text-xl font-semibold text-zinc-900">{headline}</h3>
      {sub && <p className="mt-1 text-sm text-zinc-600">{sub}</p>}
      <div className="mt-4 text-zinc-700">{children}</div>
      {link && (
        <div className="mt-6">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"          className="inline-flex items-center rounded-lg bg-amber-700 px-4 py-2 text-white hover:bg-amber-600 transition-all duration-300 group-hover:bg-amber-600 group-hover:tracking-wide"
          >
            View Details
          </a>
        </div>
)}
    </div>
  );
}
