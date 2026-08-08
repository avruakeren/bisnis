import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Landing page", () => {
  test("menampilkan headline utama", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { level: 1, name: /Produk pembelajaran/ }),
    ).toBeDefined();
  });

  test("menampilkan tautan menuju katalog dan pesanan", () => {
    render(<Home />);
    expect(
      screen.getAllByRole("link", { name: "Lihat katalog" }).length,
    ).toBeGreaterThan(0);
    expect(screen.getByRole("link", { name: "Buat pesanan" })).toBeDefined();
  });

  test("menampilkan kategori produk", () => {
    render(<Home />);
    expect(
      screen.getAllByText("Sistem Pembelajaran").length,
    ).toBeGreaterThan(0);
    expect(
      screen.getAllByText("Media Pembelajaran").length,
    ).toBeGreaterThan(0);
    expect(screen.getByText("RPP")).toBeDefined();
    expect(screen.getByText("Worksheet")).toBeDefined();
    expect(
      screen.getAllByText("Web Absensi").length,
    ).toBeGreaterThan(0);
  });

  test("menampilkan produk satu per satu per kelas", () => {
    render(<Home />);
    expect(
      screen.getByText("Media Ajar Bahasa Indonesia Kelas 1: Membaca Permulaan"),
    ).toBeDefined();
    expect(
      screen.getByText("Media Ajar IPA Kelas 6: Tata Surya"),
    ).toBeDefined();
    expect(
      screen.getByText("Web Absensi + Rekap Otomatis dan Laporan"),
    ).toBeDefined();
  });
});
