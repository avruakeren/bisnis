"use client";

import { useState } from "react";

const WHATSAPP_NUMBER = "6281234567890";
const kelasOptions = [1, 2, 3, 4, 5, 6];

const inputClass =
  "w-full rounded-lg bg-white/70 px-3.5 py-2.5 text-sm outline-none ring-1 ring-white/60 backdrop-blur-md transition-colors focus:ring-2 focus:ring-zinc-900/30";

const labelClass = "mb-1.5 block text-sm font-medium text-zinc-700";

export default function OrderForm() {
  const [namaLengkap, setNamaLengkap] = useState("");
  const [namaSekolah, setNamaSekolah] = useState("");
  const [kelas, setKelas] = useState("");
  const [detail, setDetail] = useState("");

  const isValid =
    namaLengkap.trim() !== "" &&
    namaSekolah.trim() !== "" &&
    kelas !== "" &&
    detail.trim() !== "";

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!isValid) return;

    const message = [
      "Halo, saya ingin memesan materi ajar.",
      "",
      `Nama Lengkap: ${namaLengkap.trim()}`,
      `Nama Sekolah: ${namaSekolah.trim()}`,
      `Kelas: ${kelas}`,
      `Detail Pesanan: ${detail.trim()}`,
    ].join("\n");

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="glass-strong w-full max-w-lg rounded-3xl p-6 sm:p-8"
    >
      <div className="space-y-5">
        <div>
          <label htmlFor="nama-lengkap" className={labelClass}>
            Nama Lengkap <span aria-hidden className="text-red-500">*</span>
          </label>
          <input
            id="nama-lengkap"
            type="text"
            value={namaLengkap}
            onChange={(event) => setNamaLengkap(event.target.value)}
            placeholder="Contoh: Budi Santoso"
            required
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="nama-sekolah" className={labelClass}>
            Nama Sekolah <span aria-hidden className="text-red-500">*</span>
          </label>
          <input
            id="nama-sekolah"
            type="text"
            value={namaSekolah}
            onChange={(event) => setNamaSekolah(event.target.value)}
            placeholder="Contoh: SDN Harapan Bangsa"
            required
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="kelas" className={labelClass}>
            Kelas <span aria-hidden className="text-red-500">*</span>
          </label>
          <select
            id="kelas"
            value={kelas}
            onChange={(event) => setKelas(event.target.value)}
            required
            className={inputClass}
          >
            <option value="" disabled>
              Pilih kelas
            </option>
            {kelasOptions.map((kelasOption) => (
              <option key={kelasOption} value={`Kelas ${kelasOption}`}>
                Kelas {kelasOption}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="detail-pesanan" className={labelClass}>
            Detail Pesanan Materi{" "}
            <span aria-hidden className="text-red-500">*</span>
          </label>
          <textarea
            id="detail-pesanan"
            value={detail}
            onChange={(event) => setDetail(event.target.value)}
            placeholder="Contoh: 2 paket media ajar IPA Tata Surya"
            rows={4}
            required
            className={`${inputClass} resize-y`}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={!isValid}
        className="mt-6 w-full rounded-lg px-4 py-2.5 text-sm font-medium transition-colors enabled:bg-zinc-900 enabled:text-white enabled:hover:bg-zinc-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Kirim ke WhatsApp
      </button>
      <p className="mt-3 text-center text-xs text-zinc-500">
        Semua kolom wajib diisi sebelum tombol kirim aktif.
      </p>
    </form>
  );
}
