export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-black py-10 text-center text-sm text-zinc-400">
      © {new Date().getFullYear()} The Rebuild · All rights reserved
    </footer>
  );
}
