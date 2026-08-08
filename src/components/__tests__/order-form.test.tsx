import { describe, expect, test, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import OrderForm from "../order-form";

function fillAllFields() {
  fireEvent.change(screen.getByLabelText(/Nama Lengkap/), {
    target: { value: "Budi Santoso" },
  });
  fireEvent.change(screen.getByLabelText(/Nama Sekolah/), {
    target: { value: "SDN Harapan Bangsa" },
  });
  fireEvent.change(screen.getByLabelText(/Kelas/), {
    target: { value: "Kelas 4" },
  });
  fireEvent.change(screen.getByLabelText(/Detail Pesanan/), {
    target: { value: "2 paket media ajar IPA" },
  });
}

describe("Formulir pesanan kustom", () => {
  test("menampilkan semua input yang diperlukan", () => {
    render(<OrderForm />);
    expect(screen.getByLabelText(/Nama Lengkap/)).toBeDefined();
    expect(screen.getByLabelText(/Nama Sekolah/)).toBeDefined();
    expect(screen.getByLabelText(/Kelas/)).toBeDefined();
    expect(screen.getByLabelText(/Detail Pesanan/)).toBeDefined();
  });

  test("tombol kirim nonaktif saat formulir kosong", () => {
    render(<OrderForm />);
    const button = screen.getByRole("button", { name: "Kirim ke WhatsApp" });
    expect((button as HTMLButtonElement).disabled).toBe(true);
  });

  test("tombol kirim tetap nonaktif jika salah satu kolom kosong", () => {
    render(<OrderForm />);
    fireEvent.change(screen.getByLabelText(/Nama Lengkap/), {
      target: { value: "Budi Santoso" },
    });
    fireEvent.change(screen.getByLabelText(/Nama Sekolah/), {
      target: { value: "SDN Harapan Bangsa" },
    });
    fireEvent.change(screen.getByLabelText(/Kelas/), {
      target: { value: "Kelas 4" },
    });
    const button = screen.getByRole("button", { name: "Kirim ke WhatsApp" });
    expect((button as HTMLButtonElement).disabled).toBe(true);
  });

  test("tombol kirim aktif setelah semua kolom terisi", () => {
    render(<OrderForm />);
    fillAllFields();
    const button = screen.getByRole("button", { name: "Kirim ke WhatsApp" });
    expect((button as HTMLButtonElement).disabled).toBe(false);
  });

  test("submit membuka WhatsApp dengan rangkuman isian form", () => {
    const openSpy = vi
      .spyOn(window, "open")
      .mockImplementation(() => null);
    render(<OrderForm />);
    fillAllFields();
    fireEvent.click(screen.getByRole("button", { name: "Kirim ke WhatsApp" }));

    expect(openSpy).toHaveBeenCalledTimes(1);
    const [url] = openSpy.mock.calls[0] as [string];
    expect(url).toContain("https://wa.me/");
    const message = decodeURIComponent(url);
    expect(message).toContain("Budi Santoso");
    expect(message).toContain("SDN Harapan Bangsa");
    expect(message).toContain("Kelas: Kelas 4");
    expect(message).toContain("2 paket media ajar IPA");

    openSpy.mockRestore();
  });

  test("submit tidak membuka WhatsApp saat formulir belum lengkap", () => {
    const openSpy = vi
      .spyOn(window, "open")
      .mockImplementation(() => null);
    render(<OrderForm />);
    fireEvent.change(screen.getByLabelText(/Nama Lengkap/), {
      target: { value: "Budi Santoso" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Kirim ke WhatsApp" }));

    expect(openSpy).not.toHaveBeenCalled();
    openSpy.mockRestore();
  });
});
