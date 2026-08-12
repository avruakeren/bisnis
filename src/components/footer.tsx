export default function Footer() {
  return (
    <footer className="border-t border-white/30 bg-white/10 py-10 backdrop-blur-xl">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <p className="text-sm leading-relaxed text-zinc-600">
          Pesan dengan mudah lewat WhatsApp. Pembayaran aman via QRIS, bisa
          pakai semua bank &amp; e-wallet.
        </p>
        <p className="mt-3 text-sm text-zinc-400">
          &copy; {new Date().getFullYear()} Gina &mdash; Materi pembelajaran
          untuk sekolah SD.
        </p>
      </div>
    </footer>
  );
}