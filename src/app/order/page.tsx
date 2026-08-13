"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/lib/cart-context";
import { formatHarga } from "@/components/catalog/format";
import { site, waLink } from "@/lib/site";
import { ArrowLeft, ArrowRight, CheckCircle, ShoppingCart } from "@phosphor-icons/react";

const inputClass =
  "w-full rounded-lg bg-white/70 px-3.5 py-2.5 text-sm outline-none ring-1 ring-white/60 backdrop-blur-md transition-colors focus:ring-2 focus:ring-zinc-900/30";

const labelClass = "mb-1.5 block text-sm font-medium text-zinc-700";

export default function CheckoutPage() {
  const { items, totalHarga, clearCart } = useCart();
  const router = useRouter();
  const [step, setStep] = useState<"data" | "qris">("data");
  const [nama, setNama] = useState("");
  const [sekolah, setSekolah] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  const isValid = nama.trim() !== "" && sekolah.trim() !== "" && whatsapp.trim() !== "";

  // Cek apakah ada item jasa di keranjang (sekalian WA konsultasi dulu)
  const hasJasa = items.some((item) => item.isJasa);

  if (items.length === 0) {
    return (
      <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center px-6 py-24">
        <ShoppingCart size={48} className="text-zinc-300" />
        <h1 className="mt-4 text-2xl font-bold tracking-tight">Keranjang kosong</h1>
        <p className="mt-2 text-zinc-500">
          Tambahkan produk dari katalog terlebih dahulu.
        </p>
        <Link
          href="/catalog"
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-on-primary transition-colors hover:bg-primary-container"
        >
          Lihat katalog
          <ArrowRight size={14} weight="bold" />
        </Link>
      </div>
    );
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!isValid) return;
    if (hasJasa) {
      handleJasaToWhatsApp();
    } else {
      setStep("qris");
    }
  }

  function handleJasaToWhatsApp() {
    const itemList = items
      .map((item) => `- ${item.title} (${item.qty}x)`)
      .join("\n");

    const message = [
      `Halo ${site.name}, saya ingin konsultasi / pesan jasa ini.`,
      "",
      `Nama: ${nama.trim()}`,
      `Sekolah: ${sekolah.trim()}`,
      `WhatsApp: ${whatsapp.trim()}`,
      "",
      "Item yang ingin dipesan:",
      itemList,
      "",
      `Total: ${formatHarga(totalHarga)}`,
    ].join("\n");

    clearCart();
    window.open(waLink(message), "_blank");
    router.push("/");
  }

  function handleConfirm() {
    const itemList = items
      .map((item) => `- ${item.title} (${item.qty}x) = ${formatHarga(item.harga * item.qty)}`)
      .join("\n");

    const message = [
      "Halo, saya ingin mengkonfirmasi pembayaran.",
      "",
      `Nama: ${nama.trim()}`,
      `Sekolah: ${sekolah.trim()}`,
      `WhatsApp: ${whatsapp.trim()}`,
      "",
      "Pesanan:",
      itemList,
      "",
      `Total: ${formatHarga(totalHarga)}`,
    ].join("\n");

    clearCart();
    window.open(
      `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`,
      "_blank",
    );
    router.push("/");
  }

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-6 py-12">
      <Link
        href={step === "data" ? "/cart" : "#"}
        onClick={step === "qris" ? () => setStep("data") : undefined}
        className="inline-flex items-center gap-1 text-sm text-zinc-500 transition-colors hover:text-zinc-900"
      >
        <ArrowLeft size={14} />
        {step === "data" ? "Kembali ke keranjang" : "Kembali ke data diri"}
      </Link>

      <h1 className="mt-4 text-2xl font-bold tracking-tight">Checkout</h1>

      <div className="mt-6 flex items-center gap-2 text-sm">
        <span
          className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold ${
            step === "data" ? "bg-primary text-on-primary" : "bg-emerald-500 text-white"
          }`}
        >
          {step === "data" ? "1" : <CheckCircle size={12} weight="bold" />}
        </span>
        <span className={step === "data" ? "font-medium text-zinc-900" : "text-zinc-400"}>
          Data Diri
        </span>
        {!hasJasa && (
          <>
            <span className="text-zinc-300">—</span>
            <span
              className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold ${
                step === "qris" ? "bg-primary text-on-primary" : "bg-white/60 text-zinc-400 ring-1 ring-white/70"
              }`}
            >
              2
            </span>
            <span className={step === "qris" ? "font-medium text-zinc-900" : "text-zinc-400"}>
              Pembayaran
            </span>
          </>
        )}
      </div>

      <div className="mt-8 space-y-3">
        <h2 className="text-sm font-medium text-zinc-500">Ringkasan Pesanan</h2>
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between rounded-xl bg-white/55 px-4 py-3 ring-1 ring-white/60 backdrop-blur-md"
          >
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-zinc-900 truncate">{item.title}</p>
              <p className="text-xs text-zinc-500">
                {item.qty} × {formatHarga(item.harga)}
              </p>
            </div>
            <p className="ml-4 text-sm font-semibold text-zinc-900 tabular-nums">
              {formatHarga(item.harga * item.qty)}
            </p>
          </div>
        ))}
        <div className="flex items-center justify-between rounded-xl bg-zinc-900/5 px-4 py-3">
          <span className="text-sm font-medium text-zinc-900">Total</span>
          <span className="text-sm font-bold text-zinc-900 tabular-nums">
            {formatHarga(totalHarga)}
          </span>
        </div>
      </div>

      {step === "data" ? (
        <form onSubmit={handleSubmit} noValidate className="mt-8">
          <h2 className="text-sm font-medium text-zinc-500">Data Diri</h2>
          <div className="mt-4 space-y-4">
            <div>
              <label htmlFor="nama" className={labelClass}>
                Nama Lengkap <span aria-hidden className="text-red-500">*</span>
              </label>
              <input
                id="nama"
                type="text"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                placeholder="Contoh: Budi Santoso"
                required
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="sekolah" className={labelClass}>
                Nama Sekolah <span aria-hidden className="text-red-500">*</span>
              </label>
              <input
                id="sekolah"
                type="text"
                value={sekolah}
                onChange={(e) => setSekolah(e.target.value)}
                placeholder="Contoh: SDN Harapan Bangsa"
                required
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="whatsapp" className={labelClass}>
                Nomor WhatsApp <span aria-hidden className="text-red-500">*</span>
              </label>
              <input
                id="whatsapp"
                type="tel"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                placeholder="Contoh: 081234567890"
                required
                className={inputClass}
              />
            </div>
          </div>
          <button
            type="submit"
            disabled={!isValid}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-medium text-on-primary transition-colors enabled:hover:bg-primary-container disabled:cursor-not-allowed disabled:opacity-50"
          >
            {hasJasa ? "Kirim ke Konsultasi WhatsApp" : "Lanjut ke Pembayaran"}
            <ArrowRight size={14} weight="bold" />
          </button>
        </form>
      ) : (
        <div className="mt-8">
          <h2 className="text-sm font-medium text-zinc-500">Pembayaran QRIS</h2>
          <div className="mt-4 flex flex-col items-center rounded-2xl bg-white/55 p-8 ring-1 ring-white/60 backdrop-blur-xl">
            <div className="flex h-48 w-48 items-center justify-center rounded-xl bg-zinc-100">
              <div className="text-center">
                <p className="text-sm font-medium text-zinc-400">QRIS</p>
                <p className="mt-1 text-xs text-zinc-300">Scan untuk bayar</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-zinc-500">
              Total pembayaran:{" "}
              <span className="font-bold text-zinc-900">{formatHarga(totalHarga)}</span>
            </p>
            <p className="mt-2 text-xs text-zinc-400">
              Setelah transfer, klik tombol di bawah untuk konfirmasi via WhatsApp.
            </p>
            <button
              type="button"
              onClick={handleConfirm}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-emerald-700"
            >
              Konfirmasi Pembayaran via WhatsApp
              <CheckCircle size={14} weight="bold" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}