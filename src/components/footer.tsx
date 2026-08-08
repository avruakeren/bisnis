export default function Footer() {
  return (
    <footer className="border-t border-white/60 bg-white/40 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <p className="text-sm text-zinc-500">
          &copy; {new Date().getFullYear()} Gina
        </p>
        <p className="text-sm text-zinc-500">
          Materi pembelajaran untuk sekolah SD.
        </p>
      </div>
    </footer>
  );
}
