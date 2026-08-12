import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Landing page", () => {
  test("menampilkan perkenalan utama", () => {
    render(<Home />);
    expect(screen.getByText("Selamat datang di website Gina")).toBeDefined();
    expect(
      screen.getByRole("heading", { level: 1, name: /Produk pembelajaran/ }),
    ).toBeDefined();
  });

  test("mengenalkan lima jenis produk satu per satu", () => {
    render(<Home />);
    expect(
      screen.getAllByText("Sistem Pembelajaran").length,
    ).toBeGreaterThan(0);
    expect(
      screen.getAllByText("Media Pembelajaran").length,
    ).toBeGreaterThan(0);
    expect(screen.getAllByText("RPP").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Worksheet").length).toBeGreaterThan(0);
    expect(
      screen.getAllByText("Web Absensi").length,
    ).toBeGreaterThan(0);
  });

  test("menampilkan contoh produk di katalog", () => {
    render(<Home />);
    expect(
      screen.getAllByText(
        "Media Ajar Bahasa Indonesia Kelas 1: Membaca Permulaan",
      ).length,
    ).toBeGreaterThan(0);
    expect(
      screen.getAllByText("Web Absensi + Rekap Otomatis dan Laporan").length,
    ).toBeGreaterThan(0);
  });

  test("memandu langkah cara memesan", () => {
    render(<Home />);
    expect(screen.getAllByText("Pilih produk").length).toBeGreaterThan(0);
    expect(
      screen.getAllByText("Isi form sederhana").length,
    ).toBeGreaterThan(0);
    expect(
      screen.getAllByText("Kirim ke WhatsApp").length,
    ).toBeGreaterThan(0);
  });

  test("menampilkan tautan untuk memesan", () => {
    render(<Home />);
    expect(
      screen.getAllByText("Mulai pesan sekarang").length,
    ).toBeGreaterThan(0);
  });
});