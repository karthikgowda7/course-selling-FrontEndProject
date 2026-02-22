export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-stone-200">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="text-lg font-semibold tracking-tight text-zinc-900">
          The Rebuild
        </a>
        <nav className="hidden gap-6 text-sm md:flex">
          <a href="#is-this-for-me" className="text-zinc-700 hover:text-zinc-900 pt-2">
            Is This For Me?
          </a>
          <a href="#products" className="text-zinc-700 hover:text-zinc-900 pt-2">
            Products
          </a>
          <a href="#program" className="text-zinc-700 hover:text-zinc-900 pt-2">
            The Program
          </a>
          <a href="#reviews" className="text-zinc-700 hover:text-zinc-900 pt-2">
            Reviews
          </a>
          <a href="#faq" className="text-zinc-700 hover:text-zinc-900 pt-2">
            FAQ
          </a>
          <a
            href="#get-started"
            className="rounded-lg bg-amber-700 px-4 py-2 text-white hover:bg-amber-800"
          >
            Get Started
          </a>
        </nav>
      </div>
    </header>
  );
}
