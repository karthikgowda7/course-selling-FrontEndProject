export default function Card({ headline, sub, badge, imageSrc, imageAlt,link, children }) {
  return (
    <div className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
      {imageSrc && (
        <div className="mb-4 overflow-hidden rounded-lg">
          <img
            src={imageSrc}
            alt={imageAlt || headline}
            className="h-100 w-full rounded-lg object-cover"
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
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg bg-amber-700 px-4 py-2 text-white hover:bg-amber-800"
          >
            View Details
          </a>
        </div>
)}
    </div>
  );
}
