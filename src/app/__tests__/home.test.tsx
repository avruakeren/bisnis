import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Landing page", () => {
  test("menampilkan hero utama", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { level: 1, name: /Kami Bantu/ }),
    ).toBeDefined();
  });

  test("menampilkan tiga layanan utama", () => {
    render(<Home />);
    expect(screen.getByText("Layanan Kami")).toBeDefined();
    expect(screen.getAllByText("Website").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Kebutuhan Akademik").length).toBeGreaterThan(0);
    expect(
      screen.getAllByText("Perangkat Pembelajaran").length,
    ).toBeGreaterThan(0);
  });

  test("menampilkan bagian kenapa pilih kami", () => {
    render(<Home />);
    expect(screen.getByText("Kenapa Pilih Kami?")).toBeDefined();
  });

  test("memandu cara kerja dalam empat langkah", () => {
    render(<Home />);
    expect(screen.getByText("Cara Kerja")).toBeDefined();
    expect(screen.getAllByText("Konsultasi").length).toBeGreaterThan(0);
    expect(screen.getByText("Tentukan Layanan")).toBeDefined();
    expect(screen.getByText("Pengerjaan")).toBeDefined();
    expect(screen.getByText("Revisi & Selesai")).toBeDefined();
  });

  test("menampilkan ajakan konsultasi gratis", () => {
    render(<Home />);
    expect(screen.getAllByText("Konsultasi Gratis").length).toBeGreaterThan(0);
  });
});
